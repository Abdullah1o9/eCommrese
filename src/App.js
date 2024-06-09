import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AddProduct from './components/AddProduct';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/add-product" element={<AddProduct />} />
            </Routes>
        </div>
    );
}

export default App;
