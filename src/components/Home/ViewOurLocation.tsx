import React from 'react';

const ViewOurLocation: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white">
      {/* 1. Video Container: Matches the height and framing of the original image */}
      <div className="w-full h-[450px] md:h-[600px] overflow-hidden relative">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="src/assets/videos/viewourlocation.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="/path-to-your-dental-image.jpg" 
            alt="Dental treatment room" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* 2. Content Section: Solid black background with centered text */}
      <div className="w-full bg-[#ffffff] py-20 px-6 flex flex-col items-center text-center">
        
        {/* Heading: Uppercase Serif with specific letter spacing */}
        <h2 className="text-[#080408] text-3xl md:text-3xl lg:text-5xl font-['Marcellus_SC'] mb-10 uppercase leading-tight max-w-5xl">
          A Relaxing Space <span className="block font-['Marcellus_SC'] text-[#A953A0] md:inline">Designed For You</span>
        </h2>

        {/* Paragraph: Centered, light weight, and grayed out for hierarchy */}
        <p className="text-[#000000] text-sm md:text-lg max-w-3xl leading-relaxed mb-12 font-normal">
          Feel at ease from the moment you arrive. From our welcoming lounge to our 
          innovative treatment suites, we’ve designed every detail to make your dental 
          visit as calming, comfortable and reassuring as possible.
        </p>

        {/* CTA Button: Deep plum background with rounded-xl corners */}
        <button 
          className="bg-[#3D253F] hover:bg-[#2D1A2E] text-white px-10 py-4 rounded-xl text-sm font-medium  uppercase transition-all duration-300 shadow-lg active:scale-95"
        >
          View Our Locations
        </button>
      </div>
    </section>
  );
};

export default ViewOurLocation;