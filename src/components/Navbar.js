// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <nav className="bg-gray-800 text-white p-4">
//     <ul className="flex justify-around">
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/projects">Our Projects</Link></li>
//       <li><Link to="/clients">Our Clients</Link></li>
//       <li><Link to="/contact">Contact Us</Link></li>
//     </ul>
//   </nav>
// );

// export default Navbar;


// src/components/Navbar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-blue-800 text-white">
//       <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
//         <h1 className="text-xl font-bold">Gahan Infra</h1>
//         <button
//           className="md:hidden"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//         <ul
//           className={`md:flex space-x-4 ${
//             menuOpen ? 'block' : 'hidden'
//           } md:space-x-6 md:block absolute md:static bg-blue-800 w-full md:w-auto`}
//         >
//           <li className="p-2 md:p-0"><Link to="/">Home</Link></li>
//           <li className="p-2 md:p-0"><Link to="/projects">Our Projects</Link></li>
//           <li className="p-2 md:p-0"><Link to="/clients">Our Clients</Link></li>
//           <li className="p-2 md:p-0"><Link to="/contact">Contact Us</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'primary.main', zIndex: 1300 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Gahan Infra
        </Typography>

        {/* Mobile Menu Toggle */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setMenuOpen(true)}
          sx={{ display: { md: 'none' } }}
        >
          <Menu size={24} />
        </IconButton>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          <Typography component={Link} to="/" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'yellow' } }}>Home</Typography>
          <Typography component={Link} to="/services" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'yellow' } }}>Our Services</Typography>
          <Typography component={Link} to="/projects" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'yellow' } }}>Our Projects</Typography>
          <Typography component={Link} to="/clients" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'yellow' } }}>Our Clients</Typography>
          {/* <Typography component={Link} to="/contact" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'yellow' } }}>Contact Us</Typography> */}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem button onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </ListItem>
            <ListItem button component={Link} to="/" onClick={() => setMenuOpen(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/services" onClick={() => setMenuOpen(false)}>
              <ListItemText primary="Our Services" />
            </ListItem>
            <ListItem button component={Link} to="/projects" onClick={() => setMenuOpen(false)}>
              <ListItemText primary="Our Projects" />
            </ListItem>
            <ListItem button component={Link} to="/clients" onClick={() => setMenuOpen(false)}>
              <ListItemText primary="Our Clients" />
            </ListItem>
            {/* <ListItem button component={Link} to="/contact" onClick={() => setMenuOpen(false)}>
              <ListItemText primary="Contact Us" />
            </ListItem> */}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

