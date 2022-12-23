import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext({
    cart: [],
    totalInCart: 0,
    addCart: (newCartMeetup) => {},
    removeCart: (meetupId) => {},
    itemInCart: (meetupId) => {},
});

const URL_CART = 'http://localhost:3002/cart'

export const CartContextProvider = (props) => {
    const [userCart, setUserCart] = useState([]);

    const addCartHandler = (newCartMeetup) => {
        setUserCart([
            ...userCart, newCartMeetup
        ])
    }

    const removeCartHandler = (meetupId) => {
        setUserCart((prevUserFavourites) => {
            return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
        })
    }

    const itemInCartHandler = (meetupId) => {
        return userCart.some((meetup) => meetup.id === meetupId)
    }

    const context = {
        cart: userCart,
        total: userCart.length,
        addCart: addCartHandler,
        removeCart: removeCartHandler,
        itemInCart: itemInCartHandler,
    }

    useEffect(() => {
        fetch(URL_CART)
        .then(response => response.json())
        .then(data => {
            setUserCart(data)
        })
    }, []);

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;