// // src/pages/Clients.js
// import React from "react";
// import { Container, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
// import nhaiLogo from "../assets/nhai.png";
// import montecarloLogo from "../assets/montecarlo.png";
// import dpjainLogo from "../assets/dpjain.png";
// import balabhartiLogo from "../assets/balabharti.jpeg";
// import lnaLogo from "../assets/lna-infraprojects-pvt-ltd-saytmarshrut-sokhranit-133515.jpg";
// import ghvLogo from "../assets/GHV.png";
// import pwdLogo from "../assets/pwd.png";
// import afconsLogo from "../assets/AFCONS_logo.svg.png";
// import dilipBuildconLogo from "../assets/Dilip_Buildcon_Limited_Logo.png";
// import indianRailwaysLogo from "../assets/Indian_Railways_logo.png";
// import modiLogo from "../assets/MODI.png";
// import elsamexLogo from "../assets/elsamex.png";
// import ilfsLogo from "../assets/il&fs.jpg";
// import kccLogo from "../assets/kcc.jpeg";
// import nhidclLogo from "../assets/nhidcl.png";
// import sbcLogo from "../assets/sbc.jpeg";
// import vprplLogo from "../assets/vprpl.jpeg";




// const clients = [
//   { name: "Balabharti Infrastructure", logo: nhaiLogo },
//   { name: "Montecarlo Limited", logo: montecarloLogo },
//   { name: "DP Jain & Co.", logo: dpjainLogo },
//   { name: "LNA Infra Project", logo: lnaLogo },
//   { name: "GHV Construction", logo: ghvLogo },
//   { name: "PWD", logo: pwdLogo },
//   { name: "Afcons Infrastructure", logo: afconsLogo },
//   { name: "Dilip Buildcon Limited", logo: dilipBuildconLogo },
//   { name: "Indian Railways", logo: indianRailwaysLogo },
//   { name: "MODI Group", logo: modiLogo },
//   { name: "Elsamex", logo: elsamexLogo },
//   { name: "IL&FS", logo: ilfsLogo },
//   { name: "KCC Buildcon", logo: kccLogo },
//   { name: "NHIDCL", logo: nhidclLogo },
//   { name: "SBC Infrastructure", logo: sbcLogo },
//   { name: "VPRPL", logo: vprplLogo },
//   { name: "Bala Bharti Infrastructure", logo: balabhartiLogo },
// ];

// const Clients = () => (
//   <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
//     {/* Title */}
//     <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
//       Our Clients
//     </Typography>

//     {/* Grid Layout for Logos */}
//     <Grid container spacing={4} justifyContent="center">
//       {clients.map((client, index) => (
//         <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
//           <Card
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               p: 2,
//               boxShadow: 3,
//               borderRadius: 2,
//               transition: "transform 0.3s",
//               "&:hover": { transform: "scale(1.05)" },
//             }}
//           >
//             <CardMedia
//               component="img"
//               image={client.logo}
//               alt={client.name}
//               sx={{ width: 100, height: 100, objectFit: "contain" }}
//             />
//             <CardContent>
//               <Typography variant="subtitle1" fontWeight="bold">
//                 {client.name}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   </Container>
// );

// export default Clients;



import React from "react";
import { Container, Grid, Typography, Card, CardMedia, CardContent, Box } from "@mui/material";
import backgroundImage from "../assets/bridge.jpeg"; // Replace with your actual image path
import nhaiLogo from "../assets/nhai.png";
import montecarloLogo from "../assets/montecarlo.png";
import dpjainLogo from "../assets/dpjain.png";
import balabhartiLogo from "../assets/balabharti.jpeg";
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

const clients = [
  { name: "Balabharti Infrastructure", logo: nhaiLogo },
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
  { name: "Bala Bharti Infrastructure", logo: balabhartiLogo },
];

const Clients = () => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      color: "white",
      py: 12,
      px: 2,
      height: "98vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      // backgroundImage: `url(${backgroundImage})`, // Replace with your actual image path
      // backgroundSize: "cover",
      // backgroundPosition: "center",
      // backgroundAttachment: "fixed",
      // color: "white",
      // py: 12, // Extra padding to avoid navbar overlap
      // px: 2,
      // height: "100vh",
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "center",
      // width: "98vw",
      // height: "80vh"
    }}
  >
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", height: "75vh" }}>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for better readability
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
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Our Clients
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {clients.map((client, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  image={client.logo}
                  alt={client.name}
                  sx={{ width: 100, height: 100, objectFit: "contain" }}
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {client.name}
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

export default Clients;
