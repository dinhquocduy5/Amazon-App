
import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

function CartProvider(props) {
    const [cartItem, setCartItem] = useState([]);

    function onItemClick(data){
        console.log(data.id)
        const index = cartItem.findIndex(x => x.id === data.id)
        if(index<0) return 0;

        const newCartItem = [...cartItem];
        newCartItem.splice(index, 1);
        setCartItem(newCartItem);
    }

    return (
        <CartContext.Provider value={[cartItem,setCartItem, onItemClick]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
