import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 401, name: "Classic Blue Denim Jeans", price: "Rs. 1,799.00", sizes: [30, 32, 34, 36, 38], badge: "NEW", images: ["/pants/jeans/img1.jpg", "/pants/jeans/img2.jpg", "/pants/jeans/img3.jpg"] },
    { id: 402, name: "Slim Fit Black Jeans", price: "Rs. 1,899.00", sizes: [30, 32, 34, 36], badge: "Trending", images: ["/pants/jeans/img2.jpg", "/pants/jeans/img3.jpg", "/pants/jeans/img4.jpg"] },
    { id: 403, name: "Distressed Casual Jeans", price: "Rs. 1,999.00", sizes: [32, 34, 36], badge: "", images: ["/pants/jeans/img3.jpg", "/pants/jeans/img4.jpg", "/pants/jeans/img1.jpg"] },
    { id: 404, name: "Premium Wash Denim", price: "Rs. 2,199.00", sizes: [32, 34, 36, 38], badge: "NEW", images: ["/pants/jeans/img4.jpg", "/pants/jeans/img1.jpg", "/pants/jeans/img2.jpg"] }
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

const JeansPants = () => {
    return (
        <div className="category-page-container">
            <div className="category-page-header">
                <h2>Jeans <span className="product-count">({products.length} products)</span></h2>
            </div>
            <div className="product-grid">
                {products.map(product => <ProductCardItem key={product.id} product={product} />)}
            </div>
        </div>
    );
};
export default JeansPants;
