import React from "react";
import { motion } from "framer-motion";


const About = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50">

            {/* Hero Section with Founder */}
            <section className="relative overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-8 sm:py-10 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

                        {/* Founder Image */}
                        <motion.div
                            className="relative group md:flex md:justify-center"
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#734060] to-pink-300 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="relative bg-white p-2 rounded-3xl shadow-2xl md:w-[70%] md:h-[340px] w-full lg:h-auto">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D"
                                    alt="Maria Rodriguez - Founder & Head Chef"
                                    className="rounded-2xl w-full h-[450px] sm:h-[420px] md:h-[340px] lg:h-[550px] object-cover transition-all duration-500"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#734060] to-pink-500 text-white p-4 rounded-2xl shadow-lg">
                                <div className="text-sm sm:text-base font-medium">Est. 2018</div>
                                <div className="text-xs sm:text-sm opacity-90">7 Years Experience</div>
                            </div>
                        </motion.div>

                        {/* Founder Story */}
                        <motion.div
                            className="space-y-6 sm:space-y-8 md:space-y-6 md:mt-4"
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-3 sm:space-y-4">
                                <div className="inline-flex items-center px-4 sm:px-5 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-[#734060] text-sm sm:text-base md:text-lg lg:text-lg font-medium">
                                    ✨ Meet Our Visionary
                                </div>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Maria Rodriguez
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#734060] font-medium">
                                    Founder & Executive Chef
                                </p>
                            </div>

                            <div className="space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed arvo">
                                <p>
                                    "Food is the universal language of love, and every dish I create carries a piece of my heart.
                                    FlavorFusion was born from my grandmother's kitchen in Valencia, where I learned that cooking isn't
                                    just about ingredients—it's about passion, tradition, and the magic that happens when you cook with
                                    soul."
                                </p>
                                <p>
                                    With over 15 years of culinary expertise spanning from Michelin-starred restaurants to family
                                    kitchens, I founded FlavorFusion to bridge the gap between professional techniques and home cooking,
                                    making extraordinary flavors accessible to everyone.
                                </p>
                            </div>

                            <motion.div
                                className="flex flex-wrap gap-3 sm:gap-4"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-white px-5 sm:px-6 md:px-7 py-2 sm:py-3 rounded-full shadow-md border border-pink-100">
                                    <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700">
                                        🏆 James Beard Nominee
                                    </span>
                                </div>
                                <div className="bg-white px-5 sm:px-6 md:px-7 py-2 sm:py-3 rounded-full shadow-md border border-pink-100">
                                    <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700">
                                        📚 3 Published Cookbooks
                                    </span>
                                </div>
                                <div className="bg-white px-5 sm:px-6 md:px-7 py-2 sm:py-3 rounded-full shadow-md border border-pink-100">
                                    <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700">
                                        🌟 50K+ Students Taught
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-10 lg:py-15 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">

                    {/* Heading */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            The FlavorFusion Journey
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto arvo leading-relaxed">
                            From a small family kitchen to a global culinary community, our story is one of passion,
                            perseverance, and the transformative power of food.
                        </p>
                    </motion.div>

                    {/* Cards Section */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Excellence",
                                desc: "We maintain world-class standards in every recipe, training, and dining experience.",
                                img: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                                anim: { x: -80, delay: 0 },
                            },
                            {
                                title: "Community",
                                desc: "Food is about bringing people together. Our community thrives on shared learning and joy.",
                                img: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                                anim: { y: 80, delay: 0.2 },
                            },
                            {
                                title: "Growth",
                                desc: "We believe in evolving continuously — from innovative cooking to empowering new chefs.",
                                img: "https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                                anim: { x: 80, delay: 0.4 },
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:scale-105"
                                initial={{ opacity: 0, x: item.anim.x || 0, y: item.anim.y || 0 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: item.anim.delay }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mt-3">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-pink-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-10 flex flex-col md:flex-row items-center space-y-3 sm:space-y-4 md:space-y-0 md:space-x-4"
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full md:flex-1 border-2 border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-500 focus:border-[#734060] focus:ring-0 transition"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full md:flex-1 border-2 border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-500 focus:border-[#734060] focus:ring-0 transition"
                        />

                        <button className="w-full md:w-auto bg-[#734060] hover:bg-[#5a304a] text-white font-semibold sm:font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl shadow-md transition text-sm sm:text-base">
                            Go 🚀
                        </button>
                    </motion.div>
                </div>
            </section>



            {/* Team Section */}

            <section className="pt-14 pb-5 lg:pt-17 lg:pb-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Meet Our Culinary Dream Team
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto arvo leading-relaxed">
                            Behind every great dish is a passionate team of culinary artists, each bringing their unique expertise and
                            love for food to FlavorFusion.
                        </p>
                    </div>

                    {/* Team Members */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                        {[
                            {
                                name: "Sarah Chen",
                                role: "Master Pastry Chef",
                                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
                                tags: ["Desserts", "Baking"],
                                desc: "Sarah has perfected the art of pastries with delicate flavors and designs that inspire awe."
                            },
                            {
                                name: "Marcus Johnson",
                                role: "Sous Chef & Instructor",
                                img: "https://images.unsplash.com/photo-1526045478516-99145907023c",
                                tags: ["Fusion", "Teaching"],
                                desc: "Marcus combines international cuisines and teaches upcoming chefs."
                            },
                            {
                                name: "Emily Rodriguez",
                                role: "Community & Experience Manager",
                                img: "https://images.unsplash.com/photo-1528712306091-ed0763094c98",
                                tags: ["Community", "Events"],
                                desc: "Emily ensures every event and interaction builds stronger culinary connections."
                            },
                            {
                                name: "Daniel Kim",
                                role: "Kitchen Operations Head",
                                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                                tags: ["Management", "Logistics"],
                                desc: "Daniel orchestrates smooth operations ensuring everything runs with precision."
                            },
                            {
                                name: "Olivia Green",
                                role: "Food Stylist",
                                img: "https://images.unsplash.com/photo-1544717305-2782549b5136",
                                tags: ["Styling", "Presentation"],
                                desc: "Olivia transforms dishes into visual masterpieces, enhancing their appeal."
                            },
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.4, // 👈 sequential delay (one by one)
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                                    <div className="relative mb-6">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-[#734060] to-pink-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                                        />
                                    </div>
                                    <div className="text-center space-y-3">
                                        <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                                        <p className="text-[#734060] font-semibold">{member.role}</p>
                                        <p className="text-gray-600 text-sm">{member.desc}</p>
                                        <div className="flex justify-center space-x-2 pt-2 flex-wrap">
                                            {member.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-pink-100 text-[#734060] text-xs rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Team Philosophy Section */}

            <section className="py-12 lg:py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
                    {/* Title Animation */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Our Team Philosophy
                    </motion.h2>

                    {/* Paragraph Animation */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto arvo leading-relaxed"
                    >
                        At FlavorFusion, our philosophy is rooted in collaboration, creativity,
                        and respect. Every member of our team believes in cooking with passion,
                        treating each other like family, and crafting dishes that connect people.
                    </motion.p>

                    {/* Cards Animation */}
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-left mt-10">
                        {[
                            {
                                title: "Tradition & Innovation",
                                desc: "We honor culinary traditions while experimenting with new flavors and techniques."
                            },
                            {
                                title: "Sustainability",
                                desc: "We commit to eco-friendly sourcing, minimizing waste, and supporting local farmers."
                            },
                            {
                                title: "Education & Growth",
                                desc: "We nurture chefs through workshops, mentorship, and hands-on experiences."
                            },
                            {
                                title: "Diversity & Inclusion",
                                desc: "We celebrate diverse cuisines and create an inclusive environment for all food lovers."
                            },
                            {
                                title: "Customer-Centric",
                                desc: "Every recipe is crafted with our community in mind, ensuring joy in every bite."
                            },
                            {
                                title: "Team Spirit",
                                desc: "Our success lies in teamwork, shared passion, and supporting one another."
                            },
                        ].map((point, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={cardVariants}
                                viewport={{ once: true }}
                                className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold text-[#734060] mb-2 md:mb-3">{point.title}</h3>
                                <p className="text-sm text-gray-600 arvo">{point.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default About;
