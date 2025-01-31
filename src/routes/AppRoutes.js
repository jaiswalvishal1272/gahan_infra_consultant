import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Projects from '../pages/Project';
import Clients from '../pages/Clients';
// import Contact from '../pages/Contact';
import Services from '../pages/Services';

const AppRoutes = () => (
  <Router>
    <Navbar />
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />       
        <Route path="/projects" element={<Projects />} />       
        <Route path="/clients" element={<Clients />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default AppRoutes;
