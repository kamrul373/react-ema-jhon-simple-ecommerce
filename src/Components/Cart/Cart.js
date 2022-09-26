import React from 'react';
import "./Cart.css";
const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = (total * 0.1).toFixed(2);
    let grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <div className="cart-details">
                <p>Selected Items : {cart.length} </p>
                <p>Total Price: ${total} </p>
                <p>Total Shipping Charge: ${shipping} </p>
                <p>Tax: ${tax} </p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart;