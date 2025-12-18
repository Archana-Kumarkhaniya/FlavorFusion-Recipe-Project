import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
  const [mobile, setMobile] = useState("");
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleForgot = () => {
    if (!mobile) {
      alert('Please enter your mobile number!');
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && mobile === storedUser.mobile) {
      const otp = Math.floor(1000 + Math.random() * 9000);
      localStorage.setItem("otp", otp);
      alert(`Your OTP is ${otp}`);
      navigate('/otppage');
    } else {
      alert("No account found with this mobile number!");
    }
    setMobile("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 p-4">
      <div
        className={`w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-700 
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        h-[50vh] sm:h-auto flex flex-col justify-center`}
      >
        <h2 className="text-3xl sm:text-4xl dancing font-bold text-blue-700 mb-6 text-center">
          Forgot Password
        </h2>
        <p className="text-gray-600 arvo text-sm sm:text-base mb-8 text-center">
          Enter your registered mobile number to receive OTP
        </p>

        <div className="flex flex-col space-y-6 items-center">
          {/* Mobile Input */}
          <div className="flex flex-col w-full">
            <label className="text-gray-700 arvo mb-2 text-sm sm:text-base text-left pl-1">
              Mobile Number
            </label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 h-12 sm:h-12 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition shadow-md hover:shadow-lg text-sm sm:text-base text-center"
            />
          </div>

          {/* Get OTP Button */}
          <button
            onClick={handleForgot}
            className="w-full px-4 sm:px-5 py-3 sm:py-4 h-13 sm:h-14 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition transform hover:scale-105 bitter shadow-md text-sm sm:text-base"
          >
            Get OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
