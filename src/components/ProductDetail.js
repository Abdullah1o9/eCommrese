import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="productDetail">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="price">${product.price}</div>
            <div className="rating">{product.rating} stars</div>
        </div>
    );
}

export default ProductDetail;
