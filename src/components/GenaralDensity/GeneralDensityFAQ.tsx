import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const GeneralDensityFAQ: React.FC = () => {
  const s = [
    "Dental Check Up & Cleaning", "Dentures",
    "Dental Fillings", "Mouth Guards",
    "Dental Bridge", "Emergency Dentistry",
    "Dental Crown", "Dental Anxiety",
    "Wisdom Teeth Removal", "Preventative & Family Dentistry",
    "Root Canal Treatment"
  ];

  return (
    <div className="w-full bg-white py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {s.map((t, i) => (
          <div 
            key={i}
            className="group flex items-center justify-between p-5 bg-white border border-gray-50 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            {/* Treatment Name */}
            <h3 className="text-base md:text-lg font-serif text-[#1D2B53] uppercase tracking-wide">
              {t}
            </h3>

            {/* Orchid Circle Icon */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#9D6C9D] text-[#9D6C9D] group-hover:bg-[#9D6C9D] group-hover:text-white transition-colors duration-300">
              <ArrowUpRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralDensityFAQ;