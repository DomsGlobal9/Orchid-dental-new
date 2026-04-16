import React from 'react';
import { Check } from 'lucide-react';

const HealthyBenefits: React.FC = () => {
  const b = [
    "Early detection of oral cancer",
    "Prevent heart disease & stroke",
    "Reduce diabetes complications",
    "Stop gum disease progression",
    "Save thousands in future treatments",
    "Maintain fresh breath confidence"
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Content: Text and Benefits */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D2B53] leading-tight">
              Health Benefits <br />
              <span className="text-[#A36BA3]">Beyond Your Smile</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
              Regular dental checkups do more than keep your teeth clean—they 
              protect your overall health.
            </p>
          </div>

          <ul className="space-y-3">
            {b.map((v, i) => (
              <li key={i} className="flex items-center gap-4 bg-[#F9FAFB] p-4 rounded-xl border border-gray-50">
                <div className="w-6 h-6 rounded-full border border-[#A36BA3] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#A36BA3]" />
                </div>
                <span className="text-[#1D2B53] text-sm md:text-base font-medium">
                  {v}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content: Image and Floating Badge */}
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[600px]">
            <img 
              src="src/assets/images/HealthBenfits.png" 
              alt="Woman brushing teeth" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Badge */}
          {/* <div className="absolute -bottom-6 -left-6 md:left-10 bg-white p-4 md:p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-gray-50">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00C853] rounded-full flex items-center justify-center shrink-0">
              <Check className="text-white w-5 h-5 md:w-6 md:h-6 stroke-[3]" />
            </div>
            <div>
              <p className="text-[#1D2B53] font-bold text-sm md:text-base leading-tight">
                Preventive Care
              </p>
              <p className="text-gray-400 text-xs md:text-sm">
                Saves you money
              </p>
            </div>
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default HealthyBenefits;