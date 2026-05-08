// import React from 'react'

import { CheckCircle2, Calendar, Phone } from 'lucide-react';

const GumHome = () => {
  return (
    <div className="relative min-h-[600px] mb-3 w-full mt-3 overflow-hidden bg-[#442140] font-sans text-white">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/new-img1.png" 
          alt="Background Aligner"
          className="h-full w-full object-cover"
        />
        
        {/* Your Specific Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(270.04deg, rgba(255, 255, 255, 0) 0.03%, #442140 99.97%)`
          }}
        />
      </div>
      
      {/* Content Container - Padding-left removed (px-0) and max-w-7xl kept for layout control */}
      <div className="relative z-10 mx-auto max-w-7xl px-0 py-24">
        {/* Inner wrapper set to w-full or lg:w-1/2 to keep text on the left half */}
        <div className="flex h-full w-full flex-col justify-center text-left lg:w-7/12">
          
          {/* Text Content - No left margin/padding here */}
          <div className="space-y-8 pl-0"> 
            <div className="space-y-4">
              <h1 className="font-serif text-5xl font-light tracking-wide uppercase md:text-7xl lg:leading-tight">
                Reshape your smile with <br /> 
                <span className="block font-bold">our gum recontouring.s</span>
              </h1>
              <p className="max-w-md text-lg font-light leading-relaxed text-gray-200">
                Experience a seamless smile correction treatment from the comfort of your home.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              {[
                "Transparent Pricing",
                "Digital Treatment Report",
                "0% EMI Available",
                "Experienced Doctors"
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-base font-medium text-gray-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center space-x-2 rounded-xl bg-white px-8 py-4 text-[#442140] transition-all hover:bg-gray-100">
                <Calendar className="h-5 w-5" />
                <span className="font-bold">Book Appointment</span>
              </button>
              
              <button className="flex items-center bg-white space-x-2 rounded-xl border-2 text-[#442140] border-white/40 bg-transparent px-8 py-4 transition-all hover:bg-white/10 backdrop-blur-md">
                <Phone className="h-5 w-5 " />
                <span className="font-semibold  text-black">1300 327 6453</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default GumHome
