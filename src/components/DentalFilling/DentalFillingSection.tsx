import React from 'react'
import { Calendar, Phone } from 'lucide-react';
const DentalFillingSection:React.FC = () => {
  return (
      <section className="w-full bg-white flex flex-col md:flex-row items-stretch font-sans">
          
          {/* Left Content Section */}
          <div className="flex-1 py-16 px-6 md:px-12 lg:px-24 flex flex-col justify-center">
            <div className="max-w-xl space-y-6">
              
              {/* Breadcrumb */}
              <nav className="text-[10px] md:text-xs font-light flex flex-wrap items-center gap-2 text-gray-400 uppercase tracking-wider">
                <span>Home</span>
                <span>/</span>
                <span>Our Treatments</span>
                <span>/</span>
                <span>General Dentistry</span>
                <span>/</span>
                <span className="text-[#A35DA3]">Dental checkup & cleaning</span>
              </nav>
    
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A35DA3]/30 bg-[#FDF2F9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A35DA3]"></span>
                <span className="text-[10px] font-medium text-[#A35DA3] uppercase tracking-widest">Preventive Care</span>
              </div>
    
              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1D2B53] leading-[1.1]">
                Dental  
                <span className="text-[#A35DA3]"> Filling</span>
              </h1>
    
              {/* Description */}
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Comprehensive dental fillings that restore strength, protect your teeth, and keep your smile healthy, natural, and long-lasting.
              </p>
    
              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-2xl md:text-3xl font-medium text-[#A35DA3]">45 min</p>
                  <p className="text-xs text-gray-400 uppercase tracking-tighter mt-1">Duration</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-medium text-[#A35DA3]">6 mo</p>
                  <p className="text-xs text-gray-400 uppercase tracking-tighter mt-1">Frequency</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-medium text-[#A35DA3]">10K+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-tighter mt-1">Happy Customers</p>
                </div>
              </div>
    
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-8">
                <button className="flex items-center gap-3 px-8 py-4 bg-[#3D233D] text-white rounded-2xl font-medium hover:bg-[#2A182A] transition-all duration-300 shadow-xl shadow-purple-900/10">
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </button>
                <a 
                  href="tel:13003276453" 
                  className="flex items-center gap-3 px-8 py-4 border border-gray-400 rounded-2xl text-[#1D2B53] font-medium hover:bg-gray-50 transition-all duration-300"
                >
                  <Phone size={18} className="text-[#A35DA3]" />
                  <span>1300 327 6453</span>
                </a>
              </div>
    
            </div>
          </div>
    
          {/* Right Image Section */}
          <div className="flex-1 relative min-h-[500px] md:min-h-0">
            <img 
              src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/dental-filling-main 1.png" 
              alt="Dentist performing checkup" 
              className="w-full h-[900px] object-cover"
            />
          </div>
    
        </section>
    
  );
}

export default DentalFillingSection
