import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Hannah Schmitt",
    role: "Lead designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim"
  },
  {
    id: 2,
    name: "Hannah Schmitt",
    role: "Lead designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim"
  },
  {
    id: 3,
    name: "Hannah Schmitt",
    role: "Lead designer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim"
  }
];

const PatientTestimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(1);

  const handleNext = () => setActiveIdx((p) => (p + 1) % testimonials.length);
  const handlePrev = () => setActiveIdx((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 px-4 py-4">
        <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">
          PATIENT <span className="text-[#874280] font-['Marcellus_SC']">TESTIMONIALS</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-sm md:text-lg font-medium leading-relaxed">
          Hear from our happy patients who trust us for comfortable treatments, expert 
          care, and confident smiles.
        </p>
      </div>
      

      <div className="relative max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 lg:gap-8">
        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="p-3 rounded-full border border-[#874280] text-[#874280] hover:bg-[#874280] hover:text-white transition-all z-10 hidden md:block"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          {testimonials.map((item, i) => {
            const isActive = i === activeIdx;
            
            return (
              <motion.div
                key={item.id}
                animate={{ 
                  scale: isActive ? 1.1 : 0.9,
                  opacity: isActive ? 1 : 0.6 
                }}
                className={`relative w-full max-w-[350px] transition-all duration-500 ${!isActive && 'hidden lg:block'}`}
              >
                {/* Layered Purple Background (Organic Shape) */}
                <div className="absolute inset-0 bg-[#874280]/40 translate-x-3 translate-y-3 rounded-[60px_20px_100px_40px]" />
                
                {/* Main Card */}
                <div className="relative bg-[#3D253F] text-white p-8 md:p-10 rounded-[40px_100px_30px_80px] min-h-[450px] flex flex-col items-center text-center shadow-2xl">
                  {/* Profile Image */}
                  <div className="absolute -top-12 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="mt-12 mb-4">
                    <h3 className="text-xl font-bold tracking-wide">{item.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-gray-300 mt-1">{item.role}</p>
                  </div>

                  <Quote className="text-[#874280] mb-4 fill-[#874280]" size={32} />

                  <p className="text-[13px] leading-relaxed font-light text-gray-200 italic">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <button 
          onClick={handleNext}
          className="p-3 rounded-full border border-[#874280] text-[#874280] hover:bg-[#874280] hover:text-white transition-all z-10 hidden md:block"
        >
          <ChevronRight size={24} />
        </button>
      </div>


      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-16">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`transition-all duration-300 rounded-full h-2 ${
              i === activeIdx ? 'w-6 bg-[#874280]' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PatientTestimonials;