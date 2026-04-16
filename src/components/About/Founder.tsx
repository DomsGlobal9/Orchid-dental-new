// import React from "react";
// import { Box, Container, Grid, Typography } from "@mui/material";

// const Founder: React.FC = () => {
//   const purple = "#A65EA5";
//   const textColor = "#2b2b2b";

//   return (
//     <Box
//       sx={{
//         py: 10,
//         bgcolor: "#f5f5f5",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <Container maxWidth="lg" sx={{ position: "relative" }}>
        
//         {/* 🔥 ICON UNDER CONTENT (WATERMARK STYLE) */}
//         <Box
//           component="img"
//           src="src/assets/images/orchid-icon.png"
//           alt="decorative shape"
//           sx={{
//             position: "absolute",
//             left: "108%", // adjust position here
//             top: "50%",
//             transform: "translate(-50%, -50%)",
//             width: { xs: 200, md: 320, lg: 420 },
//             opacity: 0.08,
//             zIndex: 0,
//             pointerEvents: "none",
//           }}
//         />

//         <Grid
//           container
//           alignItems="center"
//           spacing={6}
//           sx={{ position: "relative", zIndex: 1 }}
//         >
          
//           {/* LEFT IMAGE */}
//           <Grid item xs={12} md={5}>
//             <Box sx={{ position: "relative", width: "100%", maxWidth: 380 }}>
              
//               {/* PURPLE CIRCLE */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   width: 300,
//                   height: 300,
//                   borderRadius: "50%",
//                 //   background: "linear-gradient(135deg, #E9D8EC, #D6B3DA)",
//                   top: 40,
//                   left: 20,
//                   zIndex: 1,
//                 }}
//               />

//               {/* IMAGE */}
//               <Box
//                 component="img"
//                 src="src/assets/images/founder.png"
//                 alt="Founder"
//                 sx={{
//                   position: "relative",
//                   width: "100%",
//                   borderRadius: "0 0 0 120px",
//                   zIndex: 2,
//                 }}
//               />
//             </Box>
//           </Grid>

//           {/* RIGHT CONTENT */}
//           <Grid item xs={12} md={7}>
            
//             {/* TAG */}
//             <Box
//               sx={{
//                 display: "inline-block",
//                 border: `1px solid ${purple}`,
//                 color: purple,
//                 px: 3,
//                 py: 1,
//                 borderRadius: "999px",
//                 fontSize: 14,
//                 mb: 3,
//               }}
//             >
//               Founder & CEO
//             </Box>

//             {/* NAME */}
//             <Typography
//               variant="h3"
//               sx={{
//                 fontFamily: "serif",
//                 color: textColor,
//                 mb: 2,
//               }}
//             >
//               Dr. Lalitha
//             </Typography>

//             {/* QUOTE */}
//             <Typography
//               sx={{
//                 fontSize: 18,
//                 lineHeight: 1.7,
//                 color: "#444",
//                 maxWidth: 550,
//               }}
//             >
//               “Our goal was never just to build a clinic; it was to create a sanctuary
//               where health meets comfort. At Orchid, we believe every patient deserves
//               a smile they are proud of, delivered with the gentleness they deserve.”
//             </Typography>

//             {/* UNDERLINE */}
//             <Box
//               sx={{
//                 width: 180,
//                 height: 3,
//                 bgcolor: "#5a2d5f",
//                 mt: 4,
//               }}
//             />
//           </Grid>

//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Founder;


import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Founder: React.FC = () => {
  const purple = "#A65EA5";
  const textColor = "#2b2b2b";

  return (
    <Box
      sx={{
        py: 10,
        bgcolor: "#f5f5f5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        
        {/* 🔥 ICON UNDER CONTENT - HIDDEN ON MOBILE */}
        <Box
          component="img"
          src="src/assets/images/orchid-icon.png"
          alt="decorative shape"
          sx={{
            position: "absolute",
            left: "108%", 
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 200, md: 320, lg: 420 },
            opacity: 0.08,
            zIndex: 0,
            pointerEvents: "none",
            // This hides the icon on extra-small screens and shows it from 'medium' up
            display: { xs: "none", md: "block" }, 
          }}
        />

        <Grid
          container
          alignItems="center"
          spacing={6}
          sx={{ position: "relative", zIndex: 1 }}
        >
          
          {/* LEFT IMAGE */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "relative", width: "100%", maxWidth: 380, mx: "auto" }}>
              
              {/* PURPLE CIRCLE */}
              <Box
                sx={{
                  position: "absolute",
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  top: 40,
                  left: 20,
                  zIndex: 1,
                }}
              />

              {/* IMAGE */}
              <Box
                component="img"
                src="src/assets/images/black.jpeg"
                alt="Founder"
                sx={{
                  position: "relative",
                  width: "100%",
                  borderRadius: "0 0 0 120px",
                  zIndex: 2,
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT CONTENT */}
          <Grid item xs={12} md={7} sx={{ textAlign: { xs: "center", md: "left" } }}>
            
            {/* TAG */}
            <Box
              sx={{
                display: "inline-block",
                border: `1px solid ${purple}`,
                color: purple,
                px: 3,
                py: 1,
                borderRadius: "999px",
                fontSize: 14,
                mb: 3,
              }}
            >
              Founder & CEO
            </Box>

            {/* NAME */}
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Marcellus SC",
                color: textColor,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3rem" } // Adjusted for mobile readability
              }}
            >
              Dr. Lalitha
            </Typography>

            {/* QUOTE */}
            <Typography
              sx={{
                fontSize: 23,
                lineHeight: 1.7,
                color: "#444",
                maxWidth: 550,
                mx: { xs: "auto", md: 0 } // Centers quote on mobile
              }}
            >
              “Our goal was never just to build a clinic; it was to create a sanctuary
              where health meets comfort. At Orchid, we believe every patient deserves
              a smile they are proud of, delivered with the gentleness they deserve.”
            </Typography>

            {/* UNDERLINE */}
            <Box
              sx={{
                width: 400,
                height: 3,
                bgcolor: "#5a2d5f",
                mt: 4,
                mx: { xs: "auto", md: 0 } // Centers underline on mobile
              }}
            />
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Founder;