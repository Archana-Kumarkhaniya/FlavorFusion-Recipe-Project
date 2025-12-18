import React, { useEffect, useState } from "react";
import recipes from "./data";
import RecipeCard from "./Recipecard";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


const RecipesPage = ({ searchQuery }) => {


  const categories = ["All", "Italian", "Indian", "Breakfast", "Desserts", "Healthy"];

  let [selectedCategory, setSelectedCategory] = useState("All");
  let [selectedTime, setSelectedTime] = useState("");
  let [selectedDiet, setSelectedDiet] = useState("");
  let [selectedReview, setSelectedReview] = useState("");
  let [visibleCount, setVisibleCount] = useState(9);

  // Mobile filter state
  let [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  const navigate = useNavigate();

  let filteredCategory =
    selectedCategory === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.category === selectedCategory);

  if (selectedTime) {
    filteredCategory = filteredCategory.filter((recipe) => {
      let time = parseInt(recipe.timing);

      if (selectedTime === "Under 15 mins" && time <= 15) return true;
      if (selectedTime === "Under 30 mins" && time <= 30) return true;
      if (selectedTime === "30 min+" && time >= 30) return true;

      return false;
    });
  }

  if (selectedDiet) {
    filteredCategory = filteredCategory.filter(
      (recipe) => recipe.type === selectedDiet
    );
  }

  if (selectedReview) {
    filteredCategory = filteredCategory.filter((recipe) => {
      let starReview = parseFloat(recipe.Starreview);
      if (selectedReview === "4star" && starReview >= 4) return true;
      return false;
    });
  }

  const normalize = (str) => str?.toLowerCase().replace(/[\s-]/g, "");

  if (searchQuery) {
    const query = normalize(searchQuery);
    filteredCategory = filteredCategory.filter((recipe) =>
      normalize(recipe.title).includes(query) ||
      normalize(recipe.category).includes(query) ||
      normalize(recipe.type) === query ||
      recipe.ingredients?.some((ing) => normalize(ing).includes(query))
    );
  }

  let visibleRecipes = filteredCategory.slice(0, visibleCount);

  let handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  useEffect(() => {
    setVisibleCount(9);
  }, [selectedCategory, selectedDiet, selectedTime, selectedReview, searchQuery]);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">

      {/* ========== Sidebar Filter Panel ========== */}
      <aside className="hidden lg:block w-72 bg-white shadow-md border-r p-6 sticky top-0 h-screen flex-shrink-0"
        data-aos="fade-right"

      >
        <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>

        {/* Cooking Time */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Cooking Time</h3>
          <div className="space-y-2 text-gray-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="time"
                className="accent-purple-600"
                onChange={() => setSelectedTime("Under 15 mins")}
                checked={selectedTime === "Under 15 mins"}
              />
              Under 15 mins
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="time"
                className="accent-purple-600"
                onChange={() => setSelectedTime("Under 30 mins")}
                checked={selectedTime === "Under 30 mins"}
              />
              Under 30 mins
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="time"
                className="accent-purple-600"
                onChange={() => setSelectedTime("30 min+")}
                checked={selectedTime === "30 min+"}
              />
              30 min+
            </label>
          </div>
        </div>

        {/* Diet Preference */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Diet</h3>
          <div className="space-y-2 text-gray-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="diet"
                className="peer hidden"
                onChange={() => setSelectedDiet("veg")}
                checked={selectedDiet === "veg"}
              />
              <span
                className="w-4 h-4 border-2 border-purple-600 rounded-sm flex items-center justify-center
                 peer-checked:bg-purple-600 peer-checked:text-white text-transparent text-xs font-bold"
              >
                ✓
              </span>
              Vegetarian
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="diet"
                className="peer hidden"
                onChange={() => setSelectedDiet("non-veg")}
                checked={selectedDiet === "non-veg"}
              />
              <span
                className="w-4 h-4 border-2 border-purple-600 rounded-sm flex items-center justify-center
                 peer-checked:bg-purple-600 peer-checked:text-white text-transparent text-xs font-bold"
              >
                ✓
              </span>
              Non-Vegetarian
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="diet"
                className="peer hidden"
                onChange={() => setSelectedDiet("vegan")}
                checked={selectedDiet === "vegan"}
              />
              <span
                className="w-4 h-4 border-2 border-purple-600 rounded-sm flex items-center justify-center
                 peer-checked:bg-purple-600 peer-checked:text-white text-transparent text-xs font-bold"
              >
                ✓
              </span>
              Vegan
            </label>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Reviews</h3>
          <div className="space-y-2 text-gray-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="reviews"
                className="accent-purple-600"
                onChange={() => setSelectedReview("4star")}
                checked={selectedReview === "4star"}
              />
              4★ & above
            </label>
          </div>
        </div>

        {/* Clear All Filters */}
        <button
          className="w-full mt-6 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition"
          onClick={() => {
            setSelectedCategory("All");
            setSelectedDiet("");
            setSelectedTime("");
            setSelectedReview("");
          }}
        >
          Clear All Filters
        </button>
      </aside>

      {/* ========== Main Content ========== */}
      <div className="flex-1 flex flex-col">

        {/* Mobile Filter Panel */}
        <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300
          ${mobileFilterOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
          data-aos="fade-right"

        >

          <div className="flex justify-end p-4">
            <button onClick={() => setMobileFilterOpen(false)} className="text-gray-600 text-xl font-bold">
              ×
            </button>
          </div>

          <div className="p-6 overflow-y-auto h-full">
            {/* Copy the same sidebar content here */}
            <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>

            {/* Cooking Time */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Cooking Time</h3>
              <div className="space-y-2 text-gray-600">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="timeMobile"
                    className="accent-purple-600"
                    onChange={() => setSelectedTime("Under 15 mins")}
                    checked={selectedTime === "Under 15 mins"}
                  />
                  Under 15 mins
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="timeMobile"
                    className="accent-purple-600"
                    onChange={() => setSelectedTime("Under 30 mins")}
                    checked={selectedTime === "Under 30 mins"}
                  />
                  Under 30 mins
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="timeMobile"
                    className="accent-purple-600"
                    onChange={() => setSelectedTime("30 min+")}
                    checked={selectedTime === "30 min+"}
                  />
                  30 min+
                </label>
              </div>
            </div>

            {/* Diet Preference */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Diet</h3>
              <div className="space-y-2 text-gray-600">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="dietMobile"
                    className="peer hidden"
                    onChange={() => setSelectedDiet("veg")}
                    checked={selectedDiet === "veg"}
                  />
                  <span
                    className="w-4 h-4 border-2 border-purple-600 rounded-sm flex items-center justify-center
                  peer-checked:bg-purple-600 peer-checked:text-white text-transparent text-xs font-bold"
                  >
                    ✓
                  </span>
                  Vegetarian
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="dietMobile"
                    className="peer hidden"
                    onChange={() => setSelectedDiet("non-veg")}
                    checked={selectedDiet === "non-veg"}
                  />
                  <span
                    className="w-4 h-4 border-2 border-purple-600 rounded-sm flex items-center justify-center
                  peer-checked:bg-purple-600 peer-checked:text-white text-transparent text-xs font-bold"
                  >
                    ✓
                  </span>
                  Non-Vegetarian
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="dietMobile"
                    className="peer hidden"
                    onChange={() => setSelectedDiet("vegan")}
                    checked={selectedDiet === "vegan"}
                  />
                  <span
                    className="w-4 h-4 border-2 border-purple-600 rounded-sm flex items-center justify-center
                  peer-checked:bg-purple-600 peer-checked:text-white text-transparent text-xs font-bold"
                  >
                    ✓
                  </span>
                  Vegan
                </label>
              </div>
            </div>

            {/* Reviews */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Reviews</h3>
              <div className="space-y-2 text-gray-600">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="reviewsMobile"
                    className="accent-purple-600"
                    onChange={() => setSelectedReview("4star")}
                    checked={selectedReview === "4star"}
                  />
                  4★ & above
                </label>
              </div>
            </div>

            {/* Clear All Filters */}
            <button
              className="w-full mt-6 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedDiet("");
                setSelectedTime("");
                setSelectedReview("");
              }}
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Overlay */}
        {mobileFilterOpen && (
          <div
            className="fixed inset-0 bg-[#4e4d4d7e] z-40"
            onClick={() => setMobileFilterOpen(false)}
          />
        )}

        {/* Subnav for Categories */}
        <nav className="w-full bg-white shadow-md sticky top-0 z-20 hidden md:block"
          data-aos="fade-down"

        >
          <div className="flex items-center justify-center gap-4 sm:gap-6 px-2 sm:px-4 lg:px-20 py-3 overflow-x-auto bitter scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1 text-sm sm:text-base font-semibold whitespace-nowrap transition-colors
                ${selectedCategory === category
                    ? "text-purple-700 border-b-2 border-purple-700"
                    : "text-gray-700 hover:text-purple-700"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>

        {/* Tablet & Mobile Filter Button */}
        <div className="flex justify-end px-6 md:hidden mt-4">
          <button
            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            onClick={() => setMobileFilterOpen(true)}
          >
            Filter
          </button>
        </div>

        {/* Mobile Only Categories */}
        <div className="flex flex-wrap gap-2 mt-2 md:hidden justify-center"
          data-aos="zoom-in"

        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors
        ${selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-purple-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recipe Cards */}
        <section className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-6 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 justify-items-center"
          data-aos="fade-up"

        >
          {visibleRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>



        {/* View More Button */}
        {visibleCount < filteredCategory.length && (
          <div className="flex justify-center mt-10 mb-16"
            data-aos="flip-up"

          >
            <button
              className="flex items-center gap-2 px-8 py-1.5 rounded-full 
        bg-gray-800 text-white font-semibold text-lg 
        hover:bg-gray-700 transition-colors duration-300"
              onClick={handleViewMore}
            >
              View More
              <span className="animate-bounce text-2xl mt-2">↓</span>
            </button>
          </div>
        )}

        <div
          onClick={() => navigate("/favourites")}
          className="fixed bottom-10 right-6 bg-[#76485e] text-white 
          rounded-full p-4 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110 z-50"
          data-aos="zoom-in-up"

        >
          <FaHeart size={22} />
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
