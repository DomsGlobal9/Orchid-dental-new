import React from 'react';

const OrchidExperiences: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-20 px-4 font-sans text-[#4a5568]">
      <div className="max-w-[1100px] w-full space-y-12">
        
        {/* --- Header Section --- */}
        <div className="text-center space-y-2">
          <h2 className="text-[42px] font-serif text-[#1a202c] leading-tight">
            The Orchid <span className="text-[#9B669E] italic font-light">Experience</span>
          </h2>
          <p className="text-[18px] text-[#718096] font-medium opacity-80">
            A curated collection of our sanctuary and transformative artistry
          </p>
        </div>

        {/* --- Masonry Gallery Grid --- */}
        <div className="flex gap-4">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4 w-1/4">
            <img src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/feature3.jpg" alt="Sanctuary" className="w-full h-[280px] object-cover rounded-sm" />
            <img src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/feature4.jpg" alt="Smile" className="w-full h-[160px] object-cover rounded-sm" />
            <img src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/feature5.jpg" alt="Equipment" className="w-full h-[140px] object-cover rounded-sm" />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 w-1/4">
            <img src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/feature6.jpg" alt="Dental Room" className="w-full h-[180px] object-cover rounded-sm" />
            <img src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/Core1.jpg" alt="Detail" className="w-full h-[160px] object-cover rounded-sm" />
            <img src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/Core3.jpg" alt="Implant" className="w-full h-[350px] object-cover rounded-sm" />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 w-1/4">
            <img src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/Core4.jpg" alt="Procedure" className="w-full h-[180px] object-cover rounded-sm" />
            <img src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/Core5.jpg" alt="Teeth Detail" className="w-full h-[200px] object-cover rounded-sm" />
            <img src="src/assets/images/DentalCheckups.png" alt="Close up" className="w-full h-[140px] object-cover rounded-sm" />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 w-1/4">
            <img src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/GeneralDensity.jpg" alt="B&W Equipment" className="w-full h-[160px] object-cover grayscale rounded-sm" />
            <img src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/clinic.jpg" alt="Consultation" className="w-full h-[180px] object-cover rounded-sm" />
            <img src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/Discover.png" alt="Action Shot" className="w-full h-[310px] object-cover rounded-sm" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrchidExperiences;