import React, { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [focusedInput, setFocusedInput] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Thank you! We will get back to you shortly. The Edge team will contact you soon.');
        e.target.reset(); // clear form fields
    };

    const inputStyle = (id) => ({
        padding: '16px 20px',
        borderRadius: '12px',
        border: focusedInput === id ? '2px solid var(--primary-color)' : '2px solid transparent',
        background: focusedInput === id ? '#fff' : '#f5f7fa',
        fontSize: '15px',
        outline: 'none',
        transition: 'all 0.3s ease',
        color: '#333',
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: focusedInput === id ? '0 8px 20px rgba(252, 133, 29, 0.08)' : 'none'
    });

    return (
        <div className="contact-page-container" style={{ padding: '80px 5%', background: '#f8f9fa', color: '#333', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "'Inter', sans-serif" }}>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative' }}>
                <h2 style={{ fontSize: '3.5rem', color: '#111', fontWeight: '900', marginBottom: '15px', letterSpacing: '-1px' }}>
                    Let's <span style={{ color: 'var(--primary-color)' }}>Talk.</span>
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                    Have a question or want to work together? Leave us a message below or reach out through our support channels.
                </p>
                <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '25px auto 0', borderRadius: '2px' }}></div>
            </div>

            {/* Content Container (Side by Side) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', gap: '40px', width: '100%', maxWidth: '1200px' }}>

                {/* Left Side: Contact Information */}
                <div style={{ flex: '1 1 400px', background: '#fff', borderRadius: '24px', padding: '50px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative', overflow: 'hidden' }}>
                    {/* Decorative Background Element */}
                    <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'rgba(252, 133, 29, 0.05)', borderRadius: '50%' }}></div>

                    {/* Customer Support */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', zIndex: 1 }}>
                        <div style={{ flexShrink: 0, width: '60px', height: '60px', borderRadius: '16px', background: '#fff0e6', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary-color)' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2b4c', marginBottom: '10px' }}>Customer Support</h4>
                            <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px', lineHeight: '1.6' }}>For Corporate Enquiries Reach out to us at:</p>
                            <p style={{ fontSize: '16px', fontWeight: '700', color: '#222', marginBottom: '4px' }}>+91 8667614828</p>
                            <p style={{ fontSize: '16px', fontWeight: '700', color: 'var(--primary-color)' }}>theedgetirupur@gmail.com</p>
                        </div>
                    </div>

                    <div style={{ height: '1px', background: '#eee', width: '100%' }}></div>

                    {/* Office Branches */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', zIndex: 1 }}>
                        <div style={{ flexShrink: 0, width: '60px', height: '60px', borderRadius: '16px', background: '#fff0e6', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary-color)' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2b4c', marginBottom: '10px' }}>Our Office Branches</h4>
                            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7', marginBottom: '12px' }}>
                                Bungalow stop, 6, Ganga Nagar 1st St, Ram Nagar, Ganga Nagar, Ramaiya Colony,<br />
                                Tiruppur, Tamil Nadu 641602, India
                            </p>
                            <p style={{ fontSize: '14px', color: '#222', fontWeight: '600' }}>Mon - Sat: <span style={{ color: 'var(--primary-color)' }}>10:00am - 09:00pm</span></p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div style={{ flex: '1 1 450px', background: '#fff', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', position: 'relative' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '30px', color: '#111', fontWeight: '800', letterSpacing: '-0.5px' }}>Send a Message</h3>

                    {status && (
                        <div style={{ padding: '16px', marginBottom: '25px', background: '#d4edda', color: '#155724', borderRadius: '12px', fontWeight: '600', fontSize: '14px', borderLeft: '4px solid #28a745' }}>
                            {status}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ flex: '1 1 200px' }}>
                                <label htmlFor="name" style={{ display: 'block', fontWeight: '700', fontSize: '12px', color: '#777', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Name</label>
                                <input type="text" id="name" required style={inputStyle('name')} placeholder="John Doe" onFocus={() => setFocusedInput('name')} onBlur={() => setFocusedInput(null)} />
                            </div>
                            <div style={{ flex: '1 1 200px' }}>
                                <label htmlFor="number" style={{ display: 'block', fontWeight: '700', fontSize: '12px', color: '#777', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Phone</label>
                                <input type="tel" id="number" required style={inputStyle('number')} placeholder="+91 1234567890" onFocus={() => setFocusedInput('number')} onBlur={() => setFocusedInput(null)} />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" style={{ display: 'block', fontWeight: '700', fontSize: '12px', color: '#777', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Email</label>
                            <input type="email" id="email" required style={inputStyle('email')} placeholder="john@example.com" onFocus={() => setFocusedInput('email')} onBlur={() => setFocusedInput(null)} />
                        </div>

                        <div>
                            <label htmlFor="message" style={{ display: 'block', fontWeight: '700', fontSize: '12px', color: '#777', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Message</label>
                            <textarea id="message" required rows="4" style={{ ...inputStyle('message'), resize: 'vertical' }} placeholder="How can we help you?" onFocus={() => setFocusedInput('message')} onBlur={() => setFocusedInput(null)}></textarea>
                        </div>

                        <button type="submit" style={{
                            padding: '18px',
                            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            marginTop: '10px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 10px 25px rgba(252, 133, 29, 0.35)'
                        }}
                            onMouseOver={(e) => { e.target.style.transform = 'translateY(-4px)'; e.target.style.boxShadow = '0 15px 30px rgba(252, 133, 29, 0.45)'; }}
                            onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 10px 25px rgba(252, 133, 29, 0.35)'; }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
