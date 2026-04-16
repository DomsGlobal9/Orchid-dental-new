import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const Discover: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[500px] font-sans">
      
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <img 
          src="src/assets/images/Discover.png" 
          alt="Dental consultation showing dental models" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2 bg-[#FDF2F9] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-xl space-y-8">
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#5D335D] leading-tight">
            Discover our <br />
            personalised approach <br />
            <span className="font-normal text-[#4A264A]">to your smile</span>
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            
            {/* Outline Call Button */}
            <button className="flex items-center gap-2 px-8 py-3 border border-[#5D335D] rounded-full text-[#5D335D] font-medium hover:bg-[#5D335D] hover:text-white transition-all duration-300">
              <Phone size={18} />
              <span>Call Us</span>
            </button>

            {/* Filled Consult Button */}
            <button className="flex items-center gap-2 px-8 py-3 bg-white text-[#1D2B53] rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300">
              <span>Book a Free Consult</span>
              <ArrowRight size={18} />
            </button>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Discover;