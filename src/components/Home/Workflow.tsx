import React from 'react';
import { 
  ClipboardCheck, 
  MessageSquare, 
  Plane, 
  MapPin, 
  Stethoscope, 
  HeartPulse, 
  ShieldCheck 
} from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'blue' | 'green';
  imageUrl: string;
}

const steps: StepProps[] = [
  {
    number: 1,
    title: "Advanced Diagnosis & 3D Scanning",
    description: "Upon arrival, we prioritize a calming environment to ease any dental anxiety. Our experts perform an in-depth physical exam, assessing not just the teeth but also jaw joints and soft tissues.",
    icon: <ClipboardCheck size={24} />,
    color: 'blue',
    imageUrl: "src/assets/images/work1.jpg"
  },
  {
    number: 2,
    title: "Transparent Expert Consultation",
    description: "We believe in clarity. Our dentists present their findings on a monitor using your 3D scans, explaining various treatment options such as Ceramic vs. Zirconia crowns. .",
    icon: <MessageSquare size={24} />,
    color: 'green',
    imageUrl: "src/assets/images/work2.jpg"
  },
  {
    number: 3,
    title: "Integrated Block Scheduling",
    description: "To respect your busy lifestyle, we prioritize  By grouping multiple procedures into a single, high-efficiency session, we ensure your treatment is completed faster—often saving you from making five separate visits to the dentist.",
    icon: <Plane size={24} />,
    color: 'blue',
    imageUrl: "src/assets/images/work3.jpg"
  },
  {
    number: 4,
    title: "Minimally Invasive Clinical Execution",
    description: "Our world-renowned dental specialists utilize minimally invasive techniques to ensure a painless experience. For restorative treatments like dental crowns or veneers, ",
    icon: <MapPin size={24} />,
    color: 'green',
    imageUrl: "src/assets/images/work4.jpg"
  },
  {
    number: 5,
    title: "Rapid Fabrication & Smile Trial",
    description: "Leveraging our digital dentistry workflow, the turnaround for laboratory work is significantly faster than traditional clinics. Before final placement, we conduct a  session, allowing you to preview the fit, shade, and aesthetics to ensure they meet your exact expectations.",
    icon: <Stethoscope size={24} />,
    color: 'blue',
    imageUrl: "src/assets/images/work5.jpg"
  },
  {
    number: 6,
    title: "Precision Bonding & Bite Alignment",
    description: "Once approved, your restoration is permanently bonded using high-grade technology. We perform a rigorous occlusion check to ensure your bite is perfectly balanced, preventing future jaw pain and ensuring your new teeth feel and function like natural ones.",
    icon: <HeartPulse size={24} />,
    color: 'green',
    imageUrl: "src/assets/images/work6.jpg"
  },
  {
    number: 7,
    title: "Comprehensive Aftercare & Warranty",
    description: "Experience compassionate support long after your treatment. We provide a tailored Aftercare Kit, hygiene maintenance instructions, and an official Warranty Certificate for major restorative work.",
    icon: <ShieldCheck size={24} />,
    color: 'blue',
    imageUrl: "src/assets/images/veneers.jpg"
  }
];

const Workflow: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A202C] mb-6">How Dental Tourism Works</h2>
          <p className="max-w-4xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed px-4">
           From the first scan to your final smile, Orchid Dental Care provides a seamless, tech-driven healthcare experience. Our experts guide you through every step, ensuring precision and comfort throughout your treatment. Discover our comprehensive process, designed to take you from initial diagnosis to long-term oral health.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (Desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2 hidden md:block"></div>
          
          {/* Top Blue Dot */}
          <div className="absolute left-1/2 top-0 w-3 h-3 bg-[#3182CE] rounded-full -translate-x-1/2 -mt-1.5 hidden md:block z-10"></div>

          <div className="space-y-24 md:space-y-40">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0; 
              const themeColor = step.color === 'blue' ? '#3182CE' : '#48BB78';
              
              return (
                <div 
                  key={step.number} 
                  className={`relative flex flex-col items-center w-full md:flex-row ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* TEXT CONTENT SIDE */}
                  <div className={`w-full md:w-1/2 flex flex-col order-2 md:order-none px-6 mb-10 md:mb-0 ${
                    isEven 
                      ? 'md:pl-16 text-left items-start' 
                      : 'md:pr-16 md:text-right items-start md:items-end'
                  }`}>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${step.color === 'blue' ? 'text-[#3182CE]' : 'text-[#48BB78]'}`}>
                      {step.number}. {step.title}
                    </h3>
                    <p className={`text-gray-500 text-sm md:text-lg leading-relaxed mb-8 max-w-md ${
                      !isEven ? 'md:text-right' : 'text-left'
                    }`}>
                      {step.description}
                    </p>
                    <button 
                      className={`px-10 py-3 rounded text-white font-bold transition-all hover:opacity-90 hover:shadow-lg active:scale-95 ${
                        step.color === 'blue' ? 'bg-[#3182CE]' : 'bg-[#48BB78]'
                      }`}
                    >
                      Consult Now
                    </button>
                  </div>

                  {/* CENTER DIAMOND ICON */}
                  <div className="relative z-20 flex items-center justify-center my-10 md:my-0 order-1 md:order-none">
                    <div 
                      className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transform rotate-45 border-4 border-white shadow-xl"
                      style={{ backgroundColor: themeColor }}
                    >
                      <div className="transform -rotate-45 text-white">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* IMAGE SIDE */}
                  <div className={`w-full md:w-1/2 flex items-center justify-center order-3 md:order-none px-6 ${
                    isEven ? 'md:pr-16' : 'md:pl-16'
                  }`}>
                    <div className="w-full max-w-lg aspect-[4/3] bg-gray-50 rounded-[40px] flex items-center justify-center border border-gray-100 shadow-2xl overflow-hidden group">
                      <img 
                        src={step.imageUrl} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Green Dot */}
          <div className="absolute left-1/2 bottom-0 w-3 h-3 bg-[#48BB78] rounded-full -translate-x-1/2 mb-[-6px] hidden md:block z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;