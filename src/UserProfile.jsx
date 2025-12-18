import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, Coffee, ForkKnife } from 'lucide-react';

const UserProfile = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-yellow-50 relative overflow-hidden p-4">
      {/* Floating background food emojis */}
      <div className="absolute top-[5%] left-[5%] text-[clamp(2rem,10vw,5rem)] animate-bounce opacity-30 z-0">🍕</div>
      <div className="absolute top-[5%] right-[5%] text-[clamp(2rem,10vw,5rem)] animate-bounce opacity-25 z-0">🍔</div>
      <div className="absolute top-[40%] left-[5%] text-[clamp(2rem,10vw,5rem)] animate-bounce opacity-20 z-0">🍦</div>
      <div className="absolute top-[40%] right-[5%] text-[clamp(2rem,10vw,5rem)] animate-bounce opacity-30 z-0">🥗</div>
      <div className="absolute bottom-[5%] left-[15%] text-[clamp(2rem,10vw,5rem)] animate-bounce opacity-25 z-0">🍩</div>
      <div className="absolute bottom-[5%] right-[15%] text-[clamp(2rem,10vw,5rem)] animate-bounce opacity-30 z-0">🍎</div>
      <div className="absolute top-[25%] left-[45%] text-[clamp(2rem,10vw,5rem)] animate-bounce opacity-20 z-0">🍫</div>
      <div className="absolute bottom-[25%] right-[40%] text-[clamp(2rem,10vw,5rem)] animate-bounce opacity-25 z-0">🍭</div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-md text-center transition-transform hover:scale-105 relative z-10">
        {/* Cartoon Chef Image */}
        <img
          src="https://png.pngtree.com/png-clipart/20250111/original/pngtree-a-chef-holding-hamburger-and-fries-png-image_20111871.png"
          alt="Master Chef"
          className="mx-auto w-32 sm:w-40 mb-4"
        />

        {/* Welcome */}
        <h2 className="text-3xl sm:text-4xl dancing text-yellow-700 font-bold mb-4">
          Hello, {user.name}!
        </h2>

        {/* Mobile */}
        <p className="text-gray-700 arvo mb-6 text-lg">
          <b>Mobile:</b> {user.mobile}
        </p>

        {/* Fun animated icons inside the card */}
        <div className="flex justify-center gap-6 mb-6 animate-pulse">
          <ForkKnife className="w-8 h-8 text-red-400" />
          <ChefHat className="w-8 h-8 text-yellow-500" />
          <Coffee className="w-8 h-8 text-green-400" />
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-yellow-600 text-white px-6 py-3 rounded-2xl hover:bg-yellow-700 transition transform hover:scale-105 shadow-md w-full sm:w-auto font-bold text-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
