import React, { useEffect, useState } from 'react';
import { setCartDetailsLocally } from '../../utilities/local';
import Cart from '../Cart/Cart';
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
        setCartDetailsLocally(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product data={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;