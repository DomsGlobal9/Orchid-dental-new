import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Description: React.FC = () => {
    const a = '#A65EA5';

    return (
        <Container maxWidth="lg" sx={{ py: 15, textAlign: 'center' }}>
            <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
                <Typography 
                    variant="h3" 
                    sx={{ 
                        fontFamily: '"Cinzel", serif', // Or a similar high-end serif font
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: '#000000',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                        fontSize: { xs: '1.3rem', md: '2.1rem' }
                    }}
                >
                    We believe that dentistry is more than just treatment 
                    s it’s all about{' '}
                    <Box component="span" sx={{ color: a }}>
                        building relationships
                    </Box>
                    , restoring confidence and enhancing overall well-being
                </Typography>
            </Box>
        </Container>
    );
}

export default Description;