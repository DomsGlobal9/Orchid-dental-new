import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const CertificateStandard: React.FC = () => {
  const certificateLogos = [
    { id: 1, url: 'https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/certificate1.png', alt: 'Certificate 1' },
    { id: 2, url: 'https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/certificate2.png', alt: 'Certificate 2' },
    { id: 3, url: 'https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/certificate3.png', alt: 'Certificate 3' },
    { id: 4, url: 'https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/certificate4.png', alt: 'Certificate 4' },
    { id: 5, url: 'https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/certificate5.png', alt: 'Certificate 5' },
  ];

  return (
    <Box component="section" sx={{ py:2, bgcolor: '#ffffff', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            fontFamily: "Poppins",
            color: '#4A2B52',
            mb: 6,
          }}
        >
          Certificates & Standards
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            // On mobile (xs), wrap items. On desktop (md), keep them in one row.
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            alignItems: 'center',
            // Gap for mobile spacing
            gap: { xs: 4, md: 2 } 
          }}
        >
          {certificateLogos.map((logo) => (
            <Box 
              key={logo.id} 
              sx={{ 
                // Mobile: Calculate width for 2 items per row (minus gap)
                // Desktop: Let flex-grow/shrink handle it (flex: 1)
                flex: { xs: '0 0 calc(50% - 24px)', md: 1 }, 
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
                  maxHeight: '80px', // Slightly smaller for mobile comfort
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