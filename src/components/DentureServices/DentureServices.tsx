import React from 'react'
import { Clock } from 'lucide-react';
const DentureServices = () => {
const s = [
  {
    n: "1. Consultation & Oral Assessment",
    d: "Our experienced dentists evaluate your oral condition to determine the best denture solution for you. This includes:",
    l: [
      "Oral Examination: Checking gums, remaining teeth, and overall oral health.",
      "Fit Assessment: Evaluating jaw structure and bite alignment.",
      "Treatment Planning: Recommending complete or partial dentures based on your needs."
    ],
    i: "src/assets/images/work6.jpg",
    t: "20 mins"
  },
  {
    n: "2. Custom Denture Design & Fabrication",
    d: "We create dentures that are comfortable, natural-looking, and tailored to your smile.",
    l: [
      "Impressions & Measurements: Taking accurate molds for a precise fit.",
      "Natural Appearance: Matching shape, size, and color to your facial features.",
      "High-Quality Materials: Ensuring durability and long-lasting comfort."
    ],
    i: "src/assets/images/work4.jpg",
    t: "30 mins"
  },
  {
    n: "3. Fitting & Aftercare Support",
    d: "Once your dentures are ready, we ensure they fit perfectly and guide you on proper care.",
    l: [
      "Denture Fitting: Adjusting for comfort, stability, and proper function.",
      "Usage Guidance: Tips for eating, speaking, and daily wear.",
      "Ongoing Care: Follow-up visits for adjustments and long-term maintenance."
    ],
    i: "src/assets/images/work5.jpg",
    t: "20 mins"
  }
];

  return (
    <div className="bg-white pt-4 md:pt-8 pb-20 px-6 overflow-hidden">
      
      <div className='text-center mb-10 md:mb-14'>
        <h2 className="text-4xl md:text-5xl font-['Marcellus_SC'] text-slate-900 tracking-tight">
          TYPES OF DENTURE <span className="text-[#874280]">SERVICES</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-16 md:space-y-32">
        {s.map((v, i) => (
          <div key={i} className="relative flex flex-col md:flex-row md:items-center">
            
            <div className={`w-full md:w-3/5 aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
              <img src={v.i} alt={v.n} className="w-full h-full object-cover grayscale-[0.2]" />
            </div>

            <div className={`
              mt-6 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 
              w-full md:w-1/2 bg-white p-8 md:p-12 
              rounded-[2rem] shadow-xl 
              ${i % 2 === 0 ? 'md:left-0' : 'md:right-0'}
            `}>
              <h3 className="text-[#3D233D] text-xl md:text-2xl font-serif uppercase tracking-tight mb-4 md:mb-6">
                {v.n}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-light">
                {v.d}
              </p>
              {v.l && (
                <ul className="space-y-3 md:space-y-4 mb-6">
                  {v.l.map((p, k) => (
                    <li key={k} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                      <span className="text-[#A36BA3] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#A36BA3] shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Time Duration Section */}
              <div className="pt-4 border-t border-gray-100 flex  items-center  gap-2 text-[#874280] font-medium text-sm md:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Duration: {v.t}</span>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DentureServices
