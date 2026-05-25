
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#442140] text-white py-12 px-6 md:px-12 lg:px-24 xl:px-32 font-sans">
//       <div className="max-w-[1600px] mx-auto">
        
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 xl:gap-16 mb-16">
          
//           {/* Brand Column */}
//           <div className="lg:col-span-4 flex flex-col justify-between">
//             <div className="flex flex-col gap-6"> 
//               <div className="flex items-center gap-6">
//                 <img 
//                   src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/orchid-icon.png" 
//                   alt="Orchid Logo" 
//                   className="w-24 h-24 mr-2 object-contain"
//                 />
//                 <div className="flex flex-col">
//                   <h3 className="text-[#A953A0] font-bold whitespace-nowrap text-3xl mb-3">Orchid Dental Care</h3>
//                   <p className="text-gray-200 text-sm leading-relaxed max-w-[320px]">
//                     Modern dentistry with a heart. Creating confident, lasting smiles through compassion and technology.
//                   </p>
//                 </div>
//               </div>

//               <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-4xl font-serif mt-4 uppercase tracking-tight whitespace-nowrap text-white/90">
//                 Orchid Dental Care
//               </h2>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="lg:col-span-2 lg:pt-4 lg:ml-16 xl:ml-24">
//             <h3 className="text-[#A953A0] font-semibold whitespace-nowrap text-xl mb-6">Quick Links</h3>
//             <ul className="space-y-4 text-gray-100">
//               <li>
//                 <Link to='/' className="hover:text-[#D946EF] text-lg transition-colors">Home</Link>
//               </li>
//               <li>
//                 <Link to='/services' className="hover:text-[#D946EF] text-lg transition-colors">Services</Link>
//               </li>
//               <li>
//                 <Link to='/gallery' className="hover:text-[#D946EF] text-lg transition-colors whitespace-nowrap">Smile Gallery</Link>
//               </li>
//               <li>
//                 <Link to='/my-booking' className="hover:text-[#D946EF] text-lg transition-colors whitespace-nowrap">Book Appointment</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div className="lg:col-span-2 lg:pt-4 lg:ml-12 xl:ml-20">
//             <h3 className="text-[#A953A0] font-semibold text-xl mb-6">Resources</h3>
//             <ul className="space-y-4 text-gray-100">
//               <li>
//                 <Link to='/feed-back' className="hover:text-[#D946EF] text-lg transition-colors whitespace-nowrap">Feedback Form</Link>
//               </li>
//               <li>
//                 <Link to='/our-team' className="hover:text-[#D946EF] text-lg transition-colors whitespace-nowrap">Our Team</Link>
//               </li>
//               <li>
//                 <Link to='/blog' className="hover:text-[#D946EF] text-lg transition-colors">Blog</Link>
//               </li>
//               <li>
//                 <Link to='/frequently-asked' className="hover:text-[#D946EF] text-lg transition-colors">Faq's</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Follow Us & Contact */}
//           <div className="lg:col-span-4 lg:pt-4 lg:ml-12 flex flex-col space-y-8">
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
//               <h4 className="text-[#A953A0] text-sm font-semibold uppercase tracking-widest">Contact Us</h4>
//               <div className="space-y-3 text-sm text-gray-200">
//                 <div className="flex items-start gap-3">
//                   <img src="https://api.iconify.design/lucide:map-pin.svg?color=%23D946EF" className="w-4 h-4 mt-0.5 shrink-0" alt="map" />
//                  <span>
//   Orchid Dental Care, Ground floor, <br />
//   Unique Business Center, behind Titan Eye Plus, <br />
//   Thrikkakara, Vazahakkala, Kakkanad, Kerala, pin - 682021
// </span>
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
//             © 2026 Orchid Dental Care. All Rights Reserved.
//           </p>
//           <div className="flex justify-center gap-6 text-xs text-gray-300">
//             <Link to="/privacy-policy">
//               <span className="cursor-pointer hover:text-white underline decoration-white/20 underline-offset-4">Privacy policy</span>
//             </Link>
//             <Link to='/terms-conditions'>
//               <span className="cursor-pointer hover:text-white underline decoration-white/20 underline-offset-4">Terms and conditions</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#442140] text-white py-12 px-4 md:px-12 lg:px-24 xl:px-32 font-sans overflow-hidden">
//       <div className="max-w-[1600px] mx-auto">
        
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-16 mb-16">
          
//           {/* Brand Column */}
//           <div className="lg:col-span-4 flex flex-col justify-between overflow-hidden">
//             <div className="flex flex-col gap-6"> 
//               <div className="flex items-center gap-3 md:gap-6">
//                 {/* Responsive Logo Size */}
//                 <img 
//                   src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/orchid-icon.png" 
//                   alt="Orchid Logo" 
//                   className="w-16 h-16 md:w-24 md:h-24 shrink-0 object-contain"
//                 />
//                 <div className="flex flex-col min-w-0">
//                   {/* Reduced text size on mobile to prevent overflow */}
//                   <h3 className="text-[#A953A0] font-bold text-xl sm:text-2xl md:text-3xl mb-1 md:mb-3 whitespace-nowrap tracking-tight">
//                     Orchid Dental Care
//                   </h3>
//                   <p className="text-gray-200 text-xs md:text-sm leading-relaxed max-w-[260px] md:max-w-[320px]">
//                     Modern dentistry with a heart. Creating confident, lasting smiles through compassion and technology.
//                   </p>
//                 </div>
//               </div>

//               {/* Secondary Brand Title - Scaled down for mobile */}
//               <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-4xl font-serif mt-4 uppercase tracking-tighter md:tracking-tight whitespace-nowrap text-white/90">
//                 Orchid Dental Care
//               </h2>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="lg:col-span-2 lg:pt-4 lg:ml-16 xl:ml-24">
//             <h3 className="text-[#A953A0] font-semibold whitespace-nowrap text-xl mb-6">Quick Links</h3>
//             <ul className="space-y-4 text-gray-100">
//               <li>
//                 <Link to='/' className="hover:text-[#D946EF] text-lg transition-colors">Home</Link>
//               </li>
//               <li>
//                 <Link to='/services' className="hover:text-[#D946EF] text-lg transition-colors">Services</Link>
//               </li>
//               <li>
//                 <Link to='/gallery' className="hover:text-[#D946EF] text-lg transition-colors whitespace-nowrap">Smile Gallery</Link>
//               </li>
//               <li>
//                 <Link to='/my-booking' className="hover:text-[#D946EF] text-lg transition-colors whitespace-nowrap">Book Appointment</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div className="lg:col-span-2 lg:pt-4 lg:ml-12 xl:ml-20">
//             <h3 className="text-[#A953A0] font-semibold text-xl mb-6">Resources</h3>
//             <ul className="space-y-4 text-gray-100">
//               <li>
//                 <Link to='/feed-back' className="hover:text-[#D946EF] text-lg transition-colors whitespace-nowrap">Feedback Form</Link>
//               </li>
//               <li>
//                 <Link to='/our-team' className="hover:text-[#D946EF] text-lg transition-colors whitespace-nowrap">Our Team</Link>
//               </li>
//               <li>
//                 <Link to='/blog' className="hover:text-[#D946EF] text-lg transition-colors">Blog</Link>
//               </li>
//               <li>
//                 <Link to='/frequently-asked' className="hover:text-[#D946EF] text-lg transition-colors">Faq's</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Follow Us & Contact */}
//           <div className="lg:col-span-4 lg:pt-4 lg:ml-12 flex flex-col space-y-8">
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
//               <h4 className="text-[#A953A0] text-sm font-semibold uppercase tracking-widest">Contact Us</h4>
//               <div className="space-y-3 text-sm text-gray-200">
//                 <div className="flex items-start gap-3">
//                   <img src="https://api.iconify.design/lucide:map-pin.svg?color=%23D946EF" className="w-4 h-4 mt-0.5 shrink-0" alt="map" />
//                   <span>
//                     Orchid Dental Care, Ground floor, <br />
//                     Unique Business Center, behind Titan Eye Plus, <br />
//                     Kakkanad, Kerala, pin - 682021
//                   </span>
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
//           <div className="w-full lg:max-w-md xl:max-w-xl text-center lg:text-left">
//             <h4 className="text-xl xl:text-2xl font-bold text-[#A953A0] mb-2">Stay Updated with Dental Tips</h4>
//             <p className="text-gray-300 text-sm xl:text-base">
//               Subscribe to our newsletter for oral health tips and clinic updates.
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
//             © 2026 Orchid Dental Care. All Rights Reserved.
//           </p>
//           <div className="flex justify-center gap-6 text-xs text-gray-300">
//             <Link to="/privacy-policy" className="hover:text-white underline decoration-white/20 underline-offset-4">
//               Privacy policy
//             </Link>
//             <Link to='/terms-conditions' className="hover:text-white underline decoration-white/20 underline-offset-4">
//               Terms and conditions
//             </Link>
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
    <footer className="bg-[#442140] text-white py-12 px-4 md:px-12 lg:px-20 xl:px-32 font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Main Footer Content */}
        {/* Changed lg:grid-cols-12 to provide more flexible spacing for laptops */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-16 mb-16">
          
          {/* Brand Column - Increased span on lg to prevent text cutting */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-6"> 
              <div className="flex items-center gap-4 md:gap-6">
                <img 
                  src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/orchid-icon.png" 
                  alt="Orchid Logo" 
                  className="w-16 h-16 md:w-20 lg:w-24 shrink-0 object-contain"
                />
                <div className="flex flex-col min-w-0 w-full">
                  {/* Text scales: XL on mobile, 3XL on laptop */}
                  <h3 className="text-[#A953A0] font-bold text-xl sm:text-2xl lg:text-2xl mb-1 md:mb-3 whitespace-nowrap tracking-tight">
                    Orchid Dental Care
                  </h3>
                  <p className="text-gray-200 text-xs md:text-sm leading-relaxed max-w-full lg:max-w-[420px]">
                    Modern dentistry with a heart. Creating confident, lasting smiles through compassion and technology.
                  </p>
                </div>
              </div>

              {/* Large Serif Title - Tracking normal on laptop so it's not squashed */}
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-xl xl:text-3xl font-serif mt-4 uppercase tracking-tighter lg:tracking-normal whitespace-nowrap text-white/90">
                Orchid Dental Care
              </h2>
            </div>
          </div>

          {/* Quick Links - lg:col-span-2 */}
          <div className="lg:col-span-2 lg:pt-4 lg:ml-8 xl:ml-16">
            <h3 className="text-[#A953A0] font-semibold whitespace-nowrap text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-100">
              <li><Link to='/' className="hover:text-[#D946EF] text-lg transition-colors">Home</Link></li>
               <li><Link to='/about' className="hover:text-[#D946EF] text-lg transition-colors">About Us</Link></li>
              <li><Link to='/services' className="hover:text-[#D946EF] text-lg transition-colors">Services</Link></li>
              <li><Link to='/gallery' className="hover:text-[#D946EF] text-lg transition-colors whitespace-nowrap">Smile Gallery</Link></li>
              <li><Link to='/my-booking' className="hover:text-[#D946EF] text-lg transition-colors whitespace-nowrap">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Resources - lg:col-span-2 */}
          <div className="lg:col-span-2 lg:pt-4 lg:ml-4 xl:ml-10">
            <h3 className="text-[#A953A0] font-semibold text-xl mb-6">Resources</h3>
            <ul className="space-y-4 text-gray-100">
              <li><Link to='/feed-back' className="hover:text-[#D946EF] text-lg transition-colors whitespace-nowrap">Feedback Form</Link></li>
              <li><Link to='/our-team' className="hover:text-[#D946EF] text-lg transition-colors whitespace-nowrap">Our Team</Link></li>
              <li><Link to='/blog' className="hover:text-[#D946EF] text-lg transition-colors">Blog</Link></li>
              <li><Link to='/frequently-asked' className="hover:text-[#D946EF] text-lg transition-colors">Faq's</Link></li>
            </ul>
          </div>

          {/* Contact - lg:col-span-3 */}
          <div className="lg:col-span-3 lg:pt-4 flex flex-col space-y-8">
            <div>
              <h3 className="text-[#A953A0] font-semibold text-lg mb-6">Follow Us</h3>
              <div className="flex gap-3">
                {['instagram', 'facebook', 'youtube'].map((social) => (
                  <div key={social} className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center hover:bg-[#D946EF] hover:border-[#D946EF] transition-all cursor-pointer">
                    <img src={`https://api.iconify.design/lucide:${social}.svg?color=white`} className="w-4 h-4" alt={social} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[#A953A0] text-sm font-semibold uppercase tracking-widest">Contact Us</h4>
              <div className="space-y-3 text-sm text-gray-200">
                <div className="flex items-start gap-3">
                  <img src="https://api.iconify.design/lucide:map-pin.svg?color=%23D946EF" className="w-4 h-4 mt-0.5 shrink-0" alt="map" />
                  <span className="leading-tight">
                    Orchid Dental Care, Ground floor, <br />
                    Unique Business Center, Kakkanad, <br />
                    Kerala, pin - 682021
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://api.iconify.design/lucide:phone.svg?color=%23D946EF" className="w-4 h-4 shrink-0" alt="phone" />
                  <span>+91 99747 54312</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-10 border-t border-white/10">
          <div className="w-full lg:max-w-md xl:max-w-xl text-center lg:text-left">
            <h4 className="text-xl xl:text-2xl font-bold text-[#A953A0] mb-2">Stay Updated</h4>
            <p className="text-gray-300 text-sm xl:text-base">Subscribe for oral health tips and clinic updates.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row w-full lg:w-auto items-center gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full sm:w-80 lg:w-72 xl:w-96 bg-white px-6 py-3.5 text-sm text-gray-800 outline-none rounded-full"
            />
            <button className="w-full sm:w-auto bg-[#B34FB3] hover:bg-[#9e449e] text-white px-8 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center transition-all whitespace-nowrap">
              Subscribe →
            </button>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center space-y-4">
          <p className="text-xs text-gray-400">© 2026 Orchid Dental Care. All Rights Reserved.</p>
          <div className="flex justify-center gap-6 text-xs text-gray-300">
            <Link to="/privacy-policy" className="hover:text-white underline underline-offset-4 decoration-white/20">Privacy policy</Link>
            <Link to='/terms-conditions' className="hover:text-white underline underline-offset-4 decoration-white/20">Terms and conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

















