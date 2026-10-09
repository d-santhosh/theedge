import React from 'react';

const About = () => {
    return (
        <div style={{ fontFamily: "'Inter', sans-serif", overflowX: 'hidden', background: '#0a0a0a' }}>
            
            {/* Massive Full Screen Hero Section */}
            <div style={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                background: `linear-gradient(to right, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.4) 100%), url('/images/about/about_hero_bg_1791439058151.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                display: 'flex',
                alignItems: 'center',
                padding: '120px 5% 80px',
                color: '#fff',
                boxSizing: 'border-box'
            }}>
                <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
                    
                    {/* Left Side: About Content */}
                    <div style={{ flex: '1 1 500px', zIndex: 10 }}>
                        <div style={{ display: 'inline-block', padding: '10px 25px', background: 'var(--primary-color)', color: '#fff', borderRadius: '30px', fontWeight: '800', fontSize: '15px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '30px', boxShadow: '0 10px 20px rgba(252, 133, 29, 0.4)' }}>
                            Since 2010
                        </div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: '900', marginBottom: '30px', lineHeight: '1.1', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                            Welcome to <br/><span style={{ color: 'var(--primary-color)' }}>The Edge.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', lineHeight: '1.9', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>
                            Our showroom started its journey in <strong>2010</strong> and has been running successfully ever since. We pride ourselves on offering the finest quality menswear, delivering unmatched style, comfort, and premium aesthetics. From trendy casuals to sharp formals, our curated collections are designed to give you that perfect edge.
                        </p>
                    </div>

                    {/* Right Side: Showcase Images (Toy, Shirt, Pant) */}
                    <div style={{ flex: '1.5 1 600px', position: 'relative', height: '650px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2, minWidth: '320px' }}>
                        
                        {/* Trending Jeans (Left overlapping) */}
                        <div style={{ 
                            position: 'absolute', 
                            top: '5%', 
                            left: '5%', 
                            width: '320px', 
                            height: '420px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                            transform: 'rotate(-6deg)',
                            border: '6px solid rgba(255,255,255,0.05)',
                            zIndex: 3,
                            transition: 'transform 0.4s ease'
                        }} className="showcase-card">
                            <img src="/images/about/trending_jeans.png" alt="Trending Jeans" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(10,10,10,0.7)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '15px', fontWeight: '700', fontSize: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>Trending Jeans</div>
                        </div>

                        {/* Pant Image (Background Top Right) */}
                        <div style={{ 
                            position: 'absolute', 
                            top: '15%', 
                            right: '25%', 
                            width: '280px', 
                            height: '380px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                            transform: 'rotate(3deg)',
                            border: '4px solid rgba(255,255,255,0.05)',
                            zIndex: 2,
                            transition: 'transform 0.4s ease'
                        }} className="showcase-card">
                            <img src="/images/about/stylish_pant_1791439084623.png" alt="Premium Pants" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        {/* Formal Pant Image (Bottom Right overlapping) */}
                        <div style={{ 
                            position: 'absolute', 
                            bottom: '5%', 
                            right: '5%', 
                            width: '360px', 
                            height: '460px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 40px 80px rgba(0,0,0,0.7)',
                            transform: 'rotate(5deg)',
                            border: '8px solid rgba(252, 133, 29, 0.4)',
                            zIndex: 4,
                            transition: 'transform 0.4s ease'
                        }} className="showcase-card">
                            <img src="/images/about/new_formal_pant.png" alt="New Formal Pant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'var(--primary-color)', color: '#fff', padding: '12px 24px', borderRadius: '15px', fontWeight: '800', fontSize: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>New Formal Pant</div>
                        </div>

                        {/* Stylish Mens Shirt (Top Center-Left) */}
                        <div style={{ 
                            position: 'absolute', 
                            top: '-5%', 
                            left: '30%', 
                            width: '250px', 
                            height: '350px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
                            transform: 'rotate(-3deg)',
                            border: '4px solid rgba(255,255,255,0.05)',
                            zIndex: 1,
                            transition: 'transform 0.4s ease'
                        }} className="showcase-card">
                            <img src="/images/about/stylish_mens_shirt.png" alt="Stylish Mens Shirt" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(10,10,10,0.7)', backdropFilter: 'blur(5px)', padding: '8px 16px', borderRadius: '10px', fontWeight: '700', fontSize: '13px', border: '1px solid rgba(255,255,255,0.1)' }}>Shirts</div>
                        </div>

                        {/* Premium Chinos (Bottom Center-Left) */}
                        <div style={{ 
                            position: 'absolute', 
                            bottom: '10%', 
                            left: '20%', 
                            width: '280px', 
                            height: '280px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.7)',
                            transform: 'rotate(8deg)',
                            border: '5px solid rgba(252, 133, 29, 0.3)',
                            zIndex: 5,
                            transition: 'transform 0.4s ease'
                        }} className="showcase-card">
                            <img src="/images/about/premium_chinos.png" alt="Premium Chinos" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '15px', left: '15px', background: 'var(--primary-color)', color: '#fff', padding: '8px 16px', borderRadius: '10px', fontWeight: '800', fontSize: '13px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>Premium Pants</div>
                        </div>

                    </div>
                </div>
                
                {/* Embedded CSS for Hover Effects */}
                <style>
                    {`
                    .showcase-card:hover {
                        transform: translateY(-15px) scale(1.05) !important;
                        z-index: 10 !important;
                    }
                    `}
                </style>
            </div>
            
        </div>
    );
};

export default About;
