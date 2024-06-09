import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products));
    }, []);

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.title} has been added to the cart!`);
    };

    return (
        <div className="container">
            <div className="listProduct">
                {products.map(product => (
                    <div className="item" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <h2>{product.title}</h2>
                        <div className="price">${product.price}</div>
                        <div className="rating">{product.rating} stars</div>
                        <button onClick={() => addToCart(product)}>Add To Cart</button>
                        <button>
                            <Link to={`/product/${product.id}`}>View Details</Link>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
