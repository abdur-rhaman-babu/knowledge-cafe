const getCartFromLS = () =>{
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        return JSON.parse(storedCart)
    }
    return []
}

const setCartToLS = (cart) =>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const addToLS = (id) =>{
    const cart = getCartFromLS()
    console.log(cart)
    cart.push(id)
    setCartToLS(cart)
}

const removeCartFormLS = (id) =>{
    const carts = getCartFromLS()
    const remaining = carts.filter((cart)=> cart !== id)
    setCartToLS(remaining)
}

export {addToLS, getCartFromLS, removeCartFormLS}