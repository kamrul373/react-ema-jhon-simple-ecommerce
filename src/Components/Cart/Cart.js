import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Number of Products added : {cart.length} </p>
        </div>
    );
};

export default Cart;