import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import '../SASS/ProductDetail.scss';
import { CartContext } from '../components/Context/CartContext';

function ProductDetail(props) {
    const [product, setProduct]=useState([]);
    const [cartItem, setCartItem] = useContext(CartContext);

    const {productID} = useParams();

    const history = useHistory();

    useEffect(()=>{
        async function fetchData(){
            const reponse = await axios.get(`https://do-an-nganh-nodejs.herokuapp.com/api/products/detail/${productID}`);
            setProduct(reponse.data);
        }
        fetchData();
        
    },[productID]);

    function handleBack(){
        history.push("/");
    }

    function onSetCartItem(){
        setCartItem((prevItem)=>[...prevItem,{image : product.image, name : product.name, price : product.price, quantity : 1}]);
    }

    return (
        <div className="form__pro-detail">
            <button className="back" onClick={handleBack}>Back</button>
            <div className="info">
                <div className="image">
                    <img className="image-product" src={product.image} alt="" />
                </div>
                <div className="info-primary">
                    <h1 className="product-title">{product.name}</h1>
                    <div className="product-description">
                        <p className="description">{product.description} </p>
                    </div>
                    <div className="product-price">
                        <h2>{product.price} </h2>
                        <strong>VNĐ</strong>
                    </div>
                    <button className="add-cart" onClick={onSetCartItem}>Add to Cart</button>
                </div>
            </div>
            
        </div>
    )
}

export default ProductDetail
