import React, { useState, useEffect } from 'react';

const Specialists:React.FC = () => {
  // Image sources from your assets folder
  const sliderImages = [
    "src/assets/images/specialist1.jpg",
    "src/assets/images/specialist2.jpg",
    "src/assets/images/ramesh-doctor.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // The total interval is 10 seconds (10000ms)
    // This allows the image to be fully visible for a long time before moving
    const interval = setInterval(() => {
      // 1. Start the slow fade out
      setFade(false); 

      // 2. Wait 4 seconds for the fade-out to fully complete 
      // This ensures a "black" or "empty" transition doesn't happen suddenly
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        
        // 3. Fade back in with the new image
        setFade(true);
      }, 1000); 
      
    }, 1000); 

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 bg-white font-sans">
      
      {/* Left Content Section matching provided layout */}
      <div className="flex-1 space-y-6">
        <div className="inline-block px-6 py-2 border border-[#D1A7D1] rounded-full">
          <span className="text-[#A36BA3] font-medium text-sm">
            20+ specialists
          </span>
        </div>

        <h1 className="text-2xl md:text-sm lg:text-4xl font-serif text-[#1a1a1a] ">
          From experienced dentists to <br />
          certified ceramists, every <br />
          member of our team is committed <br />
          to delivering the best results with <br />
          precision, artistry, and care.
        </h1>
      </div>

      {/* Right Slider Section with structured 'peek' */}
      <div className="flex-1 w-full max-w-md h-[500px] flex gap-4 overflow-hidden">
        
        {/* Main Sliding Image Container */}
        <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg bg-gray-50">
          <img
            src={sliderImages[currentIndex]}
            alt="Dental Specialist"
            // duration-[4000ms] creates a very slow 4-second crossfade
            className={`w-full h-full object-cover transition-opacity duration-[4000ms] ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Peek Section (Next Image) */}
        <div className="w-16 rounded-l-2xl overflow-hidden opacity-80">
          <img
            src={sliderImages[(currentIndex + 1) % sliderImages.length]}
            alt="Next Specialist"
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>

      </div>
    </div>
  );
};

export default Specialists;