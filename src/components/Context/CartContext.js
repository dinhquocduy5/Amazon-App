
import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

function CartProvider(props) {
    const [cartItem, setCartItem] = useState([]);

    // const onItemClick= (data)=> {
    //     const index = cartItem.indexOf(data)
    //     if(index<0) return 0;

    //     const newCartItem = [...cartItem];
    //     newCartItem.splice(index, 1);
    //     setCartItem(newCartItem);
    // }
    

    const onMinusClick = (data) => {
        const findProduct = cartItem.find(dt => dt===data);
        findProduct.quantity-=1;
        const newCartItem = [...cartItem];
        if(findProduct.quantity===0) {
            const index = cartItem.indexOf(data)
            newCartItem.splice(index, 1);
            setCartItem(newCartItem);
        } else {
            setCartItem(cartItem.map(obj => newCartItem.find(o => o === obj) || obj))
        }
    }

    const onAddClick = (data) => {
        const findProduct = cartItem.find(dt => dt===data);
        findProduct.quantity+=1;
        const newCartItem = [...cartItem];
        if(findProduct.quantity!==0) {
            setCartItem(cartItem.map(obj => newCartItem.find(o => o === obj) || obj))
        }
    }

    return (
        <CartContext.Provider value={[cartItem,setCartItem, onMinusClick, onAddClick]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
