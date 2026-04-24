// import React from 'react'

const ClearAlignerDesc = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-sans text-[#4A314D]">
      {/* Top Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          What are Clear Aligners?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
          Clear aligners offer a discreet and comfortable way to straighten your teeth. 
          At Orchid Dental Care, we use advanced technology to create custom aligners 
          that gradually shift your teeth into perfect alignment.
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
          Why choose Clear Aligner treatment at Orchid Dental Care?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
          Opt for clear aligner treatment at Orchid Dental Care for personalized care, 
          cutting-edge technology, and stunning results. Our expert orthodontists 
          ensure a comfortable, discreet journey to a perfect smile.
        </p>
      </div>
    </section>
  );
}

export default ClearAlignerDesc
