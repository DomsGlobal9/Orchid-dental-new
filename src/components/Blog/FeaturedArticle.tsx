import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const FeaturedArticle: React.FC = () => {
  const a = [
    {
      i: "Cosmetic Dentistry",
      d: "March 18, 2026",
      r: "8 min read",
      t: "The Ultimate Guide to Professional Teeth Whitening: What You Need to Know",
      e: "Discover the science behind professional whitening treatments and why they offer superior results compared to over-the-counter options.",
      u: "Dr. Sarah Johnson",
      iP: "src/assets/images/feature1.jpg"
    },
    {
      i: "Dental Care Tips",
      d: "March 12, 2026",
      r: "5 min read",
      t: "5 Morning Habits That Will Transform Your Dental Health",
      e: "Simplicity is key: incorporate these slight differences in maintaining oral hygiene and prevent significant dental issues.",
      u: "Dr. Michael Chen",
      iP: "src/assets/images/feature2.jpg"
    },
    {
      i: "Orthodontics",
      d: "March 18, 2026",
      r: "10 min read",
      t: "Clear Aligners vs. Traditional Braces: Which is Right for You?",
      e: "Explore the pros and cons of both teeth-straightening options to make an informed decision about your orthodontic journey.",
      u: "Dr. Sarah Johnson",
      iP: "src/assets/images/feature3.jpg"
    },
    {
      i: "Restorative Dentistry",
      d: "March 12, 2026",
      r: "6 min read",
      t: "The Lifespan of Dental Implants: Factors Affecting Longevity",
      e: "Learn how proper care, oral hygiene, and lifestyle choices can maximize the lifespan of your new smile with implants.",
      u: "Dr. Michael Chen",
      iP: "src/assets/images/feature4.jpg"
    },
    {
      i: "Oral Health Tech",
      d: "March 18, 2026",
      r: "8 min read",
      t: "Digital Smile Design: Visualize Your Results Before Treatment",
      e: "Experience the power of advanced technology to see exactly how your smile will look after cosmetic or restorative procedures.",
      u: "Dr. Sarah Johnson",
      iP: "src/assets/images/feature5.jpg"
    },
    {
      i: "Pediatric Dentistry",
      d: "March 12, 2026",
      r: "5 min read",
      t: "Preventing Childhood Cavities: A Parent's Practical Guide",
      e: "Establish healthy oral habits early: learn effective brushing techniques, dietary advice, and the importance of early checkups.",
      u: "Dr. Michael Chen",
      iP: "src/assets/images/feature6.jpg"
    }
  ];

  return (
    <section className="w-full bg-[#ffffff] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-[#1D2B53] mb-2 tracking-tight">
            Featured Articles
          </h2>
          <p className="text-gray-500 text-2xl font-Marcellus SC">Our most popular and impactful stories</p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 items-stretch">
          {a.map((v, k) => (
            <div key={k} className="flex flex-col h-full">
              {/* Image Container - Fixed Aspect Ratio */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 shrink-0">
                <img 
                  src={v.iP} 
                  alt={v.t}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A36BA3]"></div>
                  <span className="text-[10px] font-bold text-[#3D233D] uppercase tracking-wider">
                    {v.i}
                  </span>
                </div>
              </div>

              {/* Meta Data */}
              <div className="flex items-center gap-4 text-gray-400 text-xs mb-4 shrink-0">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{v.d}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{v.r}</span>
                </div>
              </div>

              {/* Text Content Area - Flex-grow makes this fill the space */}
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#1D2B53] mb-3 line-clamp-2 leading-tight tracking-tight">
                  {v.t}
                </h3>
                <p className="text-gray-500 text-xl leading-relaxed mb-6 line-clamp-3">
                  {v.e}
                </p>
              </div>

              {/* Footer - mt-auto pushes this to the very bottom of the equal-height card */}
              <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                <span className="text-gray-400 text-7xs font-medium">{v.u}</span>

                <Link to="/each-blog">
                
                       <button className="flex items-center gap-2 text-[#A36BA3] text-5sm font-bold transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>

                </Link>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;