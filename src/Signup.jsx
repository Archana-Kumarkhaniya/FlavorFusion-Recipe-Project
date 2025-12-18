import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [animate, setAnimate] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setAnimate(true);
    }, []);

    const handleSignup = () => {
        if (!name || !mobile || !password) {
            alert("Please fill all fields!");
            return;
        }

        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobile)) {
            alert('Mobile number must be 10 digits and contain only numbers!');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long!');
            return;
        }

        const user = { name, mobile, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Signup Successfully!");
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-pink-50">
            {/* Left: Signup Form */}
            <div
                className={`flex flex-col justify-center items-center md:w-1/2 p-6 sm:p-8 md:p-10 bg-white shadow-lg md:min-h-screen transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl dancing text-pink-500 mb-8 sm:mb-10">Create Account</h2>
                <div className="w-full max-w-md space-y-4 sm:space-y-6">
                    {/* Name */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 arvo mb-1 sm:mb-2 text-sm sm:text-base">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="w-full p-3 sm:p-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition shadow-sm hover:shadow-md bg-pink-50 text-sm sm:text-base"
                        />
                    </div>
                    {/* Mobile Number */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 arvo mb-1 sm:mb-2 text-sm sm:text-base">Mobile Number</label>
                        <input
                            type="text"
                            placeholder="Enter your mobile number"
                            onChange={(e) => setMobile(e.target.value)}
                            value={mobile}
                            className="w-full p-3 sm:p-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition shadow-sm hover:shadow-md bg-pink-50 text-sm sm:text-base"
                        />
                    </div>
                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 arvo mb-1 sm:mb-2 text-sm sm:text-base">Password</label>
                        <input
                            type="password"
                            placeholder="At least 6 characters"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="w-full p-3 sm:p-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition shadow-sm hover:shadow-md bg-pink-50 text-sm sm:text-base"
                        />
                    </div>
                    {/* Signup Button */}
                    <button
                        onClick={handleSignup}
                        className="w-full bg-pink-400 text-white p-4 sm:p-5 rounded-xl hover:bg-pink-500 transition transform hover:scale-105 bitter shadow-md text-sm sm:text-base"
                    >
                        Continue
                    </button>
                    {/* Login Link */}
                    <h4 className="text-center text-gray-600 arvo text-sm sm:text-base">
                        Already have an account? <Link to='/login' className="text-pink-400 font-semibold hover:underline">Login</Link>
                    </h4>
                </div>
            </div>

            {/* Right: Food Image */}
            <div
                className={`md:w-1/2 relative md:min-h-screen transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=870&q=80" alt="Delicious Food"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Signup;
