import React from "react";
import { Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TrafficIcon from "@mui/icons-material/Traffic";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BuildIcon from "@mui/icons-material/Build";
import backgroundImage from '../assets/infra.jpeg';

const services = [
  { title: "Highway Detail Design", icon: <EngineeringIcon fontSize="large" color="primary" /> },
  { title: "Pre-Bid Services", icon: <AssignmentIcon fontSize="large" color="primary" /> },
  { title: "Proof Checking", icon: <CheckCircleIcon fontSize="large" color="primary" /> },
  { title: "Rehabilitation of Structures", icon: <BuildIcon fontSize="large" color="primary" /> },
  { title: "Structure Design", icon: <EngineeringIcon fontSize="large" color="primary" /> },
  { title: "Due Diligence Study", icon: <AssignmentIcon fontSize="large" color="primary" /> },
  { title: "Road Safety Audit", icon: <TrafficIcon fontSize="large" color="primary" /> },
  { title: "Surveys & Investigation", icon: <EngineeringIcon fontSize="large" color="primary" /> },
];

const Services = () => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`, // Replace with your image URL
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      color: "white",
      py: 15, // Extra padding to avoid navbar overlap
      px: 2,
      height: "100%"
    }}
  >
    <Container maxWidth="lg">
      {/* Overlay for better text visibility */}
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)", p: 5, borderRadius: 2 }}>
        {/* Title */}
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Our Services
        </Typography>

        <Typography variant="body1" textAlign="center" mb={4}>
          We have evolved into an infrastructure consultant of global standard, expanding our services countrywide.
          Our mission is to provide the best design that improves the human condition.
        </Typography>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} mb={3}>
              <Card
                sx={{
                  height: "100%",
                  boxShadow: 3,
                  textAlign: "center",
                  p: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent>
                  {service.icon}
                  <Typography variant="h6" fontWeight="bold" mt={2}>
                    {service.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </Box>
);

export default Services;
