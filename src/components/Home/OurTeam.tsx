
import React, { useState, useEffect } from 'react';
import { Star, Quote, MousePointerClick } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Profile {
  id: number;
  name: string;
  degree: string;
  bio: string;
  expertise: string[];
  image: string;
  testimonials: Array<{
    name: string;
    role: string;
    text: string;
    rating: number;
  }>;
}

const teamData: Profile[] = [
  {
    id: 0,
    name: "Dr Riya Jolly",
    degree: "BDS, MDS",
    image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/our1.jpg",
    bio: "A dedicated practitioner of comprehensive dental care, Dr.  Riya Jolly is committed to providing exceptional results through advanced techniques and compassionate care.",
    expertise: ["Smile Design", "Porcelain Veneers", "Full Mouth Rehabilitation", "Dental Implants"],
    testimonials: [
      { name: "Priya Sharma", role: "Marketing Executive", text: "Orchid Dental Care exceeded all my expectations! The results are stunning.", rating: 4 },
    ]
  },
  {
    id: 1,
    name: "Dr Shreya Suresh",
    degree: "DDS, MS",
    image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/our2.jpg",
    bio: "A leading expert in modern dental care, Dr. Shreya  is dedicated to providing exceptional results through advanced techniques and compassionate care.",
    expertise: ["Invisalign", "Braces", "Jaw Alignment", "Pediatric Dentistry"],
    testimonials: [
      { name: "Rahul V.", role: "Student", text: "The braces treatment was smooth and much faster than I expected!", rating: 5 }
    ]
  },
  {
    id: 2,
    name: "Dr Sandra Sunil",
    degree: "BDS, Oral Surgeon",
    image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/our3.jpg",
    bio: "Renowned for microscopic precision and gentle techniques. Dr. Chen's endodontic expertise ensures painless procedures with exceptional success rates.",
    expertise: ["Oral Surgery", "Wisdom Teeth", "Bone Grafting", "Sedation Dentistry"],
    testimonials: [
      { name: "S. Kapoor", role: "Business Owner", text: "Pain-free surgery. Dr. Cheng is truly an expert in his field.", rating: 5 }
    ]
  },
  {
    id: 3,
    name: "Dr Divya",
    degree: "BDS, Oral Surgeon",
    image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/our4.jpg",
    bio: "With a commitment to excellence, Dr. Divya delivers exceptional dental care, ensuring patient satisfaction and long-lasting oral health.",
    expertise: ["Oral Surgery", "Wisdom Teeth", "Bone Grafting", "Sedation Dentistry"],
    testimonials: [
      { name: "S. Kapoor", role: "Business Owner", text: "Pain-free surgery. Dr. Cheng is truly an expert in his field.", rating: 5 }
    ]
  },
  {
    id: 4,
    name: "Dr Swati",
    degree: "BDS, Oral Surgeon",
    image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/our5.jpg",
    bio: "With a commitment to excellence, Dr. Swathi delivers exceptional dental care, ensuring patient satisfaction and long-lasting oral health.",
    expertise: ["Oral Surgery", "Wisdom Teeth", "Bone Grafting", "Sedation Dentistry"],
    testimonials: [
      { name: "S. Kapoor", role: "Business Owner", text: "Pain-free surgery. Dr. Cheng is truly an expert in his field.", rating: 5 }
    ]
  },
  {
    id: 5,
    name: "Dr Julie",
    degree: "BDS, Oral Surgeon",
    image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/our6.jpg",
    bio: "With a warm smile and helpful attitude, Julie ensures every patient feels welcome and well-cared for at our clinic.",
    expertise: ["Oral Surgery", "Wisdom Teeth", "Bone Grafting", "Sedation Dentistry"],
    testimonials: [
      { name: "S. Kapoor", role: "Business Owner", text: "Pain-free surgery. Dr. Cheng is truly an expert in his field.", rating: 5 }
    ]
  }
];

const OurTeam: React.FC = () => {
  const [i, setI] = useState(0);

  const handleNext = () => {
    setI((p) => (p + 1) % teamData.length);
  };

  // Auto-rotation logic
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [i]); // Restart timer whenever the index changes (manual or auto)

  const curr = teamData[i];

  return (
    <section className="w-full font-serif overflow-hidden select-none bg-white">
      {/* Header Section */}
      <div className="bg-white py-20 px-6 text-center">
        <p className="text-[#442140] text-[30px] uppercase mb-4">Our Team</p>
        <h2 className="text-4xl md:text-5xl text-[#442140] font-['Marcellus_SC'] mb-6">
          Meet Our <span className="text-[#A953A0] font-['Marcellus_SC']">Expert Dentists</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-[#000000] text-sm md:text-2xl leading-relaxed font-sans font-400">
            A team of highly qualified professionals dedicated to delivering exceptional 
            dental care with precision, compassion, and advanced technology.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left: Clickable Image Container */}
        <div 
          className="w-full md:w-1/2 h-[600px] md:h-auto bg-[#F3F4F6] relative cursor-pointer group overflow-hidden"
          onClick={handleNext}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={curr.id}
              src={curr.image}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="absolute inset-0 w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
            />
          </AnimatePresence>

          {/* Hover Indicator */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="bg-white/95 backdrop-blur px-8 py-3 rounded-full flex items-center gap-3 shadow-2xl"
            >
              <MousePointerClick size={14} className="text-purple-700" />
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-900">Discover Next Expert</span>
            </motion.div>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={curr.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-2">
                {curr.name}
              </h1>
              <p className="text-[11px] text-gray-400 tracking-[0.3em] uppercase mb-8">{curr.degree}</p>
              
              <p className="text-gray-500 text-xl leading-relaxed text-sm mb-12 font-sans font-light">
                {curr.bio}
              </p>

              {/* Expertise Tags */}
              <div className="mb-14">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-10 bg-purple-300" />
                  <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-900">Expertise</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {curr.expertise.map((item, k) => (
                    <span key={k} className="px-5 py-2 border text-xl border-gray-100 rounded-full text-[9px] uppercase tracking-wider text-gray-500 hover:border-purple-200 hover:text-purple-600 transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Feedback Block */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-[1px] w-10 bg-purple-300" />
                  <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-900">Patient Testimonials</h3>
                </div>

                <div className="space-y-12">
                  {curr.testimonials.map((t, k) => (
                    <div key={k} className="relative">
                      <div className="flex mb-5 gap-1">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} size={11} className={s < t.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-100"} />
                        ))}
                        <Quote className="absolute right-0 -top-4 text-purple-50 opacity-40" size={60} />
                      </div>
                      <p className="text-md text-gray-400 italic mb-6 leading-relaxed font-sans font-light pr-12">"{t.text}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-gray-100" />
                        <div>
                          <h4 className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">{t.name}</h4>
                          <p className="text-[8px] text-gray-400 uppercase tracking-[0.2em] mt-0.5">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;