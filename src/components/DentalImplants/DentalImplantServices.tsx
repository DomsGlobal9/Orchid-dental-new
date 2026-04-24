import React from 'react'

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Single Tooth Replacement",
    description: "Missing a single tooth can affect both function and appearance. Dental implants provide a strong, natural-looking replacement that restores your smile and chewing ability.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Single+Implant"
  },
  {
    id: 2,
    title: "Multiple Teeth Replacement",
    description: "When several teeth are missing, implants can support bridges to restore multiple teeth securely. This helps improve bite strength and prevents shifting of surrounding teeth.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Multiple+Implants"
  },
  {
    id: 3,
    title: "Full Mouth Restoration",
    description: "For patients missing most or all teeth, dental implants can support full-arch restorations. This provides a stable, long-lasting solution for a complete and confident smile.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Full+Mouth+Implants"
  }
];



const DentalImplantServices = () => {
   return (
    <section className="bg-gray-50/50 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center justify-between bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01] ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                {service.description}
              </p>
              <p
                
                className="text-[#a855f7] font-medium  decoration-1 hover:text-[#9333ea] transition-colors w-fit"
              >
                 5 mins duration
              </p>
            </div>

            {/* Image Container */}
            <div className="w-full md:w-[40%] mt-8 md:mt-0">
              <div className="aspect-square bg-[#f1e7e4] rounded-[2rem] flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DentalImplantServices
