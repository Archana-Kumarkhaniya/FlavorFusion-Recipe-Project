import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import recipes from "./data";
import { motion } from "framer-motion";


const Home = () => {

    let navigate = useNavigate()

    const [randomRecipes, setRandomRecipes] = useState([])

    useEffect(() => {

        if (recipes && recipes.length > 0) {
            let favoriteRecipes = recipes.sort(() => Math.random() - 0.5)
            const eight = favoriteRecipes.slice(0, 8)
            setRandomRecipes(eight)
        }
    }, [])


    const [currentIndex, setCurrentIndex] = useState(0);

    const nextFavSlide = () => {
        setCurrentIndex((prev) =>
            prev === randomRecipes.length - 4 ? 0 : prev + 1
        );
    };

    const prevFavSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? randomRecipes.length - 4 : prev - 1
        );
    };


    let grouped = {}
    let uniqueCategoryRecipes = []

    recipes.forEach((item) => {
        if (uniqueCategoryRecipes.length === 4) return;

        if (!grouped[item.category]) {
            grouped[item.category] = true
            uniqueCategoryRecipes.push(item)
        }
    })

    return (
        <div className="bg-[#faf8f3] bitter overflow-x-hidden">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="py-[60px] px-[20px] text-center bg-[#faf8f3] domine"
            >
                <h1 className="text-[clamp(32px,6vw,56px)] font-bold mb-[12px] text-[#2c2c2c] tracking-[-0.5px] arvo">
                    SIMPLE RECIPES MADE FOR
                </h1>

                <p className="text-[clamp(24px,4vw,42px)] italic text-[#9b8ba3] mb-0 font-normal tracking-[-0.3px] dancing">
                    real, actual, everyday life
                </p>
            </motion.section>

            {/* Featured Recipes Cards */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="py-[50px] px-4 sm:px-6 bg-white bitter"
            >
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {uniqueCategoryRecipes.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/recipe/${item.id}`)}
                                className="bg-[#f9f7f4] rounded-lg overflow-hidden
                    shadow-[0_1px_4px_rgba(0,0,0,0.08)]
                    border border-[#e8e0d8]
                    transition-all duration-300 cursor-pointer
                    hover:-translate-y-2
                    hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]
                    hover:border-[#d4a574]"
                            >
                                <div className="relative h-[240px] sm:h-[280px] lg:h-[320px] overflow-hidden bg-[#e8e0d8]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="inline-block bg-[#d4a574] text-white py-[6px] px-[12px]
                        rounded text-[10px] font-bold tracking-[1.5px] mb-4 domine">
                                        {item.category.toUpperCase()}
                                    </div>

                                    <h3 className="text-[18px] font-semibold text-[#2c2c2c] leading-[1.5] arvo">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </motion.section>

            {/* Section 2 */}

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="py-16 px-4 sm:px-8 lg:px-20 bg-[#faf8f3] dancing w-full"
            >
                {/* Heading */}
                <h2 className="text-center text-[#2c2c2c] mb-12 text-[clamp(24px,4vw,36px)]">
                    <span className="italic text-[#a892b8] font-normal mr-2">watch</span>
                    MY FAVORITE RECIPES
                </h2>

                {/* Slider Wrapper */}
                <div className="relative w-full">

                    {/* LEFT ARROW */}
                    <button
                        onClick={prevFavSlide}
                        className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2
          bg-white border-2 border-[#d4a574]
          w-[42px] h-[42px] rounded-full
          flex items-center justify-center
          hover:bg-[#d4a574] transition-all duration-300 z-20"
                    >
                    <ChevronLeft size={22} className="text-[#d4a574]" />
                    </button>

                    {/* SLIDER */}
                    <div className="overflow-hidden w-full">
                        <div className="flex gap-6">
                            {randomRecipes
                                .slice(currentIndex, currentIndex + 4)
                                .concat(
                                    randomRecipes.slice(
                                        0,
                                        Math.max(0, currentIndex + 4 - randomRecipes.length)
                                    )
                                )
                                .map((recipe, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() =>
                                            window.open(
                                                "https://youtube.com/shorts/DH5KrmmugIY",
                                                "_blank"
                                            )
                                        }
                                        className="
                    bg-white border-2 border-[#d4d0c8] rounded-xl overflow-hidden
                    cursor-pointer transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl
                    w-full
                    sm:w-[48%]
                    lg:w-[23%]
                    flex-shrink-0
                  "
                                    >
                                        {/* Image / Video */}
                                        <div className="relative h-[250px] bg-[#e8e0d8] group">
                                            <img
                                                src={recipe.image}
                                                alt={recipe.title}
                                                className="w-full h-full object-cover
                      transition-opacity duration-300
                      group-hover:opacity-0"
                                            />

                                            <iframe
                                                src="https://www.youtube.com/embed/DH5KrmmugIY?autoplay=1&mute=1&controls=0&loop=1&playlist=DH5KrmmugIY"
                                                allow="autoplay"
                                                className="absolute inset-0 w-full h-full
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500"
                                            />

                                            {/* Play Icon */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-[#8b6f9d]/85 w-16 h-16 rounded-full
                      flex items-center justify-center
                      border-4 border-white/40
                      group-hover:scale-110 transition-all duration-300">
                                                    <Play size={30} fill="white" color="white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div className="p-4 text-center">
                                            <div className="inline-block bg-[#8b6f9d] text-white
                    px-3 py-1 text-[10px] font-bold rounded mb-2 tracking-widest">
                                                PLAY
                                            </div>

                                            <h3 className="text-[18px] font-semibold text-[#2c2c2c] leading-[1.5] arvo">
                                                {recipe.title}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {/* RIGHT ARROW */}
                    <button
                        onClick={nextFavSlide}
                        className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2
          bg-white border-2 border-[#d4a574]
          w-[42px] h-[42px] rounded-full
          flex items-center justify-center
          hover:bg-[#d4a574] transition-all duration-300 z-20"
                    >
                        <ChevronRight size={22} className="text-[#d4a574]" />
                    </button>

                </div>
            </motion.section>


            {/* Section 4 */}

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="py-20 px-4 sm:px-6 bg-white"
            >
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        {/* Images */}
                        <div className="grid grid-cols-2 gap-5">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/archana-kumarkhaniya-professional-portrait-1-O8CJDSJoUxLyTcVgrOEC4aUlYqavOG.jpg"
                                alt="Ananya Sharma"
                                className="w-full h-[260px] sm:h-[340px] object-cover rounded-lg
          shadow-[0_8px_28px_rgba(0,0,0,0.12)]
          border-[3px] border-[#faf8f3]"
                            />

                            <motion.img
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/archana-kumarkhaniya-professional-portrait-2-YB2U2qoSb82GLUb8L5rHTMnxdM6k5e.jpg"
                                alt="Ananya Sharma"
                                className="w-full h-[260px] sm:h-[340px] object-cover rounded-lg
          shadow-[0_8px_28px_rgba(0,0,0,0.12)]
          border-[3px] border-[#faf8f3]
          sm:mt-10"
                            />
                        </div>

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-[12px] text-[#d4a574] font-bold tracking-[2px] mb-4">
                                MEET ANANYA
                            </p>

                            <h2 className="text-[clamp(28px,4vw,40px)] font-bold text-[#2c2c2c] mb-5">
                                Hi, I'm Ananya Sharma
                            </h2>

                            <p className="text-[16px] leading-[1.8] text-[#555555] mb-3">
                                I'm a passionate home cook and food blogger who loves creating
                                simple, comforting recipes that fit perfectly into everyday life.
                            </p>

                            <p className="text-[16px] leading-[1.8] text-[#555555]">
                                Every recipe you see here is carefully tested in my kitchen, so
                                you can cook with confidence and share joyful meals with the
                                people you love.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </motion.section>

            {/* Section 4 */}

            {/* Section 5 */}


            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="py-20 px-4 sm:px-6 bg-white"
            >
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/cookbook-cover-ePPyWtC9qB1ZeX0obwDnVfx5l4omDE.jpg"
                                alt="Ananya's Cookbook"
                                className="w-full h-[320px] sm:h-[450px] object-cover rounded-lg
          border-[3px] border-[#faf8f3]
          shadow-[0_15px_50px_rgba(0,0,0,0.15)]"
                            />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-[12px] text-[#d4a574] font-bold tracking-[2px] mb-4">
                                GET MY COOKBOOK
                            </p>

                            <h2 className="text-[clamp(28px,4vw,40px)] font-bold text-[#2c2c2c] mb-4">
                                Ananya’s Family Recipes
                            </h2>

                            <p className="text-[15px] leading-[1.8] text-[#666666] mb-8">
                                Get 50+ of my favorite family recipes tested and perfected over
                                years of home cooking. Download your free digital cookbook and
                                start cooking delicious meals tonight!
                            </p>

                            <form className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="px-4 py-3 border-2 border-[#d4d0c8] rounded-md text-sm"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="px-4 py-3 border-2 border-[#d4d0c8] rounded-md text-sm"
                                />
                                <button
                                    className="bg-[#8b6f9d] text-white py-3 px-6 rounded-md
            font-bold tracking-widest flex items-center justify-center gap-2
            hover:bg-[#7a5e8b] transition"
                                >
                                    <Mail size={18} />
                                    GET FREE COOKBOOK
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </motion.section>

            {/* Section 5*/}

            {/* Section 6*/}

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-20 px-4 bg-[#f4f1f7] text-center"
            >
                <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-[#2c2c2c] mb-5">
                    Ready to Cook?
                </h2>

                <p className="text-[16px] text-[#666666] max-w-[600px] mx-auto mb-4 leading-[1.7]">
                    Explore hundreds of delicious, easy-to-make recipes that fit your
                    lifestyle.
                </p>

                <p className="text-[15px] text-[#8b6f9d] italic font-medium mb-8">
                    Let&apos;s cook something amazing together!
                </p>

                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => navigate("/recipes")}
                    className="bg-[#8b6f9d] text-white px-10 py-4 rounded-md font-bold
    tracking-[1.2px] hover:bg-[#7a5e8b] transition"
                >
                    EXPLORE RECIPES
                </motion.button>
            </motion.section>




        </div>
    );
};

export default Home;
