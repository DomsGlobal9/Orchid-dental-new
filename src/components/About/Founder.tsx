

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
        
//         {/* 🔥 ICON UNDER CONTENT - HIDDEN ON MOBILE */}
//         <Box
//           component="img"
//           src="src/assets/images/orchid-icon.png"
//           alt="decorative shape"
//           sx={{
//             position: "absolute",
//             left: "108%",
//             top: "50%",
//             transform: "translate(-50%, -50%)",
//             width: { xs: 200, md: 320, lg: 420 },
//             opacity: 0.08,
//             zIndex: 0,
//             pointerEvents: "none",
//             display: { xs: "none", md: "block" },
//           }}
//         />

//         {/* ✅ FIXED GRID */}
//         <Grid
//           container
//           sx={{
//             position: "relative",
//             zIndex: 1,
//             alignItems: "center",
//             gap: 6,
//           }}
//         >
          
//           {/* LEFT IMAGE */}
//           <Grid size={{ xs: 12, md: 5 }}>
//             <Box
//               sx={{
//                 position: "relative",
//                 width: "100%",
//                 maxWidth: 380,
//                 mx: "auto",
//               }}
//             >
              
//               {/* PURPLE CIRCLE */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   width: 300,
//                   height: 300,
//                   borderRadius: "50%",
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
//           <Grid
//             size={{ xs: 12, md: 7 }}
//             sx={{ textAlign: { xs: "center", md: "left" } }}
//           >
            
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
//                 fontFamily: "Marcellus SC",
//                 color: textColor,
//                 mb: 2,
//                 fontSize: { xs: "2.5rem", md: "3rem" },
//               }}
//             >
//               Dr. Lalitha
//             </Typography>

//             {/* QUOTE */}
//             <Typography
//               sx={{
//                 fontSize: 23,
//                 lineHeight: 1.7,
//                 color: "#444",
//                 maxWidth: 550,
//                 mx: { xs: "auto", md: 0 },
//               }}
//             >
//               “Our goal was never just to build a clinic; it was to create a sanctuary
//               where health meets comfort. At Orchid, we believe every patient deserves
//               a smile they are proud of, delivered with the gentleness they deserve.”
//             </Typography>

//             {/* UNDERLINE */}
//             <Box
//               sx={{
//                 width: 400,
//                 height: 3,
//                 bgcolor: "#5a2d5f",
//                 mt: 4,
//                 mx: { xs: "auto", md: 0 },
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
        py: { xs: 6, md: 10 },
        bgcolor: "#f5f5f5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        
        {/* DECORATIVE ICON */}
        <Box
          component="img"
          src="src/assets/images/orchid-icon.png"
          alt="decorative shape"
          sx={{
            position: "absolute",
            left: { md: "90%", lg: "100%" },
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: { md: 320, lg: 420 },
            opacity: 0.08,
            zIndex: 0,
            pointerEvents: "none",
            display: { xs: "none", md: "block" },
          }}
        />

        <Grid
          container
          spacing={{ xs: 4, md: 8, lg: 10 }} // Use spacing instead of gap for better Grid reliability
          sx={{
            position: "relative",
            zIndex: 1,
            alignItems: "center",
          }}
        >
          
          {/* LEFT IMAGE - Takes 12 columns on mobile, 5 on medium and up */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: 320, md: 380, lg: 450 }, // Larger image on bigger screens
                mx: "auto",
              }}
            >
              {/* PURPLE ACCENT CIRCLE */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 250, md: 300 },
                  height: { xs: 250, md: 300 },
                  borderRadius: "50%",
                  bgcolor: "rgba(166, 94, 165, 0.1)", // Added light fill so it's visible
                  top: 20,
                  left: -10,
                  zIndex: 1,
                }}
              />

              <Box
                component="img"
                src="src/assets/images/founder.png"
                alt="Dr. Lalitha"
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  borderRadius: "0 0 0 120px",
                  zIndex: 2,
                  display: "block",
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT CONTENT - Takes 12 columns on mobile, 7 on medium and up */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
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
                fontWeight: 600,
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
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              }}
            >
              Dr. Lalitha
            </Typography>

            {/* QUOTE */}
            <Typography
              sx={{
                fontSize: { xs: 18, md: 20, lg: 23 },
                lineHeight: 1.7,
                color: "#444",
                maxWidth: 600,
                mx: { xs: "auto", md: 0 },
                fontStyle: "italic",
              }}
            >
              “Our goal was never just to build a clinic; it was to create a sanctuary
              where health meets comfort. At Orchid, we believe every patient deserves
              a smile they are proud of, delivered with the gentleness they deserve.”
            </Typography>

            {/* UNDERLINE */}
            <Box
              sx={{
                width: { xs: 100, md: 400 },
                height: 3,
                bgcolor: "#5a2d5f",
                mt: 4,
                mx: { xs: "auto", md: 0 },
              }}
            />
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Founder;