import React, { useState } from 'react';

function Checkout() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        localStorage.removeItem('cart');
        setCart([]);
        setOrderConfirmed(true);
    };

    return (
        <div className="checkout-form">
            <h2>Checkout</h2>
            {orderConfirmed ? (
                <h3>Thank you for your purchase!</h3>
            ) : (
                <>
                    <div>
                        <h3>Order Summary</h3>
                        {cart.map(item => (
                            <div key={item.id} className="checkout-item">
                                <img src={item.thumbnail} alt={item.title} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>${item.price} x {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                        <h3>Total: ${getTotal()}</h3>
                    </div>
                    <button onClick={handleCheckout}>Place Order</button>
                </>
            )}
        </div>
    );
}

export default Checkout;
