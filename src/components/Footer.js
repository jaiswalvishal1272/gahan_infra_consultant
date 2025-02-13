import React from 'react';
import { Box, Typography, Grid, Container, Link } from '@mui/material';

const Footer = () => {
  // const dominantColor = getComputedStyle(document.documentElement).getPropertyValue('--dominant-color') || '#004EA2'; // Fallback color

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: '#FFFFFF', // White text for contrast
        py: 6,
        px: 2,
        mt: 'auto',
        textAlign: 'center', // Default center alignment
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start"> {/* Align items to the top */}

          <Grid item xs={12} sm={6} md={4} lg={4} sx={{ textAlign: { xs: 'left', md: 'left' } }}> {/* Contact Us */}
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Typography variant="body2" component="p">
              <Link href="mailto:gic.gahaninfraconsultant@gmail.com" color="inherit">
                gic.gahaninfraconsultant@gmail.com
              </Link>
            </Typography>
            <Typography variant="body2" component="p">+91-9414457407 / +91-9509571315</Typography>
            <Typography variant="body2" component="p">D211 Malviya Nagar, Jaipur</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} sx={{ textAlign: { xs: 'left', md: 'left' } }}> {/* Quick Links */}
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Our Services" },
              { href: "/projects", label: "Our Projects" },
              { href: "/clients", label: "Our Clients" },
              // { href: "/contact", label: "Contact Us" },
            ].map((link, index) => (
              <Typography variant="body2" key={index} component="p">
                <Link href={link.href} color="inherit" underline="hover">
                  {link.label}
                </Link>
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} sx={{ textAlign: { xs: 'right', md: 'right' } }}> {/* Copyright & other links */}
            <Typography variant="body2" component="p">
              © 2025 Gahan Infra Consultant. All rights reserved.
            </Typography>
            <Typography variant="body2" component="p">
              <Link href="/terms" color="inherit" underline="hover">Terms</Link> | <Link href="/privacy" color="inherit" underline="hover">Privacy</Link> | <Link href="/cookies" color="inherit" underline="hover">Cookies</Link>
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;