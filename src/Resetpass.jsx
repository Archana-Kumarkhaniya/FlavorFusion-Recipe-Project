import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Resetpass = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleResetPass = () => {
    if (!newPassword || !confirmPassword) {
      alert("Please fill all fields!");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      storedUser.password = newPassword;
      localStorage.setItem("user", JSON.stringify(storedUser));
      alert("Password reset successfully!");
      navigate('/login');
    } else {
      alert("No user data found. Please sign up first.");
      navigate("/signup");
    }

    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50 p-4">
      <div
        className={`w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl dancing font-bold text-blue-900 mb-6 text-center">
          Reset Password
        </h2>
        <p className="text-gray-600 arvo text-sm sm:text-base mb-8 text-center">
          Enter a new password and confirm it to reset your account password
        </p>

        <div className="flex flex-col space-y-6 items-center">
          {/* New Password Input */}
          <div className="flex flex-col w-full">
            <label className="text-gray-700 arvo mb-2 text-sm sm:text-base text-left pl-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 h-12 sm:h-12 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition shadow-md hover:shadow-lg text-sm sm:text-base text-center"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col w-full">
            <label className="text-gray-700 arvo mb-2 text-sm sm:text-base text-left pl-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 h-12 sm:h-12 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition shadow-md hover:shadow-lg text-sm sm:text-base text-center"
            />
          </div>

          {/* Reset Button */}
          <button
            onClick={handleResetPass}
            className="w-full px-4 sm:px-5 py-3 sm:py-4 h-14 sm:h-14 bg-blue-800 text-white rounded-2xl hover:bg-blue-900 transition transform hover:scale-105 bitter shadow-md text-sm sm:text-base"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resetpass;
