import {React, useContext} from 'react'
import './Product.css'

import { CartContext } from '../Context/CartContext';


function Product(props) {
    const [cartItem, setCartItem] = useContext(CartContext);

    const { title, image, price, rating} = props;

    function onSetCartItem(){
        setCartItem((prevItem)=>[...prevItem,{image, name : title, price, quantity : 1}]);
        
    }

    return ( 
        <div className="product">
            <img className="product__image" src={image} alt="" />
            <p className="product__title">{title}</p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=>
                        (<p>⭐</p>)
                    )
                }    
            </div>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__addCart">
                <button className="product__btnAdd" onClick={onSetCartItem}>
                    Add to Cart
                </button>
            </div>
            
        </div>
    )
}

export default Product
