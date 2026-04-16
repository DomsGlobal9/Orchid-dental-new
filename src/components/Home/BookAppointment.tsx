import React from 'react';

const BookAppointment: React.FC = () => {
  return (
    <section className="w-full bg-[#FDF2FA] py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h2 
          className="text-[#3D3D3D] text-3xl md:text-5xl mb-3 tracking-wide"
          style={{ 
            fontFamily: "Marcellus SC", 
            textTransform: 'uppercase',
            fontWeight: 400 
          }}
        >
          Ready to begin your smile journey?
        </h2>

        {/* Sub-text */}
        <p className="text-[#1a1a1a] text-lg md:text-xl mb-10 font-normal">
          Book your consultation today and discover the Orchid difference.
        </p>

        {/* Button Wrapper */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Action */}
          <button 
            type="button"
            className="bg-[#41253D] hover:bg-[#52304d] text-white px-8 py-3 rounded-md text-sm font-medium transition-all"
          >
            Book Appointment
          </button>

          {/* Secondary Action */}
          <button 
            type="button"
            className="flex items-center gap-2 border border-[#D8B4D8] bg-transparent hover:bg-[#f8e8f8] text-[#B38DB3] px-8 py-3 rounded-md text-sm font-medium transition-all"
          >
            {/* Phone Icon SVG */}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call us
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;