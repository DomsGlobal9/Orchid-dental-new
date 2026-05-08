import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const GeneralDensityHome: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 font-sans text-[#1D2B53]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content Column */}
        <div className="flex-1 space-y-6">
          {/* Breadcrumb */}
          <nav className="text-xs md:text-sm font-light flex items-center gap-2 text-gray-400">
            <span>Home</span>
            <span>/</span>
            <span>Our Treatments</span>
            <span>/</span>
            <span className="text-[#A36BA3]">General Dentistry</span>
          </nav>

          {/* Page Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif uppercase tracking-tight text-[#1D2B53]">
            General Dentistry
          </h1>

          {/* Description Text */}
          <div className="space-y-6 text-gray-500 leading-relaxed text-sm md:text-base">
            <p>
              A smile plays a vital role in our daily lives, influencing our confidence and 
              overall well-being. At Orchid Dental Care, we are dedicated to enhancing your 
              oral health and aesthetic results, tailoring treatments to your unique goals 
              and clinical needs. Our comprehensive general dentistry services include 
              routine cleanings, preventive care, cavity treatment, and restorative 
              procedures to keep your smile healthy and bright.
            </p>
            <p>
              General dentistry focuses on maintaining overall oral health by preventing and 
              treating common dental issues such as tooth decay, gum disease, and enamel 
              erosion. To protect your smile, it's important to practice good oral hygiene, 
              including regular brushing and flossing, avoid excessive sugary foods and 
              drinks, and schedule routine dental check-ups. We emphasize personalized care 
              to ensure your comfort and satisfaction throughout every visit, helping you 
              maintain a radiant and healthy smile for life.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="tel:13003976483" 
              className="flex items-center gap-2 px-6 py-3 border border-[#A36BA3] rounded-full text-[#A36BA3] font-medium hover:bg-[#A36BA3] hover:text-white transition-all duration-300"
            >
              <Phone size={18} />
              <span>1300 397 6483</span>
            </a>
            <button 
              className="flex items-center gap-2 px-8 py-3 bg-[#3D233D] text-white rounded-full font-medium hover:bg-[#2A182A] transition-all duration-300 shadow-lg shadow-purple-100"
            >
              <span>Book Enquiry</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="flex-1 w-full max-w-2xl">
          <div className="relative rounded-[2rem] overflow-hidden shadow-sm aspect-[4/5]">
            <img 
              src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/GeneralDensity.jpg" 
              alt="Dentist performing general dentistry checkup" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default GeneralDensityHome;