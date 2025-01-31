// import React from 'react';

// const Home = () => (
//   <div>
//     <h1>Welcome to Gahan Infra Consultant</h1>
//     <p>
//       We provide comprehensive services in Transportation Infrastructure, Engineering & Design.
//     </p>
//     <p>Our mission is to shape the future of civil infrastructure.</p>
//   </div>
// );

// export default Home;


import React, { useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import backgroundImage from '../assets/istockphoto-496119890-612x612.jpg';

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Prevents scrolling
    return () => {
      document.body.style.overflow = "auto"; // Resets overflow when component unmounts
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed", // Prevent scrolling
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dark Overlay to Improve Readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          position: "relative", // Ensures content is above overlay
          color: "white",
          p: 5,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Welcome to Gahan Infra Consultant
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
          We provide comprehensive services in Transportation Infrastructure,
          Engineering & Design.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
          Our mission is to shape the future of civil infrastructure.
        </Typography>

        {/* About the Company */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            About Us
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
            Gahan Infra Consultant is an avant-garde consultancy service
            provider across all phases of civil infrastructure development. We
            stand ahead of our peers by integrating modern technologies and
            innovative methodologies into our projects.
          </Typography>
        </Box>

        {/* Our Vision */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
            We aspire to be a textbook example of excellence in the construction
            industry, establishing Gahan Infra Consultant as a recognized brand
            worldwide.
          </Typography>
        </Box>

        {/* Our Mission */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
            We are committed to providing timely, responsible, and high-quality
            engineering services that meet internationally accepted standards.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

