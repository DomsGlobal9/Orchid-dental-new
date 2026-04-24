

import React from 'react';

const Howwework: React.FC = () => {
  const features = [
    {
      iconUrl: "src/assets/images/howweworkicon.png",
      
      title: "Comfort & Care",
      desc: "We prioritize your comfort with compassionate care, personalized treatments & supportive."
    },
    {
      iconUrl: "src/assets/images/howweworkicon.png",
     
      title: "Advanced Technology",
      desc: "Utilizing cutting-edge technology for accurate diagnostics, effective treatments, and better."
    },
    {
      iconUrl: "src/assets/images/howweworkicon.png",
      
      title: "Sterilization & Safety",
      desc: "Ensuring top-notch sterilization & safety protocols for a clean, secure healthcare"
    }
  ];

  return (
    <div className="bg-[#F8F0F8] py-16 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Column */}
        <div className="flex-1">
          <div className="inline-flex items-center px-4 py-1 border border-[#9D6C9D] rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D187D1] mr-2"></span>
            <span className="text-[#D187D1] text-sm font-medium">How we work</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-[#5D3E5D] leading-tight uppercase mb-8 max-w-md">
            How We Working Deliver Exceptional Healthcare
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white/20">
            <img 
              src="src/assets/images/howwework.jpg" 
              alt="Dental procedure" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col justify-center gap-10">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-6 group">
              
              {/* Icon */}
              <div className="flex-shrink-0 relative w-24 h-24">
                <img 
                  src={item.iconUrl} 
                  alt={`${item.title} icon`} 
                  className="w-full h-full object-contain"
                />
               
              </div>

              {/* Text */}
              <div className="pt-2">
                <h3 className="text-xl font-serif text-[#1a1a1a] mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg max-w-sm">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Howwework;