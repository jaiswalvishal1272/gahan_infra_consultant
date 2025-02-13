import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, Divider } from '@mui/material'; // Corrected import
import { Menu, X } from 'lucide-react';
import logo from '../assets/logoInfra1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'grey.900', zIndex: 1300 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 1rem' }}>
      <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}> {/* Use Box for logo */}
          <img src={logo} alt="Gahan Infra Logo" style={{ height: '3rem' }} /> {/* Adjust height as needed */}
        </Box>

        <IconButton  // Make sure IconButton is imported
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setMenuOpen(true)}
          sx={{ display: { md: 'none' } }}
        >
          <Menu size={24} />
        </IconButton>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          <Typography component={Link} to="/" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'yellow' } }}>Home</Typography>
          <Typography component={Link} to="/services" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'yellow' } }}>Our Services</Typography>
          <Typography component={Link} to="/projects" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'yellow' } }}>Our Projects</Typography>
          <Typography component={Link} to="/clients" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'yellow' } }}>Our Clients</Typography>
          {/* <Typography component={Link} to="/contact" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'yellow' } }}>Contact Us</Typography> */}
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <IconButton onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </IconButton>
          </Box>

          <Divider />

          <List sx={{ flexGrow: 1 }}>
            {[
              { to: "/", text: "Home" },
              { to: "/services", text: "Our Services" },
              { to: "/projects", text: "Our Projects" },
              { to: "/clients", text: "Our Clients" },
              // { to: "/contact", text: "Contact Us" },
            ].map((link, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={link.to} onClick={() => setMenuOpen(false)}>
                  <ListItemText primary={link.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <Box sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="body2">© 2025 Gahan Infra Consultant. All rights reserved.</Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
