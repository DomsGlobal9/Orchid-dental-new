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
    title: "Discolored or Stained Teeth",
    description: "Teeth can become stained or discolored over time due to food, drinks, or aging. Veneers help cover these imperfections and restore a bright, natural-looking smile.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Discolored+Teeth"
  },
  {
    id: 2,
    title: "Chipped or Worn Teeth",
    description: "Minor chips, cracks, or worn edges can affect the appearance of your smile. Veneers provide a smooth, even surface to restore shape and enhance aesthetics.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Chipped+Teeth"
  },
  {
    id: 3,
    title: "Gaps and Uneven Teeth",
    description: "Veneers can effectively close small gaps and improve the appearance of uneven or slightly misaligned teeth, giving you a more balanced and confident smile.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Uneven+Teeth"
  }
];



const VeneersServices = () => {
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

export default VeneersServices