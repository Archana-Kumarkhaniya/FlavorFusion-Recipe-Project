import React from 'react'

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fffaf5] px-4">

            {/* Bowl */}
            <div className="relative">
                <div className="w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16
                        bg-orange-400 rounded-b-full shadow-lg">
                </div>

                {/* Steam */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-2">
                    <span className="w-2 h-6 bg-orange-300 rounded-full animate-pulse"></span>
                    <span className="w-2 h-8 bg-orange-300 rounded-full animate-pulse delay-150"></span>
                    <span className="w-2 h-6 bg-orange-300 rounded-full animate-pulse delay-300"></span>
                </div>
            </div>

            {/* Ingredients dots */}
            <div className="flex gap-2 mt-6">
                <span className="w-3 h-3 bg-red-400 rounded-full animate-bounce"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full animate-bounce delay-150"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-300"></span>
            </div>

            {/* Text */}
            <p className="mt-6 text-sm sm:text-base md:text-lg font-semibold text-gray-700 text-center">
                Cooking something delicious...
            </p>
        </div>
    )
}

export default Loader
