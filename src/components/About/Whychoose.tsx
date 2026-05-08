import React from 'react';

const Whychoose: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white font-sans">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content Column */}
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="text-[#5D3E5D] font-bold text-sm tracking-tight mb-4">
              Why Choose Our Dental Care
            </h3>
            <h1 className="text-4xl md:text-5xl font-serif text-[#9D6C9D] leading-tight uppercase tracking-wide">
              Exceptional Service With A <br /> Personal Touch
            </h1>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
              Choosing the right dental provider matters. We combine expert care, advanced
              technology, and a warm atmosphere to ensure every visit is comfortable,
              efficient, and tailored to your unique needs.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
            {/* Feature 1 */}
            <div>
              <h4 className="text-[#9D6C9D] font-serif text-lg mb-2 uppercase">Experienced Dental</h4>
              <p className="text-gray-500 leading-snug">Skilled care backed by years of trusted dental experience.</p>
            </div>
            {/* Feature 2 */}
            <div>
              <h4 className="text-[#9D6C9D] font-serif text-lg mb-2 uppercase">Advanced Technology</h4>
              <p className="text-gray-500 leading-snug">Modern tools ensure accurate and efficient treatments.</p>
            </div>
            {/* Feature 3 */}
            <div>
              <h4 className="text-[#9D6C9D] font-serif text-lg mb-2 uppercase">Personalized Treatment</h4>
              <p className="text-gray-500 leading-snug">Custom care plans made to fit your smile and lifestyle.</p>
            </div>
            {/* Feature 4 */}
            <div>
              <h4 className="text-[#9D6C9D] font-serif text-lg mb-2 uppercase">Family-Friendly</h4>
              <p className="text-gray-500 leading-snug">Welcoming space for kids, teens, adults, and seniors.</p>
            </div>
          </div>
        </div>

        {/* Right Image Column (Staggered Grid) */}
        <div className="flex-1 flex gap-4 h-[500px]">
          {/* Column with 2 stacked images */}
          <div className="flex flex-col gap-4 w-1/2">
            <div className="h-1/2 rounded-3xl overflow-hidden shadow-sm">
              <img 
                src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/Whychoose1.png" 
                alt="Patient smiling" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-1/2 rounded-3xl overflow-hidden shadow-sm">
              <img 
                src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/Whychoose2.png" 
                alt="Dentists at work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Column with 1 tall image */}
          <div className="w-1/2 pt-12">
            <div className="h-full rounded-3xl overflow-hidden shadow-sm">
              <img 
                src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/Whychoose3.jpg" 
                alt="Dental chair office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Whychoose;