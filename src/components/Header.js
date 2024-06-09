import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>products</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/add-product">Add Product</Link>
            </nav>
        </header>
    );
}

export default Header;
