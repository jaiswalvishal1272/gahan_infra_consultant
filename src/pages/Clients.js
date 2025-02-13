import React from "react";
import { Container, Grid, Typography, Card, CardMedia, CardContent, Box } from "@mui/material";
import backgroundImage from "../assets/bridge.jpg"; // Replace with your actual image path
import nhaiLogo from "../assets/nhai.png";
import montecarloLogo from "../assets/montecarlo.png";
import dpjainLogo from "../assets/dpjain.png";
// import balabhartiLogo from "../assets/balabharti.jpeg";
import lnaLogo from "../assets/lna-infraprojects-pvt-ltd-saytmarshrut-sokhranit-133515.jpg";
import ghvLogo from "../assets/GHV.png";
import pwdLogo from "../assets/pwd.png";
import afconsLogo from "../assets/AFCONS_logo.svg.png";
import dilipBuildconLogo from "../assets/Dilip_Buildcon_Limited_Logo.png";
import indianRailwaysLogo from "../assets/Indian_Railways_logo.png";
import modiLogo from "../assets/MODI.png";
import elsamexLogo from "../assets/elsamex.png";
import ilfsLogo from "../assets/il&fs.jpg";
import kccLogo from "../assets/kcc.jpeg";
import nhidclLogo from "../assets/nhidcl.png";
import sbcLogo from "../assets/sbc.jpeg";
import vprplLogo from "../assets/vprpl.jpeg";
import balabhartiLogo2 from "../assets/balabharti.jpeg"


const clients = [
  { name: "National Highway Authority Limited", logo: nhaiLogo },
  { name: "Montecarlo Limited", logo: montecarloLogo },
  { name: "DP Jain & Co.", logo: dpjainLogo },
  { name: "LNA Infra Project", logo: lnaLogo },
  { name: "GHV Construction", logo: ghvLogo },
  { name: "PWD", logo: pwdLogo },
  { name: "Afcons Infrastructure", logo: afconsLogo },
  { name: "Dilip Buildcon Limited", logo: dilipBuildconLogo },
  { name: "Indian Railways", logo: indianRailwaysLogo },
  { name: "MODI Group", logo: modiLogo },
  { name: "Elsamex", logo: elsamexLogo },
  { name: "IL&FS", logo: ilfsLogo },
  { name: "KCC Buildcon", logo: kccLogo },
  { name: "NHIDCL", logo: nhidclLogo },
  { name: "SBC Infrastructure", logo: sbcLogo },
  { name: "VPRPL", logo: vprplLogo },
  { name: "Bala Bharti Infrastructure", logo: balabhartiLogo2 }, // Corrected duplicate name
];

const Clients = () => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="lg" sx={{ py: 8, color: 'white' }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ pt: 4,color:'#000' }}>
          Our Clients
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ pt: 4 }}>
          {clients.map((client, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ height: "100%", boxShadow: 3, transition: "transform 0.3s", "&:hover": { transform: "scale(1.05)" } }}>
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}> {/* Center content */}
                  <CardMedia
                    component="img"
                    image={client.logo}
                    alt={client.name}
                    sx={{ width: 100, height: 100, objectFit: "contain", mb: 2 }} // Add margin bottom
                  />
                  <Typography variant="subtitle1" fontWeight="bold" textAlign="center"> {/* Center text */}
                    {client.name}
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

export default Clients;
