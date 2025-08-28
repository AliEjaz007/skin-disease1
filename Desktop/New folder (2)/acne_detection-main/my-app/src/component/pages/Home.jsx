import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/auth";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from "./Footer";
import FloatingChatbot from "./FloatingChatbot";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";
 
const Home = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    handleFile(uploadedFile);
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    handleFile(uploadedFile);
  };

  const handleFile = (uploadedFile) => {
    if (!uploadedFile) return;
    
    if (!uploadedFile.type.match('image.*')) {
      alert('Please upload an image file (JPEG, PNG, JPG)');
      return;
    }

    if (uploadedFile.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    setFile(uploadedFile);
    setPreviewUrl(URL.createObjectURL(uploadedFile));
    setIsUploaded(true);
    setAnalysisResult(null); 
    setError(null);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };


  const handleAnalyze = async () => {
  if (!currentUser) {
    setShowLoginAlert(true);
    return;
  }

  if (!file) {
    setError('Please upload an image first');
    return;
  }

  setIsLoading(true);
  setError(null);

  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('http://127.0.0.1:5000/analyze', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Analysis failed: ${response.statusText}`);
    }

    const result = await response.json();
    
    // Convert file to base64 for easier transfer
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      navigate('/analysis', {
        state: {
          imageData: reader.result, // Base64 encoded image
          analysisResult: result,
          fileName: file.name
        }
      });
    };

  } catch (err) {
    setError(err.message || 'Analysis error occurred');
    console.error('Analysis error:', err);
  } finally {
    setIsLoading(false);
  }
};


  const handleLoginRedirect = () => {
    if (file) {
      const fileData = {
        url: previewUrl,
        name: file.name,
        type: file.type
      };
      sessionStorage.setItem('pendingAnalysis', JSON.stringify(fileData));
    }
    navigate('/login', { state: { from: { pathname: '/home' } } });
  };

  useEffect(() => {
    const pendingAnalysis = sessionStorage.getItem('pendingAnalysis');
    if (pendingAnalysis) {
      const { url, name, type } = JSON.parse(pendingAnalysis);
      fetch(url)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], name, { type });
          setFile(file);
          setPreviewUrl(url);
          setIsUploaded(true);
        });
      sessionStorage.removeItem('pendingAnalysis');
    }
  }, []);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="home-page">
      {/* Hero Slider Section */}
      <section className="hero-section">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div className="slide-content">
              <div className="text-content">
                <h1>AI Meets Skincare <br />Say Hello to Flawless Skin!</h1>
                <p>Scan, analyze and treat your acne with smart AI recommendations & expert-backed remedies.</p>
              </div>
              <div className="character-image">
                <img src="/images/Adobe Express - file (1).png" alt="Skincare" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content reverse">
              <div className="text-content">
                <h1>Struggling with Skin? <br />Let AI Guide You!</h1>
                <p>Upload a photo, detect skin, and get natural remedies & skincare tips tailored just for you.</p>
              </div>
              <div className="character-image">
                <img src="/images/2.png" alt="Skin AI Guide" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <div className="text-content">
                <h1>Heal Your Skin, <br />Naturally!</h1>
                <p>AI-powered skin detection meets herbal remedies & personalized diet plans all in one place.</p>
              </div>
              <div className="character-image">
                <img src="/images/Adobe Express - file.png" alt="Skincare" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <div className="scroll-indicator">▼</div>
      
      {/* Upload Section */}
      <div>
        <div className="analysiscontainer">
          <div className="backgroundoverlay">
            <div className="content">
              <h1>One Picture, One Scan, <br /> One Step Closer to Clear Skin!</h1>
              <p>
                Upload your image & let AI reveal the best skin treatment
                tailored just for you!
              </p>
            </div>
            <div className="animatedcharacter">
              <img src="/images/D 5.png" alt="Skin AI Guide" className="character-image" />
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="instructions">
            <div className="upload-info">
              <h3>Upload Your Image - Let AI Analyze Your Skin!</h3>
              <p>
                Struggling with skin issues? Not sure what skincare routine is right
                for you?
                <br />
                Our AI-powered skin detection system makes it easy to understand
                <br />
                your skin condition and get the best remedies tailored just for
                you!
              </p>
            </div>
            <h2 className="instructions-title">🔍 How It Works?</h2>
            <ul className="instructions-list">
              <li>Click on the "Upload Image" button</li>
              <li>Select a clear photo of your face (Front-facing, good lighting)</li>
              <li>AI scans your skin & detects skin issues</li>
              <li>Get instant results with personalized herbal remedies, skincare tips, and diet plans</li>
            </ul>
          </div>
          
          <div className="upload-container">
            <input
              type="file"
              id="fileUpload"
              accept="image/jpeg, image/png, image/jpg"
              onChange={handleFileChange}
              ref={fileInputRef}
              hidden
            />
            
            {!isUploaded ? (
              <div
                className="upload-box"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={triggerFileInput}
              >
                <p className="upload-text">
                  <strong>Drag and drop an Image</strong> <br />
                  or <span className="browse-text">browse to upload</span>
                </p>
                <label htmlFor="fileUpload" className="upload-button">
                  Upload your photo
                </label>
                <p className="file-info">
                  File must be JPEG, JPG, or PNG and up to 10 MB
                </p>
              </div>
            ) : (
              <div className="preview-container">
                <div className="image-preview">
                  <img src={previewUrl} alt="Uploaded preview" />
                  <div className="file-details">
                    <p>{file.name}</p>
                    <p>{(file.size / 1024).toFixed(2)} KB</p>
                  </div>
                </div>
                <div className="preview-actions">
                  <button 
                    className="analyze-button"
                    onClick={handleAnalyze}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Analyzing...' : 'Analyze Now'}
                  </button>
                  <button 
                    className="change-button"
                    onClick={triggerFileInput}
                  >
                    Change Image
                  </button>
                </div>
                {analysisResult && (
                  <div className="analysis-result">
                    <h3>Analysis Result</h3>
                    <p><strong>Detected Condition:</strong> {analysisResult.prediction}</p>
                    <p><strong>Confidence:</strong> {(analysisResult.confidence * 100).toFixed(2)}%</p>
                  </div>
                )}
                {error && (
                  <div className="error-message">
                    <p><strong>Error:</strong> {error}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {showLoginAlert && (
        <div className="login-alert-overlay">
          <div className="login-alert">
            <h3>Login Required</h3>
            <p>You need to login to analyze your skin image.</p>
            <div className="alert-buttons">
              <button 
                className="login-redirect-button"
                onClick={handleLoginRedirect}
              >
                Login Now
              </button>
              <button 
                className="cancel-button"
                onClick={() => setShowLoginAlert(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <FloatingChatbot/>
      <Footer />
    </div>
  );
};

export default Home;





// import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../firebase/auth";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Footer from "./Footer";
// import FloatingChatbot from "./FloatingChatbot";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./Home.css";

// const Home = () => {
//   const [file, setFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [isUploaded, setIsUploaded] = useState(false);
//   const [showLoginAlert, setShowLoginAlert] = useState(false);
//   const [analysisData, setAnalysisData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const fileInputRef = useRef(null);
//   const navigate = useNavigate();
//   const { currentUser } = useAuth();

//   const getSeverityLevel = (confidence) => {
//     if (confidence >= 90) return 'Severe';
//     if (confidence >= 70) return 'Moderate';
//     return 'Mild';
//   };

//   const fetchDiseaseInfo = async (diseaseName) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/diseases/${diseaseName}`);
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || 'Failed to fetch disease info');
//       return data;
//     } catch (error) {
//       console.error('Error fetching disease info:', error);
//       return null;
//     }
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const uploadedFile = event.dataTransfer.files[0];
//     handleFile(uploadedFile);
//   };

//   const handleFileChange = (event) => {
//     const uploadedFile = event.target.files[0];
//     handleFile(uploadedFile);
//   };

//   const handleFile = (uploadedFile) => {
//     if (!uploadedFile) return;
    
//     if (!uploadedFile.type.match('image.*')) {
//       setError('Please upload an image file (JPEG, PNG, JPG)');
//       return;
//     }

//     if (uploadedFile.size > 10 * 1024 * 1024) {
//       setError('File size must be less than 10MB');
//       return;
//     }

//     setFile(uploadedFile);
//     setPreviewUrl(URL.createObjectURL(uploadedFile));
//     setIsUploaded(true);
//     setAnalysisData(null);
//     setError(null);
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current.click();
//   };

//   const handleAnalyze = async () => {
//   if (!currentUser) {
//     setShowLoginAlert(true);
//     return;
//   }

//   if (!file) {
//     setError('Please upload an image first');
//     return;
//   }

//   setIsLoading(true);
//   setError(null);

//   try {
//     const formData = new FormData();
//     formData.append('image', file);

//     // 1. First call your analysis endpoint
//     const analysisResponse = await fetch('http://localhost:5000/api/analyze', {
//       method: 'POST',
//       body: formData
//     });

//     if (!analysisResponse.ok) {
//       throw new Error(`Analysis failed: ${analysisResponse.statusText}`);
//     }

//     const analysisResult = await analysisResponse.json();

//     // 2. Then fetch disease info with better error handling
//     const diseaseInfoResponse = await fetch(
//       `http://localhost:5000/api/diseases/${encodeURIComponent(analysisResult.prediction)}`
//     );

//     if (!diseaseInfoResponse.ok) {
//       const errorData = await diseaseInfoResponse.json();
      
//       // Handle suggestions if available
//       if (errorData.suggestions) {
//         throw new Error(`Primary disease not found. Did you mean: ${errorData.suggestions.join(', ')}`);
//       }
//       throw new Error(errorData.error || 'Disease information not found');
//     }

//     const diseaseInfo = await diseaseInfoResponse.json();

//     const completeAnalysis = {
//       ...analysisResult,
//       description: diseaseInfo.description,
//       remedies: diseaseInfo.remedies,
//       dietPlan: diseaseInfo.dietPlan,
//       severity: getSeverityLevel(analysisResult.confidence)
//     };

//     // Prepare for navigation
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       navigate('/analysis', {
//         state: {
//           imageData: reader.result,
//           analysisResult: completeAnalysis,
//           fileName: file.name,
//           fileType: file.type
//         },
//         replace: true // Prevent going back to empty state
//       });
//     };

//   } catch (err) {
//     setError(err.message || 'Analysis error occurred');
//     console.error('Analysis error:', err);
    
//     // Retry logic for flaky connections
//     if (err.message.includes('fetch') || err.message.includes('network')) {
//       setError('Network error. Please check your connection and try again.');
//     }
//   } finally {
//     setIsLoading(false);
//   }
// };

//   const handleLoginRedirect = () => {
//     if (file) {
//       const fileData = {
//         url: previewUrl,
//         name: file.name,
//         type: file.type
//       };
//       sessionStorage.setItem('pendingAnalysis', JSON.stringify(fileData));
//     }
//     navigate('/login', { state: { from: { pathname: '/home' } } });
//   };

//   useEffect(() => {
//     const pendingAnalysis = sessionStorage.getItem('pendingAnalysis');
//     if (pendingAnalysis) {
//       const { url, name, type } = JSON.parse(pendingAnalysis);
//       fetch(url)
//         .then(res => res.blob())
//         .then(blob => {
//           const file = new File([blob], name, { type });
//           setFile(file);
//           setPreviewUrl(url);
//           setIsUploaded(true);
//         });
//       sessionStorage.removeItem('pendingAnalysis');
//     }
//   }, []);

//   useEffect(() => {
//     return () => {
//       if (previewUrl) URL.revokeObjectURL(previewUrl);
//     };
//   }, [previewUrl]);

//   return (
//     <div className="home-page">
//       {/* ... (keep your existing hero slider and other sections) ... */}
      
//       <div className="container">
//         <div className="instructions">
//           {/* ... (keep your existing instructions) ... */}
//         </div>
        
//         <div className="upload-container">
//           <input
//             type="file"
//             id="fileUpload"
//             accept="image/jpeg, image/png, image/jpg"
//             onChange={handleFileChange}
//             ref={fileInputRef}
//             hidden
//           />
          
//           {!isUploaded ? (
//             <div
//               className="upload-box"
//               onDrop={handleDrop}
//               onDragOver={(e) => e.preventDefault()}
//               onClick={triggerFileInput}
//             >
//               <p className="upload-text">
//                 <strong>Drag and drop an Image</strong> <br />
//                 or <span className="browse-text">browse to upload</span>
//               </p>
//               <label htmlFor="fileUpload" className="upload-button">
//                 Upload your photo
//               </label>
//               <p className="file-info">
//                 File must be JPEG, JPG, or PNG and up to 10 MB
//               </p>
//             </div>
//           ) : (
//             <div className="preview-container">
//               <div className="image-preview">
//                 <img src={previewUrl} alt="Uploaded preview" />
//                 <div className="file-details">
//                   <p>{file.name}</p>
//                   <p>{(file.size / 1024).toFixed(2)} KB</p>
//                 </div>
//               </div>
//               <div className="preview-actions">
//                 <button 
//                   className="analyze-button"
//                   onClick={handleAnalyze}
//                   disabled={isLoading}
//                 >
//                   {isLoading ? 'Analyzing...' : 'Analyze Now'}
//                 </button>
//                 <button 
//                   className="change-button"
//                   onClick={triggerFileInput}
//                 >
//                   Change Image
//                 </button>
//               </div>
              
//               {analysisData && (
//                 <div className="analysis-result">
//                   <h3>Analysis Result</h3>
//                   <p><strong>Condition:</strong> {analysisData.prediction}</p>
//                   <p><strong>Confidence:</strong> {analysisData.confidence}%</p>
//                   <p><strong>Severity:</strong> {analysisData.severity}</p>
//                   <p className="description">{analysisData.description}</p>
                  
//                   <div className="recommendations">
//                     <h4>Remedies:</h4>
//                     <ul>
//                       {analysisData.remedies.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
                    
//                     <h4>Diet Plan:</h4>
//                     <ul>
//                       {analysisData.dietPlan.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               )}
              
//               {error && (
//                 <div className="error-message">
//                   <p><strong>Error:</strong> {error}</p>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {showLoginAlert && (
//         <div className="login-alert-overlay">
//           <div className="login-alert">
//             <h3>Login Required</h3>
//             <p>You need to login to analyze your skin image.</p>
//             <div className="alert-buttons">
//               <button 
//                 className="login-redirect-button"
//                 onClick={handleLoginRedirect}
//               >
//                 Login Now
//               </button>
//               <button 
//                 className="cancel-button"
//                 onClick={() => setShowLoginAlert(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <FloatingChatbot/>
//       <Footer />
//     </div>
//   );
// };

// export default Home;