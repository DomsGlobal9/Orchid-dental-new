
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typography, Box, Container, Button } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Link } from 'react-router-dom';
const RefineSignature: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Video slides from right (50% width) to cover the whole screen (0%)
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  return (
    <Box 
      ref={containerRef} 
      className="relative h-[110vh] bg-white" 
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* VIDEO LAYER - Z-INDEX 10 */}
        <motion.div 
          style={{ x: xTranslate }}
          className="absolute top-0 right-0 h-full w-full z-10"
        >
          <div className="relative w-full h-full overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source 
                src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/refine-signature.mp4" 
                type="video/mp4" 
              />
            </video>
            {/* Dark overlay ensures the video is dark enough for white text */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </motion.div>

        {/* BACKGROUND OVERLAY FOR WHITE BG AREA 
            Since you want the text to be WHITE, but the main background is WHITE, 
            we need a slight dark tint or shadow behind the text so it's visible 
            before the video slides in.
        */}
        <div className="absolute inset-0 z-15 bg-black/20" />

        {/* CONTENT LAYER - Z-INDEX 20 */}
        <Container 
          maxWidth="lg" 
          className="relative z-20 flex flex-col items-center text-center"
          sx={{ 
            color: '#FFFFFF', // Forces text to stay white
            textShadow: '0px 2px 10px rgba(0,0,0,0.3)' // Ensures visibility on the white background section
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4.5rem', lg: '5.5rem' },
              lineHeight: 1.1,
              fontWeight: 400,
              fontFamily: "'Marcellus sc'",
              textTransform: 'uppercase',
              mb: 3,
              color: '#FFFFFF'
            }}
          >
            Refining Your<br />
            Signature Smile.
          </Typography>

          {/* Subtext */}
          <Typography
            variant="body1"
            className="mb-8 max-w-2xl uppercase tracking-widest font-light"
            sx={{ 
              fontSize: { xs: '0.75rem', md: '0.9rem' }, 
              lineHeight: 1.8,
              opacity: 1, // Full opacity for maximum whiteness
              color: '#FFFFFF',
              pb:5,
            }}
          >
            Orchid Dental Care combines clinical expertise with artistic precision to craft
            your ideal smile. Our team delivers personalized, gentle treatments in a relaxing
            environment designed for your comfort.
          </Typography>

          {/* Action Buttons */}
          <Box className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              variant="contained"
              className="rounded-md normal-case shadow-none"
              sx={{ 
                minWidth: '200px', 
                backgroundColor: '#b366a5', 
                color: '#fff',
                py: 1.5,
                px: 4,
                '&:hover': { backgroundColor: '#96548a' }
              }}
            >
              Book Appointment
            </Button>
            
            <Link to="/contact-us#contact">
            <Button
              variant="outlined"
              startIcon={<PhoneInTalkIcon />}
              className="rounded-md normal-case"
              sx={{ 
                minWidth: '160px', 
                borderColor: '#FFFFFF', 
                color: '#FFFFFF',
                py: 1.5,
                px: 4,
                '&:hover': { borderColor: '#f0f0f0', backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Call us
            </Button>
            </Link>
          </Box>
        </Container>

      </div>
    </Box>
  );
};

export default RefineSignature;