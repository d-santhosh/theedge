import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Showroom from './Showroom';
import Header from './components/Header';
import Footer from './components/Footer';
import FormalShirts from './components/pages/shirts/formal/FormalShirts';
import StripesShirts from './components/pages/shirts/stripes/StripesShirts';
import ChecksShirts from './components/pages/shirts/checks/ChecksShirts';
import CasualsShirts from './components/pages/shirts/casuals/CasualsShirts';
import BeachShirts from './components/pages/shirts/beach/BeachShirts';
import JeansShirts from './components/pages/shirts/jeans/JeansShirts';
import CasualPants from './components/pages/pants/casual/CasualPants';
import FormalPants from './components/pages/pants/formal/FormalPants';
import JeansPants from './components/pages/pants/jeans/JeansPants';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import ScrollToTop from './components/ScrollToTop';
import '../css/showroom.css';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '80px' }}>
                <Header />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Showroom />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/mens/shirts/formal" element={<FormalShirts />} />
                        <Route path="/mens/shirts/stripes" element={<StripesShirts />} />
                        <Route path="/mens/shirts/checks" element={<ChecksShirts />} />
                        <Route path="/mens/shirts/casuals" element={<CasualsShirts />} />
                        <Route path="/mens/shirts/beach" element={<BeachShirts />} />
                        <Route path="/mens/shirts/jeans" element={<JeansShirts />} />
                        <Route path="/mens/pants/casual" element={<CasualPants />} />
                        <Route path="/mens/pants/formal" element={<FormalPants />} />
                        <Route path="/mens/pants/jeans" element={<JeansPants />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);