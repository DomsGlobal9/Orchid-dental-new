// import React, { useState } from 'react';
// import { Search, TrendingUp } from 'lucide-react';

// const Dentalcare: React.FC = () => {
//   const [s, t] = useState("All");
//   const c = [
//     "All", 
//     "Dental Care Tips", 
//     "Cosmetic Dentistry", 
//     "Oral Health", 
//     "Technology", 
//     "Patient Stories"
//   ];

//   const { hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       // Find the element with id="blog-main"
//       const element = document.getElementById(hash.replace('#', ''));
//       if (element) {
//         // Scroll to it smoothly or instantly
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       // If no hash, just go to the very top
//       window.scrollTo(0, 0);
//     }
//   }, [hash]);


//   return (
//     <section id='blog-main' className="w-full bg-white py-24 px-6 font-sans">
//       <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
//         {/* Top Badge */}
//         <div className="flex items-center gap-2 bg-[#FDF4FF] text-[#A36BA3] px-4 py-1.5 rounded-full border border-[#F5D0FE] mb-8">
//           <TrendingUp className="w-4 h-4" />
//           <span className="text-xs font-semibold tracking-wide">Latest Insights</span>
//         </div>

//         {/* Header Text */}
//         <h2 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6 tracking-tight">
//           Dental Care <span className='text-[#A36BA3]'>Insights</span> 
//         </h2>
//         <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
//           Expert advice, latest trends, and valuable insights to help you achieve 
//           and maintain your perfect smile.
//         </p>

//         {/* Search Bar */}
//         <div className="w-full max-w-3xl relative mb-10">
//           <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
//             <Search className="h-5 w-5 text-gray-400" />
//           </div>
//           <input
//             type="text"
//             className="w-full bg-white border border-gray-100 py-5 pl-14 pr-6 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A36BA3]/20 transition-all text-gray-700 placeholder-gray-400"
//             placeholder="Search articles..."
//           />
//         </div>

//         {/* Category Filters */}
//         <div className="flex flex-wrap justify-center gap-3">
//           {c.map((v, i) => (
//             <button
//               key={i}
//               onClick={() => t(v)}
//               className={`px-6 py-3 rounded-full text-sm font-medium transition-all border ${
//                 s === v
//                   ? "bg-[#3D233D] text-white border-[#3D233D]"
//                   : "bg-white text-gray-600 border-gray-100 hover:border-[#A36BA3] hover:text-[#A36BA3]"
//               }`}
//             >
//               {v}
//             </button>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Dentalcare;


import React, { useState, useEffect } from 'react'; // Added useEffect
import { useLocation } from 'react-router-dom';     // Added useLocation
import { Search, TrendingUp } from 'lucide-react';

const Dentalcare: React.FC = () => {
  // Renamed 's' and 't' to 'selectedCategory' and 'setSelectedCategory' for clarity
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = [
    "All", 
    "Dental Care Tips", 
    "Cosmetic Dentistry", 
    "Oral Health", 
    "Technology", 
    "Patient Stories"
  ];

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'instant' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <section id='blog-main' className="w-full bg-white py-24 px-6 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <div className="flex items-center gap-2 bg-[#FDF4FF] text-[#A36BA3] px-4 py-1.5 rounded-full border border-[#F5D0FE] mb-8">
          <TrendingUp className="w-4 h-4" />
          <span className="text-xs font-semibold tracking-wide">Latest Insights</span>
        </div>

        {/* Header Text */}
        <h2 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6 tracking-tight">
          Dental Care <span className='text-[#A36BA3]'>Insights</span> 
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Expert advice, latest trends, and valuable insights to help you achieve 
          and maintain your perfect smile.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-3xl relative mb-10">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full bg-white border border-gray-100 py-5 pl-14 pr-6 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A36BA3]/20 transition-all text-gray-700 placeholder-gray-400"
            placeholder="Search articles..."
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((v, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(v)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all border ${
                selectedCategory === v
                  ? "bg-[#3D233D] text-white border-[#3D233D]"
                  : "bg-white text-gray-600 border-gray-100 hover:border-[#A36BA3] hover:text-[#A36BA3]"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dentalcare;