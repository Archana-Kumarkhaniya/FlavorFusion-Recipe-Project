import React, { useEffect, useState } from "react";
import { Star, Clock, Users, Video, ChefHat } from "lucide-react";
import recipes from "./data";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const selected = recipes.find((r) => r.id === parseInt(id));
        setRecipe(selected || null);
    }, [id]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    if (!recipe)
        return (
            <div className="flex items-center justify-center min-h-screen text-xl font-semibold text-[#6B2D26]">
                Recipe not found!
            </div>
        );

    return (
        <main className="w-full min-h-screen bg-[#ffffff] text-[#1a1a1a]">
            {/* Hero Section */}
            <section
                data-aos="fade-up"
                className="px-4 sm:px-6 py-10 sm:py-12 lg:px-12 lg:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
                {/* Image Column */}
                <div className="relative w-full h-full  lg:h-full aspect-square rounded-2xl overflow-hidden shadow-xl bg-[#f5f5f5]">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 px-4 py-2 bg-[#6B2D26] text-white rounded-full font-semibold text-sm shadow-lg">
                        {recipe.type === "non-veg" ? "🍖 Non-Veg" : "🥗 Veg"}
                    </div>
                </div>

                {/* Info Column */}
                <div className="flex flex-col justify-center gap-6">
                    {/* Header */}
                    <div>
                        <p className="text-[#6B2D26] font-semibold uppercase tracking-wide text-sm mb-2">
                            {recipe.category}
                        </p>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#6B2D26]">
                            {recipe.title}
                        </h1>
                        <p className="text-[#666666] text-base sm:text-lg">
                            Authentic {recipe.category} recipe perfection
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-6">
                        <div className="bg-[#f9f9f9] border border-[#e0e0e0] rounded-lg p-3 sm:p-5 text-center">
                            <Clock className="w-5 h-5 text-[#6B2D26] mx-auto mb-2" />
                            <span className="text-sm text-[#666666] block mb-1">
                                Cooking Time
                            </span>
                            <p className="text-lg sm:text-2xl font-bold">{recipe.timing}</p>
                        </div>

                        <div className="bg-[#f9f9f9] border border-[#e0e0e0] rounded-lg p-3 sm:p-5 text-center">
                            <Star className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                            <span className="text-sm text-[#666666] block mb-1">Rating</span>
                            <p className="text-lg sm:text-2xl font-bold">
                                {recipe.Starreview}
                            </p>
                        </div>

                        <div className="bg-[#f9f9f9] border border-[#e0e0e0] rounded-lg p-3 sm:p-5 text-center">
                            <Users className="w-5 h-5 text-[#6B2D26] mx-auto mb-2" />
                            <span className="text-sm text-[#666666] block mb-1">Reviews</span>
                            <p className="text-lg sm:text-2xl font-bold">{recipe.reviews}</p>
                        </div>
                    </div>

                    {/* Video Button */}
                    <button
                        className="w-full bg-[#6B2D26] text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#5a251f] transition"
                        onClick={() =>
                            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
                        }
                    >
                        <Video className="w-5 h-5" />
                        Watch Tutorial Video
                    </button>
                </div>
            </section>

            {/* Content Section */}
            <section
                data-aos="fade-right"
                className="px-4 sm:px-6 py-10 sm:py-12 lg:px-12 lg:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10"
            >
                {/* Sidebar */}
                <div className="flex flex-col gap-8 lg:sticky lg:top-8">
                    {/* Ingredients */}
                    <div>
                        <h2 className="flex items-center gap-2 text-[#6B2D26] font-bold text-lg sm:text-xl mb-4">
                            <ChefHat className="w-6 h-6 text-[#666666]" />
                            Ingredients
                        </h2>
                        <div className="bg-[#f9f9f9] border border-[#e0e0e0] rounded-xl p-5 space-y-4 shadow-md max-h-[450px] overflow-y-auto">
                            <div className="flex flex-col gap-3">
                                {recipe.ingredients.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <input type="checkbox" className="w-5 h-5 accent-[#6B2D26]" />
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Toppings */}
                    {recipe.toppings && (
                        <div>
                            <h2 className="text-[#6B2D26] font-bold text-lg sm:text-xl mb-4">
                                Optional Toppings
                            </h2>
                            <div className="bg-[#f9f9f9] border border-[#e0e0e0] rounded-xl p-5 space-y-3 shadow-md">
                                {recipe.toppings.map((t, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[#6B2D26] rounded-full" />
                                        <span className="text-sm sm:text-base">{t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Main Content */}
                <div className="flex flex-col gap-8">
                    {/* Instructions */}
                    <h2 className="text-[#6B2D26] font-bold text-lg sm:text-xl mb-4">
                        Cooking Instructions
                    </h2>
                    <div className="bg-[#f9f9f9] border border-[#e0e0e0] rounded-xl p-5 sm:p-6 space-y-6 shadow-md">
                        {recipe.instructions
                            .split("Step")
                            .filter((step) => step.trim() !== "")
                            .map((step, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    {/* Number Circle */}
                                    <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 rounded-full bg-[#6B2D26] text-white font-bold text-base sm:text-lg md:text-xl flex-shrink-0">
                                        {i + 1}
                                    </div>

                                    {/* Step Text */}
                                    <div className="flex-1">
                                        <p className="text-sm sm:text-base leading-relaxed text-[#1a1a1a]">
                                            {step.replace(/^[0-9:]+/, "").trim()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Video Embed */}
                    <div data-aos="fade-left">
                        <h2 className="text-[#6B2D26] font-bold text-lg sm:text-xl mb-4">
                            Video Tutorial
                        </h2>
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-[#f5f5f5]">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Recipe Video Tutorial"
                                className="w-full h-full border-0"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductPage;
