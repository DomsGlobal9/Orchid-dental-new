import React from 'react';
import { Phone } from 'lucide-react'; // Import Lucide icons

const CallUs: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-[500px] font-sans text-white">
      
      {/* --- Left Side: Image --- */}
      <div className="w-full md:w-1/2 relative overflow-hidden bg-gray-100">
        <img 
          src="src/assets/images/callus.png" // Ensure this points to the dental model image
          alt="Dental Professional displaying personalized dental models" 
          className="w-full h-full object-cover"
        />
        {/* Subtle white border between image and plum box on larger screens */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-[2px] bg-white opacity-20"></div>
      </div>

      {/* --- Right Side: Text & Actions --- */}
      <div className="w-full md:w-1/2 bg-[#512c4e] flex flex-col items-center justify-center p-12 md:p-20 space-y-16">
        
        {/* Main Heading Text */}
        <div className="max-w-[600px] text-center md:text-left space-y-6">
          <h2 className="text-[36px] md:text-[42px] font-serif leading-snug tracking-wide">
            Discover our
          </h2>
          <h2 className="text-[36px] md:text-[42px] font-serif leading-snug tracking-wide">
            personalised approach
          </h2>
          <h2 className="text-[36px] md:text-[42px] font-serif leading-snug tracking-wide">
            to your smile
          </h2>
        </div>

        {/* Action Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          
          {/* Call Us Button - Translucent rounded outline */}
          <button className="flex items-center gap-3 px-10 py-4 border border-white/40 bg-white/5 rounded-full text-[16px] font-medium tracking-wide hover:bg-white/10 transition-colors">
            <Phone size={18} className="text-white/80" strokeWidth={1.5} />
            <span>Call Us</span>
          </button>

          {/* Book Consult Button - Solid white rounded filled */}
          <button className="flex items-center gap-3 px-10 py-4 bg-white text-[#512c4e] rounded-full text-[16px] font-bold tracking-wide hover:bg-gray-100 transition-colors shadow-lg">
            <span>Book a Free Consult</span>
            <span className="text-[20px] font-light">&rarr;</span>
          </button>
          
        </div>

      </div>
    </div>
  );
};

export default CallUs;