import React, { useRef } from 'react';

const products = [
    { id: 1, name: "Midnight Elegance", price: "₹2,499", image: "/home_page/new_collection/img1.jpg" },
    { id: 2, name: "Ruby Flare Gown", price: "₹3,299", image: "/home_page/new_collection/img2.jpg" },
    { id: 3, name: "Ocean Breeze Dress", price: "₹1,899", image: "/home_page/new_collection/img3.jpg" },
    { id: 4, name: "Golden Aura Silhouette", price: "₹4,199", image: "/home_page/new_collection/img4.jpg" },
    { id: 5, name: "Velvet Night Suit", price: "₹2,999", image: "/home_page/new_collection/img5.jpg" },
    { id: 6, name: "Pearl White Harmony", price: "₹3,599", image: "/home_page/new_collection/img6.jpg" },
    { id: 7, name: "Emerald Charm", price: "₹2,799", image: "/home_page/new_collection/img7.jpg" }
];

const ProductCarousel = () => {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const { current } = carouselRef;
            // Scroll by the full visible width of the container
            const scrollAmount = direction === 'left' ? -current.clientWidth : current.clientWidth;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="product-carousel-section">
            <div className="carousel-header">
                <h2>New <span>Collections</span></h2>
                <div className="carousel-controls">
                    <button onClick={() => scroll('left')}>&#8592;</button>
                    <button onClick={() => scroll('right')}>&#8594;</button>
                </div>
            </div>
            
            <div className="product-carousel-container" ref={carouselRef}>
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image-wrapper">
                            <img src={product.image} alt={product.name} loading="lazy" />
                            <div className="product-overlay">
                                <button className="add-to-cart-btn">View Details</button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="product-price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductCarousel;
