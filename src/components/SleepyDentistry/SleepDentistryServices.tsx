// import React from 'react'

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Anxiety-Free Dental Experience",
    description: "For patients who feel nervous or fearful about dental visits, sleep dentistry helps you stay calm and relaxed throughout the procedure, ensuring a stress-free experience.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Relaxed+Care"
  },
  {
    id: 2,
    title: "Comfort During Long Procedures",
    description: "Sleep dentistry is ideal for lengthy or complex treatments, allowing you to remain comfortable and at ease while your dentist completes the procedure efficiently.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Comfort+Treatment"
  },
  {
    id: 3,
    title: "Pain-Free Treatment Experience",
    description: "With advanced sedation techniques, sleep dentistry minimizes discomfort and ensures a painless dental experience, helping you receive the care you need without worry.",
    image: "https://placehold.co/400x400/f0e6e4/white?text=Pain+Free"
  }
];


const SleepDentistryServices = () => {
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

export default SleepDentistryServices
