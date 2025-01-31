// import React from 'react';

// const Contact = () => (
//   <div>
//     <h1>Contact Us</h1>
//     <p>Email: gic.gahaninfraconsultant@gmail.com</p>
//     <p>Phone: +91-9414457407 / +91-9509571315</p>
//     <p>Address: D211 Malviya Nagar, Jaipur</p>
//   </div>
// );

// export default Contact;


// src/pages/Contact.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Contact = () => (
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 10, mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        Email: gic.gahaninfraconsultant@gmail.com
      </Typography>
      <Typography variant="body1" paragraph>
        Phone: +91-9414457407 / +91-9509571315
      </Typography>
      <Typography variant="body1" paragraph>
        Address: D211 Malviya Nagar, Jaipur
      </Typography>
    </Container>
  );

export default Contact;
