
import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

function CartProvider(props) {
    const [cartItem, setCartItem] = useState([]);

    function onItemClick(data){
        const findProduct = cartItem.findIndex(dt => dt === data);
        const quantity = cartItem[findProduct].quantity -= 1;
        const price = cartItem[findProduct].price*quantity;
        if(quantity===0){
            const newProduct = cartItem.splice(cartItem[findProduct],1)
            const newCartItem = cartItem.map(obj => newProduct.find(o=>o.name===obj.name) || obj);
            setCartItem(newCartItem);
        }
    }

    return (
        <CartContext.Provider value={[cartItem,setCartItem, onItemClick]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
