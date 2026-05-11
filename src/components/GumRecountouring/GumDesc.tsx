// import React from 'react'

const GumDesc = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-sans text-[#4A314D]">
      {/* Top Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          What is Gum Recontouring?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
         Gum recontouring is a cosmetic dental procedure that reshapes and balances your gum line to improve the appearance of your smile. At Orchid Dental Care, we use advanced techniques to gently remove excess
          gum tissue or correct uneven gums—creating a more proportionate and attractive smile.
        </p>
      </div>

      {/* Image Section with Decorative Border */}
      <div className="relative mb-16 group">
        {/* The Purple Decorative Frame */}
        <div className="absolute -top-4 -right-4 w-full h-full border-[12px] border-[#fff] rounded-2xl -z-10 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4" />
        
        {/* Main Image Container */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/new-img1.png" // Replace with your actual image path
            alt="Smiling patient at dental clinic"
            className="w-full h-[500px] object-cover min-h-[300px] md:min-h-[500px]"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
         Why choose Gum Recontouring at Orchid Dental Care?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
          Choose gum recontouring at Orchid Dental Care for expert care, precision technology, and beautiful results. Our skilled dentists ensure a comfortable and minimally invasive procedure,
           helping you achieve a well-defined, confident smile with long-lasting aesthetics.
        </p>
      </div>
    </section>
  );
}

export default GumDesc
