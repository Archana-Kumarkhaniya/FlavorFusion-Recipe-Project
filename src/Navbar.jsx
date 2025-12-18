import React, { useState } from "react";
import { Search, ChefHat } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

const Navbar = ({ user, searchQuery, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/recipes?search=${searchQuery}`);
    } else {
      navigate("/recipes");
    }
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">

          {/* Logo + Brand */}
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-indigo-800" />
            <span className="dancing tracking-wide text-3xl lg:text-4xl font-bold text-indigo-800">
              FlavorFusion
            </span>
          </div>

          {/* Search bar (center - hidden on mobile) */}
          <div className="hidden md:flex flex-1 justify-center px-4 relative">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full border border-gray-300 rounded-full pl-10 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <button
                className="absolute right-1 top-1.5 h-8 w-8 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition"
                onClick={handleSearch}
              >
                <Search size={16} />
              </button>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 arvo text-gray-700 font-medium">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <Link to="/recipes" className="hover:text-indigo-600">Recipes</Link>
            <Link to="/about" className="hover:text-indigo-600">About</Link>
            {!user ? (
              <Link to="/login" className="hover:text-indigo-600">Log In</Link>
            ) : (
              <Link to="/userprofile" className="hover:text-indigo-600">Profile</Link>
            )}
          </div>

          {/* Animated Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center"
            >
              <span
                className={`absolute block h-[2px] w-6 bg-gray-800 rounded transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute block h-[2px] w-6 bg-gray-800 rounded transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute block h-[2px] w-6 bg-gray-800 rounded transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slideDown">
          <div className="px-4 pt-4 pb-6 space-y-4 font-arvo text-gray-700 font-medium">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full border border-gray-300 rounded-full pl-10 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <button
                className="absolute right-1 top-1.5 h-8 w-8 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition"
                onClick={handleSearch}
              >
                <Search size={16} />
              </button>
            </div>

            {/* Mobile Links */}
            <Link to="/" onClick={handleLinkClick} className="block hover:text-indigo-600">Home</Link>
            <Link to="/recipes" onClick={handleLinkClick} className="block hover:text-indigo-600">Recipes</Link>
            <Link to="/about" onClick={handleLinkClick} className="block hover:text-indigo-600">About</Link>
            {!user ? (
              <Link to="/login" onClick={handleLinkClick} className="block hover:text-indigo-600">Login</Link>
            ) : (
              <Link to="/userprofile" onClick={handleLinkClick} className="block hover:text-indigo-600">Profile</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
