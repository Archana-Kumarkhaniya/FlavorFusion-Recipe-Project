import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [animate, setAnimate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleLogIn = () => {
    if (!mobile || !password) {
      alert("Please fill all fields!");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      alert("User not found! Please sign up first!");
      navigate("/signup");
      return;
    }

    if (mobile === storedUser.mobile && password === storedUser.password) {
      alert(`Welcome back ${storedUser.name}!`);
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      setUser(storedUser);
      navigate('/userprofile');
    } else {
      alert("Invalid mobile number or password!");
    }

    setMobile("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-purple-50">
      {/* Left: Login Form */}
      <div
        className={`flex flex-col justify-center items-center md:w-1/2 p-6 sm:p-8 md:p-10 bg-white shadow-lg md:min-h-screen transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl dancing text-purple-600 mb-8 sm:mb-10">Welcome to FlavorFusion</h2>
        <div className="w-full max-w-md space-y-4 sm:space-y-6">
          {/* Mobile Number */}
          <div className="flex flex-col">
            <label className="text-gray-700 arvo mb-1 sm:mb-2 text-sm sm:text-base">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
              className="w-full p-3 sm:p-4 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm hover:shadow-md text-sm sm:text-base"
            />
          </div>
          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 arvo mb-1 sm:mb-2 text-sm sm:text-base">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full p-3 sm:p-4 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm hover:shadow-md text-sm sm:text-base"
            />
          </div>
          {/* Forgot password */}
          <div className="flex justify-end text-sm arvo text-purple-500">
            <Link to='/forgot' className="hover:underline hover:text-purple-600">Forgot password?</Link>
          </div>
          {/* Log In Button */}
          <button
            onClick={handleLogIn}
            className="w-full bg-[#863186] text-white p-4 sm:p-5 rounded-xl hover:bg-purple-600 transition transform hover:scale-105 bitter shadow-md text-sm sm:text-base"
          >
            Log In
          </button>
          {/* Sign Up */}
          <h4 className="text-center text-gray-600 arvo text-sm sm:text-base">
            If you have no account? <Link to='/signup' className="text-purple-500 font-semibold hover:underline">Sign Up</Link>
          </h4>
        </div>
      </div>

      {/* Right: Food Image */}
      <div
        className={`md:w-1/2 relative md:min-h-screen transition-all duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=870&q=80"
          alt="Delicious Food"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
