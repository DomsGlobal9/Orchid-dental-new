import React from 'react'

const DentalBridgeServices:React.FC = () => {
 const s = [
  {
    n: "1. Tooth Preparation & Evaluation",
    d: "Our dentists carefully assess and prepare the adjacent teeth to support your dental bridge. This includes:",
    l: [
      "Tooth Reshaping: Gently reshaping the supporting teeth (abutments) to ensure a perfect fit for the bridge.",
      "Impression Taking: Creating precise molds or digital scans for accurate bridge fabrication.",
      "Temporary Bridge: Placing a temporary restoration to protect your teeth while your custom bridge is being made."
    ],
    i: "src/assets/images/bridge-evalution.png",
    t: "20 mins"
  },
  {
    n: "2. Custom Dental Bridge Fabrication",
    d: "Your dental bridge is carefully designed to match your natural teeth in shape, size, and color.",
    l: [
      "Lab Precision: Advanced materials are used to create a strong, natural-looking bridge.",
      "Shade Matching: Ensuring the bridge blends seamlessly with your existing teeth.",
      "Durability Focus: Crafted to restore chewing function and long-term performance."
    ],
    i: "src/assets/images/bridge-fabricats.png",
    t: "30 mins"
  },
  {
    n: "3. Bridge Placement & Final Adjustment",
    d: "Once your custom bridge is ready, we securely place and adjust it for optimal comfort and function.",
    l: [
      "Secure Placement: The bridge is fixed onto the prepared teeth using dental cement.",
      "Bite Adjustment: Ensuring proper alignment for comfortable chewing and speaking.",
      "Final Polishing: Smoothing and refining for a natural look and feel."
    ],
    i: "src/assets/images/bridge-adjustment.png",
    t: "20 mins"
  }
];

  return (
    <div className="bg-white pt-4 md:pt-8 pb-20 px-6 overflow-hidden">
      
      <div className='text-center mb-10 md:mb-14'>
        <h2 className="text-4xl md:text-5xl font-['Marcellus_SC'] text-slate-900 tracking-tight">
          TYPES OF DENTAL <span className="text-[#874280]">BRIDGE</span>
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

export default DentalBridgeServices
