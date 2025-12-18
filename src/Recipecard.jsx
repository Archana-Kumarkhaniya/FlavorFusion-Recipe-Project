import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    if (user && favourites.some((fav) => fav.id === recipe.id)) {
      setLiked(true);
    }
  }, [recipe.id]);

  const handleLike = (e) => {
    e.stopPropagation(); // Prevent card click when clicking heart

    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
      alert("Please log in to like recipes!");
      return;
    }

    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    if (liked) {
      favourites = favourites.filter((r) => r.id !== recipe.id);
      setLiked(false);
      alert(`${recipe.title} removed from favourites!`);
    } else {
      favourites.push(recipe);
      setLiked(true);
      alert(`${recipe.title} added to favourites!`);
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  const handleCardClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full max-w-[320px] md:max-w-[280px] xl:max-w-[260px] 
                 bg-white rounded-lg overflow-hidden shadow-md transition-shadow duration-300 
                 cursor-pointer flex flex-col items-center"
    >
      {/* Recipe Image */}
      <div className="relative w-full">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-56 md:h-52 lg:h-60 xl:h-64 object-cover"
        />
        {/* Heart Icon */}
        <FaHeart
          onClick={handleLike}
          className={`absolute top-3 right-3 text-2xl cursor-pointer transition-transform duration-200 ${liked ? "text-red-500 scale-110" : "text-gray-400 hover:text-red-400"
            }`}
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col items-center w-full">
        {/* Star Review */}
        <div className="flex items-center arvo font-medium text-[15px] text-center">
          <span className="text-gray-700 ml-2">{recipe.Starreview} rating</span>
          <span className="text-gray-700 ml-2">/ {recipe.reviews} reviews</span>
        </div>

        {/* Recipe Name */}
        <h3 className="text-[20px] lg:text-[22px] xl:text-[24px] 
                       font-bold text-gray-800 mt-2 text-center domine break-words">
          {recipe.title}
        </h3>
      </div>
    </div>
  );
};

export default RecipeCard;
