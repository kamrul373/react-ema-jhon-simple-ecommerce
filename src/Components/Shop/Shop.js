import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css";
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(response => response.json())
            .then(products => setProducts(products));
    }, []);
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product data={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <div className="cart-details">
                    <h2>Order Summary</h2>
                    <p>Number of Products added : {cart.length} </p>
                </div>
            </div>
        </div>
    );
};

export default Shop;