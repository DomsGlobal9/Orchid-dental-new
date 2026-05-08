import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {Link} from 'react-router-dom'
const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: '',
    treatment: ''
  });

  console.log(formData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100">
        
        {/* Left Side: Visual/Branding */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] overflow-hidden rounded-[30px] m-2">
          {/* Background Image / Placeholder */}
          <div className="absolute inset-0 bg-[#D8C4D1]">
            <img 
              src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/getintouch.png" 
              alt="Get In Touch" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text Overlay */}
          <div className="absolute top-12 left-12">
            <h2 className="text-4xl md:text-5xl font-light text-[#2D2D2D] tracking-tight">
              Get In Touch
            </h2>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
          <form className="space-y-6">
            {/* Name Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Name"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm font-light placeholder-gray-400"
                  onChange={handleChange}
                />
                <label className="text-[10px] text-gray-400 ml-4 mt-1 block">First</label>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Name"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm font-light placeholder-gray-400"
                  onChange={handleChange}
                />
                <label className="text-[10px] text-gray-400 ml-4 mt-1 block">Last</label>
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm font-light placeholder-gray-400"
                required
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm font-light placeholder-gray-400"
                onChange={handleChange}
              />
            </div>

            {/* Postcode */}
            <div>
              <input
                type="text"
                name="postcode"
                placeholder="Postcode* (To identify the nearest clinic)"
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm font-light placeholder-gray-400"
                required
                onChange={handleChange}
              />
            </div>

            {/* Treatment Dropdown */}
            <div className="relative">
              <select
                name="treatment"
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm font-light placeholder-gray-400 appearance-none bg-transparent"
                onChange={handleChange}
              >
                <option value="" disabled selected>Which Treatment Are You Interested In?</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="implants">Dental Implants</option>
                <option value="ortho">Orthodontics</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown size={20} className="text-gray-400" />
              </div>
            </div>

            {/* Privacy Policy */}
            <p className="text-[10px] text-gray-400 text-center font-light">
              Data collected in line with our <a href="#" className="underline">privacy policy</a>.
            </p>

            {/* Submit Button */}
            <Link to='/thankyou'>
            
              <button
              type="submit"
              className="w-full bg-[#A35299] hover:bg-[#8e4585] text-white py-4 rounded-2xl transition-colors duration-300 text-sm tracking-widest font-light"
            >
              Submit
            </button>
            
            </Link>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;