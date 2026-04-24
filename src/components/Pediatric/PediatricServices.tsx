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
    title: "Preventive Dental Care for Kids",
    description: "Regular check-ups and cleanings help keep your child’s teeth healthy and cavity-free. Early preventive care ensures strong teeth and good oral habits.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Kids+Dental+Care"
  },
  {
    id: 2,
    title: "Cavity Treatment for Children",
    description: "Children are more prone to cavities due to diet and oral habits. Gentle treatments help restore teeth and prevent further decay in a comfortable way.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Kids+Cavity"
  },
  {
    id: 3,
    title: "Growth & Development Monitoring",
    description: "Monitoring your child’s dental growth helps detect alignment or bite issues early, ensuring timely treatment and a healthy, well-developed smile.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Kids+Smile"
  }
];


const PediatricServices = () => {
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

export default PediatricServices
