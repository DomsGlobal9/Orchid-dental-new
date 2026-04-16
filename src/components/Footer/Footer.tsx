
// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#442140]  text-white py-12 px-6 md:px-12 lg:px-24 font-sans">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
//           {/* Brand Column - Occupies 4 columns on large screens */}
//           <div className="lg:col-span-4 flex flex-col justify-between">
//             <div className="flex items-start gap-4">
//               <img 
//                 src="src/assets/images/orchid-icon.png" 
//                 alt="Orchid Logo" 
//                 className="w-20 h-20 object-contain"
//               />
//               <div className="flex flex-col pt-2">
//                 <h3 className="text-[#A953A0] font-semibold text-xl mb-2">Orchid Dental Care</h3>
//                 <p className="text-gray-200 text-xs leading-relaxed max-w-[240px]">
//                   Modern dentistry with a heart. Creating confident, lasting smiles through compassion and technology.
//                 </p>
//               </div>
//             </div>
//             {/* Large Brand Title - Positioned below the logo block */}
//             <h2 className="text-4xl md:text-5xl lg:text-4xl font-serif mt-8 uppercase tracking-tight whitespace-nowrap text-white/90">
//               Orchid Dental Care
//             </h2>
//           </div>

//           {/* Quick Links */}
//           <div className="lg:col-span-2 lg:pt-4">
//             <h3 className="text-[#A953A0] font-semibold text-lg mb-6">Quick Links</h3>
//             <ul className="space-y-3 text-sm text-gray-100">
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Home</li>
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Services</li>
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Smile Gallery</li>
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Book Appointment</li>
//             </ul>
//           </div>                              

//           {/* Resources */}
//           <div className="lg:col-span-2 lg:pt-4">
//             <h3 className="text-[#A953A0] font-semibold text-lg mb-6">Resources</h3>
//             <ul className="space-y-3 text-sm text-gray-100">
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Feedback Form</li>
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Our Team</li>
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Blog</li>
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">FAQ.S</li>
//             </ul>
//           </div>

//           {/* Follow Us & Contact */}
//           <div className="lg:col-span-4 lg:pt-4 flex flex-col space-y-8">
//             <div>
//               <h3 className="text-[#A953A0] font-semibold text-lg mb-6">Follow Us</h3>
//               <div className="flex gap-3">
//                 {['instagram', 'facebook', 'youtube'].map((social) => (
//                   <div key={social} className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center hover:bg-[#D946EF] hover:border-[#D946EF] transition-all cursor-pointer">
//                     <img 
//                       src={`https://api.iconify.design/lucide:${social}.svg?color=white`} 
//                       className="w-4 h-4" 
//                       alt={social} 
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="space-y-4">
//               <h4 className="text-[#A953A0] text-sm font-semibold">Contact Us</h4>
//               <div className="space-y-3 text-sm text-gray-200">
//                 <div className="flex items-start gap-3">
//                   <img src="https://api.iconify.design/lucide:map-pin.svg?color=%23D946EF" className="w-4 h-4 mt-0.5 shrink-0" alt="map" />
//                   <span>123 Dental Street, Kochi, Kerala, India</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <img src="https://api.iconify.design/lucide:phone.svg?color=%23D946EF" className="w-4 h-4 shrink-0" alt="phone" />
//                   <span>+91 99747 54312</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <img src="https://api.iconify.design/lucide:mail.svg?color=%23D946EF" className="w-4 h-4 shrink-0" alt="email" />
//                   <span>hello@orchiddentalcare.in</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Section */}
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-10 border-t border-white/10">
//           <div className="w-full lg:max-w-md">
//             <h4 className="text-xl font-bold text-[#A953A0] mb-2">Stay Updated with Dental Tips</h4>
//             <p className="text-gray-300 text-sm">
//               Subscribe to our newsletter for oral health tips, special offers, and clinic updates.
//             </p>
//           </div>
          
//           <div className="flex flex-col sm:flex-row w-full lg:w-auto items-center gap-3">
//             <input 
//               type="email" 
//               placeholder="Enter your email" 
//               className="w-full sm:w-80 bg-white px-6 py-3.5 text-sm text-gray-800 outline-none rounded-full"
//             />
//             <button className="w-full sm:w-auto bg-[#B34FB3] hover:bg-[#9e449e] text-white px-8 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all whitespace-nowrap">
//               Subscribe 
//               <span className="text-lg">→</span>
//             </button>
//           </div>
//         </div>

//         {/* Bottom Legal Section */}
//         <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center space-y-4">
//           <p className="text-xs text-gray-400">
//             © 2025 Orchid Dental Care. All Rights Reserved.
//           </p>
//           <div className="flex justify-center gap-6 text-xs text-gray-300">
//             <span className="cursor-pointer hover:text-white underline decoration-white/20 underline-offset-4">Privacy policy</span>
//             <span className="cursor-pointer hover:text-white underline decoration-white/20 underline-offset-4">Terms and conditions</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     // Added xl:px-32 for more side padding on very large screens
//     <footer className="bg-[#442140] text-white py-12 px-6 md:px-12 lg:px-24 xl:px-32 font-sans">
//       {/* Changed max-w-7xl to max-w-[1600px] to allow it to spread out on XL devices */}
//       <div className="max-w-[1600px] mx-auto">
        
//         {/* Main Footer Content */}
//         {/* Adjusted xl:gap-20 to use more horizontal space */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 xl:gap-20 mb-16">
          
//           {/* Brand Column */}
//           <div className="lg:col-span-4 flex flex-col justify-between">
//             <div className="flex items-start gap-4">
//               <img 
//                 src="src/assets/images/orchid-icon.png" 
//                 alt="Orchid Logo" 
//                 className="w-20 h-20 object-contain"
//               />
//               <div className="flex flex-col pt-2">
//                 <h3 className="text-[#A953A0] font-semibold text-xl mb-2">Orchid Dental Care</h3>
//                 <p className="text-gray-200 text-xs leading-relaxed max-w-[240px]">
//                   Modern dentistry with a heart. Creating confident, lasting smiles through compassion and technology.
//                 </p>
//               </div>
//             </div>
//             <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-serif mt-8 uppercase tracking-tight whitespace-nowrap text-white/90">
//               Orchid Dental Care
//             </h2>
//           </div>

//           {/* Quick Links */}
//           <div className="lg:col-span-2 lg:pt-4">
//             <h3 className="text-[#A953A0] font-semibold text-lg mb-6">Quick Links</h3>
//             <ul className="space-y-3 text-sm text-gray-100">
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Home</li>
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Services</li>
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Smile Gallery</li>
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Book Appointment</li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div className="lg:col-span-2 lg:pt-4">
//             <h3 className="text-[#A953A0] font-semibold text-lg mb-6">Resources</h3>
//             <ul className="space-y-3 text-sm text-gray-100">
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Feedback Form</li>
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Our Team</li>
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">Blog</li>
//               <li className="hover:text-[#D946EF] cursor-pointer transition-colors">FAQ.S</li>
//             </ul>
//           </div>

//           {/* Follow Us & Contact */}
//           <div className="lg:col-span-4 lg:pt-4 flex flex-col space-y-8">
//             <div>
//               <h3 className="text-[#A953A0] font-semibold text-lg mb-6">Follow Us</h3>
//               <div className="flex gap-3">
//                 {['instagram', 'facebook', 'youtube'].map((social) => (
//                   <div key={social} className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center hover:bg-[#D946EF] hover:border-[#D946EF] transition-all cursor-pointer">
//                     <img 
//                       src={`https://api.iconify.design/lucide:${social}.svg?color=white`} 
//                       className="w-4 h-4" 
//                       alt={social} 
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="space-y-4">
//               <h4 className="text-[#A953A0] text-sm font-semibold">Contact Us</h4>
//               <div className="space-y-3 text-sm text-gray-200">
//                 <div className="flex items-start gap-3">
//                   <img src="https://api.iconify.design/lucide:map-pin.svg?color=%23D946EF" className="w-4 h-4 mt-0.5 shrink-0" alt="map" />
//                   <span>123 Dental Street, Kochi, Kerala, India</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <img src="https://api.iconify.design/lucide:phone.svg?color=%23D946EF" className="w-4 h-4 shrink-0" alt="phone" />
//                   <span>+91 99747 54312</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <img src="https://api.iconify.design/lucide:mail.svg?color=%23D946EF" className="w-4 h-4 shrink-0" alt="email" />
//                   <span>hello@orchiddentalcare.in</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Section */}
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-10 border-t border-white/10">
//           <div className="w-full lg:max-w-md xl:max-w-xl">
//             <h4 className="text-xl xl:text-2xl font-bold text-[#A953A0] mb-2">Stay Updated with Dental Tips</h4>
//             <p className="text-gray-300 text-sm xl:text-base">
//               Subscribe to our newsletter for oral health tips, special offers, and clinic updates.
//             </p>
//           </div>
          
//           <div className="flex flex-col sm:flex-row w-full lg:w-auto items-center gap-3">
//             <input 
//               type="email" 
//               placeholder="Enter your email" 
//               className="w-full sm:w-80 xl:w-96 bg-white px-6 py-3.5 text-sm text-gray-800 outline-none rounded-full"
//             />
//             <button className="w-full sm:w-auto bg-[#B34FB3] hover:bg-[#9e449e] text-white px-8 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all whitespace-nowrap">
//               Subscribe 
//               <span className="text-lg">→</span>
//             </button>
//           </div>
//         </div>

//         {/* Bottom Legal Section */}
//         <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center space-y-4">
//           <p className="text-xs text-gray-400">
//             © 2025 Orchid Dental Care. All Rights Reserved.
//           </p>
//           <div className="flex justify-center gap-6 text-xs text-gray-300">
//             <span className="cursor-pointer hover:text-white underline decoration-white/20 underline-offset-4">Privacy policy</span>
//             <span className="cursor-pointer hover:text-white underline decoration-white/20 underline-offset-4">Terms and conditions</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';

import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#442140] text-white py-12 px-6 md:px-12 lg:px-24 xl:px-32 font-sans">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 xl:gap-20 mb-16">
          
          {/* Brand Column - Updated for exact alignment */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="flex flex-col gap-6"> 
              {/* This container mirrors the uploaded image layout */}
              <div className="flex items-center gap-6">
                <img 
                  src="src/assets/images/orchid-icon.png" 
                  alt="Orchid Logo" 
                  className="w-24 h-24 mr-6 object-contain"
                />
                <div className="flex flex-col">
                  <h3 className="text-[#A953A0] font-bold whitespace-nowrap text-3xl mb-3">Orchid Dental Care</h3>
                  <p className="text-gray-200 text-sm leading-relaxed max-w-[320px]">
                    Modern dentistry with a heart. Creating confident, lasting smiles through compassion and technology.
                  </p>
                </div>
              </div>

              {/* Large Display Text - Now positioned below the image/text block */}
              <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-4xl font-serif mt-4 uppercase tracking-tight whitespace-nowrap text-white/90">
                Orchid Dental Care
              </h2>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:pt-4 ml-8">
            <h3 className="text-[#A953A0] font-semibold whitespace-nowrap text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3 space-x-3 text-sm text-gray-100">

            <Link to='/'>
              <li className="hover:text-[#D946EF] text-lg cursor-pointer transition-colors">Home</li>
            </Link>

              <Link to='/services'>
                <li className="hover:text-[#D946EF] text-lg cursor-pointer transition-colors">Services</li>
              </Link>
              
              <Link to='/gallery'>
                <li className="hover:text-[#D946EF] text-lg cursor-pointer whitespace-nowrap transition-colors">Smile Gallery</li>
              </Link>

              <Link>
                 <li className="hover:text-[#D946EF] text-lg cursor-pointer transition-colors whitespace-nowrap">Book Appointment</li>
              </Link>
              
             
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 ml-8 lg:pt-4">
            <h3 className="text-[#A953A0] font-semibold text-xl mb-6">Resources</h3>
            <ul className="space-y-3 space-x-3 text-sm text-gray-100">

            <Link to='/feed-back'>
              <li className="hover:text-[#D946EF] cursor-pointer text-lg transition-colors whitespace-nowrap">Feedback Form</li>
            </Link>

              <Link to='/our-team'>
                  <li className="hover:text-[#D946EF] cursor-pointer text-lg transition-colors">Our Team</li>
              </Link>

              <Link to='/blog'>
                  <li className="hover:text-[#D946EF] cursor-pointer text-lg transition-colors">Blog</li>
              </Link>
              
              <Link to='/frequently-asked'>
                 <li className="hover:text-[#D946EF] cursor-pointer text-lg transition-colors">FAQ.S</li>
              </Link>
              
             
            </ul>
          </div>

          {/* Follow Us & Contact */}
          <div className="lg:col-span-4 lg:pt-4 ml-8 flex flex-col space-y-8">
            <div>
              <h3 className="text-[#A953A0] font-semibold text-lg mb-6">Follow Us</h3>
              <div className="flex gap-3">
                {['instagram', 'facebook', 'youtube'].map((social) => (
                  <div key={social} className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center hover:bg-[#D946EF] hover:border-[#D946EF] transition-all cursor-pointer">
                    <img 
                      src={`https://api.iconify.design/lucide:${social}.svg?color=white`} 
                      className="w-4 h-4" 
                      alt={social} 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[#A953A0] text-sm font-semibold">Contact Us</h4>
              <div className="space-y-3 text-sm text-gray-200">
                <div className="flex items-start gap-3">
                  <img src="https://api.iconify.design/lucide:map-pin.svg?color=%23D946EF" className="w-4 h-4 mt-0.5 shrink-0" alt="map" />
                  <span>123 Dental Street, Kochi, Kerala, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://api.iconify.design/lucide:phone.svg?color=%23D946EF" className="w-4 h-4 shrink-0" alt="phone" />
                  <span>+91 99747 54312</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://api.iconify.design/lucide:mail.svg?color=%23D946EF" className="w-4 h-4 shrink-0" alt="email" />
                  <span>hello@orchiddentalcare.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-10 border-t border-white/10">
          <div className="w-full lg:max-w-md xl:max-w-xl">
            <h4 className="text-xl xl:text-2xl font-bold text-[#A953A0] mb-2">Stay Updated with Dental Tips</h4>
            <p className="text-gray-300 text-sm xl:text-base">
              Subscribe to our newsletter for oral health tips, special offers, and clinic updates.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row w-full lg:w-auto items-center gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full sm:w-80 xl:w-96 bg-white px-6 py-3.5 text-sm text-gray-800 outline-none rounded-full"
            />
            <button className="w-full sm:w-auto bg-[#B34FB3] hover:bg-[#9e449e] text-white px-8 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all whitespace-nowrap">
              Subscribe 
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center space-y-4">
          <p className="text-xs text-gray-400">
            © 2025 Orchid Dental Care. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-6 text-xs text-gray-300">
            <span className="cursor-pointer hover:text-white underline decoration-white/20 underline-offset-4">Privacy policy</span>
            <span className="cursor-pointer hover:text-white underline decoration-white/20 underline-offset-4">Terms and conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




















