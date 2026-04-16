import React from 'react';
import {Link} from 'react-router-dom'
const OurServices: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content Section */}
        <div className="flex-1 space-y-6">
          {/* Breadcrumb style text */}
          <nav className="text-sm font-medium mb-4">
            <Link to="/" className="text-gray-400 hover:text-[#9D6C9D]">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#9D6C9D]">Our Services</span>
          </nav>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1D2B53] uppercase tracking-wide">
            Our Services
          </h2>

          {/* Descriptive Paragraphs */}
          <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
            <p>
              A smile plays a vital role in our daily lives, reflecting our confidence and well-being. 
              At Orchid Dental Care, we are dedicated to enhancing your oral health and 
              aesthetic results, tailoring each treatment to your unique goals and clinical needs. 
              Our experienced team uses the latest technology and personalized care plans to 
              ensure your comfort and satisfaction throughout every visit. From routine 
              cleanings to advanced restorative procedures, we strive to help you achieve a 
              healthy, radiant smile that lasts a lifetime.
            </p>
            
            <p>
              At Orchid Dental Care, we offer a wide range of services designed to meet your 
              oral health needs. Whether you need preventive care like cleanings and exams, 
              cosmetic treatments such as teeth whitening and veneers, or restorative 
              procedures including crowns and implants, our skilled team is here to help. We 
              combine advanced technology with personalized treatment plans to ensure you 
              receive the best care possible. Our goal is to provide you with lasting dental health 
              and a smile you can be proud of.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 w-full">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-sm">
            <img 
              src="src/assets/images/ourservices.jpg" 
              alt="Dental professional performing a procedure" 
              className="w-full h-full object-cover aspect-[4/3] md:aspect-square"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurServices;