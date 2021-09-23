
import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

function CartProvider(props) {
    const [cartItem, setCartItem] = useState([]);
    return (
        <CartContext.Provider value={[cartItem,setCartItem]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
