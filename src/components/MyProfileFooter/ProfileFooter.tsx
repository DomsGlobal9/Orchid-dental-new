import React from 'react';

const ProfileFooter = () => {
  return (
    <footer className="bg-[#FEF1F8] pt-16 pb-8 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Links and Branding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <div className="flex flex-col mb-4">
              <img 
                src="src/assets/images/orchid-icon.png" 
                alt="Orchid Logo" 
                className="w-16 h-16 mb-2"
              />
              <h2 className="text-[#8E5D90] text-3xl font-serif tracking-widest uppercase">
                Orchid Dental Care
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="text-[#8E5D90] text-sm font-semibold mb-2">Orchid Dental Care</p>
              <p className="text-[#8E5D90]/70 text-xs leading-relaxed italic">
                Modern dentistry with a heart. Creating confident, lasting smiles through compassion and technology.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-[#1A202C] font-bold text-sm mb-6">Quick Links</h3>
            <ul className="space-y-4 text-[#8E5D90]/70 text-sm">
              <li className="hover:text-[#8E5D90] cursor-pointer transition-colors">Home</li>
              <li className="hover:text-[#8E5D90] cursor-pointer transition-colors">Services</li>
              <li className="hover:text-[#8E5D90] cursor-pointer transition-colors">Results</li>
              <li className="hover:text-[#8E5D90] cursor-pointer transition-colors">Book Appointment</li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-[#1A202C] font-bold text-sm mb-6">Resources</h3>
            <ul className="space-y-4 text-[#8E5D90]/70 text-sm">
              <li className="hover:text-[#8E5D90] cursor-pointer transition-colors">Our Team</li>
              <li className="hover:text-[#8E5D90] cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-[#8E5D90] cursor-pointer transition-colors">FAQ.S</li>
              <li className="hover:text-[#8E5D90] cursor-pointer transition-colors">Feedback Form</li>
            </ul>
          </div>

          {/* Contact & Follow Us */}
          <div>
            <h3 className="text-[#1A202C] font-bold text-sm mb-6">Follow Us</h3>
            <div className="flex gap-3 mb-8">
              {['instagram', 'facebook', 'youtube'].map((social) => (
                <div key={social} className="w-9 h-9 border border-[#8E5D90]/30 rounded-full flex items-center justify-center text-[#8E5D90] hover:bg-[#8E5D90] hover:text-white transition-all cursor-pointer">
                  <img src={`https://api.iconify.design/lucide:${social}.svg?color=currentColor`} className="w-5 h-5" alt={social} />
                </div>
              ))}
            </div>
            
            <h3 className="text-[#1A202C] font-bold text-sm mb-4">Contact Us</h3>
            <div className="space-y-3 text-[#8E5D90]/80 text-xs">
              <div className="flex items-start gap-3">
                <img src="https://api.iconify.design/lucide:map-pin.svg?color=%238e5d90" className="w-4 h-4 mt-0.5" alt="loc" />
                <span>123 Dental Street, Kochi, Kerala, India</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://api.iconify.design/lucide:phone.svg?color=%238e5d90" className="w-4 h-4" alt="phone" />
                <span>+91 99747 54312</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://api.iconify.design/lucide:mail.svg?color=%238e5d90" className="w-4 h-4" alt="mail" />
                <span>hello@orchiddentalcare.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-8 border-t border-[#8E5D90]/10">
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-bold text-[#1A202C] mb-1">Stay Updated with Dental Tips</h4>
            <p className="text-gray-500 text-sm">Subscribe to our newsletter for oral health tips, special offers, and clinic updates.</p>
          </div>
          <div className="flex w-full lg:w-auto max-w-md bg-white rounded-full p-1.5 shadow-sm border border-gray-100">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent px-6 py-2 text-sm outline-none placeholder:text-gray-300"
            />
            <button className="bg-[#A669A2] hover:bg-[#8E5D90] text-white px-8 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all">
              Subscribe <img src="https://api.iconify.design/lucide:arrow-right.svg?color=white" className="w-4 h-4" alt="arrow" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 text-center">
          <p className="text-[10px] text-[#8E5D90]/50 font-bold mb-2">
            © 2025 Orchid Dental Care. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-6 text-[10px] text-[#8E5D90] font-bold uppercase tracking-wider">
            <span className="cursor-pointer hover:underline">Privacy policy</span>
            <span className="cursor-pointer hover:underline">Terms and conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfileFooter;