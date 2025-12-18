import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChefHat, ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#faf8f6] text-[#4d4d4d] font-[Arvo]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row items-center lg:justify-between gap-10">

        {/* ===== LOGO + CATEGORIES ===== */}
        <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-8">
            <ChefHat className="h-8 w-8 text-indigo-800" />
            <span className="dancing tracking-wide text-4xl font-bold text-indigo-800">
              FlavorFusion
            </span>
          </div>

          {/* Categories */}
          <div className="w-full">
            {/* Mobile Accordion */}
            <div className="sm:hidden flex flex-col gap-3">
              {/* Explore */}
              <div>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("explore")}>
                  <h3 className="text-lg font-semibold text-[#76485e] domine">Explore</h3>
                  {openSection === "explore" ? (
                    <ChevronUp className="w-5 h-5 text-[#76485e]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#76485e]" />
                  )}
                </div>
                <div className={`${openSection === "explore" ? "block" : "hidden"} flex flex-col gap-2 text-base arvo mt-2`}>
                  <Link to="/" className="hover:text-[#e7b24c] transition-colors">Home</Link>
                  <Link to="/recipes" className="hover:text-[#e7b24c] transition-colors">Recipes</Link>
                  <Link to="/favourites" className="hover:text-[#e7b24c] transition-colors">Favourites</Link>
                  <Link to="/about" className="hover:text-[#e7b24c] transition-colors">About</Link>
                </div>
              </div>

              {/* Food & Recipes */}
              <div>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("food")}>
                  <h3 className="text-lg font-semibold text-[#76485e] domine">Food & Recipes</h3>
                  {openSection === "food" ? (
                    <ChevronUp className="w-5 h-5 text-[#76485e]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#76485e]" />
                  )}
                </div>
                <div className={`${openSection === "food" ? "block" : "hidden"} flex flex-col gap-2 text-base arvo mt-2`}>
                  <Link to="/recipes" state={{ category: "Italian" }} className="hover:text-[#e7b24c]">Italian</Link>
                  <Link to="/recipes" state={{ category: "Indian" }} className="hover:text-[#e7b24c]">Indian</Link>
                  <Link to="/recipes" state={{ category: "Desserts" }} className="hover:text-[#e7b24c]">Desserts</Link>
                  <Link to="/recipes" state={{ category: "Healthy" }} className="hover:text-[#e7b24c]">Healthy</Link>
                  <Link to="/recipes" state={{ category: "Breakfast" }} className="hover:text-[#e7b24c]">Breakfast</Link>
                </div>
              </div>
            </div>

            {/* Desktop/Tablet Categories (original flex layout) */}
            <div className="hidden sm:flex flex-row justify-start gap-60 lg:gap-40 mt-0 lg:mt-0">
              {/* Explore Section */}
              <div>
                <h3 className="text-lg font-semibold text-[#76485e] mb-3 domine">Explore</h3>
                <div className="flex flex-col gap-2 text-base arvo">
                  <Link to="/" className="hover:text-[#e7b24c] transition-colors">Home</Link>
                  <Link to="/recipes" className="hover:text-[#e7b24c] transition-colors">Recipes</Link>
                  <Link to="/favourites" className="hover:text-[#e7b24c] transition-colors">Favourites</Link>
                  <Link to="/about" className="hover:text-[#e7b24c] transition-colors">About</Link>
                </div>
              </div>

              {/* Food & Recipes Section */}
              <div>
                <h3 className="text-lg font-semibold text-[#76485e] mb-3 domine">Food & Recipes</h3>
                <div className="flex flex-col gap-2 text-base arvo">
                  <Link to="/recipes" state={{ category: "Italian" }} className="hover:text-[#e7b24c]">Italian</Link>
                  <Link to="/recipes" state={{ category: "Indian" }} className="hover:text-[#e7b24c]">Indian</Link>
                  <Link to="/recipes" state={{ category: "Desserts" }} className="hover:text-[#e7b24c]">Desserts</Link>
                  <Link to="/recipes" state={{ category: "Healthy" }} className="hover:text-[#e7b24c]">Healthy</Link>
                  <Link to="/recipes" state={{ category: "Breakfast" }} className="hover:text-[#e7b24c]">Breakfast</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SIGN-UP FORM ===== */}
        <div className="w-full sm:w-[95%] lg:w-1/2 bg-[#76485e] text-white p-6 sm:p-8 rounded-md shadow-md lg:mt-[70px]">
          <h2 className="text-3xl font-[cursive] mb-1 dancing">Sign Up</h2>
          <p className="text-lg font-semibold mb-4 bitter">
            FOR EMAIL UPDATES{" "}
            <span className="block text-sm font-normal text-[#e5d7df]">
              Get a Free eCookbook with our top 25 recipes.
            </span>
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-full sm:w-1/2 px-4 py-2 sm:py-3 rounded-sm bg-white text-gray-800 border border-gray-200 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-1/2 px-4 py-2 sm:py-3 rounded-sm bg-white text-gray-800 border border-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#e7b24c] text-white font-bold px-8 py-2 sm:py-3 rounded-sm hover:bg-[#d8a13c] transition domine"
            >
              GO
            </button>
          </form>
        </div>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="text-center border-t border-gray-200 py-3 lg:py-4 text-sm text-gray-600 arvo">
        © {new Date().getFullYear()} FlavorFusion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
