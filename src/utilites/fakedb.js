const addToDB = id =>{
    let matchCart = {};
    const storedCart = localStorage.getItem('match-cart');
    if (storedCart){
        matchCart = JSON.parse(storedCart);
    }

    const quantity = matchCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        matchCart[id] = newQuantity;
    }
    else{
        matchCart[id] = 1;
    }
    localStorage.setItem('match-cart', JSON.stringify(matchCart));
}

const getStoredCart = () => {
    let matchCart = {};
    const storedCart = localStorage.getItem('match-cart');
    if (storedCart){
        matchCart = JSON.parse(storedCart);
    }
    return matchCart;
}

export {
    addToDB,
    getStoredCart
}