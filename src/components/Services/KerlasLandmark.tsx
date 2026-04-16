import React from 'react';

const KerlasLandmark: React.FC = () => {
  return (
    <div className="bg-[#3D233D] py-16 px-6 md:px-12 lg:px-24 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Text Content Section */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            kerala's <span className="text-[#A36BA3] font-serif italic">1st</span> Landmark for <br />
            Invisalign Excellence
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
            Orchid Dental Care is proud to be recognized among the 
            Top 1% of Invisalign Providers globally. Led by our award-
            winning orthodontic team, we combine artistic smile 
            design with clinical precision to deliver world-class 
            results.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="flex-1 w-full max-w-lg">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_0_50px_rgba(255,255,255,0.15)] text-gray-800">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3D233D]"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3D233D]"
                />
              </div>

              <input 
                type="email" 
                placeholder="Email*" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3D233D]"
              />

              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3D233D]"
              />

              <input 
                type="text" 
                placeholder="Postcode* (To identify the nearest clinic)" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3D233D]"
              />

              <select className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-[#3D233D] text-gray-500">
                <option>Which Treatment Are You Interested In?</option>
                <option>Invisalign</option>
                <option>Braces</option>
                <option>General Checkup</option>
              </select>

              <p className="text-[10px] text-gray-400 text-center">
                privacy policy Data collected in line with our
              </p>

              <button 
                type="submit" 
                className="w-full bg-[#3D233D] text-white py-4 rounded-xl font-medium uppercase tracking-widest hover:bg-[#2A182A] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KerlasLandmark;