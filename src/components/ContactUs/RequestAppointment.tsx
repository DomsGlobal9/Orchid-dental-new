import React from 'react';
import { Link } from 'react-router-dom';
const RequestAppointment: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white font-sans text-[#4a5568]">
      
      {/* --- Top Header Section --- */}
      <div className="py-16 text-center space-y-4">
        <h2 className="text-[48px] font-serif text-[#1a202c] tracking-tight">
          Contact Us
        </h2>
        <p className="text-[18px] text-[#718096] font-light">
          Experience exceptional care in our serene, luxurious environment
        </p>
      </div>

      {/* --- Split Hero Section --- */}
      <div className="w-full flex flex-col md:flex-row min-h-[500px]">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <img 
            src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/request-appointment.jpg" 
            alt="Consultation with dentist" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: CTA Box */}
        <div className="w-full md:w-1/2 bg-[#58335e] flex items-center justify-center p-12 md:p-20">
          <div className="max-w-[500px] space-y-8">
            <div className="space-y-2">
              <span className="text-white/70 text-[13px] font-medium tracking-[0.2em] uppercase">
                Home - Request an Appointment
              </span>
              <h3 className="text-[52px] font-serif text-white leading-[1.1]">
                Request an <br /> Appointment
              </h3>
            </div>
            
            <p className="text-white/80 text-[18px] leading-relaxed font-light">
              Schedule your appointment at Orchid Dental Care in Los Angeles today! 
              Experienced, compassionate dental team ready to help.
            </p>

            <Link to="">
            <button className="mt-4 px-10 py-4 border border-white text-white text-[14px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#58335e] transition-all duration-300 rounded-sm">
              Book Your Visit
            </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RequestAppointment;