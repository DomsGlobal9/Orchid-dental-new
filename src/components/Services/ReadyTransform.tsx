// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const ReadyTransform: React.FC = () => {
//   return (
//     <section className="w-full bg-white py-24 px-6 flex flex-col items-center text-center font-sans">
//       <div className="max-w-3xl mx-auto space-y-8">
        
//         {/* Main Heading */}
//         <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Ma'] font-medium text-[#1D2B53] whitespace-nowrap  tracking-tight leading-tight">
//           Ready to transform 
//           <span className="text-[#A35DA3]"> your smile?</span>
//         </h2>

//         {/* Subtext Description */}
//         <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
//           Schedule a complimentary consultation with our specialists and 
//           discover your personalized treatment plan.
//         </p>

//         {/* Action Button */}
//         <div className="pt-4 flex justify-center">
//           <button className="bg-[#A35DA3] text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-[#8E4D8E] transition-all duration-300 shadow-lg shadow-purple-100 group">
//             <span className="text-base font-medium">Book your consultation</span>
//             <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ReadyTransform;


import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReadyTransform: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 flex flex-col items-center text-center font-sans">
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#1D2B53] md:whitespace-nowrap tracking-tight leading-tight">
          Ready to transform 
          <span className="text-[#A35DA3] block md:inline-block"> your smile?</span>
        </h2>

        {/* Subtext Description */}
        <p className="text-gray-500 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Schedule a complimentary consultation with our specialists and 
          discover your personalized treatment plan.
        </p>

        {/* Action Button */}
        <div className="pt-4 flex justify-center w-full sm:w-auto">
          <Link to="/contact-us">
          <button className="w-full sm:w-auto bg-[#A35DA3] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#8E4D8E] transition-all duration-300 shadow-lg shadow-purple-100 group">
            <span className="text-base font-medium">Book your consultation</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ReadyTransform;