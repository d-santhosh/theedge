import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 301, name: "Premium Formal Trousers", price: "Rs. 1,899.00", sizes: [30, 32, 34, 36, 38], badge: "NEW", images: ["/pants/formal/img1.jpg", "/pants/formal/img2.jpg", "/pants/formal/img3.jpg"] },
    { id: 302, name: "Slim Fit Executive Pants", price: "Rs. 1,999.00", sizes: [32, 34, 36, 38], badge: "Trending", images: ["/pants/formal/img2.jpg", "/pants/formal/img3.jpg", "/pants/formal/img4.jpg"] },
    { id: 303, name: "Classic Black Formals", price: "Rs. 1,699.00", sizes: [30, 32, 34, 36], badge: "", images: ["/pants/formal/img3.jpg", "/pants/formal/img4.jpg", "/pants/formal/img1.jpg"] },
    { id: 304, name: "Textured Grey Trousers", price: "Rs. 1,799.00", sizes: [32, 34, 36], badge: "NEW", images: ["/pants/formal/img4.jpg", "/pants/formal/img1.jpg", "/pants/formal/img2.jpg"] }
];

const ProductCardItem = ({ product }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const nextImage = (e) => {
        e.preventDefault(); e.stopPropagation();
        setCurrentImgIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = (e) => {
        e.preventDefault(); e.stopPropagation();
        setCurrentImgIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <div className="product-card-item">
            <div className="product-img-wrapper">
                {product.badge && <span className="product-badge">{product.badge}</span>}
                <img src={product.images[currentImgIndex]} alt={product.name} />
                {product.images.length > 1 && (
                    <div className="img-nav-buttons">
                        <button className="img-nav-btn left" onClick={prevImage}>&lt;</button>
                        <button className="img-nav-btn right" onClick={nextImage}>&gt;</button>
                    </div>
                )}
            </div>
            <div className="product-card-info">
                <h4 className="product-title">{product.name}</h4>
                <p className="product-price">{product.price}</p>
                <div className="product-sizes">{product.sizes.map(size => <span key={size}>{size}</span>)}</div>
            </div>
        </div>
    );
};

const FormalPants = () => {
    return (
        <div className="category-page-container">
            <div className="category-page-header">
                <h2>Formal Pants <span className="product-count">({products.length} products)</span></h2>
            </div>
            <div className="product-grid">
                {products.map(product => <ProductCardItem key={product.id} product={product} />)}
            </div>
        </div>
    );
};
export default FormalPants;
