import React from 'react'

const DentalTourismDesc = () => {
   return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-sans text-[#4A314D]">
      {/* Top Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          What is Dental Tourism?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
          Dental tourism offers the opportunity to receive high-quality dental treatments while traveling. At Orchid Dental Care, we combine advanced dental care with a comfortable and welcoming experience—providing
           international patients with affordable, world-class treatments and a confident smile.
        </p>
      </div>

      {/* Image Section with Decorative Border */}
      <div className="relative mb-16 group">
        {/* The Purple Decorative Frame */}
        <div className="absolute -top-4 -right-4 w-full h-full border-[12px] border-[#fff] rounded-2xl -z-10 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4" />
        
        {/* Main Image Container */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="src/assets/images/new-img1.png" // Replace with your actual image path
            alt="Smiling patient at dental clinic"
            className="w-full h-[500px] object-cover min-h-[300px] md:min-h-[500px]"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Why choose Dental Tourism at Orchid Dental Care?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
         Choose dental tourism at Orchid Dental Care for expert care, modern technology,
          and a seamless experience. Our dedicated team ensures personalized treatment planning, comfortable procedures, and complete support throughout your visit—helping you achieve excellent results while enjoying your travel journey.
        </p>
      </div>
    </section>
  );
}

export default DentalTourismDesc
