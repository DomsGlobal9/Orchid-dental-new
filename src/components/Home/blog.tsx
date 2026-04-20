// import React from 'react';
// import { motion } from 'framer-motion';

// interface BlogCardProps {
//   image: string;
//   title: string;
// }

// const BlogCard: React.FC<BlogCardProps> = ({ image, title }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     transition={{ duration: 0.4, ease: "easeOut" }}
//     /* Increased height and restricted max-width for a slender look */
//     className="relative h-[650px] md:h-[800px] w-full max-w-[260px] mx-auto rounded-[30px] overflow-hidden cursor-pointer group shadow-2xl"
//   >
//     {/* Background Image */}
//     <img 
//       src={image} 
//       alt={title} 
//       className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//     />
    
//     {/* Dark Overlay for Text Legibility */}
//     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

//     {/* Title at the bottom */}
//     <div className="absolute bottom-12 left-0 right-0 text-center px-4">
//       <h3 className="text-white text-2xl md:text-3xl font-serif tracking-wider leading-tight">
//         {title}
//       </h3>
//     </div>
//   </motion.div>
// );

// const Blog: React.FC = () => {
//   const blogs = [
//     { title: "Smiling", image: "src/assets/images/blog1.png" },
//     { title: "Dental implant", image: "src/assets/images/blog2.png" },
//     { title: "Teeth white", image: "src/assets/images/blog3.png" },
//     { title: "Veeners", image: "src/assets/images/blog4.png" },
//   ];

//   return (
//     <section className="py-24 px-6 md:px-12 bg-white max-w-[1400px] mx-auto">
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

//       {/* Grid Section - Increased gap to make cards feel more separated and narrow */}
//       <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
//         {blogs.map((b, i) => (
//           <BlogCard key={i} title={b.title} image={b.image} />
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="flex justify-center">
//         <button className="bg-[#3D253F] hover:bg-[#2D1A2E] text-white px-14 py-4 h-[50px] rounded-2xl text-xs tracking-[0.3em] font-bold uppercase transition-all duration-300 shadow-xl hover:scale-105 active:scale-95">
//           View All
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Blog;


// import React from 'react';
// import { motion } from 'framer-motion';

// interface BlogCardProps {
//   image: string;
//   title: string;
// }

// const BlogCard: React.FC<BlogCardProps> = ({ image, title }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     transition={{ duration: 0.4, ease: "easeOut" }}
//     /* Maintained the slender, tall dimensions from your Orchid Dental Care style */
//     className="relative h-[650px] md:h-[800px] w-full max-w-[260px] mx-auto rounded-[30px] overflow-hidden cursor-pointer group shadow-2xl bg-white"
//   >
//     {/* Background Image */}
//     <img 
//       src={image} 
//       alt={title} 
//       className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//     />
    
//     {/* Light Overlay: 
//         Switched to a white gradient to ensure the black text remains 
//         readable even if the background image is dark.
//     */}
//     <div className="absolute inset-0  " />

//     {/* Title at the bottom - Changed to Black */}
//     <div className="absolute bottom-12 left-0 right-0 text-center px-4">
//       <h3 className="text-black text-2xl md:text-3xl font-serif tracking-wider leading-tight">
//         {title}
//       </h3>
//     </div>
//   </motion.div>
// );

// const Blog: React.FC = () => {
//   const blogs = [
//     { title: "Smiling", image: "src/assets/images/smiling.jpg" },
//     { title: "Dental implant", image: "src/assets/images/blog2.png" },
//     { title: "Teeth white", image: "src/assets/images/blog3.jpg" },
//     { title: "Veeners", image: "src/assets/images/veneers.jpg" },
//   ];

//   return (
//     <section className="py-24 px-6 md:px-12 bg-white max-w-[1400px] mx-auto">
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
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
//         {blogs.map((b, i) => (
//           <BlogCard key={i} title={b.title} image={b.image} />
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="flex justify-center">
//         <button className="bg-[#3D253F] hover:bg-[#2D1A2E] text-white px-14 py-4 h-[50px] rounded-2xl text-xs tracking-[0.3em] font-bold uppercase transition-all duration-300 shadow-xl hover:scale-105 active:scale-95">
//           View All
//         </button>
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
    /* 'layout' ensures the internal elements re-flow smoothly during width change */
    layout
    whileHover={{ maxWidth: "450px" }} 
    transition={{ duration: 0.5, ease: "circOut" }}
    className="flex flex-col w-full max-w-[260px] mx-auto cursor-pointer group"
  >
    {/* Image Container */}
    <div className="relative h-[550px] md:h-[700px] w-full rounded-[30px] overflow-hidden shadow-2xl bg-gray-100">
      <img 
        src={image} 
        alt={title} 
        /* w-full and object-cover ensure the image expands to fill the growing container */
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Title Section - Positioned below the image */}
    <div className="mt-8 text-center px-4">
      <h3 className="text-black text-2xl md:text-3xl font-serif tracking-wider leading-tight">
        {title}
      </h3>
    </div>
  </motion.div>
);

const Blog: React.FC = () => {
  const blogs = [
    { title: "Smile Dentistry", image: "src/assets/images/smiling.jpg" },
    { title: "Dental implant", image: "src/assets/images/blog2.png" },
    { title: "Teeth whiteing", image: "src/assets/images/blog3.jpg" },
    { title: "Veeners", image: "src/assets/images/veneers.jpg" },
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

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 whitespace-nowrap mb-20 items-start">
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