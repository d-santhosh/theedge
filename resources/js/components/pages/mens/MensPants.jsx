import React from 'react';

const MensPants = () => {
    return (
        <div style={{ padding: '40px 10%', color: '#fff', minHeight: '60vh', textAlign: 'center' }}>
            <h1 style={{ color: 'var(--primary-color)', fontSize: '3rem', marginBottom: '20px' }}>Men's Pants</h1>
            <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
                Explore our exclusive range of elegant trousers and casual pants.
            </p>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '40px', 
                marginTop: '50px',
                flexWrap: 'wrap'
            }}>
                {/* Placeholder for products */}
                <div style={{ background: '#111', padding: '30px', borderRadius: '12px', width: '300px', border: '1px solid #333' }}>
                    <h2 style={{ color: '#fff' }}>Formal Trousers</h2>
                    <p style={{ color: '#888' }}>Perfect for office wear.</p>
                </div>
                <div style={{ background: '#111', padding: '30px', borderRadius: '12px', width: '300px', border: '1px solid #333' }}>
                    <h2 style={{ color: '#fff' }}>Chinos</h2>
                    <p style={{ color: '#888' }}>Comfortable and stylish.</p>
                </div>
            </div>
        </div>
    );
};

export default MensPants;
