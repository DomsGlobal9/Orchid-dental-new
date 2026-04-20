import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    "How often should I visit the dentist?",
    "What should I do in a dental emergency?",
    "Do you offer services for kids?",
    "What are my options for replacing missing teeth?",
    "Is teeth whitening safe?",
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Headings */}
        <div className="md:w-1/3">
          <p className="text-[#5A3A5A] font-bold text-sm uppercase tracking-wider mb-4">
            Everything You Need to Know
          </p>
          <h2 
            className="text-[#D187D1] text-4xl md:text-4xl leading-tight"
            style={{ fontFamily: 'serif', textTransform: 'uppercase' }}
          >
            Frequently Asked <br /> Questions
          </h2>
        </div>

        {/* Right Side: Accordion List */}
        <div className="md:w-2/3 border-t border-[#E5E7EB]">
          {faqData.map((question, index) => (
            <div 
              key={index} 
              className="border-b border-[#E5E7EB] transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className="text-[#5E6778] text-lg font-medium group-hover:text-[#1B2A4E] transition-colors">
                  {question}
                </span>
                <ChevronDown 
                  className={`text-[#4B5563] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                  size={20} 
                />
              </button>
              
              {/* Expandable content area */}
              {openIndex === index && (
                <div className="pb-6 text-[#6B7280] animate-fadeIn">
                  Our team is happy to provide detailed information regarding this topic during your consultation.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;