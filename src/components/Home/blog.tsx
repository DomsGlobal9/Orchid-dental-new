// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// interface BlogCardProps {
//   image: string;
//   title: string;
// }

// const BlogCard: React.FC<BlogCardProps> = ({ image, title }) => (
//   <motion.div
//     /* 'layout' ensures the internal elements re-flow smoothly during width change */
//     layout
//     whileHover={{ maxWidth: "450px" }} 
//     transition={{ duration: 0.5, ease: "circOut" }}
//     className="flex flex-col w-full max-w-[260px] mx-auto cursor-pointer group"
//   >
//     {/* Image Container */}
//     <div className="relative h-[550px] md:h-[700px] w-full rounded-[30px] overflow-hidden shadow-2xl bg-gray-100">
//       <img 
//         src={image} 
//         alt={title} 
//         /* w-full and object-cover ensure the image expands to fill the growing container */
//         className="w-full h-full object-cover"
//       />
//     </div>
    
//     {/* Title Section - Positioned below the image */}
//     <div className="mt-8 text-center px-4">
//       <h3 className="text-black text-2xl md:text-3xl font-serif tracking-wider leading-tight">
//         {title}
//       </h3>
//     </div>
//   </motion.div>
// );


// const Blog: React.FC = () => {
//   const blogs = [
//     { title: "Smile Dentistry", image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/smiling.jpg" },
//     { title: "Dental implant", image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/blog2.png" },
//     { title: "Teeth whiteing", image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/blog3.jpg" },
//     { title: "Veeners", image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/veneers.jpg" },
//   ];

//   return (
//     <section className="py-24 px-6 md:px-12 bg-white max-w-[1400px] mx-auto overflow-hidden">
//       {/* Header Section */}
//       <div className="text-center mb-20">
//         <p className="text-[#874280] text-xl md:text-2xl uppercase mb-4 font-sans font-medium tracking-[0.2em]">
//           Blogs
//         </p>
//         <h2 className="text-4xl md:text-6xl font-['Marcellus_SC'] text-slate-900 mb-8 tracking-tight">
//           DENTAL CARE <span className="text-[#874280] font-['Marcellus_SC']">INSIGHTS</span>
//         </h2>
//         <div className="max-w-3xl mx-auto">
//           <p className="text-black text-sm md:text-xl leading-relaxed font-sans font-medium opacity-80">
//             Expert tips, oral health guidance, and the latest advancements to help you 
//             maintain a healthy, confident smile.
//           </p>
//         </div>
//       </div>

//       {/* Grid Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 whitespace-nowrap mb-20 items-start">
//         {blogs.map((b, i) => (
//           <BlogCard key={i} title={b.title} image={b.image} />
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="flex justify-center">
//         <Link to="/blog#blog-main">
//         <button className="bg-[#3D253F] hover:bg-[#2D1A2E] text-white px-14 py-4 h-[50px] rounded-2xl text-xs tracking-[0.3em] font-bold uppercase transition-all duration-300 shadow-xl hover:scale-105 active:scale-95">
//           View All
//         </button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Blog;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  image: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title }) => (
  <motion.div
    layout
    // Initial flex state and expanded flex state on hover
    initial={{ flex: 1 }}
    whileHover={{ flex: 3 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="relative h-[550px] md:h-[700px] cursor-pointer group overflow-hidden"
  >
    {/* Image Container - Removed rounded corners for seamless attachment, or keep them if you prefer */}
    <div className="w-full h-full relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      
      {/* Overlay Title - Optional: makes title visible only on hover or always at bottom */}
      <div className="absolute bottom-10 left-0 right-0 text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-white text-xl md:text-2xl font-serif tracking-wider drop-shadow-lg">
          {title}
        </h3>
      </div>
    </div>
  </motion.div>
);

const Blog: React.FC = () => {
  const blogs = [
    { title: "Smile Dentistry", image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/smiling.jpg" },
    { title: "Dental implant", image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/blog2.png" },
    { title: "Teeth whiteing", image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/blog3.jpg" },
    { title: "Veeners", image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/veneers.jpg" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white max-w-[1400px] mx-auto overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-20">
        <p className="text-[#874280] text-xl md:text-2xl uppercase mb-4 font-sans font-medium tracking-[0.2em]">
          Blogs
        </p>
        <h2 className="text-4xl md:text-6xl font-['Marcellus_SC'] text-slate-900 mb-8 tracking-tight">
          DENTAL CARE <span className="text-[#874280] font-['Marcellus_SC']">INSIGHTS</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-black text-sm md:text-xl leading-relaxed font-sans font-medium opacity-80">
            Expert tips, oral health guidance, and the latest advancements to help you 
            maintain a healthy, confident smile.
          </p>
        </div>
      </div>

      {/* Grid Section - Changed to flex with no gap */}
      <div className="flex flex-row w-full mb-20 items-start overflow-hidden rounded-[30px] shadow-2xl">
        {blogs.map((b, i) => (
          <BlogCard key={i} title={b.title} image={b.image} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <Link to="/blog#blog-main">
          <button className="bg-[#3D253F] hover:bg-[#2D1A2E] text-white px-14 py-4 h-[50px] rounded-2xl text-xs tracking-[0.3em] font-bold uppercase transition-all duration-300 shadow-xl hover:scale-105 active:scale-95">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;