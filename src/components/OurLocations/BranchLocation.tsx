import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react';

const BranchLocation: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between bg-white p-8 rounded-3xl gap-8 max-w-6xl mx-auto">
      
      {/* Location Details */}
      <div className="flex gap-4 max-w-sm w-full">
        <div className="flex-shrink-0 w-12 h-12 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
          <MapPin size={24} />
        </div>
        <div className="flex flex-col w-full">
          <h3 className="text-[#2D2D2D] font-bold text-lg mb-1">Gachibowli, Hyderabad</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Orchid Dental Care, Ground floor, <br />
  Unique Business Center, behind Titan Eye Plus, <br />
  Thrikkakara, Vazahakkala, Kakkanad, Kerala, pin - 682021
          </p>
          
          {/* BUTTON CONTAINER: Stacked and aligned to start (left) */}
          {/* <div className="mt-6 flex flex-col md:flex-row items-start gap-3 w-full">
            <button className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-lg transition-all active:scale-95 shadow-[#25D366]/20 shadow-md w-full md:w-auto h-[48px]">
              <MessageCircle size={18} fill="currentColor" /> WhatsApp Us
            </button>
            <button className="flex items-center justify-center gap-2  bg-[#442344] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#331a33] transition-all active:scale-95 shadow-md w-full md:w-auto h-[48px]">
              <Navigation size={18} /> Get Directions
            </button>
          </div> */}
          <div className="mt-6 flex flex-row items-center gap-3 w-full flex-nowrap">
  {/* Removed w-full and md:w-auto to prevent the button from expanding/breaking */}
        <button className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-lg transition-all active:scale-95 shadow-[#25D366]/20 shadow-md h-[48px] whitespace-nowrap">
          <MessageCircle size={18} fill="currentColor" /> WhatsApp Us
        </button>
        
        <button className="flex items-center justify-center gap-2 bg-[#442344] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#331a33] transition-all active:scale-95 shadow-md h-[48px] whitespace-nowrap">
          <Navigation size={18} /> Get Directions
        </button>
</div>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
          <Clock size={24} />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#2D2D2D] font-bold text-lg mb-1">Opening Hours</h3>
          <p className="text-gray-500 text-sm">
            Opens from <span className="text-gray-700">9:00 AM to 9:00 PM</span>
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
          <Phone size={24} />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#2D2D2D] font-bold text-lg mb-1">Contact</h3>
          <p className="text-[#D187D1] font-bold text-lg tracking-wide">
            097781 97271
          </p>
        </div>
      </div>

    </div>
  );
};

export default BranchLocation;