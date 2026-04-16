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
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Common button class for equal length and width
  const actionButtonBase = "h-[48px] w-[280px] flex items-center justify-center rounded-md transition-all";

  return (
    <nav className="w-full font-sans relative">
      {/* 1. Top Social Bar */}
      <div className="bg-[#4A2C4A] text-white py-2 px-4 md:px-20 flex items-center justify-center lg:justify-start gap-4">
        <span className="text-[10px] md:text-xs font-light opacity-90">Follow Us</span>
        <div className="flex gap-2">
          <Instagram sx={{ fontSize: 16 }} />
          <Facebook sx={{ fontSize: 16 }} />
          <YouTube sx={{ fontSize: 16 }} />
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

        {/* Desktop Buttons (Always visible on lg+) */}
        <div className="hidden lg:flex items-center justify-end gap-4 lg:col-start-3">
          <button className="bg-[#4A2C4A] text-white px-6 py-2 rounded-md text-sm font-semibold">Book Appointment</button>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-gray-700">
            <PhoneInTalk sx={{ fontSize: 20 }} /> <span className="text-sm font-medium">Call us</span>
          </button>
          <div className="bg-[#4A2C4A] text-white p-2 rounded-full"><Person sx={{ fontSize: 24 }} /></div>
        </div>
      </div>

      {/* 3. Navigation Menu Overlay */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:block bg-[#4A2C4A] text-white`}>
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 py-8 lg:py-3 text-xl font-light w-full">
          <Link to="/" className="cursor-pointer">
          <li className="cursor-pointer">Home</li>
          </Link>

          {/* <Link to='/services'>
          <li className="flex items-center gap-1 cursor-pointer">Services <KeyboardArrowDown sx={{ fontSize: 16 }} /></li>
          </Link> */}

          <li className="relative group list-none">
  {/* Main Link */}
  <Link 
    to='/services' 
    className="flex items-center gap-1 cursor-pointer py-2 text-[#ffffff] hover:text-[#7d5c7d] transition-colors"
  >
    Services <KeyboardArrowDown sx={{ fontSize: 16 }} className="group-hover:rotate-180 transition-transform" />
  </Link>

  {/* Dropdown Menu */}
  <ul className="absolute left-0 top-full hidden group-hover:block w-48 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50">
    <li>
      <Link 
        to="/services/general" 
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f8f5f8] hover:text-[#442140]"
      >
        General Dentistry
      </Link>
    </li>
    <li>
      <Link 
        to="/services/cosmetic" 
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f8f5f8] hover:text-[#442140]"
      >
        Cosmetic Dentistry
      </Link>
    </li>
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

          {/* MOBILE/MEDIUM ONLY: Fixed Width Equal Buttons */}
          <div className="flex flex-col items-center gap-4 mt-6 lg:hidden w-full px-4">
            <button className={`${actionButtonBase} bg-white text-[#4A2C4A] font-bold shadow-md`}>
              Book Appointment
            </button>
            
            <div className="flex items-center gap-3">
              {/* Call us button: Width adjusts if icon is hidden */}
              <button className={`h-[48px] flex items-center justify-center rounded-md border border-white text-white transition-all 
                w-[280px] md:w-[220px]`}>
                <PhoneInTalk sx={{ fontSize: 20, mr: 1 }} />
                <span>Call us</span>
              </button>
              
              {/* Profile Icon: HIDDEN on small (default), FLEX on medium (md:) */}
              <div className="hidden md:flex bg-white text-[#4A2C4A] h-[48px] w-[48px] items-center justify-center rounded-full">
                <Person sx={{ fontSize: 24 }} />
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;