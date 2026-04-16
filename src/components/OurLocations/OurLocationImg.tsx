import React from 'react';

const OurLocationImg: React.FC = () => {
  // Replace this URL with your actual image path
  const bgImageUrl = "src/assets/images/ourlocation.png";

  return (
    <div className="w-full px-4 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative h-[300px] md:h-[400px] w-full overflow-hidden shadow-2xl"
          style={{
            // Creates the unique asymmetrical rounded corners seen in high-end UI
            borderTopRightRadius: '80px',
            borderBottomLeftRadius: '80px',
            backgroundImage: `url(${bgImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay - Using a mix of blue-black and purple-tint to match Orchid's branding */}
          <div className="absolute inset-0 bg-[#0a0a0b]/60 backdrop-blur-[1px]" />

          {/* Centered Content */}
          <div className="relative h-full w-full flex items-center justify-center">
            <h1 className="text-white text-5xl md:text-7xl font-light tracking-tight">
              Our <span className="font-semibold">Locations</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocationImg;