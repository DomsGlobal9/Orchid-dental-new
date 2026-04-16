import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FrequentlyAskedHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ffffff]  to-[#1e1b4b] py-16 px-4 font-sans text-white">
      
      {/* --- Header Section --- */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full border border-purple-500/30 bg-purple-500/10">
            <HelpCircle className="text-purple-400 w-8 h-8" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl text-[#020617] font-bold mb-4 tracking-tight">Frequently Asked Questions</h1>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about our dental services, appointments, and treatments.
        </p>
      </div>

      {/* --- FAQ Categories Container --- */}
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Category: General Questions */}
        <FAQSection title="General Questions">
          <FAQItem 
            question="What are your office hours?" 
            answer="We are open Monday to Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays and public holidays. If emergency appointments can be arranged during regular hours – please call us for urgent dental care."
            defaultOpen={true}
          />
          <FAQItem question="Do you accept insurance?" answer="Yes, we work with a wide range of major insurance providers. Please contact our front desk to verify your specific plan." />
          <FAQItem question="How often should I visit the dentist?" answer="We generally recommend a check-up and professional cleaning every six months to maintain optimal oral health." />
          <FAQItem question="What should I do in a dental emergency?" answer="Contact us immediately. We prioritize emergency cases and will do our best to see you on the same day." />
        </FAQSection>

        {/* Category: Appointments & Booking */}
        <FAQSection title="Appointments & Booking">
          <FAQItem question="How do I book an appointment?" answer="You can book via our website's 'Request Appointment' form, call us directly, or visit our clinic in person." />
          <FAQItem question="What is your cancellation policy?" answer="We require at least 24 hours' notice for cancellations. Late cancellations may incur a nominal fee." />
          <FAQItem question="How early should I arrive for my appointment?" answer="New patients should arrive 15 minutes early to complete registration. Returning patients should arrive 5 minutes prior." />
          <FAQItem question="What should I bring to my first appointment?" answer="Please bring a valid ID, any previous dental records/X-rays if available, and your insurance information." />
        </FAQSection>

        {/* Category: Treatments & Procedures */}
        <FAQSection title="Treatments & Procedures">
          <FAQItem question="Do dental procedures hurt?" answer="We use advanced numbing techniques and sedation options to ensure your experience is as comfortable and pain-free as possible." />
          <FAQItem question="How long do dental treatments take?" answer="Duration varies; a simple cleaning takes 45-60 minutes, while complex procedures like crowns may require multiple visits." />
          <FAQItem question="Are dental X-rays safe?" answer="Yes, we use digital X-rays which emit significantly lower radiation than traditional film and are considered very safe." />
          <FAQItem question="What payment methods do you accept?" answer="We accept cash, all major credit/debit cards, UPI, and bank transfers." />
        </FAQSection>

        {/* Category: Cosmetic Dentistry */}
        <FAQSection title="Cosmetic Dentistry">
          <FAQItem question="How long do teeth whitening results last?" answer="Results typically last from 6 months up to 2 years, depending on your diet and oral hygiene habits." />
          <FAQItem question="Are dental implants permanent?" answer="Implants are designed to be a lifelong solution with proper care, though the crown on top may need replacement after 10-15 years." />
          <FAQItem question="Can adults get braces or clear aligners?" answer="Absolutely. Orthodontic treatment is effective at any age, and we offer discreet options like Invisalign for adults." />
          <FAQItem question="What is the difference between a crown and a veneer?" answer="A veneer covers only the front of the tooth for aesthetics, while a crown covers the entire tooth for strength and protection." />
        </FAQSection>

        {/* --- Footer Contact Card --- */}
        <div className="bg-white rounded-[32px] p-10 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Still Have Questions?</h2>
          <p className="text-gray-500 mb-8">Our friendly team is here to help. Contact us and we'll be happy to answer any additional questions you may have.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#a35e95] hover:bg-[#8e4d82] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md">
              Call Us: +91 99017 61312
            </button>
            <button className="border border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-all">
              Email Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

/* --- Sub-Component: FAQ Section Card --- */
const FAQSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-[32px] overflow-hidden shadow-xl">
    <div className="px-8 py-6 border-b border-gray-50">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="divide-y divide-gray-100 px-4 pb-4">
      {children}
    </div>
  </div>
);

/* --- Sub-Component: Individual Accordion Item --- */
const FAQItem = ({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="py-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 rounded-2xl transition-colors group"
      >
        <span className={`font-medium transition-colors ${isOpen ? 'text-[#a35e95]' : 'text-gray-700'}`}>
          {question}
        </span>
        <div className={`p-1 rounded-md transition-all ${isOpen ? 'bg-[#fdf4ff]' : 'bg-gray-50'}`}>
          {isOpen ? (
            <Minus size={18} className="text-[#a35e95]" />
          ) : (
            <Plus size={18} className="text-gray-400 group-hover:text-gray-600" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-1 text-gray-500 leading-relaxed text-sm md:text-base animate-in fade-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FrequentlyAskedHome;