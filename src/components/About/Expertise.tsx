// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const Expertise: React.FC = () => {
//     const a = "EXPERTISE ".split("");
    
//     const b = "#FCE4EC"; // Soft pink background from image

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
//                             <Typography key={j} sx={{ 
//                                 fontSize: '9rem', 
//                                 fontWeight: 600, 
//                                 color: 'rgba(0,0,0,0.8)', 
//                                 mx: 6,
//                                 my:-4,
//                                 fontFamily: 'sans-serif'
//                             }}>
//                                 EXPERTISE   
//                             </Typography>
//                             <Typography sx={{ 
//                                     fontSize: '9rem', 
//                                     fontWeight: 900, 
//                                     color: 'rgba(0,0,0,0.8)', 
//                                     mx: 4, 
//                                     fontFamily: 'sans-serif'
//                                 }}>
//                                     EXCELLENCE
//                                 </Typography>
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
//                     src="src/assets/images/expertiseImage.png" 
//                     alt="Dental Experts" 
//                     style={{ 
//                         height: '100%', 
//                         objectFit: 'contain',
//                         maskImage: 'linear-gradient(to top, transparent 5%, black 20%)'
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
    const b = "#FCE4EC"; // Soft pink background

    return (
        <Box sx={{ 
            width: '100%', 
            height: '100vh', 
            bgcolor: b, 
            overflow: 'hidden', 
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Infinity Scroll Text Background */}
            <Box sx={{ 
                position: 'absolute', 
                top: '10%', 
                whiteSpace: 'nowrap', 
                display: 'flex',
                userSelect: 'none',
                zIndex: 0
            }}>
                {[...Array(2)].map((_, i) => (
                    <Box key={i} sx={{ 
                        display: 'flex', 
                        animation: 'scroll 30s linear infinite' 
                    }}>
                        {[...Array(10)].map((_, j) => (
                            <React.Fragment key={j}>
                                <Typography sx={{ 
                                    fontSize: '9rem', 
                                    fontWeight: 600, 
                                    color: 'rgba(0,0,0,0.8)', 
                                    mx: 6,
                                    my: -4,
                                    fontFamily: 'sans-serif'
                                }}>
                                    EXPERTISE   
                                </Typography>
                                <Typography sx={{ 
                                    fontSize: '9rem', 
                                    fontWeight: 600, 
                                    color: 'rgba(0,0,0,0.8)', 
                                    mx: 6,
                                    my: -4,
                                    fontFamily: 'sans-serif'
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
                height: '100%', 
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end'
            }}>
                <img 
                    src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/group 1.png" 
                    alt="Dental Experts" 
                    style={{ 
                        height: '800px', 
                        
                        objectFit: 'contain',
                        maskImage: 'linear-gradient(to top, transparent 5%, black 20%)',
                        WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 20%)'
                    }} 
                />
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