import React from 'react';

const RelatedArticles: React.FC = () => {
  const articles = [
    {
      image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/feature2.jpg",
      category: "Dental Care Tips",
      title: "5 Morning Habits That Will Transform Your Dental Health",
      date: "March 12, 2026",
      readTime: "8 min read",
    },
    {
      image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/feature3.jpg",
      category: "Technology",
      title: "Understanding Dental Implants: A Complete Patient Guide",
      date: "March 10, 2026",
      readTime: "12 min read",
    },
    {
      image: "https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/feature4.jpg",
      category: "Cosmetic Dentistry",
      title: "The Secret to a Hollywood Smile: Behind the Scenes",
      date: "March 8, 2026",
      readTime: "7 min read",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white py-16 px-8 font-sans">
      <div className="max-w-[1200px] w-full">
        {/* --- Section Heading --- */}
        <h2 className="text-[36px] font-bold text-[#1a202c] text-center mb-12">
          Related Articles
        </h2>

        {/* --- Articles Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col space-y-4">
              {/* Image Container */}
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[240px] object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Category Pill */}
              <div className="flex">
                <span className="bg-[#FDF2F8] text-[#9B669E] text-[12px] font-semibold px-3 py-1 rounded-full border border-[#F9E1F0]">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-bold text-[#1a202c] leading-tight hover:text-[#9B669E] cursor-pointer transition-colors">
                {article.title}
              </h3>

              {/* Meta Data */}
              <div className="flex items-center text-[#718096] text-[14px] space-x-2">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;