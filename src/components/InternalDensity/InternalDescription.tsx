// import React from 'react';

// const InternalDescription: React.FC = () => {
//   return (
//     <div className="w-full bg-white py-12 px-6 md:px-12 lg:px-24 font-sans text-left">
//       <div className="max-w-5xl mx-auto space-y-12">
        
//         {/* Section 1 */}
//         <div className="space-y-4">
//           <h2 className="text-xl md:text-2xl font-semibold text-[#3D233D]">
//             Dental Check-Ups & Cleaning: Your Foundation for a Healthy Smile
//           </h2>
//           <p className="text-gray-500 text-base md:text-2xl leading-relaxed font-Manrope font-light">
//             Regular dental check-ups and professional cleanings are the most important steps 
//             you can take to maintain your oral health and prevent costly procedures down the 
//             line. At Orchid Dental Care, we provide thorough, gentle care designed to keep 
//             your teeth sparkling and your gums disease-free.
//           </p>
//         </div>

//         {/* Section 2 */}
//         <div className="space-y-4">
//           <h3 className="text-xl md:text-2xl font-semibold text-[#3D233D]">
//             The Importance of Regular Visits
//           </h3>
//           <p className="text-gray-500 text-base md:text-2xl leading-relaxed font-light">
//             Even with diligent brushing and flossing at home, plaque can harden into tartar 
//             (calculus) in hard-to-reach areas. If left untreated, this can lead to cavities, 
//             gingivitis, and eventually tooth loss. A professional check-up every six months 
//             ensures that your mouth stays in peak condition.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default InternalDescription;


import React from 'react';

const InternalDescription: React.FC = () => {
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
              src="src/assets/images/new-img.png" 
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
              Restore and Protect Your Teeth
            </h2>
            <p className="text-[#64748B] text-lg md:text-xl leading-relaxed font-Manrope font-light">
              Regular dental check-ups and professional cleanings are the most important steps 
              you can take to maintain your oral health and prevent costly procedures down the 
              line. At Orchid Dental Care, we provide thorough, gentle care designed to keep 
              your teeth sparkling and your gums disease-free.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3D233D] font-serif">
              The Importance of Regular Visits
            </h3>
            <p className="text-[#64748B] text-lg md:text-xl leading-relaxed font-Manrope font-light">
              Even with diligent brushing and flossing at home, plaque can harden into tartar 
              (calculus) in hard-to-reach areas. If left untreated, this can lead to cavities, 
              gingivitis, and eventually tooth loss. A professional check-up every six months 
              ensures that your mouth stays in peak condition.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InternalDescription;