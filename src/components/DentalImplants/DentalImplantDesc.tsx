import React from 'react'

const DentalImplantDesc:React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-sans text-[#4A314D]">
      {/* Top Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
         What are Dental Implants?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
          Dental implants are a permanent and reliable solution for replacing missing teeth. At Orchid Dental Care, we use advanced technology and high-quality materials
           to place implants that function like natural teeth—restoring your smile, strength, and confidence.
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
         Why choose Dental Implants at Orchid Dental Care?
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
          Choose dental implants at Orchid Dental Care for expert care, precision techniques, and long-lasting results. Our skilled dentists ensure a comfortable and seamless process, helping you
           regain full function and a natural-looking smile with durable, stable tooth replacement.
        </p>
      </div>
    </section>
  );
}

export default DentalImplantDesc
