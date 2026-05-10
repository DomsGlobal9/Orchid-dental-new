// import React from "react";
// // import { Box, Container,  Typography } from "@mui/material";
// // import Grid from "@mui/material/Grid2";
// import { Box, Container, Grid, Typography } from "@mui/material";

// const Founder: React.FC = () => {
//   const purple = "#A65EA5";
//   const textColor = "#2b2b2b";

//   return (
//     <Box
//       sx={{
//         py: { xs: 6, md: 10 },
//         bgcolor: "#f5f5f5",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <Container maxWidth="lg" sx={{ position: "relative" }}>
        
//         {/* DECORATIVE ICON */}
//         <Box
//           component="img"
//           src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/orchid-icon.png"
//           alt="decorative shape"
//           sx={{
//             position: "absolute",
//             left: { md: "90%", lg: "100%" },
//             top: "50%",
//             transform: "translate(-50%, -50%)",
//             width: { md: 320, lg: 420 },
//             opacity: 0.08,
//             zIndex: 0,
//             pointerEvents: "none",
//             display: { xs: "none", md: "block" },
//           }}
//         />

//         <Grid
//           container
//           spacing={{ xs: 4, md: 8, lg: 10 }}
//           sx={{
//             position: "relative",
//             zIndex: 1,
//             alignItems: "center",
//           }}
//         >
          
//           {/* LEFT IMAGE */}
//           {/* Corrected: Removed 'item' and used 'size' object */}
//           <Grid item xs={12} md={5}>
//             <Box
//               sx={{
//                 position: "relative",
//                 width: "100%",
//                 maxWidth: { xs: 320, md: 380, lg: 450 },
//                 mx: "auto",
//               }}
//             >
//               {/* PURPLE ACCENT CIRCLE */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   width: { xs: 250, md: 300 },
//                   height: { xs: 250, md: 300 },
//                   borderRadius: "50%",
//                   bgcolor: "rgba(166, 94, 165, 0.1)",
//                   top: 20,
//                   left: -10,
//                   zIndex: 1,
//                 }}
//               />

//               <Box
//                 component="img"
//                 src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/founder.png"
//                 alt="Dr. Lalitha"
//                 sx={{
//                   position: "relative",
//                   width: "100%",
//                   height: "auto",
//                   borderRadius: "0 0 0 120px",
//                   zIndex: 2,
//                   display: "block",
//                 }}
//               />
//             </Box>
//           </Grid>

//           {/* RIGHT CONTENT */}
//           {/* Corrected: Removed 'item' and used 'size' object */}
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
//                 fontWeight: 600,
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
//                 fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
//               }}
//             >
//               Dr. Lalitha
//             </Typography>

//             {/* QUOTE */}
//             <Typography
//               sx={{
//                 fontSize: { xs: 18, md: 20, lg: 23 },
//                 lineHeight: 1.7,
//                 color: "#444",
//                 maxWidth: 600,
//                 mx: { xs: "auto", md: 0 },
//                 fontStyle: "italic",
//               }}
//             >
//               “Our goal was never just to build a clinic; it was to create a sanctuary
//               where health meets comfort. At Orchid, we believe every patient deserves
//               a smile they are proud of, delivered with the gentleness they deserve.”
//             </Typography>

//             {/* UNDERLINE */}
//             <Box
//               sx={{
//                 width: { xs: 100, md: 400 },
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

const Founder: React.FC = () => {
  const purple = "#A65EA5";
  const textColor = "#2b2b2b";

  return (
    <section
      style={{
        padding: "80px 16px",
        backgroundColor: "#f5f5f5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* DECORATIVE ICON */}
        <img
          src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/orchid-icon.png"
          alt="decorative shape"
          style={{
            position: "absolute",
            right: "-120px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "420px",
            opacity: 0.08,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* MAIN CONTENT */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* LEFT IMAGE */}
          <div
            style={{
              flex: "1 1 400px",
              display: "flex",
              justifyContent: "center",
              minWidth: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "450px",
              }}
            >
              {/* PURPLE ACCENT CIRCLE */}
              <div
                style={{
                  position: "absolute",
                  width: "70%",
                  height: "70%",
                  borderRadius: "50%",
                  backgroundColor: "rgba(166, 94, 165, 0.1)",
                  top: "20px",
                  left: "-10px",
                  zIndex: 1,
                }}
              />

              <img
                src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/founder.png"
                alt="Dr. Lalitha"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  borderRadius: "0 0 0 80px",
                  zIndex: 2,
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            style={{
              flex: "1 1 500px",
              color: textColor,
              minWidth: 0,
              width: "100%",
            }}
          >
            {/* TAG */}
            <div
              style={{
                display: "inline-block",
                border: `1px solid ${purple}`,
                color: purple,
                padding: "10px 24px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Founder & CEO
            </div>

            {/* NAME */}
            <h2
              style={{
                fontFamily: "Marcellus SC",
                color: textColor,
                marginBottom: "20px",
                fontSize: "clamp(32px, 6vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.2,
                wordBreak: "break-word",
              }}
            >
              Dr. Lalitha
            </h2>

            {/* QUOTE */}
            <p
              style={{
                fontSize: "clamp(16px, 4vw, 23px)",
                lineHeight: 1.7,
                color: "#444",
                maxWidth: "600px",
                fontStyle: "italic",
                margin: 0,
                wordBreak: "break-word",
              }}
            >
              “Our goal was never just to build a clinic; it was to create a
              sanctuary where health meets comfort. At Orchid, we believe every
              patient deserves a smile they are proud of, delivered with the
              gentleness they deserve.”
            </p>

            {/* UNDERLINE */}
            <div
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "3px",
                backgroundColor: "#5a2d5f",
                marginTop: "32px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;