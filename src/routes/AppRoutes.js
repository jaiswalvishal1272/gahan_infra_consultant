import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Projects from '../pages/Project';
import Clients from '../pages/Clients';
import Services from '../pages/Services';
import Contact from '../pages/Contact'; // Import Contact page

const AppRoutes = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 px-2 md:px-4"> {/* Added horizontal padding */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} /> {/* Added Contact route */}
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default AppRoutes;