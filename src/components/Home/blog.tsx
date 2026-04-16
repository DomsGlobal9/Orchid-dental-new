import React from 'react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  image: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    /* Increased height and restricted max-width for a slender look */
    className="relative h-[650px] md:h-[800px] w-full max-w-[260px] mx-auto rounded-[30px] overflow-hidden cursor-pointer group shadow-2xl"
  >
    {/* Background Image */}
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
    
    {/* Dark Overlay for Text Legibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

    {/* Title at the bottom */}
    <div className="absolute bottom-12 left-0 right-0 text-center px-4">
      <h3 className="text-white text-2xl md:text-3xl font-serif tracking-wider leading-tight">
        {title}
      </h3>
    </div>
  </motion.div>
);

const Blog: React.FC = () => {
  const blogs = [
    { title: "", image: "src/assets/images/blog1.png" },
    { title: "", image: "src/assets/images/blog2.png" },
    { title: "", image: "src/assets/images/blog3.png" },
    { title: "", image: "src/assets/images/blog4.png" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white max-w-[1400px] mx-auto">
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

      {/* Grid Section - Increased gap to make cards feel more separated and narrow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
        {blogs.map((b, i) => (
          <BlogCard key={i} title={b.title} image={b.image} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <button className="bg-[#3D253F] hover:bg-[#2D1A2E] text-white px-14 py-4 h-[50px] rounded-2xl text-xs tracking-[0.3em] font-bold uppercase transition-all duration-300 shadow-xl hover:scale-105 active:scale-95">
          View All
        </button>
      </div>
    </section>
  );
};

export default Blog;