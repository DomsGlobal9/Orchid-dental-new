import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const LatestArticle: React.FC = () => {
  const a = [
    {
      i: "Technology",
      d: "March 10, 2026",
      r: "12 min read",
      t: "Understanding Dental Implants: A Complete Patient Guide",
      e: "Everything you need to know about dental implants, from initial consultation to recovery and long-term care.",
      u: "Dr. Emily Roberts",
      s: "Oral Surgeon",
      iP: "src/assets/images/latest1.png" // Paste image URL here
    },
    {
      i: "Cosmetic Dentistry",
      d: "March 8, 2026",
      r: "7 min read",
      t: "The Secret to a Hollywood Smile: Behind the Scenes",
      e: "Explore the artistry and precision that goes into creating picture-perfect smiles with modern cosmetic dentistry.",
      u: "Dr. Sarah Johnson",
      s: "Cosmetic Dentist",
      iP: "src/assets/images/latest2.png" // Paste image URL here
    },
    {
      i: "Technology",
      d: "March 5, 2026",
      r: "10 min read",
      t: "Orthodontics in 2026: Clear Aligners vs Traditional Braces",
      e: "Compare modern orthodontic solutions and find the perfect treatment option for your lifestyle and smile goals.",
      u: "Dr. Michael Chen",
      s: "Orthodontist",
      iP: "src/assets/images/latest3.png" // Paste image URL here
    }
    ,
    {
      i: "Technology",
      d: "March 5, 2026",
      r: "10 min read",
      t: "Understanding Dental Implants: A Complete Patient Guide",
      e: "Everything you need to know about dental implants, from initial consultation to recovery and long-term care.",
      u: "Dr. Michael Chen",
      s: "Orthodontist",
      iP: "src/assets/images/latest4.png" // Paste image URL here
    }
    ,
    {
      i: "Technology",
      d: "March 5, 2026",
      r: "10 min read",
      t: "The Secret to a Hollywood Smile: Behind the Scenes",
      e: "Explore the artistry and precision that goes into creating picture-perfect smiles with modern cosmetic dentistry.",
      u: "Dr. Michael Chen",
      s: "Orthodontist",
      iP: "src/assets/images/latest5.png" // Paste image URL here
    }
    ,
    {
      i: "Technology",
      d: "March 5, 2026",
      r: "10 min read",
      t: "Orthodontics in 2026: Clear Aligners vs Traditional Braces",
      e: "Compare modern orthodontic solutions and find the perfect treatment option for your lifestyle and smile goals.",
      u: "Dr. Michael Chen",
      s: "Orthodontist",
      iP: "src/assets/images/latest6.png" // Paste image URL here
    }
    ,
    {
      i: "Technology",
      d: "March 5, 2026",
      r: "10 min read",
      t: "Orthodontics in 2026: Clear Aligners vs Traditional Braces",
      e: "Compare modern orthodontic solutions and find the perfect treatment option for your lifestyle and smile goals.",
      u: "Dr. Michael Chen",
      s: "Orthodontist",
      iP: "src/assets/images/latest7.png" // Paste image URL here
    }
    ,
    {
      i: "Technology",
      d: "March 5, 2026",
      r: "10 min read",
      t: "Understanding Dental Implants: A Complete Patient Guide",
      e: "Everything you need to know about dental implants, from initial consultation to recovery and long-term care.",
      u: "Dr. Michael Chen",
      s: "Orthodontist",
      iP: "src/assets/images/latest8.png" // Paste image URL here
    }
    ,
    {
      i: "Technology",
      d: "March 5, 2026",
      r: "10 min read",
      t: "Orthodontics in 2026: Clear Aligners vs Traditional Braces",
      e: "Compare modern orthodontic solutions and find the perfect treatment option for your lifestyle and smile goals.",
      u: "Dr. Michael Chen",
      s: "Orthodontist",
      iP: "src/assets/images/latest9.png" // Paste image URL here
    }
    // Add more objects here for additional rows
  ];

  return (
    <section className="w-full bg-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B53] mb-4">
            Latest Articles
          </h2>
          <p className="text-gray-500 text-lg">
            Stay informed with our expert insights
          </p>
        </div>

        {/* Article Grid - 3 columns for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {a.map((v, k) => (
            <div 
              key={k} 
              className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={v.iP || "/api/placeholder/400/300"} 
                  alt={v.t}
                  className="w-full h-full object-cover grayscale" // Grayscale as per image
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A36BA3]"></div>
                  <span className="text-[10px] font-bold text-[#A36BA3] uppercase tracking-wider">
                    {v.i}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Meta Data */}
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{v.d}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{v.r}</span>
                  </div>
                </div>

                {/* Title and Excerpt */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#1D2B53] mb-4 leading-tight tracking-tight uppercase">
                    {v.t}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {v.e}
                  </p>
                </div>

                {/* Author Section - Pushed to bottom */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-[#1D2B53] text-xl font-bold">{v.u}</p>
                  <p className="text-gray-400 text-sm">{v.s}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestArticle;