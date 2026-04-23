import React from 'react'

const DentalCrownDesc = () => {
    return (
    <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 font-sans text-left">
      {/* Container changed to flex to hold image and text side-by-side.
        Alignment and gap adjusted to match reference.
      */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-20">
        
        {/* 1. Left Section: Floating Image Container with Border */}
        <div className="relative flex-shrink-0 w-full md:w-[45%] lg:w-[40%] aspect-[4/5] animate-in slide-in-from-left duration-700">
          
          {/* Static Purple Background "Border" (Matches reference geometry) */}
          <div className="absolute inset-0  rounded-3xl " />
          
          {/* Main Patient Image */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="src/assets/images/dental-crown.jpg" 
              alt="Orchid Dental Care Patient giving thumbs up during dental checkup" 
              className="w-full h-full object-cover grayscale-[0.1]"
            />
          </div>
        </div>

        {/* 2. Right Section: Text Content (Exact Image look) */}
        {/* Increased width slightly to allow the paragraphs to wrap like in the image */}
        <div className="flex-1 w-full max-w-2xl space-y-14">
          
          {/* Section 1 - Note Header change from original code to match reference text */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3D233D] font-serif leading-tight">
             Restore and Strengthen Your Teeth
            </h2>
            <p className="text-[#64748B] text-lg md:text-xl leading-relaxed font-Manrope font-light">
             Dental crowns are an effective solution to restore damaged, weakened, or broken teeth while enhancing their appearance. At Orchid Dental Care, we provide high-quality, custom-made crowns designed to protect your tooth, restore its strength, 
             and blend seamlessly with your natural smile—ensuring long-lasting durability and confidence.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3D233D] font-serif">
              The Importance of Timely Restoration
            </h3>
            <p className="text-[#64748B] text-lg md:text-xl leading-relaxed font-Manrope font-light">
             A damaged or weakened tooth can worsen over time, leading to pain, fractures, or even tooth loss. Dental crowns act as a protective cap, covering and strengthening the tooth while restoring its function and shape.
              Getting a crown at the right time helps preserve your natural tooth structure and maintain your overall oral health for years to come.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DentalCrownDesc
