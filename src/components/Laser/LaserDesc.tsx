import React from 'react'

const LaserDesc = () => {
   return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-sans text-[#4A314D]">
      {/* Top Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          What is Laser Treatment?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
          Laser treatment is an advanced dental technique that uses focused light energy to perform precise and minimally invasive procedures. At Orchid Dental Care, we use modern laser technology to treat gum issues,
           reshape tissues, and enhance oral health—ensuring a comfortable and efficient experience.
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
          Why choose Laser Treatment at Orchid Dental Care?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
         Choose laser treatment at Orchid Dental Care for advanced care, precision technology, and faster healing. Our skilled dentists ensure a gentle, pain-free
          procedure with minimal discomfort, helping you achieve healthier gums and a more confident smile with quick recovery.
        </p>
      </div>
    </section>
  );
}

export default LaserDesc
