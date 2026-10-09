import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <ul className="bg-bubbles">
                <li></li><li></li><li></li><li></li><li></li><li></li>
            </ul>
            <div className="hero-content">
                <h1 className="hero-title">
                    Redefine Your <br />
                    <span>Signature Look</span>
                </h1>
                <p className="hero-subtitle">
                    Step into the new season with confidence. Explore our latest collection of trendy, premium menswear designed exclusively for you.
                </p>
                <button className="explore-btn">Explore Collection</button>
            </div>

            <div className="scene">
                <div className="carousel">
                    {["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg","img7.jpg"].map((imageName, index) => {
                        const imageUrl = `/home_page/carousel_image/${imageName}`;
                        const cssClassIndex = index + 1;
                        return (
                            <div
                                key={imageName}
                                className={`carousel-item item-${cssClassIndex}`}
                                style={{ backgroundImage: `url('${imageUrl}')` }}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Hero;
