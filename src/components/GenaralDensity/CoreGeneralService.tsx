import React from 'react';

const CoreGeneralService: React.FC = () => {
  const s = [
    {
      n: "1. Preventive Screenings & Exams",
      d: "The best way to treat a dental problem is to catch it before it starts. During your general consultation, we perform:",
      l: ["Routine Check-ups: A thorough look at teeth, gums, and existing restorations (like fillings or crowns).", "Oral Cancer Screenings: A quick, painless, yet vital check for any signs of abnormalities in the soft tissues.", "Gum Health Assessments: Monitoring for early signs of gingivitis or periodontal disease."],
      i: "src/assets/images/Core1.jpg"
    },
    {
      n: "2. Professional Cleanings",
      d: "Even with perfect brushing habits, tartar can build up in hard-to-reach areas. Our professional cleanings remove these deposits, preventing cavities and bad breath, and leaving your smile feeling refreshed and polished.",
      i: "src/assets/images/Core2.jpg"
    },
    {
      n: "3. Tooth-Colored Fillings",
      d: "If a cavity does develop, we use high-quality, BPA-free composite resins. Unlike old silver fillings, these are shaded to match your natural tooth color, restoring strength and aesthetics without anyone noticing you had work done.",
      i: "src/assets/images/Core3.jpg"
    },
    {
      n: "4. Root Canal Therapy",
      d: "When a tooth is deeply infected, a root canal is often the best way to save it. Using modern techniques and local anesthesia, we ensure the process is as comfortable and routine as a standard filling, removing pain and preserving your natural tooth structure.",
      i: "src/assets/images/Core4.jpg"
    },
    {
      n: "5. Tooth Extractions",
      d: "While our priority is always to save your natural teeth, sometimes an extraction is necessary for your overall health—such as in the case of impacted wisdom teeth or severe crowding. We provide gentle, precise extractions with a focus on quick recovery.",
      sub: "Advanced Diagnostics: We utilize Digital Radiography (X-rays) to gain a clear view of what lies beneath the surface. This allows us to see between teeth and below the gum line with significantly less radiation than traditional methods, ensuring your safety and an accurate diagnosis.",
      i: "src/assets/images/Core5.jpg"
    }
  ];

  return (
    <div className="bg-white text-black py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-24">
        <h2 className="text-center text-[#A36BA3] text-2xl md:text-3xl font-medium mb-16 uppercase tracking-widest">
          Our Core General Services
        </h2>

        {s.map((v, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
            {/* Image Container */}
            <div className="flex-1 w-full">
              <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3]">
                <img src={v.i} alt={v.n} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 space-y-4 text-left">
              <h3 className="text-[#A36BA3] text-2xl font-medium tracking-wide">
                {v.n}
              </h3>
              <p className="text-gray-400 text-sm md:text-xl leading-relaxed">
                {v.d}
              </p>
              {v.l && (
                <ul className="space-y-3 pt-2">
                  {v.l.map((l, k) => (
                    <li key={k} className="flex gap-2 text-gray-400 text-md leading-relaxed">
                      <span className="text-[#A36BA3]">•</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              )}
              {v.sub && (
                <div className="pt-4 space-y-2">
                  <h4 className="text-gray-300 font-medium text-sm tracking-wide">Advanced Diagnostics</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.sub}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreGeneralService;