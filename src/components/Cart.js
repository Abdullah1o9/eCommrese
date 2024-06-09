import React, { useState, useEffect } from 'react';

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartData);
    }, []);

    const updateQuantity = (id, delta) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + delta };
            }
            return item;
        }).filter(item => item.quantity > 0);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.thumbnail} alt={item.title} />
                    <div>
                        <h3>{item.title}</h3>
                        <p>${item.price} x {item.quantity}</p>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <h3>Total: ${getTotal()}</h3>
        </div>
    );
}

export default Cart;
