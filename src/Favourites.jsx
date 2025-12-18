import React, { useEffect, useState } from "react";
import RecipeCard from "./Recipecard";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      alert("Please log in to see your favourites!");
      return;
    }
    setUser(loggedInUser);

    // Get favourites from localStorage
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  if (!user) {
    return (
      <div className="text-center mt-20 text-gray-700 px-4">
        Please log in to see your favourites.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-10 lg:px-20 py-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        <span className="dancing text-pink-600">{user.name}'s</span> Favourites
      </h2>

      {favourites.length === 0 ? (
        <p className="text-center text-gray-600 mt-10 text-base sm:text-lg">
          You haven't liked any recipes yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {favourites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
