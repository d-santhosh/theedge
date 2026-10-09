import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: "Light Khaki Twill Satin Solid Casual Shirt", price: "Rs. 1,099.00", sizes: [38, 40, 42, 44, 46], badge: "NEW", images: ["/shirts/casuals/img1.jpg", "/shirts/casuals/img2.jpg", "/shirts/casuals/img3.jpg"] },
    { id: 2, name: "Black Twill Satin Solid Casual Shirt", price: "Rs. 1,099.00", sizes: [38, 40, 42, 44, 46], badge: "NEW", images: ["/shirts/casuals/img2.jpg", "/shirts/casuals/img3.jpg", "/shirts/casuals/img4.jpg"] },
    { id: 3, name: "Mist Blue Linen Blend Solid Casual Shirt", price: "Rs. 1,349.00", sizes: [36, 38, 40, 42, 44, 46, 48], badge: "Trending", images: ["/shirts/casuals/img3.jpg", "/shirts/casuals/img4.jpg", "/shirts/casuals/img5.jpg"] },
    { id: 4, name: "Crystal White Plain Casual Shirt", price: "Rs. 1,599.00", sizes: [38, 40, 42, 44], badge: "", images: ["/shirts/casuals/img4.jpg", "/shirts/casuals/img5.jpg", "/shirts/casuals/img6.jpg"] },
    { id: 5, name: "Olive Green Plain Casual Shirt", price: "Rs. 1,299.00", sizes: [38, 40, 42, 44], badge: "NEW", images: ["/shirts/casuals/img5.jpg", "/shirts/casuals/img6.jpg", "/shirts/casuals/img7.jpg"] },
    { id: 6, name: "Navy Blue Plain Casual Shirt", price: "Rs. 1,399.00", sizes: [38, 40, 42, 44], badge: "", images: ["/shirts/casuals/img6.jpg", "/shirts/casuals/img7.jpg", "/shirts/casuals/img1.jpg"] },
    { id: 7, name: "Maroon Plain Casual Shirt", price: "Rs. 1,499.00", sizes: [38, 40, 42, 44], badge: "NEW", images: ["/shirts/casuals/img7.jpg", "/shirts/casuals/img1.jpg", "/shirts/casuals/img2.jpg"] }
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

const CasualsShirts = () => {
    return (
        <div className="category-page-container">
            <div className="category-page-header">
                <h2>Casuals <span className="product-count">({products.length} products)</span></h2>
                {/* <div className="filter-sort">
                    <select className="sort-dropdown"><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option></select>
                </div> */}
            </div>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCardItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CasualsShirts;
