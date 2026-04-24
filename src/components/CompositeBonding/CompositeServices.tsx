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
    title: "Chipped or Cracked Teeth",
    description: "Minor chips or cracks can affect both the look and strength of your teeth. Composite bonding restores the shape and structure, giving a smooth and natural finish.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Chipped+Teeth"
  },
  {
    id: 2,
    title: "Gaps Between Teeth",
    description: "Unwanted gaps can impact your smile and confidence. Composite bonding is a quick and effective way to close spaces and create a more even appearance.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Teeth+Gap"
  },
  {
    id: 3,
    title: "Discolored or Uneven Teeth",
    description: "Stains, discoloration, or uneven edges can make your smile look less uniform. Composite bonding enhances color and contour for a brighter, more balanced smile.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Discolored+Teeth"
  }
];


const CompositeServices = () => {
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
              <a 
                href="#" 
                className="text-[#a855f7] font-medium underline underline-offset-4 decoration-1 hover:text-[#9333ea] transition-colors w-fit"
              >
                Know more
              </a>
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

export default CompositeServices