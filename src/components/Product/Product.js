import {React, useContext, useEffect} from 'react'
import './Product.css'

import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import "aos/dist/aos.css"

function Product(props) {
    const [setCartItem] = useContext(CartContext);

    const {id, title, price, image,} = props;

    useEffect(()=>
        Aos.init({duration : 1500})
    ,[]);

    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }

    function onSetCartItem(){
        setCartItem((prevItem)=>[...prevItem,{image, name : title, price, quantity : 1}]);
    }

    return ( 
        <div className="product" data-aos="flip-left">
            <img className="product__image" src={image} alt="" />
            <Link className="product__title" to={`/product/${id}`}>
                {title}
            </Link>
            <p className="product__price">
                <strong>{numberWithCommas(price)}</strong>
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
