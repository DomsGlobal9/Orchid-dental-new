// import React from 'react';

// const OurDentists: React.FC = () => {
//   const dentists = [
//     {
//       name: "Dr. Ramesh Kumar",
//       title: "PROSTHODONTIST & COSMETIC ARTISAN",
//       degrees: "BDS, MDS",
//       description: "A distinguished master of cosmetic and restorative dentistry. Dr. Kumar's artistry has transformed thousands of smiles. His meticulous approach combines advanced technology with aesthetic precision.",
//       expertise: ["Smile Design", "Porcelain Veneers", "Full Mouth Rehabilitation", "Dental Implants"],
//       education: ["BDS - University of Delhi", "MDS Prosthodontics - AIIMS", "Advanced Aesthetics - UCLA"],
//       experience: "15+",
//       image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/ramesh-doctor.png", // Paths starting with / look in the public folder
//     },
//     {
//       name: "Dr. Sarah Williams",
//       title: "ORTHODONTIC SPECIALIST",
//       degrees: "BDS, MDS",
//       description: "An internationally recognized expert in invisible orthodontics. Dr. Williams' innovative techniques achieve perfect alignment while maintaining complete aesthetic discretion.",
//       expertise: ["Invisalign Diamond Provider", "Lingual Braces", "Facial Aesthetics", "Clear Aligners"],
//       education: ["BDS - King's College London", "MDS Orthodontics - NYU", "Advanced Invisalign Certification"],
//       experience: "12+",
//       image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/Williams-doctor.png",
//     },
//     {
//       name: "Dr. Michael Chen",
//       title: "ENDODONTIC MASTER",
//       degrees: "BDS, MDS",
//       description: "Renowned for microscopic precision and gentle techniques. Dr. Chen's endodontic expertise ensures painless procedures with exceptional success rates.",
//       expertise: ["Microscopic Endodontics", "Root Canal Therapy", "Dental Trauma", "Advanced Pain Management"],
//       education: ["BDS - University of Sydney", "MDS Endodontics - Harvard", "Microscopy Certification"],
//       experience: "10+",
//       image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/srithi-doctor.png",
//     },
//     {
//       name: "Dr. Priya Patel",
//       title: "PEDIATRIC DENTIST",
//       degrees: "BDS",
//       description: "A compassionate specialist creating positive dental experiences for young patients. Dr. Patel's gentle approach builds lifelong oral health habits.",
//       expertise: ["Pediatric Dentistry", "Prevention Care", "Behavioral Management", "Early Orthodontics"],
//       education: ["BDS - Manipal University", "Pediatric Fellowship", "Child Psychology Certification"],
//       experience: "8+",
//       image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/priya-doctor.png",
//     }
//   ];

//   return (
//     <div className="bg-white py-20 px-4 font-sans text-[#4a5568]">
//       {/* --- Section Header --- */}
//       <div className="max-w-[1100px] mx-auto text-center mb-24 space-y-4">
//         <h2 className="text-[56px] font-serif text-[#0f172a] leading-tight">
//           Our Dentists
//         </h2>
//         <p className="text-[20px] text-[#64748b] font-light tracking-wide">
//           Meet the masters behind Orchid's exceptional standard of care
//         </p>
//       </div>

//       {/* --- Dentists List --- */}
//       <div className="max-w-[1100px] mx-auto space-y-32">
//         {dentists.map((doc, index) => (
//           <div 
//             key={index} 
//             className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
//               index % 2 !== 0 ? 'md:flex-row-reverse' : ''
//             }`}
//           >
//             {/* Image Container with Experience Badge */}
//             <div className="relative w-full md:w-1/2">
//               <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
//                 <img 
//                   src={doc.image} 
//                   alt={doc.name} 
//                   className="w-full h-full object-cover grayscale hover:scale-110 transition-all duration-500"
//                 />
//               </div>
//               <div className="absolute bottom-0 right-0 bg-[#58335e] text-white p-4 text-center min-w-[80px]">
//                 <div className="text-[24px] font-bold leading-none">{doc.experience}</div>
//                 <div className="text-[10px] uppercase tracking-tighter opacity-80">Years</div>
//               </div>
//             </div>

//             {/* Content Side */}
//             <div className="w-full md:w-1/2 space-y-6">
//               <div className="inline-block bg-[#58335e] text-white text-[11px] font-bold px-3 py-1 tracking-widest uppercase rounded-sm">
//                 <span className="mr-2">⚕</span> {doc.title}
//               </div>
              
//               <div className="space-y-1">
//                 <h3 className="text-[42px] font-serif text-[#0f172a] leading-tight">{doc.name}</h3>
//                 <p className="text-[#64748b] font-medium tracking-widest text-sm">{doc.degrees}</p>
//               </div>

//               <p className="text-[16px] leading-relaxed text-[#4a5568] py-2">
//                 {doc.description}
//               </p>

//               {/* Expertise Section */}
//               <div className="space-y-3">
//                 <div className="flex items-center gap-2">
//                    <div className="h-[1px] w-8 bg-[#58335e]"></div>
//                    <span className="text-[11px] font-bold text-[#58335e] uppercase tracking-widest">Expertise</span>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {doc.expertise.map((skill, i) => (
//                     <span key={i} className="text-[12px] border border-gray-200 px-3 py-1 text-[#4a5568] rounded-sm">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Education Section */}
//               <div className="space-y-3 pt-2">
//                 <div className="flex items-center gap-2">
//                    <span className="text-[#58335e]">🎓</span>
//                    <span className="text-[11px] font-bold text-[#4a5568] uppercase tracking-widest">Education</span>
//                 </div>
//                 <ul className="space-y-1">
//                   {doc.education.map((edu, i) => (
//                     <li key={i} className="text-[13px] text-[#64748b]">• {edu}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurDentists;

import React from 'react';
import { Link } from 'react-router-dom';

const OurDentists: React.FC = () => {
  const dentists = [
    {
      name: "Dr Riya Jolly",
      title: "PROSTHODONTIST & COSMETIC ARTISAN",
      degrees: "BDS, MDS",
      description: "A dedicated practitioner of comprehensive dental care, Dr.  Riya Jolly is committed to providing exceptional results through advanced techniques and compassionate care.",
      expertise: ["Smile Design", "Porcelain Veneers", "Full Mouth Rehabilitation", "Dental Implants"],
      education: ["BDS - University of Delhi", "MDS Prosthodontics - AIIMS", "Advanced Aesthetics - UCLA"],
      experience: "15+",
      image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/our1.jpg",
    },
    {
      name: "Dr Shreya Suresh",
      title: "ORTHODONTIC SPECIALIST",
      degrees: "BDS, MDS",
      description: "A leading expert in modern dental care, Dr. Shreya  is dedicated to providing exceptional results through advanced techniques and compassionate care.",
      expertise: ["Invisalign Diamond Provider", "Lingual Braces", "Facial Aesthetics", "Clear Aligners"],
      education: ["BDS - King's College London", "MDS Orthodontics - NYU", "Advanced Invisalign Certification"],
      experience: "12+",
      image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/our2.jpg",
    },
    {
      name: "Dr Sandra Sunil",
      title: "ENDODONTIC MASTER",
      degrees: "BDS, MDS",
      description: "Renowned for microscopic precision and gentle techniques. Dr. Chen's endodontic expertise ensures painless procedures with exceptional success rates.",
      expertise: ["Microscopic Endodontics", "Root Canal Therapy", "Dental Trauma", "Advanced Pain Management"],
      education: ["BDS - University of Sydney", "MDS Endodontics - Harvard", "Microscopy Certification"],
      experience: "10+",
      image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/our3.jpg",
    },
    {
      name: "Dr Divya",
      title: "PEDIATRIC DENTIST",
      degrees: "BDS",
      description: "With a commitment to excellence, Dr. Divya delivers exceptional dental care, ensuring patient satisfaction and long-lasting oral health.",
      expertise: ["Pediatric Dentistry", "Prevention Care", "Behavioral Management", "Early Orthodontics"],
      education: ["BDS - Manipal University", "Pediatric Fellowship", "Child Psychology Certification"],
      experience: "8+",
      image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/our4.jpg",
    },
     {
      name: "Dr Swati",
      title: "PEDIATRIC DENTIST",
      degrees: "BDS",
      description: "With a commitment to excellence, Dr. Swathi delivers exceptional dental care, ensuring patient satisfaction and long-lasting oral health.",
      expertise: ["Pediatric Dentistry", "Prevention Care", "Behavioral Management", "Early Orthodontics"],
      education: ["BDS - Manipal University", "Pediatric Fellowship", "Child Psychology Certification"],
      experience: "8+",
      image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/our5.jpg",
    },
     {
      name: "Julie",
      title: "PEDIATRIC DENTIST",
      degrees: "BDS",
      description: "With a warm smile and helpful attitude, Julie ensures every patient feels welcome and well-cared for at our clinic.",
      expertise: ["Pediatric Dentistry", "Prevention Care", "Behavioral Management", "Early Orthodontics"],
      education: ["BDS - Manipal University", "Pediatric Fellowship", "Child Psychology Certification"],
      experience: "8+",
      image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/our6.jpg",
    }
  ];

  return (
    <div className="bg-white py-20 px-4 font-sans text-[#4a5568]">
      {/* --- Section Header --- */}
      <div className="max-w-[1100px] mx-auto text-center mb-24 space-y-4">
        <h2 className="text-[56px] font-serif text-[#0f172a] leading-tight">
          Our Dentists
        </h2>
        <p className="text-[20px] text-[#64748b] font-light tracking-wide">
          Meet the masters behind Orchid's exceptional standard of care
        </p>
      </div>

      {/* --- Dentists List --- */}
      <div className="max-w-[1100px] mx-auto space-y-32">
        {dentists.map((doc, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Container with Experience Badge */}
            <div className="relative w-full md:w-1/2">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover  hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-[#58335e] text-white p-4 text-center min-w-[80px]">
                <div className="text-[24px] font-bold leading-none">{doc.experience}</div>
                <div className="text-[10px] uppercase tracking-tighter opacity-80">Years</div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block bg-[#58335e] text-white text-[11px] font-bold px-3 py-1 tracking-widest uppercase rounded-sm">
                <span className="mr-2">⚕</span> {doc.title}
              </div>
              
              <div className="space-y-1">
                <h3 className="text-[42px] font-serif text-[#0f172a] leading-tight">{doc.name}</h3>
                <p className="text-[#64748b] font-medium tracking-widest text-sm">{doc.degrees}</p>
              </div>

              <p className="text-[16px] leading-relaxed text-[#4a5568] py-2">
                {doc.description}
              </p>

              {/* Expertise Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                   <div className="h-[1px] w-8 bg-[#58335e]"></div>
                   <span className="text-[11px] font-bold text-[#58335e] uppercase tracking-widest">Expertise</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {doc.expertise.map((skill, i) => (
                    <span key={i} className="text-[12px] border border-gray-200 px-3 py-1 text-[#4a5568] rounded-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                   <span className="text-[#58335e]">🎓</span>
                   <span className="text-[11px] font-bold text-[#4a5568] uppercase tracking-widest">Education</span>
                </div>
                <ul className="space-y-1">
                  {doc.education.map((edu, i) => (
                    <li key={i} className="text-[13px] text-[#64748b]">• {edu}</li>
                  ))}
                </ul>
              </div>

              {/* Read More Button Added Here */}
              <div className="pt-4">
                <Link to="/doctor-profile">
                <button className="text-[12px] font-bold text-[#58335e] uppercase tracking-[0.2em] border-b border-[#58335e] pb-1 hover:opacity-70 transition-opacity">
                  Read More
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDentists;