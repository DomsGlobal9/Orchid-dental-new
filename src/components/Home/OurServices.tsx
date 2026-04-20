import React from 'react';

// Rename the import to avoid conflict with the component name
import OurServicesImg from '../../assets/images/OurService.png';

const OurServices: React.FC = () => {
  const solutions = [
    'Implant-Supported Crowns',
    'Implant-Supported Bridges',
    'Full-Arch Restoration',
    'Bone Grafting for Implants',
  ];

  return (
    <section className="bg-white text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h4 className="text-[#874280] uppercase tracking-widest text-3xl mb-2">
          Our Services
        </h4>
        <h2 className="text-4xl md:text-5xl font-serif">
          <span className="font-['Marcellus_SC']  text-[#3d2b3d]">COMPREHENSIVE</span>{' '}
          <span className="text-[#3d2b3d]">DENTAL CARE</span>
        </h2>

        <p className="text-[#000000] text-2xl mt-4 max-w-2xl mx-auto">
          From preventive care to advanced cosmetic procedures, we offer complete solutions for your dental health
        </p>
      </div>

      {/* Main Content Card */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch bg-[#d31ac033] overflow-hidden rounded-sm relative">
        
        {/* Left Side: Image Container */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src={OurServicesImg}
            alt="Dental Implant Illustration"
            className="w-full h-full object-cover"
          />
          {/* Overlapping Text Label */}
          <div className="absolute bottom-4 right-[-20%] md:right-[-18%] z-10 text-right leading-none hidden md:block">
            <h3 className="text-5xl lg:text-7xl font-light font-sans text-white">
              De<span className="text-[#A953A0]">ntal</span>
            </h3>
            <h3 className="text-5xl lg:text-7xl font-light font-sans text-white">
              Impl<span className="text-[#A953A0]">ants</span>
            </h3>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#F5E6F0]">
          <h4 className="text-3xl  font-['Marcellus_SC'] text-[#A953A0] mb-6 ">Our solutions :</h4>
          
          <p className="text-[#000000] leading-relaxed text-2xl mb-8 max-w-md">
            Rediscover the confidence of a full smile with our advanced implant 
            solutions. Tailored for comfort and durability, our treatments are 
            designed to restore both function and facial aesthetics.
          </p>

          <ul className="space-y-4 mb-12">
            {solutions.map((item, index) => (
              <li key={index} className="text-[#000000] text-xl font-Manrope flex items-start">
                <span className="mr-2 font-medium">{index + 1}.</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto self-end md:self-end">
            <button className="bg-white text-[#a855f7] px-8 py-3 rounded-md font-medium hover:bg-zinc-200 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Mobile Heading */}
        <div className="md:hidden p-8 pt-0 text-center bg-[#1a131a]">
            <h3 className="text-4xl font-light text-white">Dental <span className="text-[#a855f7]">Implants</span></h3>
        </div>
      </div>
    </section>
  );
};

export default OurServices;