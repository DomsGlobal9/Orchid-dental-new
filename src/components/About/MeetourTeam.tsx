import React from 'react';

const MeetourTeam: React.FC = () => {
  const team = [
    {
    //   name: "Dr. Sarah Bennett",
    //   role: "Lead Dentist",
      image: "src/assets/images/meetourteam1.png" // Replace with your image URL
    },
    {
    //   name: "Dr. Maya Lin",
    //   role: "Cosmetic Dentist",
      image: "src/assets/images/meetourteam2.png" // Replace with your image URL
    },
    {
    //   name: "Dr. Michael Reyes",
    //   role: "Pediatric Specialist",
      image: "src/assets/images/meetourteam3.png" // Replace with your image URL
    },
    {
    //   name: "Dr. James Carter",
    //   role: "Dental Hygienist",
      image: "src/assets/images/meetourteam4.png" // Replace with your image URL
    }
  ];

  return (
    <div className="bg-[#F3E8F3] py-20 px-6 relative overflow-hidden font-sans">
      {/* Optional: Subtle Tooth watermark background like in image */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5 pointer-events-none">
         <img src="YOUR_TOOTH_ICON_URL" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#5D3E5D] font-medium text-sm mb-4">Meet Our Dental Team</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1D2B53] uppercase tracking-wide mb-6">
            Committed to <span className='text-[#A953A0]'>Your Smile</span> 
          </h2>
          <div className="max-w-2xl mx-auto space-y-2">
             <p className="text-gray-700 text-lg">
                Our experienced dental team is here to make every visit positive and personalized.
             </p>
             <p className="text-gray-700 text-lg italic">
                With gentle hands and caring hearts.
             </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Card */}
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm group">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Name Label Overlay */}
                {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-xl py-4 px-2 shadow-lg">
                  <h3 className="text-[#9D6C9D] font-serif text-lg leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    {member.role}
                  </p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetourTeam;