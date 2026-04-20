import React from 'react';
import { Typography, Button, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import AboutCard from '../../assets/images/AboutOrchid-Card.png';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom';

const AboutOrchidCard: React.FC = () => {
  const points = [
    "Advanced laser technology for pain-free treatments",
    "Same-day emergency appointments available",
    "Flexible payment plans and insurance accepted",
    "Multilingual staff for your comfort"
  ];

  return (
    <section style={{ backgroundColor: '#ffffff',  padding: '60px 20px' }}>
      {/* Main Flex Container for Side-by-Side Layout */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10px',

        maxWidth: '1200px',
        margin: '0 auto',
        alignItems: 'stretch' // Ensures both sides have the same height
      }}>
        
        {/* Left Side: Image Container */}
        <div style={{ flex: '1 1 450px' }}>
          <img
            src={AboutCard}
            alt="Orchid Dental Care"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'center',
              borderRadius: '24px',
              display: 'block',
             
            }}
          />
        </div>

        {/* Right Side: Content Card */}
        <div style={{ 
          flex: '1 1 450px',
          backgroundColor: '#F5E6F0',
          borderRadius: '0px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Typography 
            variant="overline" 
            sx={{ color: '#633D63', fontWeight: 700, letterSpacing: 1.5 }}
          >
            ABOUT ORCHID
          </Typography>

          <Typography 
            variant="h3" 
            sx={{ 
              color: '#1A0B1A', 
              fontWeight: 400, 
              my: 2, 
              lineHeight: '100%',
              letterSpacing: '-1.6px',
              fontSize: '39px',
              fontFamily: 'Marcellus SC' 
            }}
          >
            ELEVATING <span style={{ color: '#9C6B9C',fontFamily: 'Marcellus SC', fontSize: '3.3rem' }}>DENTAL CARE</span> <br />
            THROUGH INNOVATION
          </Typography>

          <Typography sx={{ color: '#4A3B4A', mb: 2, fontSize: '1rem', lineHeight: 1.6 }}>
            With over 15 years of excellence, we've transformed thousands of smiles using cutting-edge technology and compassionate care.
          </Typography>

          <Typography sx={{ color: '#4A3B4A', mb: 3, fontSize: '1rem', lineHeight: 1.6 }}>
            Our team of board-certified dentists specializes in comprehensive dental care.
          </Typography>

          <List sx={{ mb: 3 }}>
            {points.map((text, i) => (
              <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 35 }}>
                  <CheckCircleOutlinedIcon sx={{ color: '#9C6B9C', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText 
                  primary={text} 
                  primaryTypographyProps={{ sx: { color: '#4A3B4A', fontSize: '0.9rem', fontWeight: 500 } }} 
                />
              </ListItem>
            ))}
          </List>

          <Box>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: '#3B1F3B',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#522A52' }
                }}
              >
                Learn More About Us
              </Button>
            </Link>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default AboutOrchidCard; 