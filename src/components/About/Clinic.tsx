// import React from "react";
// import { Box, Container, Grid, Typography } from "@mui/material";

// const Clinic: React.FC = () => {
//   const t = "#442140";
//   const b = "#000000"; // Soft pink background from image

//   return (
//     <Box sx={{ py: 10, bgcolor: "#ffffff" }}>
//       <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6, lg: 1 } }}>
//         <Grid
//           container
//           spacing={6}
//           sx={{ flexWrap: "nowrap" }} 
//         >
//           {/* LEFT CONTENT */}
//           <Grid item xs={6} sx={{ minWidth: 0 }}>
//             <Typography
//               variant="overline"
//               sx={{ color: t, letterSpacing: 1.5, fontSize: '1.2rem' }}
//             >
//               Beyond the Chair: A Holistic Approach to Your Smile
//             </Typography>

//             <Typography sx={{ mt: 2, color: b, lineHeight: 1.8 }}>
//               At Orchid Dental Care, we believe that dentistry is more than just
//               a series of treatments; it's about building lasting relationships,
//               restoring self-confidence, and enhancing your overall well-being.
//               We view every patient not just as a clinical case, but as an
//               individual with unique goals, concerns, and a story to tell.
//             </Typography>

//             <Typography
//               variant="overline"
//               sx={{ color: t, mt: 4, display: "block", letterSpacing: 1.5, fontSize: '1.2rem' }}
//             >
//               Building Relationships Through Trust
//             </Typography>

//             <Typography sx={{ mt: 2, color: b, lineHeight: 1.8 }}>
//               Our practice is founded on the principle of transparency. We take
//               the time to listen to your history and understand your anxieties.
//               By fostering an environment of open communication, we transform the
//               traditional dental visit into a collaborative partnership. When
//               you trust your care team, your journey toward oral health becomes a
//               stress-free, empowering experience.
//             </Typography>

//             <Typography sx={{ mt: 2, color: t, fontSize: '1.2rem'  }}>
//               Restoring Confidence, One Smile at a Time
//             </Typography>

//             <Typography sx={{ mt: 2, color: b, lineHeight: 1.8 }}>
//               A smile is often the first thing people notice about you. Whether
//               it's through subtle refinements or transformative restorative work,
//               our mission is to give you a smile that feels authentic to who you
//               are.
//             </Typography>

//             <Box component="ul" sx={{ mt: 2, pl: 3, color: t }}>
//               <li>
//                 <b>Social Impact:</b> Feel the freedom to laugh, speak, and engage
//                 in conversations without hesitation.
//               </li>
//               <li>
//                 <b>Professional Edge:</b> Carry yourself with the poise that comes
//                 from knowing your smile reflects your best self.
//               </li>
//               <li>
//                 <b>Personal Joy:</b> Rediscover the simple pleasure of looking in
//                 the mirror and loving what you see.
//               </li>
//             </Box>

//             <Typography
//               variant="overline"
//               sx={{ color: t, mt: 4, display: "block", letterSpacing: 1.5, fontSize: '1.2rem' }}
//             >
//               Enhancing Your Overall Well-being
//             </Typography>

//             <Typography sx={{ mt: 2, color: b, lineHeight: 1.8 }}>
//               Modern science has proven that oral health is a vital window into
//               your systemic health. By managing inflammation and preventing
//               infection in the mouth, we are helping protect your heart, your
//               energy levels, and your longevity.
//             </Typography>

//             <Box component="ul" sx={{ mt: 2, pl: 3, color: t }}>
//               <li>
//                 <b>Functional Comfort:</b> Proper dental care ensures you can
//                 enjoy your favorite foods and speak clearly, maintaining a high
//                 quality of life.
//               </li>
//               <li>
//                 <b>Preventative Peace of Mind:</b> Routine care reduces the risk
//                 of sudden dental emergencies, allowing you to focus on what
//                 matters most in your daily life.
//               </li>
//             </Box>
//           </Grid>

//           {/* RIGHT IMAGE */}
//           <Grid item xs={6} sx={{ minWidth: 0 }}>
//             <Box
//               sx={{
//                 borderRadius: "20px",
//                 overflow: "hidden",
//                 height: "100%",
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
//               }}
//             >
//               <img
//                 src="src/assets/images/clinic.jpg"
//                 alt="Dental"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Clinic;



// import React from "react";
// import { Box, Container, Grid, Typography } from "@mui/material";

// const Clinic: React.FC = () => {
//   const t = "#442140";
//   const b = "#000000";

//   return (
//     <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#ffffff" }}>
//       <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6, lg: 1 } }}>
//         <Grid
//           container
//           spacing={6}
//           // On mobile (xs) we stack vertically; on desktop (md) we keep them side-by-side
//           sx={{ 
//             flexDirection: { xs: "column", md: "row" },
//             flexWrap: "nowrap" 
//           }} 
//         >
//           {/* IMAGE SECTION - Moved to top on mobile using 'order' */}
//           <Grid 
//             item 
//             xs={12} 
//             md={6} 
//             sx={{ 
//               minWidth: 0, 
//               order: { xs: 1, md: 2 } // Order 1 on mobile, 2 on desktop
//             }}
//           >
//             <Box
//               sx={{
//                 borderRadius: "20px",
//                 overflow: "hidden",
//                 height: { xs: "300px", md: "100%" }, // Fixed height on mobile for better visibility
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
//               }}
//             >
//               <img
//                 src="src/assets/images/clinic.jpg"
//                 alt="Dental"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//             </Box>
//           </Grid>

//           {/* CONTENT SECTION */}
//           <Grid 
//             item 
//             xs={12} 
//             md={6} 
//             sx={{ 
//               minWidth: 0, 
//               order: { xs: 2, md: 1 } // Order 2 on mobile, 1 on desktop
//             }}
//           >
//             <Typography
//               variant="overline"
//               sx={{ color: t, letterSpacing: 1.5, fontSize: '1.2rem', lineHeight: 1.2, display: 'block' }}
//             >
//               Beyond the Chair: A Holistic Approach to Your Smile
//             </Typography>

//             <Typography sx={{ mt: 2, color: b, lineHeight: 1.8 }}>
//               At Orchid Dental Care, we believe that dentistry is more than just
//               a series of treatments; it's about building lasting relationships,
//               restoring self-confidence, and enhancing your overall well-being.
//               We view every patient not just as a clinical case, but as an
//               individual with unique goals, concerns, and a story to tell.
//             </Typography>

//             <Typography
//               variant="overline"
//               sx={{ color: t, mt: 4, display: "block", letterSpacing: 1.5, fontSize: '1.2rem' }}
//             >
//               Building Relationships Through Trust
//             </Typography>

//             <Typography sx={{ mt: 2, color: b, lineHeight: 1.8 }}>
//               Our practice is founded on the principle of transparency. We take
//               the time to listen to your history and understand your anxieties.
//               By fostering an environment of open communication, we transform the
//               traditional dental visit into a collaborative partnership. When
//               you trust your care team, your journey toward oral health becomes a
//               stress-free, empowering experience.
//             </Typography>

//             <Typography sx={{ mt: 4, color: t, fontSize: '1.2rem', fontWeight: 500 }}>
//               Restoring Confidence, One Smile at a Time
//             </Typography>

//             <Typography sx={{ mt: 2, color: b, lineHeight: 1.8 }}>
//               A smile is often the first thing people notice about you. Whether
//               it's through subtle refinements or transformative restorative work,
//               our mission is to give you a smile that feels authentic to who you
//               are.
//             </Typography>

//             <Box component="ul" sx={{ mt: 2, pl: 3, color: t }}>
//               <li>
//                 <b>Social Impact:</b> Feel the freedom to laugh, speak, and engage
//                 in conversations without hesitation.
//               </li>
//               <li>
//                 <b>Professional Edge:</b> Carry yourself with the poise that comes
//                 from knowing your smile reflects your best self.
//               </li>
//               <li>
//                 <b>Personal Joy:</b> Rediscover the simple pleasure of looking in
//                 the mirror and loving what you see.
//               </li>
//             </Box>

//             <Typography
//               variant="overline"
//               sx={{ color: t, mt: 4, display: "block", letterSpacing: 1.5, fontSize: '1.2rem' }}
//             >
//               Enhancing Your Overall Well-being
//             </Typography>

//             <Typography sx={{ mt: 2, color: b, lineHeight: 1.8 }}>
//               Modern science has proven that oral health is a vital window into
//               your systemic health. By managing inflammation and preventing
//               infection in the mouth, we are helping protect your heart, your
//               energy levels, and your longevity.
//             </Typography>

//             <Box component="ul" sx={{ mt: 2, pl: 3, color: t }}>
//               <li>
//                 <b>Functional Comfort:</b> Proper dental care ensures you can
//                 enjoy your favorite foods and speak clearly, maintaining a high
//                 quality of life.
//               </li>
//               <li>
//                 <b>Preventative Peace of Mind:</b> Routine care reduces the risk
//                 of sudden dental emergencies, allowing you to focus on what
//                 matters most in your daily life.
//               </li>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Clinic;

// import React from 'react'

// const Clinic = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Clinic




























// import React from 'react';
// import { Typography, Container, Box } from '@mui/material';

// const Clinic: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white py-12 px-4 md:px-8 lg:px-16 font-sans text-[#4a3b4d]">
//       <Container maxWidth="lg">
//         {/*
//           Use a standard grid that stacks vertically (1 col) on mobile,
//           and splits (2 col) on screens larger than 'lg'.
//           Note the 'items-start' to keep the content aligned to the top.
//         */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
//           {/*
//             Left Content Side:
//             Use flex ordering. On mobile (default), this is 'order-2'
//             (below the image). On 'lg' screens and above, it shifts to 'order-1'.
//           */}
//           <div className="space-y-8 order-2 lg:order-1">
            
//             {/* Section 1: Holistic Approach */}
//             <section>
//               <Typography 
//                 variant="overline" 
//                 sx={{ fontSize: '1rem',fontWeight: 'normal' }}
//                 className="text-[#442140] font-bold  tracking-widest block mb-2 uppercase"
//               >
//                 Beyond the Chair: A Holistic Approach to Your Smile
//               </Typography>
//               <Typography variant="body1" sx={{ fontSize: '1rem' }}  className="leading-relaxed text-gray-700">
//                 At Orchid Dental Care, we believe that dentistry is more than just a series of treatments; 
//                 it’s about building lasting relationships, restoring self-confidence, and enhancing your 
//                 overall well-being. We view every patient not just as a clinical case, but as an 
//                 individual with unique goals, concerns, and a story to tell.
//               </Typography>
//             </section>

//             {/* Section 2: Building Relationships */}
//             <section>
//               <Typography 
//                 variant="overline" 
//                  sx={{ fontSize: '1rem',fontWeight: 'normal' }}
//                 className="text-[#442140] font-bold tracking-widest block mb-2 uppercase"
//               >
//                 Building Relationships Through Trust
//               </Typography>
//               <Typography variant="body1" className="leading-relaxed text-gray-700">
//                 Our practice is founded on the principle of transparency. We take the time to listen to your history and understand your 
//                 anxieties. By fostering an environment of open communication, we transform the traditional dental visit into a collaborative partnership. When you trust your care team, your journey toward oral health becomes a stress-free, empowering experience.
//                  Restoring Confidence, One Smile at a Time A smile is often the first thing people notice about you. Whether it’s through subtle refinements or transformative restorative work, our mission is to give you a smile that feels authentic to who you are.
//               </Typography>
//             </section>

//             {/* Section 3: Restoring Confidence */}
//             <section>
//               <Typography 
//                 variant="body1" 
//                  sx={{ fontSize: '1rem',fontWeight: 'normal' }}
//                 className="mb-4 text-[#442140] font-medium"
//               >
//                 Restoring Confidence, One Smile at a Time
//               </Typography>
//               <Typography variant="body2" className="mb-4 leading-relaxed text-gray-600">
//                 A smile is often the first thing people notice about you. Whether it’s through subtle 
//                 refinements or transformative restorative work, our mission is to give you a smile 
//                 that feels authentic to who you are.
//               </Typography>
              
//               <ul className="space-y-3 list-none pl-0">
//                 <li className="flex gap-2">
//                   <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
//                   <Typography variant="body2">
//                     <strong className="text-[#4a3b4d]">Social Impact:</strong> Feel the freedom to laugh, speak, and engage in conversations without hesitation.
//                   </Typography>
//                 </li>
//                 <li className="flex gap-2">
//                   <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
//                   <Typography variant="body2">
//                     <strong className="text-[#4a3b4d]">Professional Edge:</strong> Carry yourself with the poise that comes from knowing your smile reflects your best self.
//                   </Typography>
//                 </li>
//                 <li className="flex gap-2">
//                   <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
//                   <Typography variant="body2">
//                     <strong className="text-[#4a3b4d]">Personal Joy:</strong> Rediscover the simple pleasure of looking in the mirror and loving what you see.
//                   </Typography>
//                 </li>
//               </ul>
//             </section>

//             {/* Section 4: Overall Well-being */}
//   <section className="mt-12 w-full lg:col-span-2"> 
//   <Typography 
//     variant="overline" 
//     sx={{ fontSize: '1rem', fontWeight: 'normal' }}
//     className="text-[#442140] font-bold tracking-widest block mb-2 uppercase"
//   >
//     Enhancing Your Overall Well-being
//   </Typography>
  
//   <Typography variant="body2" className="mb-4 leading-relaxed text-gray-600">
//     Modern science has proven that oral health is a vital window into your systemic health. 
//     By managing inflammation and preventing infection in the mouth, we are helping protect 
//     your heart, your energy levels, and your longevity.
//   </Typography>
  
//   <ul className="space-y-3 list-none pl-0">
//     <li className="flex gap-2">
//       <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
//       <Typography variant="body2" sx={{}}>
//         <strong className="text-[#4a3b4d]">Functional Comfort:</strong> Proper dental care ensures you can enjoy your favorite foods and speak clearly, maintaining a high quality of life.
//       </Typography>
//     </li>
//     <li className="flex gap-2">
//       <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
//       <Typography variant="body2">
//         <strong className="text-[#4a3b4d]">Preventative Peace of Mind:</strong> Routine care reduces the risk of sudden dental emergencies, allowing you to focus on what matters most in your daily life.
//       </Typography>
//     </li>
//   </ul>
// </section>
//           </div>

//           {/*
//             Right Image Side:
//             On mobile (default), this is 'order-1' (at the top).
//             On 'lg' screens and above, it shifts to 'order-2' (the right side).
//             'sticky' and 'top-12' are removed so the image scrolls.
//           */}
//           <div className="order-1 lg:order-2">
//             <Box 
//               className="rounded-3xl overflow-hidden "
//               sx={{ 
//                 height: { xs: '400px', md: '600px', lg: '800px' },
//                 width: '100%' 
//               }}
//             >
//               <img 
//                 src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
//                 alt="Patient receiving dental consultation"
//                 className="w-full h-[90%] object-cover"
//               />
//             </Box>
//           </div>

//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Clinic;


import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Clinic: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8 lg:px-16 font-sans text-[#4a3b4d]">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 items-start">
          
          {/* Left Content Side */}
          <div className="space-y-8 order-2 lg:order-1">
            
            {/* Section 1: Holistic Approach */}
            <section>
              <Typography 
                variant="overline" 
                sx={{ fontSize: '1rem', fontWeight: 'normal' }}
                className="text-[#442140] font-bold tracking-widest block mb-2 uppercase"
              >
                Beyond the Chair: A Holistic Approach to Your Smile
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1rem' }} className="leading-relaxed text-gray-700">
                At Orchid Dental Care, we believe that dentistry is more than just a series of treatments; 
                it’s about building lasting relationships, restoring self-confidence, and enhancing your 
                overall well-being. We view every patient not just as a clinical case, but as an 
                individual with unique goals, concerns, and a story to tell.
              </Typography>
            </section>

            {/* Section 2: Building Relationships */}
            <section>
              <Typography 
                variant="overline" 
                sx={{ fontSize: '1rem', fontWeight: 'normal' }}
                className="text-[#442140] font-bold tracking-widest block mb-2 uppercase"
              >
                Building Relationships Through Trust
              </Typography>
              <Typography variant="body1" className="leading-relaxed text-gray-700">
                Our practice is founded on the principle of transparency. We take the time to listen to your history and understand your anxieties. By fostering an environment of open communication, we transform the traditional dental visit into a collaborative partnership. When you trust your care team, your journey toward oral health becomes a stress-free, empowering experience.
                Restoring Confidence, One Smile at a Time A smile is often the first thing people notice about you. Whether it’s through subtle refinements or transformative restorative work, our mission is to give you a smile that feels authentic to who you are.
              </Typography>
            </section>

            {/* Section 3: Restoring Confidence */}
            <section>
              <Typography 
                variant="body1" 
                sx={{ fontSize: '1rem', fontWeight: 'normal' }}
                className="mb-4 text-[#442140] font-medium"
              >
                Restoring Confidence, One Smile at a Time
              </Typography>
              <Typography variant="body2" className="mb-4 leading-relaxed text-gray-600">
                A smile is often the first thing people notice about you. Whether it’s through subtle 
                refinements or transformative restorative work, our mission is to give you a smile 
                that feels authentic to who you are.
              </Typography>
              
              <ul className="space-y-3 list-none pl-0">
                <li className="flex gap-2">
                  <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
                  <Typography variant="body2">
                    <strong className="text-[#4a3b4d]">Social Impact:</strong> Feel the freedom to laugh, speak, and engage in conversations without hesitation.
                  </Typography>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
                  <Typography variant="body2">
                    <strong className="text-[#4a3b4d]">Professional Edge:</strong> Carry yourself with the poise that comes from knowing your smile reflects your best self.
                  </Typography>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
                  <Typography variant="body2">
                    <strong className="text-[#4a3b4d]">Personal Joy:</strong> Rediscover the simple pleasure of looking in the mirror and loving what you see.
                  </Typography>
                </li>
              </ul>
            </section>
          </div>

          {/* Right Image Side */}
          <div className="order-1 lg:order-2">
            <Box 
              className="rounded-3xl overflow-hidden"
              sx={{ 
                /* Adjusted height to fit content better and removed h-[90%] from img */
                height: { xs: '350px', md: '500px', lg: '700px' },
                width: '100%' 
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                alt="Patient receiving dental consultation"
                className="w-full h-full object-cover"
              />
            </Box>
          </div>

          {/* Section 4: Overall Well-being */}
          {/* Reduced mt-12 to mt-4 and ensured col-span spans the gap */}
          <section className="mt-4 w-full lg:col-span-2 order-3"> 
            <Typography 
              variant="overline" 
              sx={{ fontSize: '1rem', fontWeight: 'normal' }}
              className="text-[#442140] font-bold tracking-widest block mb-2 uppercase"
            >
              Enhancing Your Overall Well-being
            </Typography>
            
            <Typography variant="body2" className="mb-4 leading-relaxed text-gray-600">
              Modern science has proven that oral health is a vital window into your systemic health. 
              By managing inflammation and preventing infection in the mouth, we are helping protect 
              your heart, your energy levels, and your longevity.
            </Typography>
            
            <ul className="space-y-3 list-none pl-0">
              <li className="flex gap-2">
                <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
                <Typography variant="body2">
                  <strong className="text-[#4a3b4d]">Functional Comfort:</strong> Proper dental care ensures you can enjoy your favorite foods and speak clearly, maintaining a high quality of life.
                </Typography>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
                <Typography variant="body2">
                  <strong className="text-[#4a3b4d]">Preventative Peace of Mind:</strong> Routine care reduces the risk of sudden dental emergencies, allowing you to focus on what matters most in your daily life.
                </Typography>
              </li>
            </ul>
          </section>

        </div>
      </Container>
    </div>
  );
};

export default Clinic;