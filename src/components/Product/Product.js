import {React, useContext} from 'react'
import './Product.css'

import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';




function Product(props) {
    const [cartItem, setCartItem] = useContext(CartContext);

    const {id, title, price, image, description, } = props;

    function onSetCartItem(){
        setCartItem((prevItem)=>[...prevItem,{image, name : title, price, quantity : 1}]);
    }

    return ( 
        <div className="product">
            <img className="product__image" src={image} alt="" />
            <Link className="product__title" to={`/product/${id}`}>
                {title}
            </Link>
            <p className="product__price">
                <strong>{price}</strong>
                <small> VNĐ</small>
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
