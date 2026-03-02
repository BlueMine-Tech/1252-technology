import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // 1. Import it
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 2. Place it here */}
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;