// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const ServicesFaq: React.FC = () => {
//   // Service list based on the provided image
//   const services = [
//     "General Dentistry",
//     "Cosmetic Dentistry",
//     "Laser",
//     "Pediatric",
//     "Dental Tourism"
//   ];

//   return (
//     <div className="w-full bg-white py-12 px-6 font-sans">
//       <div className="max-w-5xl mx-auto space-y-4">
//         {services.map((service, i) => (
//           <div 
//             key={i}
//             className="group flex items-center justify-between p-6 bg-white border border-gray-50 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 cursor-pointer"
//           >
//             {/* Service Name in Serif Uppercase */}
//             <h3 className="text-lg md:text-xl font-serif text-[#1a1a1a] uppercase tracking-wider">
//               {service}
//             </h3>

//             {/* Icon Container with Plum Border */}
//             <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#9D6C9D] text-[#9D6C9D] group-hover:bg-[#9D6C9D] group-hover:text-white transition-colors duration-300">
//               <ArrowRight size={18} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesFaq;


import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServicesFaq: React.FC = () => {
  // Service list with associated links
  const services = [
    { name: "General Dentistry", slug: "/general-density" },
    { name: "Cosmetic Dentistry", slug: "/cosmetic-dentistry" },
    { name: "Laser", slug: "/Laser" },
    { name: "Pediatric", slug: "/pediatric" },
    { name: "Dental Tourism", slug: "/dental-tourism" }
  ];

  return (
    <div className="w-full bg-white py-12 px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-4">
        {services.map((service, i) => (
          <a 
            key={i} 
            href={service.slug} 
            className="block no-underline"
          >
            <div 
              className="group flex items-center justify-between p-6 bg-white border border-gray-50 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Service Name in Serif Uppercase */}
              <h3 className="text-lg md:text-xl font-serif text-[#1a1a1a] uppercase tracking-wider">
                {service.name}
              </h3>

              {/* Icon Container with Plum Border */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#9D6C9D] text-[#9D6C9D] group-hover:bg-[#9D6C9D] group-hover:text-white transition-colors duration-300">
                <ArrowRight size={18} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServicesFaq;