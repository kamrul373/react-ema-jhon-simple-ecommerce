const setCartDetailsLocally = (id) => {
    let shoppingCart = localStorage.getItem("shopping-cart");

    if (shoppingCart) {
        shoppingCart = JSON.parse(shoppingCart);
    } else {
        shoppingCart = {}
    }

    const quantity = shoppingCart[id];

    if (id in shoppingCart) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

}
const getStoreCart = () => {
    let shoppingCart = localStorage.getItem("shopping-cart");

    if (shoppingCart) {
        shoppingCart = JSON.parse(shoppingCart);
    }
    return shoppingCart;
}


export { setCartDetailsLocally, getStoreCart };