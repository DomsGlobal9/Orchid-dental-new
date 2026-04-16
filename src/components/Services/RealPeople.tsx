import React from 'react';

const RealPeople: React.FC = () => {
  const cases = [
    {
      title: "Natural Smile Enhancement",
      desc: "Advanced porcelain veneers",
      img: "src/assets/images/natural-smile.png"
    },
    {
      title: "Complete Smile Makeover",
      desc: "Full aesthetic transformation",
      img: "src/assets/images/complete-smile.jpg"
    },
    {
      title: "Implant Restoration",
      desc: "Seamless tooth replacement",
      img: "src/assets/images/implant-smile.jpg"
    }
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-[#A36BA3] uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Patient Transformations
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1D2B53] leading-tight">
            Real people, <br />
            <span className="text-[#A36BA3]">real cases</span>
          </h2>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {cases.map((item, index) => (
            <div key={index} className="flex flex-col text-left">
              {/* Image Container with large rounded corners */}
              <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 shadow-sm">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Labels */}
              <div className="px-2">
                <h3 className="text-[#1D2B53] text-xl font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm font-light uppercase tracking-wide">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RealPeople;