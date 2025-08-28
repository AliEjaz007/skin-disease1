// import { useState } from 'react';
// import { useAuth } from '../../firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import './Analysis.css';

// const diseaseInfoMap = {
//   'BA-Cellulitis': {
//     description: 'A bacterial skin infection that causes redness, swelling, and pain in the affected area. It typically occurs when bacteria enter through a break in the skin.',
//     remedies: [
//       'Oral antibiotics (e.g., penicillin, cephalexin)',
//       'Keep the affected area elevated to reduce swelling',
//       'Apply warm compresses to the area',
//       'Over-the-counter pain relievers for discomfort'
//     ],
//     dietPlan: [
//       'Foods rich in vitamin C (oranges, bell peppers) to boost immunity',
//       'Zinc-rich foods (nuts, seeds, legumes) for wound healing',
//       'Probiotic foods (yogurt, kefir) to support gut health',
//       'Stay hydrated with plenty of water'
//     ]
//   },
//   'BA-Impetigo': {
//     description: 'A highly contagious skin infection that mainly affects infants and children, characterized by red sores that quickly rupture and form honey-colored crusts.',
//     remedies: [
//       'Topical antibiotics (mupirocin ointment)',
//       'Oral antibiotics for severe cases',
//       'Keep the affected area clean and covered',
//       'Avoid scratching to prevent spreading'
//     ],
//     dietPlan: [
//       'Protein-rich foods for tissue repair',
//       'Foods high in vitamin A (sweet potatoes, carrots)',
//       'Garlic and turmeric for their antimicrobial properties',
//       'Avoid sharing utensils or food to prevent spreading'
//     ]
//   },
//   'BA-Abscess': {
//     description: 'A collection of pus that has built up within the tissue, often caused by bacterial infection. Symptoms include swelling, redness, pain, and warmth at the site.',
//     remedies: [
//       'May require drainage by a healthcare professional',
//       'Antibiotics if infection is severe or spreading',
//       'Warm compresses to promote drainage',
//       'Keep the area clean and covered'
//     ],
//     dietPlan: [
//       'Foods rich in antioxidants (berries, leafy greens)',
//       'Lean proteins for tissue repair',
//       'Avoid sugary foods that can suppress immunity',
//       'Stay well-hydrated'
//     ]
//   },
//   'FU-Tinea Pedis': {
//     description: 'Commonly known as athlete\'s foot, a fungal infection that usually begins between the toes, causing itching, scaling, and sometimes painful cracks in the skin.',
//     remedies: [
//       'Antifungal creams or sprays (clotrimazole, terbinafine)',
//       'Keep feet clean and dry',
//       'Change socks regularly',
//       'Use antifungal powder in shoes'
//     ],
//     dietPlan: [
//       'Probiotic foods to support healthy microbiome',
//       'Foods with natural antifungal properties (coconut oil, garlic)',
//       'Reduce sugar intake which can feed fungal growth',
//       'Stay hydrated'
//     ]
//   },
//   'FU-Tinea Corporis': {
//     description: 'Also known as ringworm, a fungal infection that appears as a circular or ring-shaped rash with clearer skin in the middle and a scaly, raised border.',
//     remedies: [
//       'Topical antifungal medications',
//       'Keep the affected area clean and dry',
//       'Wash clothing and bedding regularly',
//       'Avoid sharing personal items'
//     ],
//     dietPlan: [
//       'Foods with antifungal properties (garlic, ginger)',
//       'Probiotic-rich foods',
//       'Zinc-rich foods for skin health',
//       'Reduce processed sugar intake'
//     ]
//   },
//   'FU-Candidiasis': {
//     description: 'A fungal infection caused by Candida yeast, often occurring in moist areas like skin folds, causing red, itchy rash with satellite lesions.',
//     remedies: [
//       'Antifungal creams (clotrimazole, nystatin)',
//       'Keep the area dry and exposed to air when possible',
//       'Use moisture-wicking fabrics',
//       'For recurrent cases, oral antifungals may be needed'
//     ],
//     dietPlan: [
//       'Probiotic foods to restore healthy microbiome',
//       'Reduce sugar and refined carbohydrate intake',
//       'Foods with natural antifungal properties',
//       'Stay well-hydrated'
//     ]
//   },
//   'PA-Psoriasis': {
//     description: 'A chronic autoimmune condition that causes the rapid buildup of skin cells, resulting in scaling, redness, and sometimes joint pain (psoriatic arthritis).',
//     remedies: [
//       'Topical corticosteroids',
//       'Moisturizers to reduce scaling',
//       'Phototherapy in some cases',
//       'Systemic medications for severe cases'
//     ],
//     dietPlan: [
//       'Anti-inflammatory foods (fatty fish, leafy greens)',
//       'Foods rich in antioxidants',
//       'Consider gluten-free diet if sensitive',
//       'Limit alcohol and processed foods'
//     ]
//   },
//   'PA-Lichen Planus': {
//     description: 'An inflammatory condition that can affect the skin, mouth, nails, and other areas, characterized by purplish, itchy, flat-topped bumps.',
//     remedies: [
//       'Topical corticosteroids',
//       'Antihistamines for itching',
//       'Phototherapy in some cases',
//       'Avoid scratching to prevent worsening'
//     ],
//     dietPlan: [
//       'Anti-inflammatory diet',
//       'Foods rich in omega-3 fatty acids',
//       'Avoid spicy or acidic foods if mouth is affected',
//       'Stay hydrated'
//     ]
//   },
//   'PA-Pityriasis Rosea': {
//     description: 'A common skin condition causing a temporary rash of raised, red scaly patches, often beginning with a single "herald patch" followed by similar smaller patches.',
//     remedies: [
//       'Usually resolves on its own in 6-8 weeks',
//       'Moisturizers to relieve dryness',
//       'Antihistamines for itching',
//       'Mild topical steroids if needed'
//     ],
//     dietPlan: [
//       'Balanced diet to support immune system',
//       'Stay well-hydrated',
//       'Foods rich in zinc and vitamin D',
//       'No specific dietary restrictions'
//     ]
//   },
//   'VI-Chickenpox': {
//     description: 'A highly contagious viral infection causing an itchy, blister-like rash that eventually scabs over, along with fever and fatigue.',
//     remedies: [
//       'Calamine lotion for itching',
//       'Antihistamines for severe itching',
//       'Keep nails short to prevent scratching',
//       'Antiviral medication in some cases'
//     ],
//     dietPlan: [
//       'Cool, soft foods if mouth sores are present',
//       'Stay well-hydrated',
//       'Foods rich in lysine (fish, chicken, beans)',
//       'Avoid acidic or spicy foods that may irritate sores'
//     ]
//   },
//   'VI-Shingles': {
//     description: 'A painful viral infection caused by the reactivation of the chickenpox virus, characterized by a painful rash that typically appears as a stripe of blisters on one side of the body.',
//     remedies: [
//       'Antiviral medications if started early',
//       'Pain relievers',
//       'Calamine lotion or cool compresses',
//       'Keep the rash clean and covered'
//     ],
//     dietPlan: [
//       'Foods rich in lysine and low in arginine',
//       'Anti-inflammatory foods',
//       'Vitamin B12-rich foods for nerve health',
//       'Stay hydrated'
//     ]
//   },
//   'VI-Herpes': {
//     description: 'A viral infection causing painful blisters or ulcers at the infection site, often recurring in the same area. HSV-1 typically causes oral herpes, while HSV-2 typically causes genital herpes.',
//     remedies: [
//       'Antiviral medications (acyclovir, valacyclovir)',
//       'Keep the area clean and dry',
//       'Pain relievers as needed',
//       'Avoid touching or picking at blisters'
//     ],
//     dietPlan: [
//       'Foods high in lysine (dairy, fish, chicken)',
//       'Limit arginine-rich foods (nuts, chocolate)',
//       'Zinc-rich foods for immune support',
//       'Stay hydrated'
//     ]
//   },
//   'ST-Staphylococcal Scalded Skin Syndrome': {
//     description: 'A serious skin infection caused by staphylococcus bacteria, leading to widespread redness, blistering, and skin peeling that looks like burns.',
//     remedies: [
//       'Hospitalization often required',
//       'Intravenous antibiotics',
//       'Pain management',
//       'Wound care for denuded areas'
//     ],
//     dietPlan: [
//       'High-protein diet for tissue repair',
//       'Foods rich in vitamins A and C',
//       'Stay well-hydrated',
//       'May require nutritional support during recovery'
//     ]
//   },
//   'ST-Toxic Epidermal Necrolysis': {
//     description: 'A life-threatening skin condition usually caused by a reaction to medications, characterized by widespread skin blistering and peeling.',
//     remedies: [
//       'Hospitalization in burn unit or ICU',
//       'Discontinue causative medication',
//       'Supportive care including fluid management',
//       'Wound care similar to burn treatment'
//     ],
//     dietPlan: [
//       'Nutritional support often required',
//       'High-protein, high-calorie diet',
//       'May require tube feeding initially',
//       'Focus on healing nutrients when oral intake resumes'
//     ]
//   },
//   'ST-Scarlet Fever': {
//     description: 'A bacterial illness that develops in some people who have strep throat, characterized by a bright red rash that feels like sandpaper and a high fever.',
//     remedies: [
//       'Antibiotics (penicillin or alternatives)',
//       'Fever reducers',
//       'Soothe throat with warm liquids',
//       'Keep hydrated'
//     ],
//     dietPlan: [
//       'Soft, easy-to-swallow foods if throat is sore',
//       'Stay well-hydrated',
//       'Vitamin C-rich foods to support immunity',
//       'Comfort foods as tolerated'
//     ]
//   },
//   'Normal': {
//     description: 'No significant skin abnormalities detected.',
//     remedies: [
//       'Maintain good skin hygiene',
//       'Use sunscreen daily',
//       'Moisturize regularly',
//       'Stay hydrated'
//     ],
//     dietPlan: [
//       'Balanced diet with plenty of fruits and vegetables',
//       'Foods rich in omega-3 fatty acids',
//       'Stay hydrated',
//       'Limit processed foods and sugars'
//     ]
//   }
// };

// const getSeverityLevel = (confidence) => {
//   if (confidence >= 90) return 'Severe';
//   if (confidence >= 70) return 'Moderate';
//   return 'Mild';
// };




// const analyzeImage = async (file) => {
//   // Mock analysis - replace with your actual API call
//   const diseases = Object.keys(diseaseInfoMap);
//   const randomIndex = Math.floor(Math.random() * diseases.length);
//   const randomDisease = diseases[randomIndex];
//   const randomConfidence = Math.floor(Math.random() * 31) + 70;

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         prediction: randomDisease,
//         confidence: randomConfidence,
//       });
//     }, 2000);
//   });
// };

// const Analysis = () => {
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

//   const [file, setFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState(null);
//   const [analysisData, setAnalysisData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [saveStatus, setSaveStatus] = useState('');
//   const [expandedSections, setExpandedSections] = useState({ remedies: true, diet: true });

//   if (!currentUser) {
//     return (
//       <div className="analysis login-prompt">
//         <p>Please log in to use this page.</p>
//         <button onClick={() => navigate('/login')} className="analysis__btn">Log In</button>
//       </div>
//     );
//   }

// const handleFileChange = (e) => {
//   const selectedFile = e.target.files[0];
//   if (!selectedFile) return;
  
//   // Validate file type
//   if (!selectedFile.type.match('image.*')) {
//     setSaveStatus('Please upload an image file (JPEG, PNG)');
//     return;
//   }
  
//   // Validate file size (max 10MB)
//   if (selectedFile.size > 10 * 1024 * 1024) {
//     setSaveStatus('File size must be less than 10MB');
//     return;
//   }

//   // Clear previous data
//   setFile(selectedFile);
//   setImageUrl(URL.createObjectURL(selectedFile));
//   setAnalysisData(null);  // Clear previous analysis
//   setSaveStatus('');      // Clear any status messages
//   setLoading(false);      // Ensure loading is reset
// };

//   const handleAnalyzeClick = async () => {
//     if (!file) {
//       setSaveStatus('Please upload an image first.');
//       return;
//     }
    
//     setLoading(true);
//     setSaveStatus('Analyzing...');
    
//     try {
//       const result = await analyzeImage(file);
//       const diseaseKey = result.prediction;
//       const info = diseaseInfoMap[diseaseKey] || {
//         description: 'No data available.',
//         remedies: [],
//         dietPlan: [],
//       };
      
//       setAnalysisData({
//         disease: diseaseKey,
//         confidence: result.confidence,
//         description: info.description,
//         remedies: info.remedies,
//         dietPlan: info.dietPlan,
//       });
//       setSaveStatus('Analysis complete!');
//     } catch (error) {
//       setSaveStatus('Error during analysis: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const saveAnalysis = async () => {
//     if (!analysisData || !file) {
//       setSaveStatus('No analysis data to save.');
//       return;
//     }

//     setSaveStatus('Saving to MongoDB...');

//     try {
//       const formData = new FormData();
//       formData.append('image', file);
//       formData.append('analysisResult', JSON.stringify({
//         disease: analysisData.disease,
//         confidence: analysisData.confidence,
//         severity: getSeverityLevel(analysisData.confidence),
//         description: analysisData.description
//       }));
//       formData.append('herbalRemedies', JSON.stringify(analysisData.remedies));
//       formData.append('dietPlan', JSON.stringify(analysisData.dietPlan));

//       const token = await currentUser.getIdToken();

//       const response = await fetch('http://localhost:5000/api/images', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`
//         },
//         body: formData
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Failed to save');
//       }

//       setSaveStatus('✅ Saved successfully to MongoDB!');
//     } catch (error) {
//       setSaveStatus('❌ Error saving to MongoDB: ' + error.message);
//     }
//   };

//   const toggleSection = (section) => {
//     setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   return (
//     <div className="analysis">
//       <h1 className="analysis__title">Skin Disease Analysis</h1>
//       <div className="analysis__upload">
//         <input 
//           type="file" 
//           accept="image/*" 
//           onChange={handleFileChange}
//           id="fileInput"
//           className="analysis__file-input"
//         />
//         <button
//           className="analysis__btn"
//           onClick={handleAnalyzeClick}
//           disabled={loading || !file}
//         >
//           {loading ? 'Analyzing...' : 'Analyze'}
//         </button>
//       </div>

//       {imageUrl && (
//         <div className="analysis__image-section">
//           <div className="analysis__image-wrapper">
//             <img src={imageUrl} alt="Uploaded Skin" className="analysis__image" />
//             {file && (
//               <div className="analysis__file-info">
//                 <p>{file.name}</p>
//                 <p>{(file.size / 1024).toFixed(2)} KB</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {saveStatus && !analysisData && (
//         <p className="analysis__status">{saveStatus}</p>
//       )}

//       {analysisData && (
//         <div className="analysis__result">
//           <div className="analysis__diagnosis">
//             <h2>{analysisData.disease}</h2>
//             <p><strong>Confidence:</strong> {analysisData.confidence}%</p>
//             <p><strong>Severity:</strong> {getSeverityLevel(analysisData.confidence)}</p>
//             <p className="analysis__description">{analysisData.description}</p>
//           </div>

//           <div className="analysis__recommendations">
//             <div className="analysis__section">
//               <button
//                 className="analysis__toggle"
//                 onClick={() => toggleSection('remedies')}
//               >
//                 Remedies {expandedSections.remedies ? '▲' : '▼'}
//               </button>
//               {expandedSections.remedies && (
//                 <ul className="analysis__list">
//                   {analysisData.remedies.length ? (
//                     analysisData.remedies.map((item, i) => <li key={i}>{item}</li>)
//                   ) : (
//                     <li>No remedies available.</li>
//                   )}
//                 </ul>
//               )}
//             </div>

//             <div className="analysis__section">
//               <button
//                 className="analysis__toggle"
//                 onClick={() => toggleSection('diet')}
//               >
//                 Diet Plan {expandedSections.diet ? '▲' : '▼'}
//               </button>
//               {expandedSections.diet && (
//                 <ul className="analysis__list">
//                   {analysisData.dietPlan.length ? (
//                     analysisData.dietPlan.map((item, i) => <li key={i}>{item}</li>)
//                   ) : (
//                     <li>No diet plan available.</li>
//                   )}
//                 </ul>
//               )}
//             </div>
//           </div>

//           <button 
//             className="analysis__btn analysis__btn--save" 
//             onClick={saveAnalysis}
//           >
//             Save Analysis
//           </button>

//           {saveStatus && <p className="analysis__status">{saveStatus}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Analysis;




// import { useState } from 'react';
// import { useAuth } from '../../firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import './Analysis.css';

// const getSeverityLevel = (confidence) => {
//   if (confidence >= 90) return 'Severe';
//   if (confidence >= 70) return 'Moderate';
//   return 'Mild';
// };

// const analyzeImage = async (file) => {
//   const diseases = [
//     'BA-Cellulitis',
//     'BA-Impetigo',
//     'FU-Athlete-Foot',
//     'FU-Nail-Fungus',
//     'FU-Ringworm',
//     'PA-Cutaneous-Larva-Migrans',
//     'VI-Chickenpox',
//     'VI-Shingles'
//   ];
//   const randomIndex = Math.floor(Math.random() * diseases.length);
//   const randomDisease = diseases[randomIndex];
//   const randomConfidence = Math.floor(Math.random() * 31) + 70;

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         prediction: randomDisease,
//         confidence: randomConfidence,
//       });
//     }, 2000);
//   });
// };

// const Analysis = () => {
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

//   const [file, setFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState(null);
//   const [analysisData, setAnalysisData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [saveStatus, setSaveStatus] = useState('');
//   const [expandedSections, setExpandedSections] = useState({ remedies: true, diet: true });

//   // Fetch disease info from backend
//   const fetchDiseaseInfo = async (diseaseName) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/diseases/${diseaseName}`);
//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || 'Failed to fetch disease info');
//       }
//       return data;
//     } catch (error) {
//       console.error('Error fetching disease info:', error);
//       return null;
//     }
//   };

//   if (!currentUser) {
//     return (
//       <div className="analysis login-prompt">
//         <p>Please log in to use this page.</p>
//         <button onClick={() => navigate('/login')} className="analysis__btn">Log In</button>
//       </div>
//     );
//   }

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (!selectedFile) return;

//     if (!selectedFile.type.match('image.*')) {
//       setSaveStatus('Please upload an image file (JPEG, PNG)');
//       return;
//     }

//     if (selectedFile.size > 10 * 1024 * 1024) {
//       setSaveStatus('File size must be less than 10MB');
//       return;
//     }

//     setFile(selectedFile);
//     setImageUrl(URL.createObjectURL(selectedFile));
//     setAnalysisData(null);
//     setSaveStatus('');
//     setLoading(false);
//   };

//   const handleAnalyzeClick = async () => {
//     if (!file) {
//       setSaveStatus('Please upload an image first.');
//       return;
//     }

//     setLoading(true);
//     setSaveStatus('Analyzing...');

//     try {
//       const result = await analyzeImage(file);
//       const diseaseKey = result.prediction;

//       // Fetch remedies and diet plan from backend
//       const diseaseInfo = await fetchDiseaseInfo(diseaseKey);

//       if (!diseaseInfo) {
//         setSaveStatus('Error: Could not fetch disease information.');
//         setLoading(false);
//         return;
//       }

//       setAnalysisData({
//         disease: diseaseKey,
//         confidence: result.confidence,
//         description: diseaseInfo.description,
//         remedies: diseaseInfo.remedies,
//         dietPlan: diseaseInfo.dietPlan,
//       });
//       setSaveStatus('Analysis complete!');
//     } catch (error) {
//       setSaveStatus('Error during analysis: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const saveAnalysis = async () => {
//     if (!analysisData || !file) {
//       setSaveStatus('No analysis data to save.');
//       return;
//     }

//     setSaveStatus('Saving to MongoDB...');

//     try {
//       const formData = new FormData();
//       formData.append('image', file);
//       formData.append('analysisResult', JSON.stringify({
//         disease: analysisData.disease,
//         confidence: analysisData.confidence,
//         severity: getSeverityLevel(analysisData.confidence),
//         description: analysisData.description
//       }));

//       const token = await currentUser.getIdToken();

//       const response = await fetch('http://localhost:5000/api/images', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`
//         },
//         body: formData
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Failed to save');
//       }

//       setSaveStatus('✅ Saved successfully to MongoDB!');
//     } catch (error) {
//       setSaveStatus('❌ Error saving to MongoDB: ' + error.message);
//     }
//   };

//   const toggleSection = (section) => {
//     setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   return (
//     <div className="analysis">
//       <h1 className="analysis__title">Skin Disease Analysis</h1>
//       <div className="analysis__upload">
//         <input 
//           type="file" 
//           accept="image/*" 
//           onChange={handleFileChange}
//           id="fileInput"
//           className="analysis__file-input"
//         />
//         <button
//           className="analysis__btn"
//           onClick={handleAnalyzeClick}
//           disabled={loading || !file}
//         >
//           {loading ? 'Analyzing...' : 'Analyze'}
//         </button>
//       </div>

//       {imageUrl && (
//         <div className="analysis__image-section">
//           <div className="analysis__image-wrapper">
//             <img src={imageUrl} alt="Uploaded Skin" className="analysis__image" />
//             {file && (
//               <div className="analysis__file-info">
//                 <p>{file.name}</p>
//                 <p>{(file.size / 1024).toFixed(2)} KB</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {saveStatus && !analysisData && (
//         <p className="analysis__status">{saveStatus}</p>
//       )}

//       {analysisData && (
//         <div className="analysis__result">
//           <div className="analysis__diagnosis">
//             <h2>{analysisData.disease}</h2>
//             <p><strong>Confidence:</strong> {analysisData.confidence}%</p>
//             <p><strong>Severity:</strong> {getSeverityLevel(analysisData.confidence)}</p>
//             <p className="analysis__description">{analysisData.description}</p>
//           </div>

//           <div className="analysis__recommendations">
//             <div className="analysis__section">
//               <button
//                 className="analysis__toggle"
//                 onClick={() => toggleSection('remedies')}
//               >
//                 Remedies {expandedSections.remedies ? '▲' : '▼'}
//               </button>
//               {expandedSections.remedies && (
//                 <ul className="analysis__list">
//                   {analysisData.remedies.length ? (
//                     analysisData.remedies.map((item, i) => <li key={i}>{item}</li>)
//                   ) : (
//                     <li>No remedies available.</li>
//                   )}
//                 </ul>
//               )}
//             </div>

//             <div className="analysis__section">
//               <button
//                 className="analysis__toggle"
//                 onClick={() => toggleSection('diet')}
//               >
//                 Diet Plan {expandedSections.diet ? '▲' : '▼'}
//               </button>
//               {expandedSections.diet && (
//                 <ul className="analysis__list">
//                   {analysisData.dietPlan.length ? (
//                     analysisData.dietPlan.map((item, i) => <li key={i}>{item}</li>)
//                   ) : (
//                     <li>No diet plan available.</li>
//                   )}
//                 </ul>
//               )}
//             </div>
//           </div>

//           <button 
//             className="analysis__btn analysis__btn--save" 
//             onClick={saveAnalysis}
//           >
//             Save Analysis
//           </button>

//           {saveStatus && <p className="analysis__status">{saveStatus}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Analysis;














// ==========================================================

import { useState, useEffect } from 'react';
import { useAuth } from '../../firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import './Analysis.css';

const getSeverityLevel = (confidence) => {
  if (confidence >= 80) return 'Severe';
  if (confidence >= 50) return 'Moderate';
  return 'Mild';
};

const analyzeImage = async (file) => {
  const diseases = [
    'BA-Cellulitis',
    'BA-Impetigo',
    'FU-Athlete-Foot',
    'FU-Nail-Fungus',
    'FU-Ringworm',
    'PA-Cutaneous-Larva-Migrans',
    'VI-Chickenpox',
    'VI-Shingles',
    'No-disease',
  ];
  const randomIndex = Math.floor(Math.random() * diseases.length);
  const randomDisease = diseases[randomIndex];
  const randomConfidence = Math.floor(Math.random() * 31) + 70;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        prediction: randomDisease,
        confidence: randomConfidence,
      });
    }, 2000);
  });
};

const fetchDiseaseInfo = async (diseaseName) => {
  try {
    console.log(`Fetching info for: ${diseaseName}`); // Debug log
    const response = await fetch(
      `http://localhost:5000/api/diseases/${encodeURIComponent(
        diseaseName.replace(/ /g, '-')
      )}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched data:', data); // Debug log
    return data;
  } catch (error) {
    console.error('Error fetching disease info:', error);
    return null;
  }
};

const Analysis = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');
  const [fetchingInfo, setFetchingInfo] = useState(false);
  const [error, setError] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    remedies: true,
    diet: true,
  });

  useEffect(() => {
    const loadAnalysisData = async () => {
      if (location.state && location.state.analysisResult) {
        console.log('Location state:', location.state);
        console.log('Analysis Result:', location.state.analysisResult);
        const { imageData, analysisResult, fileName } = location.state;
        const initialConfidence = analysisResult.confidence * 100 || 0; 
        console.log('Initial Confidence:', initialConfidence);
        setImageUrl(imageData);
        setAnalysisData({
          disease: analysisResult.prediction || 'Unknown',
          confidence: initialConfidence,
          description: 'Fetching description...',
          remedies: ['Loading remedies...'],
          dietPlan: ['Loading diet plan...'],
        });

        const byteString = atob(imageData.split(',')[1]);
        const mimeString = imageData.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        setFile(new File([blob], fileName, { type: mimeString }));

        setFetchingInfo(true);
        const diseaseInfo = await fetchDiseaseInfo(
          analysisResult.prediction || 'No-disease'
        );
        setFetchingInfo(false);

        if (diseaseInfo) {
          setAnalysisData((prev) => ({
            ...prev,
            description: diseaseInfo.description || 'No description available',
            remedies: diseaseInfo.remedies || ['No remedies available'],
            dietPlan: diseaseInfo.dietPlan || ['No diet plan available'],
          }));
        } else {
          setAnalysisData((prev) => ({
            ...prev,
            description: 'Error fetching description',
            remedies: ['Error fetching remedies'],
            dietPlan: ['Error fetching diet plan'],
          }));
          setError('Failed to fetch disease information');
        }
      }
    };

    loadAnalysisData();
  }, [location.state]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (!selectedFile.type.match('image.*')) {
      setSaveStatus('Please upload an image file (JPEG, PNG)');
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      setSaveStatus('File size must be less than 10MB');
      return;
    }

    setFile(selectedFile);
    setImageUrl(URL.createObjectURL(selectedFile));
    setAnalysisData(null);
    setSaveStatus('');
    setLoading(false);
  };

  const handleAnalyzeClick = async () => {
    if (!file) {
      setSaveStatus('Please upload an image first.');
      return;
    }

    setLoading(true);
    setSaveStatus('Analyzing...');

    try {
      const result = await analyzeImage(file);
      const diseaseInfo = await fetchDiseaseInfo(result.prediction);

      if (!diseaseInfo) {
        setSaveStatus('Error: Could not fetch disease information.');
        setLoading(false);
        return;
      }

      setAnalysisData({
        disease: result.prediction,
        confidence: result.confidence,
        description: diseaseInfo.description || 'No description available',
        remedies: diseaseInfo.remedies || ['No remedies available'],
        dietPlan: diseaseInfo.dietPlan || ['No diet plan available'],
      });
      setSaveStatus('Analysis complete!');
    } catch (error) {
      setSaveStatus('Error during analysis: ' + error.message);
    } finally {
      setLoading(false);
    }
  };


  const saveAnalysis = async () => {
  if (!analysisData || !file) {
    setSaveStatus('No analysis data or file to save.');
    return;
  }

  if (!currentUser) {
    setSaveStatus('❌ User not authenticated. Please log in.');
    return;
  }

  setSaveStatus('Saving to MongoDB...');

  try {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('analysisResult', JSON.stringify({
      disease: analysisData.disease,
      confidence: analysisData.confidence,
      severity: getSeverityLevel(analysisData.confidence),
      description: analysisData.description,
      remedies: analysisData.remedies,
      dietPlan: analysisData.dietPlan,
    }));

    const token = await currentUser.getIdToken();

    const response = await fetch('http://localhost:5000/api/images', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `Failed to save: HTTP status ${response.status}`);
    }

    setSaveStatus('✅ Saved successfully');
  } catch (error) {
    console.error('Error saving  ', error);
    setSaveStatus(`❌ Error saving ${error.message}`);
  }
};


  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="analysis">
      <h1 className="analysis__title">Skin Disease Analysis</h1>
      {!location.state && (
        <div className="analysis__upload">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="fileInput"
            className="analysis__file-input"
          />
          <button
            className="analysis__btn"
            onClick={handleAnalyzeClick}
            disabled={loading || !file}
          >
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>
      )}

      {(imageUrl || (location.state && location.state.imageData)) && (
        <div className="analysis__image-section">
          <div className="analysis__image-wrapper">
            <img
              src={imageUrl || location.state.imageData}
              alt="Uploaded Skin"
              className="analysis__image"
            />
            {file && (
              <div className="analysis__file-info">
                <p>{file.name}</p>
                <p>{(file.size / 1024).toFixed(2)} KB</p>
              </div>
            )}
          </div>
        </div>
      )}

      {saveStatus && !analysisData && (
        <p className="analysis__status">{saveStatus}</p>
      )}

      {analysisData && (
        <div className="analysis__result">
          <div className="analysis__diagnosis">
            <h2>{analysisData.disease}</h2>
            <p>
              <strong>Confidence:</strong> {analysisData.confidence}%
            </p>
            <p>
              <strong>Severity:</strong> {getSeverityLevel(analysisData.confidence)}
            </p>
            <p className="analysis__description">{analysisData.description}</p>
          </div>

          <div className="analysis__recommendations">
            <div className="analysis__section">
              <button
                className="analysis__toggle"
                onClick={() => toggleSection('remedies')}
              >
                Remedies {expandedSections.remedies ? '▲' : '▼'}
              </button>
              {expandedSections.remedies && (
                <ul className="analysis__list">
                  {fetchingInfo ? (
                    <li>Loading remedies...</li>
                  ) : analysisData.remedies.length ? (
                    analysisData.remedies.map((item, i) => <li key={i}>{item}</li>)
                  ) : (
                    <li>No remedies available.</li>
                  )}
                </ul>
              )}
            </div>

            <div className="analysis__section">
              <button
                className="analysis__toggle"
                onClick={() => toggleSection('diet')}
              >
                Diet Plan {expandedSections.diet ? '▲' : '▼'}
              </button>
              {expandedSections.diet && (
                <ul className="analysis__list">
                  {fetchingInfo ? (
                    <li>Loading diet plan...</li>
                  ) : analysisData.dietPlan.length ? (
                    analysisData.dietPlan.map((item, i) => <li key={i}>{item}</li>)
                  ) : (
                    <li>No diet plan available.</li>
                  )}
                </ul>
              )}
            </div>
          </div>

          <div className="analysis__button-container">
            <button
              className="analysis__btn analysis__btn--back"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="analysis__btn analysis__btn--save"
              onClick={saveAnalysis}
            >
              Save Analysis
            </button>
          </div>

          {saveStatus && <p className="analysis__status">{saveStatus}</p>}
          {error && <p className="analysis__status error">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Analysis;