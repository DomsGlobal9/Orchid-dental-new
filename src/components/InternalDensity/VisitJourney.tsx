import React from 'react';
import { Clock } from 'lucide-react';

const VisitJourney: React.FC = () => {
  const s = [
    {
      i: "1",
      t: "Welcome & Review",
      d: "We start by discussing your dental history, current concerns, and overall health to personalize your care",
      m: "5 min"
    },
    {
      i: "2",
      t: "Comprehensive Exam",
      d: "Our dentist performs a thorough examination of your teeth, gums, bite, and oral tissues",
      m: "15 min"
    },
    {
      i: "3",
      t: "Digital X-Rays",
      d: "State-of-the-art imaging reveals what's beneath the surface, catching issues early",
      m: "10 min"
    },
    {
      i: "4",
      t: "Professional Cleaning",
      d: "Gentle removal of plaque, tartar buildup, and surface stains for a fresh, clean feeling",
      m: "20 min"
    },
    {
      i: "5",
      t: "Polish & Protect",
      d: "We finish with a smooth polish and fluoride treatment to strengthen your enamel",
      m: "10 min"
    },
    {
      i: "6",
      t: "Personalized Plan",
      d: "Receive tailored recommendations and schedule your next visit before you leave",
      m: "5 min"
    }
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-[#F3E8F3] text-[#A36BA3] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl text-[#0F172A] font-bold mt-6 mb-4">
            Your Visit <span className='text-[#A36BA3]'>Journry</span> 
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Experience a seamless, comfortable appointment designed around your needs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {s.map((v, k) => (
            <div 
              key={k} 
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Step Number */}
              <div className="w-12 h-12 bg-[#A36BA3] text-white flex items-center justify-center rounded-xl font-bold text-lg mb-6 shadow-[0_4px_14px_rgba(163,107,163,0.4)]">
                {v.i}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                {v.t}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {v.d}
              </p>

              {/* Duration */}
              <div className="flex items-center gap-2 text-[#A36BA3] font-medium text-xs">
                <Clock className="w-4 h-4" />
                <span>{v.m} duration</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisitJourney;