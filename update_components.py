import os
import re

directories = ['stripes', 'printed', 'checks', 'casuals', 'jeans']
base_path = '/var/www/html/The Edge/TheEdge/resources/js/components/pages/shirts/'

product_card_template = """
const ProductCardItem = ({ product }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const nextImage = (e) => {
        e.preventDefault();
        setCurrentImgIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        setCurrentImgIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <Link to={`/product/${product.id}`} className="product-card-item">
            <div className="product-img-wrapper">
                {product.badge && <span className="product-badge">{product.badge}</span>}
                <img src={product.images[currentImgIndex]} alt={product.name} />
                
                {product.images.length > 1 && (
                    <div className="img-nav-buttons">
                        <button className="img-nav-btn left" onClick={prevImage}>&lt;</button>
                        <button className="img-nav-btn right" onClick={nextImage}>&gt;</button>
                    </div>
                )}
                
                <div className="product-actions">
                    <button className="icon-btn" onClick={(e) => { e.preventDefault(); }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    <button className="icon-btn" onClick={(e) => { e.preventDefault(); }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    </button>
                </div>
            </div>
            <div className="product-card-info">
                <h4 className="product-title">{product.name}</h4>
                <p className="product-price">{product.price}</p>
                <div className="product-sizes">
                    {product.sizes.map(size => <span key={size}>{size}</span>)}
                </div>
            </div>
        </Link>
    );
};
"""

for d in directories:
    file_name = d.capitalize() + 'Shirts.jsx'
    file_path = os.path.join(base_path, d, file_name)
    
    with open(file_path, 'r') as f:
        content = f.read()

    # Change React import
    if "import React, { useState } from 'react';" not in content:
        content = content.replace("import React from 'react';", "import React, { useState } from 'react';")
    
    # Replace img: ".../img1.jpg" with images: [".../img1.jpg", ".../img2.jpg", ".../img3.jpg"]
    def replacer(match):
        img_str = match.group(1)
        base = img_str[:-5] # remove 1.jpg
        num = int(img_str[-5])
        next_num1 = num + 1 if num + 1 <= 7 else (num + 1) % 7
        if next_num1 == 0: next_num1 = 7
        next_num2 = num + 2 if num + 2 <= 7 else (num + 2) % 7
        if next_num2 == 0: next_num2 = 7
        
        img2 = base + str(next_num1) + '.jpg'
        img3 = base + str(next_num2) + '.jpg'
        return f'images: ["{img_str}", "{img2}", "{img3}"]'

    content = re.sub(r'img:\s*"(.*?)"', replacer, content)
    
    # Replace the map block
    map_regex = re.compile(r'\{products\.map\(product => \((.*?)\)\)\}', re.DOTALL)
    content = map_regex.sub('{products.map(product => (\n                    <ProductCardItem key={product.id} product={product} />\n                ))}', content)

    # Insert ProductCardItem before the main component
    component_name = file_name.split('.')[0]
    if "const ProductCardItem = ({ product }) => {" not in content:
        content = content.replace(f'const {component_name} = () => {{', product_card_template + f'\nconst {component_name} = () => {{')
    
    with open(file_path, 'w') as f:
        f.write(content)
        print(f'Updated {file_name}')
