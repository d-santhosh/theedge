import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                
                {/* Left Column: Contact & Social */}
                <div className="footer-section" id="location" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ marginBottom: '35px', textAlign: 'left' }}>
                        <h3 style={{ margin: '0', display: 'inline-block' }}>Contact & Location</h3>
                    </div>
                    
                    <ul className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '25px', padding: 0, margin: '0 0 45px 0' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                            <span style={{ marginTop: '2px', fontSize: '1.4rem' }}>📍</span>
                            <span style={{ color: '#ccc', lineHeight: '1.8', textAlign: 'left', fontSize: '1.05rem' }}>
                                Bungalow stop, 6, Ganga Nagar 1st St, Ram Nagar,<br/>Ganga Nagar, Ramaiya Colony,<br/>Tiruppur, Tamil Nadu 641602, India
                            </span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '1.4rem' }}>📞</span> 
                            <span style={{ color: '#ccc', letterSpacing: '1px', fontSize: '1.05rem' }}>+91 8667614828</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '1.4rem' }}>✉️</span> 
                            <span style={{ color: '#ccc', letterSpacing: '0.5px', fontSize: '1.05rem' }}>theedgetirupur@gmail.com</span>
                        </li>
                    </ul>

                    {/* Social Links placed elegantly below contact info */}
                    <div className="social-links" style={{ display: 'flex', gap: '20px', justifyContent: 'flex-start' }}>
                        <a href="https://www.facebook.com/share/1EW9nfEbFK/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/theedgefashion_" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://whatsapp.com/channel/0029Vb7ZJOp47Xe5pWVZ8G0E" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.898-4.45 9.898-9.896 0-5.446-4.45-9.896-9.898-9.896-5.448 0-9.898 4.45-9.898 9.896 0 1.968.614 3.882 1.776 5.539l-1.06 3.873 3.992-1.11zm11.36-6.302c-.531-.266-3.147-1.551-3.633-1.728-.485-.177-.84-.266-1.194.266-.353.532-1.372 1.728-1.681 2.083-.309.354-.618.398-1.15.133-3.13-1.569-4.32-3.13-5.748-5.549-.133-.223.111-.318.373-.842.133-.266.266-.532.488-.798.133-.177.177-.309.266-.532.089-.222.044-.443-.022-.576-.067-.133-.532-1.284-.731-1.758-.198-.466-.399-.402-.544-.41-.133-.008-.285-.008-.439-.008-.155 0-.407.058-.619.293-.213.235-.814.798-.814 1.95s.832 2.26 9.488 1.417c.532.842 1.15 1.417 1.46 1.771.311.354.709.398 1.15.354.442-.044 1.503-.619 1.724-1.218.221-.598.221-1.107.155-1.218-.066-.111-.243-.177-.774-.443z"/></svg>
                        </a>
                    </div>
                </div>

                {/* Right Column: Premium Map */}
                <div className="footer-section">
                    <div style={{ height: '350px', width: '100%', background: '#111', border: '1px solid rgba(255,102,0,0.3)', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 15px 35px rgba(0,0,0,0.6)' }}>
                        <iframe
                            src="https://maps.google.com/maps?q=bungalow+stop,+6,+Ganga+Nagar+1st+St,+Ram+Nagar,+Ganga+Nagar,+Ramaiya+Colony,+Tiruppur,+Tamil+Nadu+641602,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        ></iframe>
                    </div>
                </div>

            </div>

            <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '25px', textAlign: 'center' }}>
                <p style={{ color: '#777', fontSize: '0.9rem', letterSpacing: '1px' }}>&copy; {new Date().getFullYear()} The Edge Showroom. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
