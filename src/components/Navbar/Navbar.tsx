import React, { useState } from 'react';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import YouTube from '@mui/icons-material/YouTube';
import PhoneInTalk from '@mui/icons-material/PhoneInTalk';
import Person from '@mui/icons-material/Person';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Languages, 
  LogOut 
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  // Common button class for equal length and width
  const actionButtonBase = "h-[48px] w-[280px] flex items-center justify-center rounded-md transition-all";

  return (
    <nav className="w-full font-sans relative">
    
      <div className="bg-[#4A2C4A] text-white py-5 px-4 md:px-20 flex items-center justify-center lg:justify-start gap-4">
  <span className="text-[10px] md:text-lg font-light opacity-90">Follow Us</span>
  <div className="flex gap-3">
    {/* Instagram */}
    <div className="w-9 h-9 border border-[#BA75B3] rounded-full flex items-center justify-center  hover:text-white hover:border-[#D946EF] transition-all cursor-pointer">
      <Instagram sx={{ fontSize: 18 }} />
    </div>

    {/* Facebook */}
    <div className="w-9 h-9 border border-[#BA75B3] rounded-full flex items-center justify-center  hover:text-white hover:border-[#D946EF] transition-all cursor-pointer">
      <Facebook sx={{ fontSize: 18 }} />
    </div>

    {/* YouTube */}
    <div className="w-9 h-9 border border-[#BA75B3] rounded-full flex items-center justify-center  hover:text-white hover:border-[#D946EF] transition-all cursor-pointer">
      <YouTube sx={{ fontSize: 18 }} />
    </div>
  </div>
</div>

      {/* 2. Main Middle Section */}
      <div className="bg-white py-3 px-4 md:px-20 flex items-center justify-between lg:grid lg:grid-cols-3 border-b lg:border-none">
        {/* Logo Section */}
        <div className="flex items-center gap-3 lg:flex-col lg:justify-center lg:col-start-2">
          <Link to="/">
            <img src="src/assets/images/orchid-icon.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          </Link>
          
          <h1 className="tracking-[0.1em] md:tracking-[0.2em] text-sm md:text-2xl font-semibold bg-clip-text text-transparent"
              style={{ backgroundImage: `conic-gradient(from 182.06deg at 55.18% 101.6%, #43213F -57.12deg, #E0C9DE 24.23deg, #783271 136.73deg, #43213F 302.88deg, #E0C9DE 384.23deg)` }}>
            ORCHID DENTAL CARE
          </h1>
        </div>

        {/* Hamburger */}
        <div className="flex lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
            {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </button>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center justify-end gap-4 lg:col-start-3 relative">
          <button className="bg-[#4A2C4A] text-white px-6 py-2 rounded-md text-sm font-semibold">Book Appointment</button>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-gray-700">
            <PhoneInTalk sx={{ fontSize: 20 }} /> <span className="text-sm font-medium">Call us</span>
          </button>
          
          {/* Profile Trigger */}
          <div 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="bg-[#4A2C4A] text-white p-2 rounded-full cursor-pointer hover:opacity-90 transition-opacity"
          >
            <Person sx={{ fontSize: 24 }} />
          </div>

          {/* Profile Dropdown Container */}
          {isProfileOpen && (
            <div className="absolute right-0 top-full mt-4 w-72 bg-white rounded-3xl shadow-2xl border border-gray-50 overflow-hidden animate-in fade-in zoom-in duration-200 z-[100]">
              <div className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-[#8E5D90] rounded-full flex items-center justify-center text-white">
                  <Person sx={{ fontSize: 28 }} />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-[#2D2D2D]">John Doe</h4>
                  <p className="text-gray-500 text-sm">john.doe@email.com</p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link to="/my-account">
                  <button className="w-full bg-[#F1F5F9] text-[#2D2D2D] py-3.5 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-colors">
                    View Profile
                  </button>
                </Link>
              </div>

              <div className="h-[1px] bg-gray-100 w-full" />

              <div className="py-2">
                <Link to="/my-booking">
                  <button className="w-full flex items-center gap-4 px-8 py-4 hover:bg-gray-50 transition-colors group">
                    <Calendar className="text-[#8E5D90]" size={22} />
                    <span className="text-[#2D2D2D] font-bold text-lg">Bookings</span>
                  </button>
                </Link>
                <button className="w-full flex items-center gap-4 px-8 py-4 hover:bg-gray-50 transition-colors group">
                  <Languages className="text-[#8E5D90]" size={22} />
                  <span className="text-[#2D2D2D] font-bold text-lg">Languages</span>
                </button>
              </div>

              <div className="h-[1px] bg-gray-100 w-full" />

              <button className="w-full flex items-center gap-4 px-8 py-6 hover:bg-red-50 transition-colors group">
                <LogOut className="text-red-500" size={22} />
                <span className="text-red-500 font-bold text-xl">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 3. Navigation Menu Overlay */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:block bg-[#4A2C4A] text-white`}>
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 py-8 lg:py-3 text-xl font-light w-full">
          <Link to="/" className="cursor-pointer">
            <li className="cursor-pointer">Home</li>
          </Link>

          <li className="relative group list-none" onMouseLeave={() => setOpenSub(null)}>
            {/* Main Link */}
            <div 
              className="flex items-center gap-1 cursor-pointer py-2 text-[#ffffff] hover:text-[#E0C9DE] transition-colors"
            >
              <Link to="/services">Services</Link>
              <KeyboardArrowDown sx={{ fontSize: 16 }} className="group-hover:rotate-180 transition-transform" />
            </div>

            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-full hidden group-hover:block w-56 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50">
              
              {/* General Dentistry */}
              <li className="relative">
                <div 
                  className="flex items-center justify-between px-6 lg:px-4 py-3 lg:py-2 text-gray-700 hover:bg-[#f8f5f8] cursor-pointer"
                  onMouseEnter={() => window.innerWidth >= 1024 && setOpenSub('general')}
                  onClick={() => window.innerWidth < 1024 && setOpenSub(openSub === 'general' ? null : 'general')}
                >
                  <Link to="/general-density">
                    <span className="text-base lg:text-sm">General Dentistry</span>
                  </Link>
                  <span className="lg:block transition-transform lg:rotate-0">›</span>
                </div>

                <ul className={`
                  ${openSub === 'general' ? 'block' : 'hidden'} 
                  lg:absolute lg:left-full lg:top-0 w-[100%] lg:w-72 
                  bg-[#f9f9f9] lg:bg-white shadow-inner lg:shadow-xl lg:border border-gray-100 py-0 z-[130] lg:ml-0
                `}>
                  <li><Link to="/internal-density" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Dental Check Ups & Cleaning</Link></li>
                  <li><Link to="/dental-filling" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Dental Fillings</Link></li>
                  <li><Link to="/dental-bridge" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Dental Bridge</Link></li>
                  <li><Link to="/dental-crown" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Dental Crowns</Link></li>
                  <li><Link to="/wisdom-teeth" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Wisdom Teeth</Link></li>
                  <li><Link to="/root-canal" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Root Canal Treatment</Link></li>
                  <li><Link to="/denture-service" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white border-b lg:border-none">Denture Services</Link></li>
                </ul>
              </li>

              {/* Cosmetic Dentistry */}
              <li className="relative">
                <div 
                  className="flex items-center justify-between px-6 lg:px-4 py-3 lg:py-2 text-gray-700 hover:bg-[#f8f5f8] cursor-pointer"
                  onMouseEnter={() => window.innerWidth >= 1024 && setOpenSub('cosmetic')}
                  onClick={() => window.innerWidth < 1024 && setOpenSub(openSub === 'cosmetic' ? null : 'cosmetic')}
                >
                 <Link to='/cosmetic-dentistry'> <span className="text-base lg:text-sm">Cosmetic Dentistry</span> </Link>
                  <span className="lg:block transition-transform lg:rotate-0">›</span>
                </div>
                <ul className={`
                  ${openSub === 'cosmetic' ? 'block' : 'hidden'} 
                  lg:absolute lg:left-full lg:top-0 w-[100%] lg:w-64 
                  bg-[#f9f9f9] lg:bg-white shadow-inner lg:shadow-xl lg:border border-gray-100 py-0 z-[130] lg:ml-0
                `}>
                  <li><Link to="/veneers" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Veneers</Link></li>
                  <li><Link to="/composite-bonding" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Composite Bonding</Link></li>
                  <li><Link to="/dental-implants" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Dental Implants</Link></li>
                  <li><Link to="/clear-aligner" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Clear Aligner Treatment</Link></li>
                  <li><Link to="/teeth-whitening" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Teeth Whitening</Link></li>
                  <li><Link to="/sleep-dentistry" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Sleep Dentistry</Link></li>
                  <li><Link to="/gum-recountouring" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white">Gum Recontouring</Link></li>
                  <li><Link to="/braces-treatment" className="block px-8 lg:px-4 py-2 text-sm text-gray-600 lg:text-gray-700 hover:bg-[#4A2C4A] hover:text-white border-b lg:border-none">Braces Treatment</Link></li>
                </ul>
              </li>

              <li><Link to="/Laser" className="block px-6 lg:px-4 py-3 lg:py-2 text-sm text-gray-700 hover:bg-[#f8f5f8]">Laser</Link></li>
              <li><Link to="/pediatric" className="block px-6 lg:px-4 py-3 lg:py-2 text-sm text-gray-700 hover:bg-[#f8f5f8]">Pediatric</Link></li>
              <li><Link to="/dental-tourism" className="block px-6 lg:px-4 py-3 lg:py-2 text-sm text-gray-700 hover:bg-[#f8f5f8]">Dental Tourism</Link></li>
            </ul>
          </li>
          
          <Link to='/our-team'>
            <li className="cursor-pointer">Our Team</li>
          </Link>
          <Link to='/gallery'>
            <li className="cursor-pointer">Smile Gallery</li>
          </Link>
          
          <Link to='/our-location'>
            <li className="flex items-center gap-1 cursor-pointer">Locations <KeyboardArrowDown sx={{ fontSize: 16 }} /></li>
          </Link>

          <li className="flex lg:hidden items-center gap-1 cursor-pointer pt-2 opacity-80 border-t border-white/10 w-[280px] justify-center mt-2">
            English <KeyboardArrowDown sx={{ fontSize: 16 }} />
          </li>

          <Link to='/contact-us'>
            <li className="flex items-center gap-1 cursor-pointer">Contact Us  </li>
          </Link>

          {/* MOBILE/MEDIUM ONLY */}
          <div className="flex flex-col items-center gap-4 mt-6 lg:hidden w-full px-4">
            <button className={`${actionButtonBase} bg-white text-[#4A2C4A] font-bold shadow-md`}>
              Book Appointment
            </button>
            
            <div className="flex items-center gap-3">
              <button className={`h-[48px] flex items-center justify-center rounded-md border border-white text-white transition-all w-[280px] md:w-[220px]`}>
                <PhoneInTalk sx={{ fontSize: 20, mr: 1 }} />
                <span>Call us</span>
              </button>
              
              <div 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="hidden md:flex bg-white text-[#4A2C4A] h-[48px] w-[48px] items-center justify-center rounded-full cursor-pointer"
              >
                <Person sx={{ fontSize: 27 }} />
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;





