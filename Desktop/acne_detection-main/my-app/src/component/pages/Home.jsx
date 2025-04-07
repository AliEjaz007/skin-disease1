import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";

const Home = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    setFile(uploadedFile);
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div>
      {/* Swiper Slider Section */}
      <div className="home-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="background-overlay">
              <div className="content">
                <h1>
                  AI Meets Skincare <br /> Say Hello to Flawless Skin!
                </h1>
                <p>
                  Scan, analyze and treat your acne with smart AI
                  recommendations & expert-backed remedies.
                </p>
              </div>
              <div className="animated-character">
                <img
                  src="/images/Adobe Express - file (1).png"
                  alt="Skincare"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="background-overlay backs">
              <div className="content">
                <h1>
                  Struggling with Acne? <br /> Let AI Guide You!
                </h1>
                <p>
                  Upload a photo, detect acne, and get natural remedies &
                  skincare tips tailored just for you.
                </p>
              </div>
              <div className="animated-character">
                <img src="/images/2.png" alt="Acne AI Guide" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="background-overlay">
              <div className="content">
                <h1>
                  Heal Your Skin, <br /> Naturally!
                </h1>
                <p>
                  AI-powered acne detection meets herbal remedies & personalized
                  diet plans all in one place.
                </p>
              </div>
              <div className="animated-character">
                <img src="/images/Adobe Express - file.png" alt="Skincare" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Upload Section */}
      <div>
        <div className="analysiscontainer">
          <div className="backgroundoverlay">
            <div className="content">
              <h1>
                One Picture, One Scan, <br /> One Step Closer to Clear Skin!
              </h1>
              <p>
                Upload your image & let AI reveal the best acne treatment
                tailored just for you!
              </p>
            </div>
            <div className="animatedcharacter">
              <img
                src="/images/D 5.png"
                alt="Acne AI Guide"
                className="character-image"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="instructions">
            <div className="upload-info">
              <h3>Upload Your Image - Let AI Analyze Your Skin!</h3>
              <p>
                Struggling with acne? Not sure what skincare routine is right
                for you?
                <br />
                Our AI-powered acne detection system makes it easy to understand
                <br />
                your skin condition and get the best remedies tailored just for
                you!
              </p>
            </div>
            <h2 className="instructions-title">🔍 How It Works?</h2>
            <ul className="instructions-list">
              <li>Click on the "Upload Image" button</li>
              <li>
                Select a clear photo of your face (Front-facing, good lighting)
              </li>
              <li>AI scans your skin & detects acne severity</li>
              <li>
                Get instant results with personalized herbal remedies, skincare
                tips, and diet plans
              </li>
            </ul>
          </div>
          <div className="upload-container">
            <div
              className="upload-box"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <p className="upload-text">
                <strong>Drag and drop an Image</strong> <br />
                or <span className="browse-text">browse to upload</span>
              </p>
              <input
                type="file"
                id="fileUpload"
                accept="image/jpeg, image/png, image/jpg"
                onChange={handleFileChange}
                hidden
              />
              <label htmlFor="fileUpload" className="upload-button">
                Upload your photo
              </label>
              <p className="file-info">
                File must be JPEG, JPG, or PNG and up to 10 MB
              </p>
            </div>
            {file && <button className="uploaded-button">Uploaded</button>}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;
