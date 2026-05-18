// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const Expertise: React.FC = () => {
//     const b = "#FCE4EC"; // Soft pink background

//     return (
//         <Box sx={{ 
//             width: '100%', 
//             height: '100vh', 
//             bgcolor: b, 
//             overflow: 'hidden', 
//             position: 'relative',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//         }}>
//             {/* Infinity Scroll Text Background */}
//             <Box sx={{ 
//                 position: 'absolute', 
//                 top: '10%', 
//                 whiteSpace: 'nowrap', 
//                 display: 'flex',
//                 userSelect: 'none',
//                 zIndex: 0
//             }}>
//                 {[...Array(2)].map((_, i) => (
//                     <Box key={i} sx={{ 
//                         display: 'flex', 
//                         animation: 'scroll 30s linear infinite' 
//                     }}>
//                         {[...Array(10)].map((_, j) => (
//                             <React.Fragment key={j}>
//                                 <Typography sx={{ 
//                                     fontSize: '9rem', 
//                                     fontWeight: 600, 
//                                     color: 'rgba(0,0,0,0.8)', 
//                                     mx: 6,
//                                     my: -4,
//                                     fontFamily: 'sans-serif'
//                                 }}>
//                                     EXPERTISE   
//                                 </Typography>
//                                 <Typography sx={{ 
//                                     fontSize: '9rem', 
//                                     fontWeight: 600, 
//                                     color: 'rgba(0,0,0,0.8)', 
//                                     mx: 6,
//                                     my: -4,
//                                     fontFamily: 'sans-serif'
//                                 }}>
//                                     EXCELLENCE
//                                 </Typography>
//                             </React.Fragment>
//                         ))}
//                     </Box>
//                 ))}
//             </Box>

//             {/* Team Image Foreground */}
//             <Box sx={{ 
//                 position: 'relative', 
//                 zIndex: 1, 
//                 height: '100%', 
//                 width: '100%',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'flex-end'
//             }}>
//                 <img 
//                     src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/ORG_PHOTO-removebg-preview.png" 
//                     alt="Dental Experts" 
//                     style={{ 
//                         height: '90%', 
//                         width: '55%',
//                          padding: '23px',
                        
//                         objectFit: 'cover',
//                         maskImage: 'linear-gradient(to top, transparent 5%, black 20%)',
//                         WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 20%)'
//                     }} 
//                 />
//             </Box>

//             <style>
//                 {`
//                     @keyframes scroll {
//                         0% { transform: translateX(0); }
//                         100% { transform: translateX(-50%); }
//                     }
//                 `}
//             </style>
//         </Box>
//     );
// };

// export default Expertise;

import React from 'react';
import { Box, Typography } from '@mui/material';

const Expertise: React.FC = () => {
    const bgColor = "#FCE4EC"; // Soft pink background

    return (
        <Box sx={{ 
            width: '100%', 
            height: '100vh', 
            bgcolor: bgColor, 
            overflow: 'hidden', 
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Infinity Scroll Text Background */}
            <Box sx={{ 
                position: 'absolute', 
                top: { xs: '8%', md: '12%' }, 
                whiteSpace: 'nowrap', 
                display: 'flex',
                userSelect: 'none',
                zIndex: 0
            }}>
                {[...Array(2)].map((_, i) => (
                    <Box key={i} sx={{ 
                        display: 'flex', 
                        animation: 'scroll 25s linear infinite' 
                    }}>
                        {[...Array(10)].map((_, j) => (
                            <React.Fragment key={j}>
                                <Typography sx={{ 
                                    fontSize: { xs: '5rem', md: '9rem' }, 
                                    fontWeight: 800, 
                                    color: '#000000', // Solid Black
                                    opacity: 1,      // Fully visible
                                    mx: { xs: 3, md: 6 },
                                    fontFamily: 'sans-serif',
                                    letterSpacing: '-2px'
                                }}>
                                    EXPERTISE   
                                </Typography>
                                <Typography sx={{ 
                                    fontSize: { xs: '5rem', md: '9rem' }, 
                                    fontWeight: 800, 
                                    color: '#000000', // Solid Black
                                    opacity: 1,      // Fully visible
                                    mx: { xs: 3, md: 6 },
                                    fontFamily: 'sans-serif',
                                    letterSpacing: '-2px'
                                }}>
                                    EXCELLENCE
                                </Typography>
                            </React.Fragment>
                        ))}
                    </Box>
                ))}
            </Box>

            {/* Team Image Foreground */}
            <Box sx={{ 
                position: 'relative', 
                zIndex: 1, 
                height: '75%', 
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                mt: 'auto'
            }}>
                <Box
                    component="img"
                    src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/ORG_PHOTO-removebg-preview.png"
                    alt="Dental Experts"
                    sx={{
                        height: 'auto',
                        maxHeight: '100%',
                        width: { xs: '100%', md: '60%' }, 
                        objectFit: 'contain', // Ensures image is fully visible without cropping
                        maskImage: 'linear-gradient(to top, transparent 0%, black 15%)',
                        WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)',
                    }}
                />
            </Box>

            {/* Bottom Text Content */}
            <Box sx={{ 
                width: '100%', 
                bgcolor: 'white', 
                py: { xs: 3, md: 5 }, 
                px: 2, 
                zIndex: 2,
                textAlign: 'center',
                boxShadow: '0 -10px 20px rgba(0,0,0,0.05)'
            }}>
                <Typography 
                    variant="body1" 
                    sx={{ 
                        fontWeight: 600, 
                        color: '#000000', // Black text
                        letterSpacing: 1,
                        fontSize: { xs: '0.85rem', md: '1.2rem' },
                        maxWidth: '90%',
                        mx: 'auto',
                        textTransform: 'uppercase'
                    }}
                >
                    WE BELIEVE THAT DENTISTRY IS MORE THAN JUST TREATMENT. IT'S ALL
                </Typography>
            </Box>

            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}
            </style>
        </Box>
    );
};

export default Expertise;