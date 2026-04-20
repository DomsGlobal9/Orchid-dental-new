// import React from 'react';

// const DifferentLocations: React.FC = () => {
//   // URLs for the background images
//   const locations = [
//     {
//       name: 'London',
//       url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop',
//     },
//     {
//       name: 'Paris',
//       url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
//     },
//     {
//       name: 'New York',
//       url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop',
//     },
//     {
//       name: 'Russia',
//       url: 'https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?q=80&w=1000&auto=format&fit=crop',
//     },
//   ];

//   return (
//     <div className="w-full h-[600px] flex overflow-hidden group">
//       {locations.map((loc, index) => (
//         <div
//           key={index}
//           className="relative flex-1 h-full cursor-pointer transition-all duration-700 ease-in-out hover:flex-[3] border-r border-white/10 last:border-r-0"
//           style={{
//             backgroundImage: `url(${loc.url})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           {/* Dark Overlay - matches the exact smoky tint in your image */}
//           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

//           {/* Location Name - Centered exactly like the image */}
//           <div className="relative h-full w-full flex items-center justify-center">
//             <h2 className="text-white text-4xl md:text-5xl font-medium tracking-wide drop-shadow-lg pointer-events-none">
//               {loc.name}
//             </h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DifferentLocations;

import React from 'react';

const DifferentLocations: React.FC = () => {
  // URLs for the background images
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
    /* Removed all padding (px/py) and ensured no top margin */
    <div className="w-full h-[600px] flex overflow-hidden group m-0 p-0">
      {locations.map((loc, index) => (
        <div
          key={index}
          className="relative flex-1 h-full cursor-pointer transition-all duration-700 ease-in-out hover:flex-[3] border-r border-white/10 last:border-r-0"
          style={{
            backgroundImage: `url(${loc.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay - matches the exact smoky tint in your image */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Location Name - Centered exactly like the image */}
          <div className="relative h-full w-full flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl font-medium tracking-wide drop-shadow-lg pointer-events-none">
              {loc.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DifferentLocations;