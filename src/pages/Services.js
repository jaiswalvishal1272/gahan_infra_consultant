import React from "react";
import { Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TrafficIcon from "@mui/icons-material/Traffic";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BuildIcon from "@mui/icons-material/Build";
import backgroundImage from '../assets/infra.jpg'; // Replace with your image URL

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
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="lg" sx={{ py: 8, color: 'white' }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ pt: 4,color:'#000', }}>
          Our Services
        </Typography>

        <Typography variant="body1" textAlign="center" mb={4} sx={{color:'#000', fontSize:'25px',fontWeight:500}}>
          We have evolved into an infrastructure consultant of global standard, expanding our services countrywide.
          Our mission is to provide the best design that improves the human condition.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} padding={2}> {/* Add padding here */}
              <Card sx={{ height: "100%", display: 'flex', flexDirection: 'column', boxShadow: 3, textAlign: "center", p: 2, transition: "transform 0.3s", "&:hover": { transform: "scale(1.05)" } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  {service.icon}
                  <Typography variant="h6" fontWeight="bold" mt={2}>
                    {service.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </Box>
);

export default Services;