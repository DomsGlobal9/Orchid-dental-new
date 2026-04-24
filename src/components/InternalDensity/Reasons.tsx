import React from 'react';
// import { CheckCircle2 } from 'lucide-react';

const Reasons: React.FC = () => {
  const f = [
    {
      t: "Dentistry for the whole family",
      d: "Kids, teens, adults — we will provide excellent personalised treatment and quality dental care for all ages.",
      i: "src/assets/images/Dentist-family.png"
    },
    {
      t: "Patient comfort is #1",
      d: "We excel at dental excellence — enjoy a safe and comfortable visit.",
      i: "src/assets/images/patient-comfort.png"
    },
    {
      t: "Modern, seamless treatments",
      d: "High-tech care whether your teeth need a polish or a total smile makeover.",
      i: "src/assets/images/patient-tratment.png"
    },
    {
      t: "Multiple languages spoken",
      d: "We are able to fluently communicate with patients that speak English, Vietnamese, Mandarin, Cantonese & Teochew.",
      i: "src/assets/images/multi-language.png"
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl text-[#3D233D] text-center font-medium max-w-2xl mx-auto mb-20 leading-tight">
          There’s a reason patients choose us as their preferred dentist.
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-24">
          {f.map((v, i) => (
            <div key={i} className="flex items-start gap-6">
              {/* Icon Container with Checkmark */}
              <div className="relative shrink-0">
                <img src={v.i} alt={v.t} className="w-25 h-25 object-contain" />
               
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#1D2B53]">
                  {v.t}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                  {v.d}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Large Feature Image */}
        <div className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
          <img 
            src="src/assets/images/reasons-image.png" 
            alt="Dental procedure close-up" 
            className="w-full h-[400px] md:h-[600px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Reasons;