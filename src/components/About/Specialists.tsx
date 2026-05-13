// import React, { useState, useEffect } from 'react';

// const Specialists:React.FC = () => {
//   // Image sources from your assets folder
//   const sliderImages = [
//     "src/assets/images/specialist1.jpg",
//     "src/assets/images/specialist2.jpg",
//     "src/assets/images/ramesh-doctor.png"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     // The total interval is 10 seconds (10000ms)
//     // This allows the image to be fully visible for a long time before moving
//     const interval = setInterval(() => {
//       // 1. Start the slow fade out
//       setFade(false); 

//       // 2. Wait 4 seconds for the fade-out to fully complete 
//       // This ensures a "black" or "empty" transition doesn't happen suddenly
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        
//         // 3. Fade back in with the new image
//         setFade(true);
//       }, 1000); 
      
//     }, 1000); 

//     return () => clearInterval(interval);
//   }, [sliderImages.length]);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 bg-white font-sans">
      
//       {/* Left Content Section matching provided layout */}
//       <div className="flex-1 space-y-6">
//         <div className="inline-block px-6 py-2 border border-[#D1A7D1] rounded-full">
//           <span className="text-[#A36BA3] font-medium text-sm">
//             20+ specialists
//           </span>
//         </div>

//         <h1 className="text-2xl md:text-sm lg:text-4xl font-serif text-[#1a1a1a] ">
//           From experienced dentists to <br />
//           certified ceramists, every <br />
//           member of our team is committed <br />
//           to delivering the best results with <br />
//           precision, artistry, and care.
//         </h1>
//       </div>

//       {/* Right Slider Section with structured 'peek' */}
//       <div className="flex-1 w-full max-w-md h-[500px] flex gap-4 overflow-hidden">
        
//         {/* Main Sliding Image Container */}
//         <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg bg-gray-50">
//           <img
//             src={sliderImages[currentIndex]}
//             alt="Dental Specialist"
//             // duration-[4000ms] creates a very slow 4-second crossfade
//             className={`w-full h-full object-cover transition-opacity duration-[4000ms] ease-in-out ${
//               fade ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         </div>

//         {/* Peek Section (Next Image) */}
//         <div className="w-16 rounded-l-2xl overflow-hidden opacity-80">
//           <img
//             src={sliderImages[(currentIndex + 1) % sliderImages.length]}
//             alt="Next Specialist"
//             className="w-full h-full object-cover grayscale-[20%]"
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Specialists;


// import React, { useState, useEffect } from 'react';

// const Specialists: React.FC = () => {
//   const sliderImages = [
//     "src/assets/images/specialist1.jpg",
//     "src/assets/images/specialist2.jpg",
//     "src/assets/images/ramesh-doctor.png"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
//     }, 4000); // Changes image every 4 seconds

//     return () => clearInterval(interval);
//   }, [sliderImages.length]);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 bg-white font-sans">
      
//       {/* Left Content Section */}
//       <div className="flex-1 space-y-6">
//         <div className="inline-block px-6 py-2 border border-[#D1A7D1] rounded-full">
//           <span className="text-[#A36BA3] font-medium text-sm">
//             20+ specialists
//           </span>
//         </div>

//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1a1a1a] leading-tight">
//           From experienced dentists to <br />
//           certified ceramists, every <br />
//           member of our team is committed <br />
//           to delivering the best results with <br />
//           precision, artistry, and care.
//         </h1>
//       </div>

//       {/* Right Slider Section */}
//       <div className="flex-1 w-full max-w-md h-[500px] flex gap-4 overflow-hidden group">
        
//         {/* Main Sliding Image Container */}
//         <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg bg-gray-50">
//           <div 
//             className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.45,0,0.55,1)]"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {sliderImages.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`Specialist ${idx}`}
//                 className="w-full h-full object-cover flex-shrink-0"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Peek Section (Fixed Next Image) */}
//         <div className="w-16 rounded-l-2xl overflow-hidden opacity-40 hover:opacity-100 transition-opacity duration-500">
//            <div 
//             className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.45,0,0.55,1)]"
//             style={{ transform: `translateX(-${((currentIndex + 1) % sliderImages.length) * 100}%)` }}
//           >
//             {sliderImages.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt="Next Peek"
//                 className="w-full h-full object-cover flex-shrink-0 grayscale"
//               />
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Specialists;

import React, { useState, useEffect } from 'react';

const Specialists: React.FC = () => {
  const originalImages = [
    "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/specialist1.jpg",
    "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/specialist2.jpg",
    "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/b33117b6b9b04a37edd7db4d86a66526c1cf0d23.jpg",
    "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/ab14fc8f7124e629be03348854f66c06394ac76f.jpg",
    "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/b33117b6b9b04a37edd7db4d86a66526c1cf0d23.jpg"
  ];

  // 1. Create a circular array by adding the first image to the end
  const sliderImages = [...originalImages, originalImages[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // 2. This effect handles the "Snap Back" to the start without animation
  useEffect(() => {
    if (currentIndex === sliderImages.length - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false); // Turn off animation
        setCurrentIndex(0);        // Jump to real first image
      }, 1000); // Match this with your CSS duration (1000ms)

      return () => clearTimeout(timer);
    }
  }, [currentIndex, sliderImages.length]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 bg-white font-sans">
      
      {/* Left Content Section */}
      <div className="flex-1 space-y-6">
        <div className="inline-block px-6 py-2 border border-[#D1A7D1] rounded-full">
          <span className="text-[#A36BA3] font-medium text-sm">
            20+ specialists
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1a1a1a] leading-tight">
          From experienced dentists to <br />
          certified ceramists, every <br />
          member of our team is committed <br />
          to delivering the best results with <br />
          precision, artistry, and care.
        </h1>
      </div>

      {/* Right Slider Section */}
      <div className="flex-1 w-full max-w-md h-[500px] flex gap-4 overflow-hidden group">
        
        {/* Main Sliding Image Container */}
        <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg bg-gray-50">
          <div 
            className="flex h-full"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              // 3. Toggle transition on/off dynamically
              transition: isTransitioning ? 'transform 1000ms cubic-bezier(0.45, 0, 0.55, 1)' : 'none'
            }}
          >
            {sliderImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Specialist ${idx}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Peek Section (Infinite logic applied here too) */}
        <div className="w-16 rounded-l-2xl overflow-hidden opacity-40 hover:opacity-100 transition-opacity duration-500">
           <div 
            className="flex h-full"
            style={{ 
              transform: `translateX(-${((currentIndex + 1) % sliderImages.length) * 100}%)`,
              transition: isTransitioning ? 'transform 1000ms cubic-bezier(0.45, 0, 0.55, 1)' : 'none'
            }}
          >
            {sliderImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Next Peek"
                className="w-full h-full object-cover flex-shrink-0 grayscale"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Specialists;