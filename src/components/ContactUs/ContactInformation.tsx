import React from 'react';
// Using Feather and FontAwesome icons for a clean, modern look
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

const ContactInformation: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6 font-sans">
      <div className="bg-white rounded-[10px] shadow-2xl flex flex-col lg:flex-row w-full max-w-[1100px] overflow-hidden p-2">
        
        {/* --- Left Column: Contact Details --- */}
        <div className="bg-[#4d2c4e] text-white rounded-[10px] p-10 lg:w-[40%] flex flex-col justify-between relative overflow-hidden min-h-[600px]">
          
          <div className="z-10 space-y-2">
            <h2 className="text-[28px] font-serif tracking-wide">Contact Information</h2>
            <p className="text-[#a68ba8] text-[16px]">Say something to start a live chat!</p>
          </div>

          <div className="z-10 space-y-12">
            <div className="flex items-center gap-6">
              <FiPhone size={24} className="text-white" />
              <span className="text-[16px]">+1012 3456 789</span>
            </div>
            <div className="flex items-center gap-6">
              <FiMail size={24} className="text-white" />
              <span className="text-[16px]">demo@gmail.com</span>
            </div>
            <div className="flex items-center gap-6">
              <FiMapPin size={24} className="text-white" />
              <span className="text-[16px] leading-relaxed">
                132 Dartmouth Street Boston, <br /> 
                Massachusetts 02156 United States
              </span>
            </div>
          </div>

          <div className="z-10 space-y-4">
            <div className="flex gap-6">
              <div className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center cursor-pointer hover:bg-black transition-colors">
                <FaTwitter size={18} color="white" />
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                <FaInstagram size={18} color="black" />
              </div>
              <div className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center cursor-pointer hover:bg-black transition-colors">
                <FaDiscord size={18} color="white" />
              </div>
            </div>
          </div>

          {/* Decorative Bottom Graphic */}
          <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF" d="M44.7,-76.4C58.3,-69.2,70.1,-59,79.1,-46.1C88.1,-33.1,94.3,-17.4,93.4,-1.8C92.5,13.8,84.5,29.3,74.1,42.9C63.7,56.5,50.8,68.2,36.2,74.1C21.6,80,5.3,80.1,-10.8,77.3C-26.9,74.5,-42.8,68.8,-55.5,59.3C-68.2,49.8,-77.7,36.5,-82.7,21.8C-87.7,7.1,-88.2,-9.1,-84.1,-24.1C-80,-39.1,-71.3,-53,-59.2,-60.9C-47.1,-68.8,-31.6,-70.7,-17.1,-72.7C-2.6,-74.7,11,-76.8,24.5,-77.3C38,-77.8,44.7,-76.4,44.7,-76.4Z" transform="translate(140 140)" />
             </svg>
          </div>
        </div>

        {/* --- Right Column: Form --- */}
        <div className="bg-white p-12 lg:w-[60%]">
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              <div className="group relative">
                <label className="text-[12px] font-semibold text-gray-400 group-focus-within:text-black transition-colors">First Name</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors bg-transparent" />
              </div>
              <div className="group relative">
                <label className="text-[12px] font-semibold text-gray-400 group-focus-within:text-black transition-colors">Last Name</label>
                <input type="text" placeholder="" className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-300" />
              </div>
              <div className="group relative">
                <label className="text-[12px] font-semibold text-gray-400 group-focus-within:text-black transition-colors">Email</label>
                <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors bg-transparent" />
              </div>
              <div className="group relative">
                <label className="text-[12px] font-semibold text-gray-400 group-focus-within:text-black transition-colors">Phone Number</label>
                <input type="text" placeholder="" className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-300" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[18px] font-bold text-black">Select Subject?</label>
              <div className="flex flex-wrap gap-6">
                {['General Inquiry', 'General Inquiry', 'General Inquiry', 'General Inquiry'].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer text-[12px]">
                    <input type="radio" name="subject" defaultChecked={idx === 0} className="w-5 h-5 accent-black" />
                    <span className="text-gray-700 text-xs">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="group relative">
              <label className="text-[14px] font-semibold text-gray-400 group-focus-within:text-black transition-colors">Message</label>
              <input type="text" placeholder="Write your message.." className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-300" />
            </div>

            <div className="flex justify-end pt-6">
              <button className="bg-[#834785] text-white px-14 py-4 rounded-[6px] text-[15px] font-semibold hover:bg-[#4d2c4e] transition-all shadow-lg active:scale-95">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;