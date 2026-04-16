import React from 'react';

const InternalDescription: React.FC = () => {
  return (
    <div className="w-full bg-white py-12 px-6 md:px-12 lg:px-24 font-sans text-left">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-[#3D233D]">
            Dental Check-Ups & Cleaning: Your Foundation for a Healthy Smile
          </h2>
          <p className="text-gray-500 text-base md:text-2xl leading-relaxed font-Manrope font-light">
            Regular dental check-ups and professional cleanings are the most important steps 
            you can take to maintain your oral health and prevent costly procedures down the 
            line. At Orchid Dental Care, we provide thorough, gentle care designed to keep 
            your teeth sparkling and your gums disease-free.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#3D233D]">
            The Importance of Regular Visits
          </h3>
          <p className="text-gray-500 text-base md:text-2xl leading-relaxed font-light">
            Even with diligent brushing and flossing at home, plaque can harden into tartar 
            (calculus) in hard-to-reach areas. If left untreated, this can lead to cavities, 
            gingivitis, and eventually tooth loss. A professional check-up every six months 
            ensures that your mouth stays in peak condition.
          </p>
        </div>

      </div>
    </div>
  );
};

export default InternalDescription;