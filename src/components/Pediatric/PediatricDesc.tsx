import React from 'react'

const PediatricDesc = () => {
   return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-sans text-[#4A314D]">
      {/* Top Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          What is Pediatric Dentistry?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
         Pediatric dentistry focuses on the oral health of children, from infancy through adolescence. At Orchid Dental Care, we provide gentle and child-friendly dental care using advanced techniques to ensure healthy
          teeth and gums—helping your child develop strong oral habits and a bright, confident smile.
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
          Why choose Pediatric Dentistry at Orchid Dental Care?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
          Choose pediatric dentistry at Orchid Dental Care for compassionate care, a comfortable environment, and expert treatment for your child. Our experienced dentists ensure a stress-free and positive experience,
           helping children feel at ease while building a foundation for lifelong oral health.
        </p>
      </div>
    </section>
  );
}

export default PediatricDesc
