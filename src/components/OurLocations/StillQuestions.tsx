import React from 'react';

const StillQuestions: React.FC = () => {
  return (
    <div className="w-full py-20 bg-white flex flex-col items-center justify-center px-6">
      {/* Heading */}
      <h2 className="text-[#1a1a1a] text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight">
        Still Have Questions?
      </h2>

      {/* Subtext */}
      <p className="text-gray-500 text-lg md:text-xl max-w-3xl text-center leading-relaxed mb-10">
        Our friendly team is here to help. Contact us and we'll be happy to answer any 
        additional questions you may have.
      </p>

      {/* Button Container */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Primary Call Button */}
        <button 
          className="bg-[#442344] text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl shadow-[#442344]/20 hover:bg-[#331a33] transition-all active:scale-95 min-w-[240px]"
          onClick={() => window.location.href = 'tel:+09778197271'}
        >
          Call Us: + 097781 97271
        </button>

        {/* Secondary Email Button */}
        <button 
          className="bg-white text-[#8E5D90] border-2 border-[#8E5D90] px-12 py-5 rounded-full font-semibold text-lg shadow-lg shadow-gray-100 hover:bg-gray-50 transition-all active:scale-95 min-w-[180px]"
          onClick={() => window.location.href = 'mailto:hello@orchiddental.in'}
        >
          Email Us
        </button>
      </div>
    </div>
  );
};

export default StillQuestions;