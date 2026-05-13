import React from 'react';

const Ourlocations: React.FC = () => {
  const locations = [
    {
      name: 'London',
      url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop',
    },
    {
      name: 'Paris',
      url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
    },
    {
      name: 'New York',
      url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop',
    },
    {
      name: 'Russia',
      url: 'https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-white py-12 md:py-20 px-4 md:px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-['MarcellusSC'] text-[#1a1a1a] mb-4 md:mb-6 uppercase tracking-tight">
            Our 4  <span className='text-[#A953A0]'>Locations</span> 
          </h2>
          <p className="text-gray-500 text-base md:text-xl font-light">
            Convenly located across the city for your ease
          </p>
        </div>

        {/* Locations Container */}
        <div className="w-full h-auto md:h-[600px] flex flex-col md:flex-row overflow-hidden group gap-4 md:gap-0">
          {locations.map((loc, index) => (
            <div
              key={index}
              className={`
                relative 
                h-[250px] md:h-full 
                w-full 
                cursor-pointer 
                transition-all 
                duration-700 
                ease-in-out 
                /* Desktop Only Expansion */
                md:flex-1 md:hover:flex-[3] 
                /* Borders */
                md:border-r border-white/20 last:border-r-0
                rounded-xl md:rounded-none
                overflow-hidden
              `}
              style={{
                backgroundImage: `url(${loc.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/20 transition-colors duration-500" />

              {/* Location Name */}
              <div className="relative h-full w-full flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-5xl font-medium tracking-wide drop-shadow-lg pointer-events-none uppercase">
                  {loc.name}
                </h2>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Ourlocations;