import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Otppage = () => {
  const [otp, setOtp] = useState("");
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const verifyOtp = () => {
    const storedOtp = localStorage.getItem("otp");

    if (!otp) {
      alert("Please enter OTP!");
      return;
    }

    if (otp === storedOtp) {
      navigate('/resetpass');
    } else {
      alert("Invalid OTP!");
    }

    setOtp("");
  };

  const resendOTP = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem("otp", newOtp);
    alert(`Your OTP is ${newOtp}`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-teal-50 via-teal-100 to-teal-50 p-4">
      <div
        className={`w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl dancing font-bold text-teal-700 mb-6 text-center">
          OTP Verification
        </h2>
        <p className="text-gray-600 arvo text-sm sm:text-base mb-8 text-center">
          Enter the OTP sent to your registered mobile number
        </p>

        <div className="flex flex-col space-y-6 items-center">
          {/* OTP Input */}
          <div className="flex flex-col w-full">
            <label className="text-gray-700 arvo mb-2 text-sm sm:text-base text-left pl-1">
              OTP
            </label>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 h-12 sm:h-12 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300 transition shadow-md hover:shadow-lg text-sm sm:text-base text-center"
            />
          </div>

          {/* Verify Button */}
          <button
            onClick={verifyOtp}
            className="w-full px-4 sm:px-5 py-3 sm:py-4 h-13 sm:h-14 bg-teal-500 text-white rounded-2xl hover:bg-teal-600 transition transform hover:scale-105 bitter shadow-md text-sm sm:text-base"
          >
            Verify OTP
          </button>

          {/* Resend OTP Button */}
          <button
            onClick={resendOTP}
            className="w-full px-4 sm:px-5 py-3 sm:py-4 h-13 sm:h-14 bg-gray-200 text-gray-700 rounded-2xl hover:bg-gray-300 transition transform hover:scale-105 arvo shadow-md text-sm sm:text-base"
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otppage;
