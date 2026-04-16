import React from 'react';

// Use standard Lucide icons or your own image URLs
import { Heart, Target, Users, Award } from 'lucide-react';

const OurMission: React.FC = () => {
  const values = [
    {
      title: "Compassionate Care",
      description: "We treat every patient with empathy, understanding their unique needs and concerns.",
      icon: <Heart className="w-8 h-8 text-white" strokeWidth={1.5} />
    },
    {
      title: "Excellence",
      description: "Committed to delivering the highest quality dental care using advanced techniques.",
      icon: <Target className="w-8 h-8 text-white" strokeWidth={1.5} />
    },
    {
      title: "Patient-Centered",
      description: "Your comfort, safety, and satisfaction are at the heart of everything we do.",
      icon: <Users className="w-8 h-8 text-white" strokeWidth={1.5} />
    },
    {
      title: "Innovation",
      description: "Continuously adopting cutting-edge technology to provide superior treatment outcomes.",
      icon: <Award className="w-8 h-8 text-white" strokeWidth={1.5} />
    }
  ];

  return (
    <div className="bg-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">
            <span className="text-[#1a1a1a]">OUR </span>
            <span className="text-[#9D6C9D] italic">MISSION </span>
            <span className="text-[#1a1a1a]">& </span>
            <span className="text-[#1a1a1a]">CORE </span>
            <span className="text-[#9D6C9D]">VALUES</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Guided by principles that put patients first and drive continuous improvement
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {/* Icon Container (The Plum Rounded Square) */}
              <div className="w-20 h-20 bg-[#4A2C4A] rounded-[24px] flex items-center justify-center mb-8 shadow-sm">
                {/* If you have image URLs for icons, replace {item.icon} with 
                    <img src={item.imageUrl} className="w-10 h-10" /> */}
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-[#9D6C9D] font-serif text-xl mb-4 uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base max-w-[240px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurMission;