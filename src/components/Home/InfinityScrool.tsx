import React from 'react';
import OrchidLogo from '../../assets/images/orchid-icon.png'; // Update this path to your actual logo

const InfinityScroll = () => {
  const scrollItems = [
    "Healthy Smiles",
    "Advanced Dental Care",
    "Gentle Treatment",
    "Expert Dentists",
    "Modern Technology",
  ];

  // Triple the items for a perfectly smooth loop
  const tripleItems = [...scrollItems, ...scrollItems, ...scrollItems];

  // List of items that should be purple
  const purpleItems = ["Advanced Dental Care", "Expert Dentists"];

  return (
    <div style={containerStyle}>
      <div style={scrollWrapperStyle}>
        {tripleItems.map((text, index) => (
          <div key={index} style={itemGroupStyle}>
            {/* The Text */}
            <span
              style={{
                ...textStyle,
                color: purpleItems.includes(text) ? "#9C6B9C" : "#1A0B1A",
              }}
            >
              {text}
            </span>

            {/* The Logo separator */}
            <img 
              src={OrchidLogo} 
              alt="Orchid Logo" 
              style={logoStyle} 
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}
      </style>
    </div>
  );
};

// --- Styles ---

const containerStyle: React.CSSProperties = {
  width: '100%',
  overflow: 'hidden',
  backgroundColor: '#F5E6F0',
  padding: '25px 0',
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
};

const scrollWrapperStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  animation: 'scroll 30s linear infinite',
};

const itemGroupStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '40px', // Space between text and logo
  paddingRight: '40px', // Space after logo before next text
};

const textStyle: React.CSSProperties = {
  fontSize: '40px',
  fontFamily: "Manrope", // Switched back to Marcellus SC as per your brand
  fontWeight: 500,
  textTransform: 'uppercase',
};

const logoStyle: React.CSSProperties = {
  height: '35px', // Adjust based on your logo's aspect ratio
  width: 'auto',
  margin: '0 20px',
  objectFit: 'contain',
}; 

export default InfinityScroll;