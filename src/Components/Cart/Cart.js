import React from 'react';
import "./Cart.css";
const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    let productsName = [];
    for (const product of cart) {
        productsName.push(product.name);


        total = total + (product.price * product.quantity);
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    let tax = (total * 0.1).toFixed(2);
    let grandTotal = total + shipping + parseFloat(tax);
    console.log(productsName);
    let i = 0
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <div className="cart-details">
                <p>Selected Items : {quantity}
                </p>
                {
                    productsName.map(name => {
                        i++;
                        return <p key={name} style={{ fontSize: "14px", fontStyle: "italic" }}> <b>{i}</b> {name} </p>

                    })
                }
                <div className='calculation'>
                    <p>Total Price: ${total} </p>
                    <p>Total Shipping Charge: ${shipping} </p>
                    <p>Tax: ${tax} </p>
                    <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;