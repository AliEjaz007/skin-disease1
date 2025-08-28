// import React, { useState, useRef, useEffect } from 'react';
// import './ChatBot.css';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, limit } from 'firebase/firestore';
// import { app } from '../../firebase/firebaseConfig';

// const ChatBot = () => {
//   const [inputText, setInputText] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const messagesEndRef = useRef(null);

//   // Initialize Firebase and Gemini
//   const auth = getAuth(app);
//   const db = getFirestore(app);
//   const genAI = new GoogleGenerativeAI('AIzaSyB4HNZCB3OsuNBJsOoLp2LtOaGwXbIbKNg');
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   // Monitor authentication state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       console.log('Auth state changed:', user ? `User ${user.uid}` : 'No user');
//       setIsAuthenticated(!!user);
//     });
//     return () => unsubscribe();
//   }, [auth]);

//   // Scroll to bottom of chat
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // Fetch chat history
//   useEffect(() => {
//     if (!isAuthenticated) {
//       console.log('User not authenticated, skipping fetchChatHistory');
//       setMessages([]);
//       return;
//     }

//     const userId = auth.currentUser?.uid;
//     if (!userId) {
//       console.log('No user ID available, cannot fetch history');
//       return;
//     }
//     console.log('Fetching history for User ID:', userId);

//     try {
//       const q = query(
//         collection(db, 'users', userId, 'ChatBot'),
//         orderBy('createdAt'),
//         limit(100)
//       );

//       console.log('Setting up snapshot listener for:', `users/${userId}/ChatBot`);
//       const unsubscribe = onSnapshot(q, (snapshot) => {
//         console.log('Snapshot received, docs count:', snapshot.docs.length);
//         console.log('Snapshot docs:', snapshot.docs.map(doc => doc.data()));
//         const loadedMessages = snapshot.docs.map(doc => ({
//           id: doc.id,
//           text: doc.data().text,
//           isUser: doc.data().isUser,
//           createdAt: doc.data().createdAt,
//         }));
//         setMessages(loadedMessages);
//       }, (error) => {
//         console.error('Snapshot listener error:', error.message, error.code);
//       });

//       return () => unsubscribe();
//     } catch (error) {
//       console.error('Error setting up chat history listener:', error.message, error.code);
//     }
//   }, [isAuthenticated, auth, db]);

//   // Store a new message in Firestore with retry
//   const storeMessage = async (messageObj, retries = 3) => {
//     let userId = auth.currentUser?.uid;
//     console.log('Attempting to store message for User ID:', userId);
//     console.log('Message data:', JSON.stringify(messageObj, null, 2));

//     if (!userId) {
//       console.log('No user ID, waiting for auth...');
//       for (let i = 0; i < retries; i++) {
//         await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1s
//         userId = auth.currentUser?.uid;
//         if (userId) break;
//       }
//     }

//     if (!userId) {
//       console.warn('No user ID after retries, skipping storeMessage');
//       alert('Please log in to save conversation history.');
//       return false;
//     }

//     try {
//       const collectionPath = `users/${userId}/ChatBot`;
//       console.log('Writing to Firestore path:', collectionPath);
//       await addDoc(collection(db, 'users', userId, 'ChatBot'), messageObj);
//       console.log('Message stored successfully at:', collectionPath);
//       return true;
//     } catch (error) {
//       console.error('Error storing message:', {
//         message: error.message,
//         code: error.code,
//         details: error.details || 'No additional details',
//       });
//       alert(`Failed to save message: ${error.message} (Code: ${error.code})`);
//       return false;
//     }
//   };

//   // Test Firestore write
// //   const testFirestoreWrite = async () => {
// //     const userId = auth.currentUser?.uid;
// //     if (!userId) {
// //       alert('Please log in to test Firestore.');
// //       return;
// //     }

// //     try {
// //       const testData = {
// //         text: 'Test message',
// //         isUser: true,
// //         createdAt: new Date().toISOString(),
// //       };
// //       console.log('Testing Firestore write with data:', testData);
// //       await addDoc(
// //         collection(db, 'users', userId, 'ChatBot'),
// //         testData
// //       );
// //       console.log('Test write successful for User ID:', userId);
// //       alert('Test write successful! Check Firestore.');
// //     } catch (error) {
// //       console.error('Test write failed:', {
// //         message: error.message,
// //         code: error.code,
// //         details: error.details || 'No additional details',
// //       });
// //       alert(`Test write failed: ${error.message} (Code: ${error.code})`);
// //     }
// //   };

//   // Get last 3 user messages for follow-up detection
//   const getRecentMessages = () => {
//     const userMessages = messages.filter(msg => msg.isUser);
//     const recent = userMessages.slice(-3).map(msg => msg.text).filter(Boolean);
//     console.log('Recent queries:', recent);
//     return recent.join('\n');
//   };

//   // Classify the user query using updated prompt
//   const classifyQuery = async (userQuery) => {
//     const recentMessages = getRecentMessages();

//     const classificationPrompt = `
//     You are a query classifier who classifies a query from the options below.
//     1. If the user query is a greeting or welcome query (hello, hey, hi, etc.) or similar queries related to skin detection suggestions, return: greeting_query
//     2. If the user query is a farewell query or shows acknowledgment after a response (ok, fine, good, thank you, done, nice, etc.), return: farewell_query
//     3. If the user query is related to assistant capabilities (what are you doing, what can you do, how can you help me, etc.), return: assistant_capabilites
//     4. If the user query is a follow-up query (based on the last 3 conversations from Firestore), return: followup_query
//     5. If the user query is off-topic and not related to skin or allergens, return: out_of_scope
//     6. If the user query asks for medical suggestions or treatments, return: restriced_medical_treatment
//     7. If the user query is related to understanding skin—such as what skin is, its types (e.g., blackheads, whiteheads, cystic skin), the type of doctor to consult, or general introductory information—return: skin_introduction
//     8. If the user query is an open-ended question related to skin (starts with what, why, how, or other wh-questions, resembling a real-life conversational question), return: skin_openended_query
//     9. If the user query is about skin home remedies, herbal treatments, skin types, issues, or similar intents, return: real_query

//     Recent conversation context (last 3 user messages):
//     ${recentMessages}

//     Current user query to classify: "${userQuery}"

//     Return only the classification label from the options above.
//     `;

//     try {
//       const result = await model.generateContent(classificationPrompt);
//       const response = await result.response;
//       const classification = response.text().trim().toLowerCase();

//       if (classification.includes('greeting')) return 'greeting_query';
//       if (classification.includes('farewell')) return 'farewell_query';
//       if (classification.includes('capabilit')) return 'assistant_capabilites';
//       if (classification.includes('followup')) return 'followup_query';
//       if (classification.includes('scope')) return 'out_of_scope';
//       if (classification.includes('medical')) return 'restriced_medical_treatment';
//       if (classification.includes('introduction')) return 'skin_introduction';
//       if (classification.includes('openended') || classification.includes('open-ended')) return 'skin_openended_query';
//       return 'real_query';
//     } catch (error) {
//       console.error('Error classifying query:', error.message, error.code);
//       return 'real_query';
//     }
//   };

//   // Generate response based on query type
//   const generateResponse = async (userQuery, queryType) => {
//     const commonResponseFormat = `
//       Response Format Rules:
//       - Use single bullet points (•) for lists
//       - Headings should be bold using ** for rendering, but not displayed in output
//       - Keep responses concise with minimal spacing between lines
//       - Use simple, plain language suitable for 8th-grade reading level
//       - Include practical "how to use" details where applicable
//       - Avoid medical advice or prescriptions; focus on general guidance or home remedies
//       - No extra spaces or blank lines at start or between response sections
//     `;

//     switch (queryType) {
//       case 'greeting_query':
//           return `**Hello there!** 👋 *smiles*  
//       I'm your friendly skin care companion! It's lovely to meet you. 
      
//       How's your day going? Before we dive into skin care, tell me - how's your skin feeling today? 
      
//       I'm here to:
//       • Listen to your concerns 🤗
//       • Offer natural remedies 🌿
//       • Suggest skin-friendly foods 🥑
      
//       What would make you happiest to learn about first?`;
      
//         case 'farewell_query':
//           return `**It's been wonderful chatting with you!** 💖  
//       Before you go:
//       • Remember to be kind to your skin (and yourself!)
//       • Drink some water - your skin will thank you 💧
//       • I'm always here when you need me
      
//       Wishing you a glow-up day! ✨ Come back anytime - I'd love to hear how your skin journey progresses!`;
      
//         case 'how_are_you_query': // Add this new case
//           return `**You're so kind to ask!** 🌸  
//       *adjusts virtual glasses*  
      
//       I'm just a bunch of code, but I'm feeling great because I get to help you!  
      
//       More importantly - how are YOU feeling today? Is your skin giving you any trouble I can help with?`;

//       case 'assistant_capabilites':
//         return `**What I Can Do**
// • Explain skin types like blackheads or cystic skin
// • Suggest diet changes to support clearer skin
// • Share herbal remedies and home care tips
// • What skin topic are you curious about?`;

//       case 'out_of_scope':
//         return `**Let's Talk Skin**
// • My expertise is in skin care and natural remedies
// • I can help with diet tips or home treatments
// • Try asking about skin causes or solutions!`;

//       case 'restriced_medical_treatment':
//         return `**General Skin Guidance**
// • I can't prescribe medical treatments
// • For medical advice, consult a dermatologist
// • I can help with home remedies and diet tips`;

//       case 'followup_query':
//         const followupPrompt = `
//           ${commonResponseFormat}
//           Provide a concise follow-up response to: "${userQuery}" about skin care with:
//           **Follow-Up Answer**
//           • Direct answer to the query
//           • 1-2 key supporting points
//           **Practical Tip**
//           • One actionable suggestion
//         `;
//         try {
//           const followupResult = await model.generateContent(followupPrompt);
//           const followupResponse = await followupResult.response;
//           return followupResponse.text();
//         } catch (error) {
//           console.error('Error generating followup response:', error);
//           return `**Error**
// • Sorry, I couldn't process this follow-up
// • Please try again`;
//         }

//       case 'skin_introduction':
//         const skinIntroPrompt = `
//           ${commonResponseFormat}
//           You are an empathetic health assistant. Explain skin in a simple, accurate, non-alarming way.
//           **What is Skin?**
//           • Define skin and its functions briefly
//           • Mention common skin types (e.g., oily, dry, combination)
//           **Next Steps**
//           • Suggest consulting a dermatologist for personalized care
//           • Keep it to 5-6 bullet points total
//           Tone: Friendly, reassuring
//         `;
//         try {
//           const skinIntroResult = await model.generateContent(skinIntroPrompt);
//           const skinIntroResponse = await skinIntroResult.response;
//           return skinIntroResponse.text();
//         } catch (error) {
//           console.error('Error generating skin intro response:', error);
//           return `**Error**
// • Sorry, I couldn't provide a skin introduction
// • Please try again`;
//         }

//       case 'skin_openended_query':
//         const openEndedPrompt = `
//           ${commonResponseFormat}
//           You are a friendly dermatology assistant. The user asked an open-ended question about skin: "${userQuery}"
//           Respond conversationally, as if in a real-life chat, with:
//           **Conversational Insight**
//           • Provide a brief, relevant answer to the question
//           • Share 1-2 general facts or insights about skin
//           **Keep the Chat Going**
//           • Ask a follow-up question to encourage more conversation
//           Tone: Friendly, engaging, conversational
//         `;
//         try {
//           const openEndedResult = await model.generateContent(openEndedPrompt);
//           const openEndedResponse = await openEndedResult.response;
//           return openEndedResponse.text();
//         } catch (error) {
//           console.error('Error generating open-ended response:', error);
//           return `**Error**
// • Sorry, I couldn't respond to this question
// • Please try again`;
//         }

//       case 'real_query':
//       default:
//         const responsePrompt = `
//           ${commonResponseFormat}
//           You are a dermatology assistant specialized in skin care at home.
//           The user asked: "${userQuery}"
//           **Key Recommendations**
//           • 3-4 key suggestions related to the query
//           **Home Remedy**
//           • One step-by-step remedy with clear instructions
//           **Dietary Advice or Plan**
//           • 1-2 dietary tips or Plan related to the query (base on the user query asking for advice or diet plan)
//           • If the user ask for diet plan then provide a diet plan with 5-6 bullet points.
//           **Quick Tip**
//           • One practical, actionable suggestion
//         `;
//         try {
//           const result = await model.generateContent(responsePrompt);
//           const response = await result.response;
//           return response.text();
//         } catch (error) {
//           console.error('Error generating real query response:', error);
//           return `**Error**
// • Sorry, I couldn't respond to this query
// • Please try again`;
//         }
//     }
//   };

//   const handleRequest = async () => {
//     if (!inputText.trim() || isLoading || !isAuthenticated) {
//       if (!isAuthenticated) {
//         alert('Please log in to use the chatbot.');
//       }
//       return;
//     }

//     const userMessage = {
//       id: Date.now().toString(),
//       text: inputText,
//       isUser: true,
//       createdAt: new Date().toISOString(),
//     };

//     console.log('Adding user message to UI:', userMessage);
//     setMessages(prev => [...prev, userMessage]);
//     setIsLoading(true);
//     await storeMessage(userMessage);
//     setInputText('');

//     try {
//       const queryType = await classifyQuery(inputText);
//       console.log('Query type:', queryType);
//       const responseText = await generateResponse(inputText, queryType);

//       const botMessage = {
//         id: (Date.now() + 1).toString(),
//         text: responseText || 'I couldn’t generate a response. Please try again.',
//         isUser: false,
//         createdAt: new Date().toISOString(),
//       };

//       console.log('Adding bot message to UI:', botMessage);
//       setMessages(prev => [...prev, botMessage]);
//       await storeMessage(botMessage);
//     } catch (error) {
//       console.error('Error in handleRequest:', error.message, error.code);
//       const errorMessage = {
//         id: (Date.now() + 1).toString(),
//         text: `**Oops, Something Went Wrong**
// • I'm having trouble responding right now
// • Please try asking again in a moment`,
//         isUser: false,
//         createdAt: new Date().toISOString(),
//       };
//       setMessages(prev => [...prev, errorMessage]);
//       await storeMessage(errorMessage);
//     }

//     setIsLoading(false);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleRequest();
//     }
//   };

//   // Auto-resize textarea
//   const handleTextareaChange = (e) => {
//     setInputText(e.target.value);
//     e.target.style.height = 'auto';
//     e.target.style.height = `${e.target.scrollHeight}px`;
//   };

//   const formatMessage = (text) => {
//     if (!text) return null;

//     return text.split('\n').map((line, i) => {
//       if (line.startsWith('**') && line.endsWith('**')) {
//         return <p key={i} className="message-bold">{line.replace(/\*\*/g, '')}</p>;
//       } else if (line.trim().startsWith('•')) {
//         return <p key={i} className="message-bullet">{line.trim()}</p>;
//       } else if (line.trim() === '') {
//         return null;
//       }
//       return <p key={i}>{line}</p>;
//     }).filter(Boolean);
//   };

//   return (
//     <div className="chatbot-container">

//       {!isAuthenticated && (
//         <div className="chatbot-login-prompt">
//           <p>Please log in with your email or Google account to use the chatbot.</p>
//         </div>
//       )}

//       <div className="chatbot-messages">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
//           >
//             <div className="message-content">
//               {formatMessage(message.text)}
//             </div>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="message bot-message">
//             <div className="typing-indicator">
//               <div className="dot"></div>
//               <div className="dot"></div>
//               <div className="dot"></div>
//             </div>
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>

//       <div className="chatbot-input-container">
//         <textarea
//           value={inputText}
//           onChange={handleTextareaChange}
//           onKeyPress={handleKeyPress}
//           placeholder="Ask about diet plans & remedies..."
//           rows="1"
//           disabled={isLoading || !isAuthenticated}
//         />
//         <button
//           onClick={handleRequest}
//           disabled={isLoading || !inputText.trim() || !isAuthenticated}
//         >
//           {isLoading ? (
//             <div className="spinner"></div>
//           ) : (
//             <svg className="send-icon" viewBox="0 0 24 24">
//               <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
//             </svg>
//           )}
//         </button>
       
//       </div>
//     </div>
//   );
// };

// export default ChatBot;



import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { app } from '../../firebase/firebaseConfig';

const ChatBot = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize Firebase and Gemini
  const auth = getAuth(app);
  const db = getFirestore(app);
  const genAI = new GoogleGenerativeAI('AIzaSyB4HNZCB3OsuNBJsOoLp2LtOaGwXbIbKNg');
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user ? `User ${user.uid}` : 'No user');
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, [auth]);

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fetch chat history
  useEffect(() => {
    if (!isAuthenticated) {
      console.log('User not authenticated, skipping fetchChatHistory');
      setMessages([]);
      return;
    }

    const userId = auth.currentUser?.uid;
    if (!userId) {
      console.log('No user ID available, cannot fetch history');
      return;
    }
    console.log('Fetching history for User ID:', userId);

    try {
      const q = query(
        collection(db, 'users', userId, 'ChatBot'),
        orderBy('createdAt'),
        limit(100)
      );

      console.log('Setting up snapshot listener for:', `users/${userId}/ChatBot`);
      const unsubscribe = onSnapshot(q, (snapshot) => {
        console.log('Snapshot received, docs count:', snapshot.docs.length);
        console.log('Snapshot docs:', snapshot.docs.map(doc => doc.data()));
        const loadedMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          text: doc.data().text,
          isUser: doc.data().isUser,
          createdAt: doc.data().createdAt,
        }));
        setMessages(loadedMessages);
      }, (error) => {
        console.error('Snapshot listener error:', error.message, error.code);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error('Error setting up chat history listener:', error.message, error.code);
    }
  }, [isAuthenticated, auth, db]);

  // Store a new message in Firestore with retry
  const storeMessage = async (messageObj, retries = 3) => {
    let userId = auth.currentUser?.uid;
    console.log('Attempting to store message for User ID:', userId);
    console.log('Message data:', JSON.stringify(messageObj, null, 2));

    if (!userId) {
      console.log('No user ID, waiting for auth...');
      for (let i = 0; i < retries; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1s
        userId = auth.currentUser?.uid;
        if (userId) break;
      }
    }

    if (!userId) {
      console.warn('No user ID after retries, skipping storeMessage');
      alert('Please log in to save conversation history.');
      return false;
    }

    try {
      const collectionPath = `users/${userId}/ChatBot`;
      console.log('Writing to Firestore path:', collectionPath);
      await addDoc(collection(db, 'users', userId, 'ChatBot'), messageObj);
      console.log('Message stored successfully at:', collectionPath);
      return true;
    } catch (error) {
      console.error('Error storing message:', {
        message: error.message,
        code: error.code,
        details: error.details || 'No additional details',
      });
      alert(`Failed to save message: ${error.message} (Code: ${error.code})`);
      return false;
    }
  };

  // Get last 3 user messages for follow-up detection
  const getRecentMessages = () => {
    const userMessages = messages.filter(msg => msg.isUser);
    const recent = userMessages.slice(-3).map(msg => msg.text).filter(Boolean);
    console.log('Recent queries:', recent);
    return recent.join('\n');
  };

  // Generate dermatology-specific prompt
  const generateDermatologyPrompt = (userQuery) => {
    return `
      You are a highly knowledgeable dermatology assistant specializing in herbal remedies and diet plans for all types of skin diseases across all skin types. Your goal is to provide helpful, concise, and actionable advice.

      The user asked: "${userQuery}"

      *IMPORTANT: IF THE USER'S QUERY IS IN ROMAN URDU, YOU MUST RESPOND IN ROMAN URDU, WHILE ADHERING TO ALL OTHER RULES.*
      For example, if the user asks: "mujhay pimples ka ilaj chahiye", you should respond in Roman Urdu like:
      "*Acne ke liye Chand Gharelu Totkay:*
      • *Neem ka Face Pack*: Neem ke patton ko pees kar paste bana lein. Haftay mein 2-3 baar lagayen.
      • *Aloe Vera Gel*: Taaza aloe vera gel rozana pimples par lagayen.
      *Dietary Tips:*
      • *Kam Taili Khana*: Taili aur junk food se parhez karein.
      • *Pani Zyada Piyein*: Din mein 8-10 glass pani zarur piyein.
      *Quick Tip for Acne:*
      • *Chehray ko Saaf Rakhein*: Din mein do baar chehray ko gentle cleanser se dhoiye."

      Respond in this exact format:

      *Response Format Rules*:
      • When the user says hi/hello/hey/Hi/Hello/Hey/Hello there/Hi there/Hey there → respond with "Hello! I'm here to help with your skin disease concerns. What can I assist you with today?"
      • When the user asks "how are you" or similar phrases (e.g., "aap kaisay ho", "kya haal hai") → respond with "I am a digital assistant designed to help with skin disease concerns. How can I assist you with your skin health today?"
      • For any other skin disease-related query, directly address the user's request without a greeting.
      • Use ONLY bullet points (•) never asterisks (*).
      • Bold all section headings with ** and bold text within the bullet points.
      • Keep responses concise (5 bullet points maximum for recommendations, 1 bullet point minimum).
      • Tailor advice to the specific skin disease mentioned or implied. If no specific disease is mentioned, provide general beneficial advice for skin health.
      • Include practical "how to use" or "how to implement" details where applicable.
      • All remedies and diet plans provided must be generally recognized as safe and effective by professional dermatological and nutritional communities. Emphasize that severe conditions require professional medical advice.
      • For unrelated questions or topics not pertaining to skin diseases, herbal remedies, or diet plans → say "I specialize in providing advice on herbal remedies and diet plans for skin diseases. Please ask me about concerns related to skin health."

      *How to Structure Responses*:
      1. First, analyze the query type:
          • If the query is a greeting (e.g., "hi," "hello"), follow the specific greeting rule above.
          • If the query is asking "how are you" or a similar well-being check, follow the specific "how are you" rule above.
          • If the query is related to a *diet plan* for a skin disease, suggest specific foods/vegetables/nutrients.
          • If the query is related to *herbal remedies* for a skin disease, include preparation and application details.
          • If the query is about a *specific skin disease* (e.g., "eczema," "acne," "psoriasis"), provide relevant general tips, potentially touching upon both diet and remedies.
          • If the query is *general skin health* advice without a specific disease, provide broadly beneficial recommendations.
          • Always prioritize accurate and professionally supported information.
          • *Crucially, determine the language of the user's query and respond in that language.*

      2. Then, provide information in this order, adapting section headings as needed:

      *For Diet-Related Queries:*
      *Dietary Recommendations for Healthy Skin* (or specific disease, e.g., *Dietary Recommendations for Eczema*) (2-3 bullet points)
      • *Food to Include: [Specific food/nutrient] - [Benefit and brief "how to incorporate"]. **(Professionally Verified)*
      • *Food to Limit: [Specific food/nutrient] - [Reason for limitation]. **(Professionally Verified)*
      *Quick Diet Tip for Skin Health* (1 practical suggestion)
      • *Hydration: [Specific advice on water intake and its benefit]. **(Professionally Verified)*

      *For Herbal Remedy-Related Queries:*
      *Herbal Remedy Recommendations for Skin Issues* (or specific disease, e.g., *Herbal Remedies for Acne*) (2-3 bullet points)
      • *Remedy 1: [Herb Name] - [Benefit and detailed "how to prepare/use" for application]. **(Professionally Verified)*
      • *Remedy 2: [Herb Name] - [Benefit and detailed "how to prepare/use" for application]. **(Professionally Verified)*
      *Quick Herbal Tip for Skin Relief* (1 practical suggestion)
      • *Patch Test: [Advice on testing new remedies]. **(Professionally Verified)*

      *For General Skin Disease Queries (or if both diet and remedy are applicable):*
      *Key Recommendations for [Specific Skin Disease, or General Skin Health]* (2-4 bullet points)
      • *Dietary Support: [Brief, actionable diet tip]. **(Professionally Verified)*
      • *Topical Support: [Brief, actionable herbal remedy tip]. **(Professionally Verified)*
      • *Lifestyle Factor: [Brief, actionable lifestyle suggestion]. **(Professionally Verified)*
      *Quick Tip for [Specific Skin Disease, or General Skin Health]* (1 practical suggestion)
      • *Consistency: [Advice on consistent application or practice]. **(Professionally Verified)*

      Remember to always prioritize safety and general well-being.
    `;
  };

  // Generate response based on query type
  const generateResponse = async (userQuery) => {
    try {
      const prompt = generateDermatologyPrompt(userQuery);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating response:', error);
      return `**Error**
• Sorry, I couldn't process your request
• Please try again with a different question`;
    }
  };

  const handleRequest = async () => {
    if (!inputText.trim() || isLoading || !isAuthenticated) {
      if (!isAuthenticated) {
        alert('Please log in to use the chatbot.');
      }
      return;
    }

    const userMessage = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      createdAt: new Date().toISOString(),
    };

    console.log('Adding user message to UI:', userMessage);
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    await storeMessage(userMessage);
    setInputText('');

    try {
      const responseText = await generateResponse(inputText);

      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText || 'I couldn’t generate a response. Please try again.',
        isUser: false,
        createdAt: new Date().toISOString(),
      };

      console.log('Adding bot message to UI:', botMessage);
      setMessages(prev => [...prev, botMessage]);
      await storeMessage(botMessage);
    } catch (error) {
      console.error('Error in handleRequest:', error.message, error.code);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        text: `**Oops, Something Went Wrong**
• I'm having trouble responding right now
• Please try asking again in a moment`,
        isUser: false,
        createdAt: new Date().toISOString(),
      };
      setMessages(prev => [...prev, errorMessage]);
      await storeMessage(errorMessage);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleRequest();
    }
  };

  // Auto-resize textarea
  const handleTextareaChange = (e) => {
    setInputText(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const formatMessage = (text) => {
    if (!text) return null;

    return text.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} className="message-bold">{line.replace(/\*\*/g, '')}</p>;
      } else if (line.trim().startsWith('•')) {
        return <p key={i} className="message-bullet">{line.trim()}</p>;
      } else if (line.trim() === '') {
        return null;
      }
      return <p key={i}>{line}</p>;
    }).filter(Boolean);
  };

  return (
    <div className="chatbot-container">
      {!isAuthenticated && (
        <div className="chatbot-login-prompt">
          <p>Please log in with your email or Google account to use the chatbot.</p>
        </div>
      )}

      <div className="chatbot-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
          >
            <div className="message-content">
              {formatMessage(message.text)}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message bot-message">
            <div className="typing-indicator">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input-container">
        <textarea
          value={inputText}
          onChange={handleTextareaChange}
          onKeyPress={handleKeyPress}
          placeholder="Ask about diet plans & remedies..."
          rows="1"
          disabled={isLoading || !isAuthenticated}
        />
        <button
          onClick={handleRequest}
          disabled={isLoading || !inputText.trim() || !isAuthenticated}
        >
          {isLoading ? (
            <div className="spinner"></div>
          ) : (
            <svg className="send-icon" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;













