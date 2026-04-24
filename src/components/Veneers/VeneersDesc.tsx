import React from 'react'

const VeneersDesc = () => {
   return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-sans text-[#4A314D]">
      {/* Top Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
         What are Dental Veneers?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
          Dental veneers offer a quick and effective way to enhance the appearance of your smile. At Orchid Dental Care, we use advanced technology and high-quality materials 
          to create custom veneers that cover imperfections like stains, chips, gaps, and uneven teeth—giving you a flawless, natural-looking smile.
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
          Why choose Veneers at Orchid Dental Care?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
          Choose veneer treatment at Orchid Dental Care for personalized care, precision craftsmanship, and stunning results. Our expert dentists ensure a comfortable and minimally
           invasive procedure, helping you achieve a brighter, more confident smile with long-lasting aesthetics.
        </p>
      </div>
    </section>
  );
}

export default VeneersDesc
