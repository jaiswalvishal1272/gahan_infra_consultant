import React from "react";
import { Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";
import backgroundImage from '../assets/buildingCons.jpeg';

const projects = [
  {
    title: "Six Lane Access Controlled Highway (Ambala)",
    description: "Six Lane Access Controlled Highway from Adhoya Musalmana (Ambala) to Sadopur (Ambala) of Shamli – Ambala Section (NH-344GM) under Bharatmala Pariyojana Phase-I in Haryana.",
    client: "Montecarlo Limited",
  },
  {
    title: "Kagal-Satara Six Laning (Maharashtra)",
    description: "Six laning of Kagal-Satara section of NH-48 from Km 678+000 to Km 725+000 in Maharashtra.",
    client: "DP Jain & Co Infrastructure Pvt. Ltd.",
  },
  {
    title: "Beawar-Gomti Section (NH-58, Rajasthan)",
    description: "Construction of VUP at Km 114/000, 134/000 & LVUP at Km 114/800, 129/490, 172/280 of NH-58 (Beawar-Gomti section) in Rajasthan.",
    client: "Balabharti Infrastructure Limited",
  },
  {
    title: "Upgradation of Jirapur Pachore Road (Madhya Pradesh)",
    description: "Upgradation of Jirapur Pachore Road (NH-752C) to 2L+PS in Madhya Pradesh (Design Length 58.79 Km).",
    client: "R.S. Bhamboo / Saran Construction Company",
  },
  {
    title: "Four-lane divided highway (Barmer Bypass)",
    description: "Four/six-Lane divided highway including Paved Shoulders of Barmer Bypass (New NH-68) on EPC mode.",
    client: "LNA Infra Project Private Limited",
  },
  {
    title: "Mathania-Tiwari-Dechu Section (Rajasthan)",
    description: "Mathania-Tiwari-Dechu Section (SH-61B) from Km 0+00 to Km 80+00 connecting SH-61 to NH-125.",
    client: "Gawar Construction Company - Mundan Construction Company",
  },
  {
    title: "Churu-Taranagar-Nohar Section (SH-36, Rajasthan)",
    description: "Churu-Taranagar-Nohar Section of SH-36 covering a total length of 111.940 km in Rajasthan on EPC Mode.",
    client: "Kalyan Toll Infrastructure JV Krishna Construction Company",
  },
  {
    title: "Railway Over Bridge (ROB) - Niwai District, Rajasthan",
    description: "Detailed design services of ROB including approaches, service roads, and subway in lieu of LC-36 on SH-117 at Niwai District, Rajasthan.",
    client: "State of Rajasthan",
  },
  {
    title: "Chenani Nashri Tunnelway (Due Diligence)",
    description: "Independent Assessment of Operating and Maintenance requirements for Chenani Nashri Tunnelway Limited (CNTL), including 9km long Tunnel.",
    client: "IL&FS Transportation",
  },
  {
    title: "RIDCOR Roads (Technical Due Diligence)",
    description: "Technical Due Diligence services for RIDCOR Roads under Phase I, II & III (1500Km) in Rajasthan.",
    client: "ROAD STAR INFRA PRIVATE LIMITED (IL&FS)",
  },
];

const Projects = () => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`, // Replace with your actual image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      color: "white",
      py: 10, // Extra padding to avoid navbar overlap
      px: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "98vw",
      height: "80vh"
    }}
  >
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", height: "75vh" }}>
      {/* Overlay Box */}
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          p: 5,
          borderRadius: 2,
          flex: 1,
          width: "100%",
          overflowY: "auto",
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari
          },
        }}
      >
        {/* Title */}
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Our Major Projects
        </Typography>

        <Typography variant="body1" textAlign="center" mb={4}>
          We have successfully executed numerous infrastructure projects across India.
        </Typography>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold" color="secondary" mt={1}>
                    Client: {project.client}
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

export default Projects;
