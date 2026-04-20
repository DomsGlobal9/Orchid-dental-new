import React, { useState } from 'react';
import { 
  ChevronDown, 
  Phone, 
  User, 
  Calendar, 
  Languages, 
  LogOut 
} from 'lucide-react';


// import Account from '../Booking/Account';



const MyProfileNavbar: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <nav className="relative w-full bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between z-50">

      {/* <Account 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      /> */}


      {/* Left: Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="text-[#8E5D90]">
          <img className='h-[30px] w-[30px]' src='src/assets/images/orchid-icon.png'/>
        </div>
        <span className="text-[#8E5D90] font-bold text-lg tracking-wide uppercase">
          Orchid Dental Care
        </span>
      </div>

      {/* Middle: Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 text-[#2D2D2D] font-medium">
        <a href="#" className="hover:text-[#8E5D90] transition-colors">Home</a>
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#8E5D90] transition-colors">
          Services <ChevronDown size={16} />
        </div>
        <a href="#" className="hover:text-[#8E5D90] transition-colors">Results</a>
        <a href="#" className="hover:text-[#8E5D90] transition-colors">Our Team</a>
        <a href="#" className="hover:text-[#8E5D90] transition-colors">Smile Gallery</a>
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#8E5D90] transition-colors">
          Locations <ChevronDown size={16} />
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-4">
        <button 
         className="bg-[#8E5D90] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#7a4f7c] transition-all active:scale-95 shadow-md shadow-purple-100">
          Book Appointment
        </button>

         {/* <button onClick={() => setIsBookingOpen(true)} 
         className="bg-[#8E5D90] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#7a4f7c] transition-all active:scale-95 shadow-md shadow-purple-100">
          Book Appointment
        </button> */}
        
        <button className="hidden md:flex items-center gap-2 border border-gray-200 px-5 py-2.5 rounded-xl font-semibold text-[#2D2D2D] hover:bg-gray-50 transition-all">
          <Phone size={18} /> Call us
        </button>

        {/* Profile Trigger */}
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-11 h-11 bg-[#8E5D90] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
          >
            <User size={22} />
          </button>

          {/* Profile Dropdown (Exact Container.png Structure) */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-4 w-72 bg-white rounded-3xl shadow-2xl border border-gray-50 overflow-hidden animate-in fade-in zoom-in duration-200">
              {/* User Header */}
              <div className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-[#8E5D90] rounded-full flex items-center justify-center text-white">
                  <User size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2D2D2D]">John Doe</h4>
                  <p className="text-gray-500 text-sm">john.doe@email.com</p>
                </div>
              </div>

              {/* View Profile Button */}
              <div className="px-6 pb-6">
                <button className="w-full bg-[#F1F5F9] text-[#2D2D2D] py-3.5 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-colors">
                  View Profile
                </button>
              </div>

              <div className="h-[1px] bg-gray-100 w-full" />

              {/* Menu List */}
              <div className="py-4">
                <button className="w-full flex items-center gap-4 px-8 py-4 hover:bg-gray-50 transition-colors group">
                  <User className="text-[#8E5D90]" size={22} />
                  <span className="text-[#2D2D2D] font-bold text-lg">My Profile</span>
                </button>
                <button className="w-full flex items-center gap-4 px-8 py-4 hover:bg-gray-50 transition-colors group">
                  <Calendar className="text-[#8E5D90]" size={22} />
                  <span className="text-[#2D2D2D] font-bold text-lg">Bookings</span>
                </button>
                <button className="w-full flex items-center gap-4 px-8 py-4 hover:bg-gray-50 transition-colors group">
                  <Languages className="text-[#8E5D90]" size={22} />
                  <span className="text-[#2D2D2D] font-bold text-lg">Languages</span>
                </button>
              </div>

              <div className="h-[1px] bg-gray-100 w-full" />

              {/* Logout */}
              <button className="w-full flex items-center gap-4 px-8 py-6 hover:bg-red-50 transition-colors group">
                <LogOut className="text-red-500" size={22} />
                <span className="text-red-500 font-bold text-xl">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MyProfileNavbar;