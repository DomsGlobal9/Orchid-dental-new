import React from 'react';

const UnderstandingProfessional: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8 font-sans text-[#4a5568]">
      <div className="max-w-[944px] w-full space-y-12">
        
        {/* --- Top Image --- */}
        <img
          className="w-full h-[404.57px] rounded-[19.67px] opacity-100 object-cover mx-auto"
          src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/feature1.jpg"
          alt="Professional Whitening"
        />

        {/* --- Understanding Section --- */}
        <section className="space-y-8">
          <p className="text-[18px] leading-relaxed opacity-90">
            Professional teeth whitening has become one of the most sought-after cosmetic dental procedures, and 
            for good reason. The science behind professional whitening treatments is both fascinating and highly 
            effective, delivering results that far surpass over-the-counter solutions. In this comprehensive guide, we'll 
            explore everything you need to know about achieving a radiant, confident smile through professional 
            whitening.
          </p>

          <div className="space-y-4">
            <h2 className="text-[32px] font-semibold text-[#1a202c]">
              Understanding Professional Whitening
            </h2>
            <p className="text-[18px] leading-relaxed opacity-90">
              Professional whitening treatments use concentrated bleaching agents, typically hydrogen peroxide or 
              carbamide peroxide, in carefully controlled concentrations. These agents penetrate the enamel and break 
              down stain molecules, resulting in a noticeably whiter smile. The process is both safe and effective when 
              administered by trained dental professionals who understand the science behind each treatment.
            </p>
          </div>
        </section>

        {/* --- Middle Image Section --- */}
        <div className="flex flex-col items-center">
          <img
            className="w-full h-auto rounded-[19.67px] shadow-sm object-cover"
            src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/Uderstanding-image.png"
            alt="Professional Whitening Comparison and Procedure"
          />
          <p className="mt-4 text-[#718096] text-[14px] text-center italic">
            Professional-grade equipment ensures optimal whitening results
          </p>
        </div>

        {/* --- Why Professional Treatments Excel Section --- */}
        <section className="mt-20 space-y-8">
          <h2 className="text-[32px] font-semibold text-[#1a202c]">
            Why Professional Treatments Excel
          </h2>
          <p className="text-[18px] leading-relaxed opacity-90">
            While drugstore whitening products contain similar ingredients, professional treatments offer several key
            advantages that make them the superior choice for those seeking dramatic and lasting results:
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E9D8FD] mr-4 mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-[#805AD5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#1a202c]">Higher Concentration</h3>
                <p className="text-[16px] leading-relaxed opacity-80 mt-1">
                  Professional-grade whitening agents are significantly stronger, delivering faster and more dramatic results that
                  can lighten teeth by several shades in just one session.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E9D8FD] mr-4 mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-[#805AD5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#1a202c]">Custom Application</h3>
                <p className="text-[16px] leading-relaxed opacity-80 mt-1">
                  Dentists create custom-fitted trays that ensure even distribution of the whitening gel across all teeth, preventing
                  uneven results and protecting sensitive gum tissue.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E9D8FD] mr-4 mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-[#805AD5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#1a202c]">Professional Supervision</h3>
                <p className="text-[16px] leading-relaxed opacity-80 mt-1">
                  Your dentist monitors the process to ensure optimal results while minimizing sensitivity and addressing any
                  concerns in real-time.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E9D8FD] mr-4 mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-[#805AD5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#1a202c]">Longer-Lasting Effects</h3>
                <p className="text-[16px] leading-relaxed opacity-80 mt-1">
                  Professional treatments typically last much longer than over-the-counter alternatives, often maintaining their
                  brightness for years with proper care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Quote Section --- */}
        <blockquote className="mt-16 border-l-4 border-[#805AD5] pl-6 py-4">
          <p className="text-[20px] leading-relaxed italic text-[#1a202c]">
            "Professional whitening isn't just about aesthetics—it's about confidence. A brighter smile can
            transform how you feel about yourself and how you interact with the world."
          </p>
          <footer className="mt-4 text-[16px] text-[#805AD5] font-medium">
            &mdash; Dr. Sarah Johnson
          </footer>
        </blockquote>

        <div className="flex flex-col items-center justify-center bg-white p-8 font-sans text-[#4a5568]">
      <div className="max-w-[944px] w-full space-y-12">
        
        {/* --- Header Section --- */}
        <section className="space-y-6">
          <h2 className="text-[36px] font-serif text-[#1a202c]">
            The Treatment Process
          </h2>
          <p className="text-[18px] leading-relaxed opacity-90">
            A typical professional whitening session involves several carefully orchestrated steps designed to 
            maximize results while ensuring your comfort and safety throughout the procedure:
          </p>
        </section>

        {/* --- Image Section --- */}
        <div className="flex flex-col items-center">
          <img
            className="w-full h-[100vh] rounded-[19.67px] object-cover"
            src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/Treatement-process.jpg" 
            alt="Dental treatment room"
          />
          <p className="mt-4 text-[#718096] text-[14px] text-center italic">
            Initial consultation sets the foundation for your whitening journey
          </p>
        </div>

        {/* --- Steps Section --- */}
        <section className="space-y-8 pt-4">
          {[
            {
              num: "1",
              title: "Initial Consultation",
              desc: "Your dentist examines your teeth, discusses your whitening goals, and determines the best approach for your unique needs."
            },
            {
              num: "2",
              title: "Preparation",
              desc: "The teeth are thoroughly cleaned to remove any plaque or debris that could interfere with the whitening process."
            },
            {
              num: "3",
              title: "Protection",
              desc: "Gums and soft tissues are carefully protected with a barrier to prevent irritation from the whitening agents."
            },
            {
              num: "4",
              title: "Application",
              desc: "The whitening gel is applied to your teeth in controlled amounts, ensuring even coverage across all visible surfaces."
            },
            {
              num: "5",
              title: "Activation",
              desc: "In some cases, a special LED light may be used to enhance the whitening process and accelerate results."
            },
            {
              num: "6",
              title: "Monitoring",
              desc: "Your dentist monitors the treatment to ensure optimal results and makes adjustments as needed."
            }
          ].map((step) => (
            <div key={step.num} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#9B669E] flex items-center justify-center text-white font-bold text-sm">
                {step.num}
              </div>
              <div className="space-y-1">
                <h3 className="text-[18px] font-bold text-[#1a202c]">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-relaxed opacity-85">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </section>

      </div>
       </div>


       <div className="flex flex-col items-center justify-center bg-white p-8 font-sans text-[#4a5568]">
      <div className="max-w-[944px] w-full space-y-12">
        
        {/* --- What to Expect Section --- */}
        <section className="space-y-6">
          <h2 className="text-[36px] font-serif text-[#1a202c]">
            What to Expect After Treatment
          </h2>
          <p className="text-[18px] leading-relaxed opacity-90">
            Most patients experience some degree of tooth sensitivity following professional whitening, but this is 
            typically temporary and subsides within a few days. Your dentist may recommend special toothpaste or 
            other products to minimize discomfort. Understanding what to expect helps you prepare for the healing 
            process and maintain your stunning results.
          </p>
        </section>

        {/* --- Results Image Section --- */}
        <div className="flex flex-col items-center">
          <img
            className="w-full h-[100vh] rounded-[19.67px] object-cover shadow-sm"
            src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/expect-image.jpg" 
            alt="Radiant confident smile"
          />
          <p className="mt-4 text-[#718096] text-[14px] text-center italic">
            The results speak for themselves—a radiant, confident smile
          </p>
        </div>

        {/* --- Maintaining Your Results Section --- */}
        <section className="mt-16 space-y-8">
          <h2 className="text-[36px] font-serif text-[#1a202c]">
            Maintaining Your Results
          </h2>
          <p className="text-[18px] leading-relaxed opacity-90">
            To keep your smile bright and beautiful for years to come, follow these essential guidelines that will help 
            you protect your investment and maintain your stunning results:
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Avoid Staining Foods",
                desc: "Stay away from coffee, tea, red wine, and dark-colored foods for at least 48 hours after treatment."
              },
              {
                title: "Excellent Oral Hygiene",
                desc: "Maintain regular brushing and flossing to prevent new stains from forming."
              },
              {
                title: "Regular Cleanings",
                desc: "Schedule professional dental cleanings every six months to maintain your brilliant smile."
              },
              {
                title: "Touch-Up Treatments",
                desc: "Consider periodic touch-ups as recommended by your dentist to keep your smile at its brightest."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F3E8FF] flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-[#9B669E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#1a202c] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed opacity-85 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Pro Tip Box --- */}
        <div className="mt-12 bg-[#F9F5F9] border border-[#F3E8FF] rounded-[16px] p-8">
          <p className="text-[16px] leading-relaxed text-[#4a5568]">
            <span className="font-bold text-[#1a202c]">Pro Tip:</span> Using a straw when drinking beverages that might stain your teeth can help minimize direct contact and preserve your whitening results longer.
          </p>
        </div>

      </div>
    </div>

{/* --- Section 1: Text Content (No Background Color) --- */}
      <div className="flex flex-col items-center justify-center bg-white pt-20 pb-10 px-8 font-sans text-[#4a5568]">
        <div className="max-w-[944px] w-full space-y-6 text-center md:text-left">
          <h2 className="text-[36px] font-serif text-[#1a202c]">
            Is Professional Whitening Right for You?
          </h2>
          <p className="text-[18px] leading-relaxed opacity-90">
            Professional whitening is an excellent option for most people looking to enhance their smile. However, it's 
            important to have realistic expectations and understand that results can vary based on the type and 
            severity of staining. Schedule a consultation with our expert team at Orchid Dental Care to determine if 
            professional whitening is the right choice for you. We'll evaluate your dental health, discuss your goals, and 
            create a customized treatment plan to help you achieve the radiant smile you deserve.
          </p>
        </div>
      </div>

      {/* --- Section 2: Author Card (With Background Color) --- */}
      <div className="flex flex-col items-center justify-center bg-[#F8FAFC] py-20 px-8 font-sans text-[#4a5568]">
        <div className="max-w-[944px] w-full">
          <div className="flex justify-center">
            <div className="bg-white rounded-[24px] shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 max-w-[800px] w-full border border-gray-50">
              
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-100"
                  src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/specialist2.jpg" 
                  alt="Dr. Sarah Johnson"
                />
              </div>

              {/* Author Info */}
              <div className="space-y-3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-[#9B669E] font-bold text-[13px] uppercase tracking-wider">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  About the Author
                </div>
                
                <h3 className="text-[28px] font-serif text-[#1a202c]">
                  Dr. Sarah Johnson
                </h3>
                
                <p className="text-[#4a5568] font-medium text-[16px]">
                  Cosmetic Dentist
                </p>
                
                <p className="text-[16px] leading-relaxed opacity-85 pt-2">
                  Dr. Sarah Johnson is a board-certified cosmetic dentist with over 15 years of experience 
                  transforming smiles. She specializes in advanced whitening techniques and smile design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>





      </div>
    </div>
  );
};

export default UnderstandingProfessional;