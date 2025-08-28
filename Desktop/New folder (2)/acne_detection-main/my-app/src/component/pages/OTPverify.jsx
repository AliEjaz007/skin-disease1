import React, { useState, useRef, useEffect } from 'react';
import './OTPverify.css';

const OTPVerify = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef([]);
  
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    let timer;
    if (isResendDisabled && resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    } else if (resendTimer === 0) {
      setIsResendDisabled(false);
      setResendTimer(30);
    }
    return () => clearTimeout(timer);
  }, [isResendDisabled, resendTimer]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    const sanitizedText = text.replace(/[^0-9]/g, '');
    newOtp[index] = sanitizedText;
    setOtp(newOtp);
    
    if (sanitizedText.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setIsResendDisabled(true);
    alert('OTP has been resent to your email');
  };

  const handleConfirm = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 4) {
      alert('OTP verified successfully!');
    } else {
      alert('Please enter a valid 4-digit OTP.');
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel OTP verification?')) {
      alert('OTP verification cancelled.');
    }
  };

  const isConfirmDisabled = otp.join('').length !== 4;

  return (
    <div className="otp-page">
      <div className="otp-container">
        <div className="otp-box">
          <div className="otp-header">
            <h2>Verify Your Identity</h2>
            <p>We've sent a 4-digit OTP to your email. Enter the code below</p>
          </div>

          <div className="otp-image-container">
            <img 
              src="/images/pin.png" 
              alt="Security PIN" 
              className="otp-image"
            />
          </div>

          <div className="otp-form">
            <label>Enter OTP</label>
            <div className="otp-inputs">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>

            <button 
              className={`resend-btn ${isResendDisabled ? 'disabled' : ''}`}
              onClick={handleResend}
              disabled={isResendDisabled}
            >
              {isResendDisabled ? `Resend OTP in ${resendTimer}s` : 'Resend OTP'}
            </button>

            <div className="otp-actions">
              <button 
                className="confirm-btn"
                onClick={handleConfirm}
                disabled={isConfirmDisabled}
              >
                Confirm
              </button>
              <button 
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerify;