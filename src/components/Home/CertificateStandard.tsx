import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const CertificateStandard: React.FC = () => {
  const certificateLogos = [
    { id: 1, url: 'src/assets/images/certificate1.png', alt: 'Certificate 1' },
    { id: 2, url: 'src/assets/images/certificate2.png', alt: 'Certificate 2' },
    { id: 3, url: 'src/assets/images/certificate3.png', alt: 'Certificate 3' },
    { id: 4, url: 'src/assets/images/certificate4.png', alt: 'Certificate 4' },
    { id: 5, url: 'src/assets/images/certificate5.png', alt: 'Certificate 5' },
  ];

  return (
    <Box component="section" sx={{ py: 8, bg: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            fontFamily:"Poppins",
            color: '#4A2B52',
            mb: 6,
          }}
        >
          Certificates & Standards
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            gap: 2 
          }}
        >
          {certificateLogos.map((logo) => (
            <Box 
              key={logo.id} 
              sx={{ 
                flex: 1, 
                display: 'flex', 
                justifyContent: 'center',
                filter: 'grayscale(100%)',
                opacity: 0.7,
                transition: '0.3s',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  opacity: 1
                }
              }}
            >
              <img
                src={logo.url}
                alt={logo.alt}
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto', 
                  maxHeight: '100px',
                  objectFit: 'contain' 
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CertificateStandard;