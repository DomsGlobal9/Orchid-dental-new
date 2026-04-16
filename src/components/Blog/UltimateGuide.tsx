import React from 'react';
import { FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn, FaRegCopy } from "react-icons/fa";
import { MdCalendarToday, MdAccessTime, MdMenuBook } from "react-icons/md";

import { Link } from 'react-router-dom';

const UltimateGuide: React.FC = () => {
  const s = [
    "Understanding Professional Whitening",
    "Why Professional Treatments Excel",
    "The Treatment Process",
    "What to Expect After Treatment",
    "Maintaining Your Results",
    "Is Professional Whitening Right for You?"
  ];

  const c = {
    n: "#1D2B53", // Dark Navy
    p: "#A36BA3", // Orchid Purple
    l: "#F8F9FC", // Sidebar Bg
    t: "#6B7280"  // Text Gray
  };

  return (
    <section className="w-full bg-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Navigation */}

        <Link to="/blog">
        

        <button 
          className="flex items-center gap-2 mb-12 transition-all duration-300 hover:-translate-x-1"
          style={{ color: c.t }}
        >
          <FaArrowLeft size={18} />
          <span className="text-sm font-medium">Back to Blog</span>
        </button>


        </Link>
        

        {/* Main Layout Container (Flexbox) */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content Area (66.6%) */}
          <div className="w-full lg:w-[66.6%]">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span 
                className="px-4 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase"
                style={{ backgroundColor: '#FDF2F8', color: c.p }}
              >
                Cosmetic Dentistry
              </span>
              <div className="flex items-center gap-1.5 text-xs" style={{ color: c.t }}>
                <MdCalendarToday size={14} />
                <span>March 15, 2026</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-1.5 text-xs" style={{ color: c.t }}>
                <MdAccessTime size={14} />
                <span>8 min read</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <h1 
              className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8"
              style={{ color: c.n }}
            >
              The Ultimate Guide to Professional Teeth Whitening: What You Need to Know
            </h1>
            <p 
              className="text-xl leading-relaxed mb-12"
              style={{ color: c.t }}
            >
              Discover the science, process, and lasting benefits of professional whitening treatments that deliver stunning results.
            </p>

            <hr className="border-gray-100 mb-8" />
            
            {/* Author Section */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
                <img 
                  src="src/assets/images/DentalCheckups.png" 
                  alt="Dr. Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-base" style={{ color: c.n }}>Dr. Sarah Johnson</h4>
                <p className="text-sm" style={{ color: c.t }}>Cosmetic Dentist</p>
              </div>
            </div>
          </div>

          {/* Sidebar Area (33.3%) */}
          <div className="w-full lg:w-[33.3%]">
            <div className="sticky top-8 space-y-10">
              
              {/* Table of Contents Card */}
              <div 
                className="rounded-[2rem] p-8 border border-[#F1F5F9]"
                style={{ backgroundColor: c.l }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <MdMenuBook size={20} style={{ color: c.p }} />
                  <h3 className="text-xl font-bold" style={{ color: c.n }}>Table of Contents</h3>
                </div>
                
                <nav className="flex flex-col">
                  {s.map((v, i) => (
                    <button
                      key={i}
                      className="text-left py-4 pl-6 border-l-2 border-transparent text-sm font-medium transition-all hover:pl-8"
                      style={{ color: c.t }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderLeftColor = c.p;
                        e.currentTarget.style.color = c.n;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderLeftColor = 'transparent';
                        e.currentTarget.style.color = c.t;
                      }}
                    >
                      {v}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Social Share */}
              <div className="px-4">
                <h4 className="text-sm font-bold mb-6" style={{ color: c.n }}>Share Article</h4>
                <div className="flex gap-3">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn, FaRegCopy].map((I, i) => (
                    <button 
                      key={i}
                      className="w-11 h-11 rounded-xl border border-gray-100 flex items-center justify-center transition-all hover:bg-white"
                      style={{ color: c.t }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = c.p;
                        e.currentTarget.style.borderColor = c.p;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = c.t;
                        e.currentTarget.style.borderColor = '#F3F4F6';
                      }}
                    >
                      <I size={18} />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateGuide;