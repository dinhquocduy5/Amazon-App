import React from 'react'
import './Product.css'

function Product(props) {
    const {id, title, image, price, rating} = props;
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
                <button className="product__btnAdd">
                    Add to Cart
                </button>
            </div>
            
        </div>
    )
}

export default Product
