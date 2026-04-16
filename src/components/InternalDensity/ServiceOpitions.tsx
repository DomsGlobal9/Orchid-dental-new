import React from 'react';

const ServiceOptions: React.FC = () => {
  const s = [
    {
      n: "1. Comprehensive Oral Examination",
      d: "Our experienced dentists conduct a meticulous assessment of your entire mouth. This includes:",
      l: [
        "Visual Inspection: Checking for signs of decay, gum disease, and wear.",
        "Oral Cancer Screening: A vital check of your tongue, throat, and soft tissues for any abnormalities.",
        "Digital Diagnostics: Using low-radiation X-rays to see what's happening beneath the surface, such as bone health and hidden cavities."
      ],
      i: "src/assets/images/opition1.jpg"
    },
    {
      n: "2. Professional Ultrasonic Cleaning (Scaling)",
      d: "Our hygienists use specialized tools to remove tartar and plaque.",
      l: [
        "Ultrasonic Scaling: Vibrations and water flow gently lift away stubborn deposits.",
        "Manual Precision: Fine hand instruments ensure every surface of the tooth is clean, especially along the gum line."
      ],
      i: "src/assets/images/opition2.jpg"
    },
    {
      n: "3. Polishing & Fluoride Treatment",
      d: "After cleaning, we polish your teeth using a professional-grade paste to remove surface stains from coffee, tea, or food. We may also apply a fluoride treatment to strengthen your enamel against future acid attacks.",
      i: "src/assets/images/opition3.jpg"
    }
  ];

  return (
    <div className="bg-white py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-32">
        {s.map((v, i) => (
          <div key={i} className="relative flex flex-col md:flex-row md:items-center">
            
            {/* Background Image Container */}
            <div className={`w-full md:w-3/5 aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
              <img src={v.i} alt={v.n} className="w-full h-full object-cover grayscale-[0.2]" />
            </div>

            {/* Content Card */}
            {/* Mobile: Below image | MD: Overlapping absolute position */}
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
                <ul className="space-y-3 md:space-y-4">
                  {v.l.map((p, k) => (
                    <li key={k} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                      <span className="text-[#A36BA3] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#A36BA3] shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceOptions;