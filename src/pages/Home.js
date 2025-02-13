import React, { useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import backgroundImage from '../assets/istockphoto-496119890-612x612.png'; // Replace with your image

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = "auto"; // Allow scrolling on Home page
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '150vh', // Ensure full viewport height
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container maxWidth="md" sx={{ textAlign: "center", color: "white", width:'60%' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Welcome to Gahan Infra Consultant
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
            We provide comprehensive services in Transportation Infrastructure, Engineering & Design.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
            Our mission is to shape the future of civil infrastructure.
          </Typography>

          <Box sx={{ mt: 5 }}> {/* About Us */}
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>About Us</Typography>
            <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
              Gahan Infra Consultant is an avant-garde consultancy service provider across all phases of civil infrastructure development. We stand ahead of our peers by integrating modern technologies and innovative methodologies into our projects.
            </Typography>
          </Box>

          <Box sx={{ mt: 5 }}> {/* Vision */}
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>Our Vision</Typography>
            <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
              We aspire to be a textbook example of excellence in the construction industry, establishing Gahan Infra Consultant as a recognized brand worldwide.
            </Typography>
          </Box>

          <Box sx={{ mt: 5 }}> {/* Mission */}
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>Our Mission</Typography>
            <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
              We are committed to providing timely, responsible, and high-quality engineering services that meet internationally accepted standards.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;