// // import React from 'react';

// // const Footer = () => (
// //   <footer className="fixed bottom-0 w-full bg-gray-900 text-white text-center p-3 shadow-lg">
// //     <p className="text-sm md:text-base">© 2025 Gahan Infra Consultant. All rights reserved.</p>
// //   </footer>
// // );

// // export default Footer;


// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         position: 'fixed',
//         bottom: 0,
//         left: 0,
//         width: '100%',
//         bgcolor: 'grey.900',
//         color: 'white',
//         textAlign: 'center',
//         p: 2,
//         boxShadow: 3,
//       }}
//     >
//       <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '1rem' } }}>
//         © 2025 Gahan Infra Consultant. All rights reserved.
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;



import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      // sx={{
      //   position: "fixed",
      //   width: '100%',
      //   bgcolor: 'grey.900',
      //   color: 'white',
      //   // textAlign: 'center',
      //   py: 0,
      //   px: 2,
      //   bottom: 0
      //   // mt: "",  // Pushes footer to bottom when content is short
      // }}
      sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                bgcolor: 'grey.900',
                color: 'white',
                textAlign: 'center',
                p: 2,
                boxShadow: 3,
              }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Contact Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">📧 gic.gahaninfraconsultant@gmail.com</Typography>
          <Typography variant="body2">📞 +91-9414457407 / +91-9509571315</Typography>
          <Typography variant="body2">📍 D211 Malviya Nagar, Jaipur</Typography>
        </Grid>

        {/* Copyright Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '1rem' }, mt: 2 }}>
            © 2025 Gahan Infra Consultant. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
