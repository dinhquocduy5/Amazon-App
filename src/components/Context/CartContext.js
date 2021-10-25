
import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

function CartProvider(props) {
    const [cartItem, setCartItem] = useState([]);

    function onMinusClick(data) {
        const findProduct = cartItem.findIndex(dt => dt === data);
        console.log("trừ nè")
        cartItem[findProduct].quantity-=1;
        if(cartItem[findProduct].quantity===0){
            cartItem.splice(findProduct, 1)
            setCartItem(cartItem.map(obj => obj === cartItem[findProduct] || obj));
        } else {
            cartItem[findProduct].price = cartItem[findProduct].quantity * cartItem[findProduct].price;
            setCartItem(cartItem.map(obj => obj === cartItem[findProduct] || obj));
        } 
    }

    function onAddClick(data) {
        const findProduct = cartItem.findIndex(dt => dt === data);
        cartItem[findProduct].quantity++;
        console.log("cộng nè")
        // if(cartItem[findProduct].quantity!==0) {
        //     cartItem[findProduct].price = cartItem[findProduct].quantity * cartItem[findProduct].price;
        //     setCartItem(cartItem.map(obj => obj === cartItem[findProduct] || obj));
        // }
    }

    return (
        <CartContext.Provider value={[cartItem,setCartItem, onMinusClick, onAddClick]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
