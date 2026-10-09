import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: "Tropical Print Beach Shirt", price: "Rs. 1,299.00", sizes: [38, 40, 42, 44, 46], badge: "NEW", images: ["/shirts/beach/img1.jpg"] },
    { id: 2, name: "Breezy White Linen Beach Shirt", price: "Rs. 1,499.00", sizes: [38, 40, 42, 44, 46], badge: "Trending", images: ["/shirts/beach/img2.jpg", "/shirts/beach/img3.jpg", "/shirts/beach/img4.jpg"] },
    { id: 3, name: "Sunset Orange Resort Wear", price: "Rs. 1,399.00", sizes: [36, 38, 40, 42, 44], badge: "", images: ["/shirts/beach/img3.jpg", "/shirts/beach/img4.jpg", "/shirts/beach/img5.jpg"] },
    { id: 4, name: "Blue Wave Print Beach Shirt", price: "Rs. 1,199.00", sizes: [38, 40, 42, 44], badge: "NEW", images: ["/shirts/beach/img4.jpg", "/shirts/beach/img5.jpg", "/shirts/beach/img6.jpg"] },
    { id: 5, name: "Mint Green Beach Shirt", price: "Rs. 1,299.00", sizes: [38, 40, 42, 44], badge: "", images: ["/shirts/beach/img5.jpg", "/shirts/beach/img6.jpg", "/shirts/beach/img7.jpg"] },
    { id: 6, name: "Floral Yellow Beach Shirt", price: "Rs. 1,399.00", sizes: [38, 40, 42, 44], badge: "NEW", images: ["/shirts/beach/img6.jpg", "/shirts/beach/img7.jpg", "/shirts/beach/img1.jpg"] },
    { id: 7, name: "Coral Pink Resort Wear", price: "Rs. 1,499.00", sizes: [38, 40, 42, 44], badge: "", images: ["/shirts/beach/img7.jpg", "/shirts/beach/img1.jpg", "/shirts/beach/img2.jpg"] }
];

const ProductCardItem = ({ product }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImgIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
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
                <div className="product-sizes">
                    {product.sizes.map(size => <span key={size}>{size}</span>)}
                </div>
            </div>
        </div>
    );
};

const BeachShirts = () => {
    return (
        <div className="category-page-container">
            <div className="category-page-header">
                <h2>Beach Shirts <span className="product-count">({products.length} products)</span></h2>
            </div>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCardItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default BeachShirts;
