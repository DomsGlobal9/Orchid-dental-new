import React from 'react';

// Define the shape of our stat data
interface StatItem {
  label: string;
  value: string;
}

const stats: StatItem[] = [
  { label: 'Years of Excellence', value: '15+' },
  { label: 'Transformations', value: '10,000+' },
  { label: 'Satisfaction Rate', value: '98%' },
  { label: 'Awards Received', value: '50+' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Text Color: #3d2b3d (Deep Plum)
                Font: Serif for that elegant, high-end look 
              */}
              <span className="text-5xl md:text-6xl font-serif text-[#442140] mb-3 tracking-tight">
                {stat.value}
              </span>
              
              {/* Text Color: #6a7c92 (Muted Blue/Grey)
                Font: Sans-serif for clean readability 
              */}
              <p className="text-sm md:text-base font-sans text-[#45556C] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;