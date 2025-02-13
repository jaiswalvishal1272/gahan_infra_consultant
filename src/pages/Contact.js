import React from 'react';
import { Container, Typography, Box } from '@mui/material';
// import backgroundImage from '../assets/contact-background.jpg'; // Replace with your image

const Contact = () => {
  return (
    <Box
      sx={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container maxWidth="md" sx={{ color: 'white', py: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
            Contact Us
          </Typography>

          <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', p: 4, borderRadius: 2 }}> {/* Form background */}
           <Box mt={3} textAlign="center"> {/* Contact Information */}
              <Typography variant="body1">Email: gic.gahaninfraconsultant@gmail.com</Typography>
              <Typography variant="body1">Phone: +91-9414457407 / +91-9509571315</Typography>
              <Typography variant="body1">Address: D211 Malviya Nagar, Jaipur</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;