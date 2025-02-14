import React, { useContext, useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import '../SASS/ProductDetail.scss';
import { CartContext } from '../components/Context/CartContext';
import { useCookies } from 'react-cookie';
import NumberWithCommas from '../components/NumberWithCommas';

function ProductDetail(props) {
    const [product, setProduct]=useState([]);
    const [comment, setComment] = useState("");
    const [listComment, setListComment] = useState([]);
    const [loadingPages, setLoadingPages] = useState(true);
    const [loadingComment, setLoadingComment] = useState(false);

    const [cartItem, setCartItem] = useContext(CartContext);

    const [cookies, setCookies] = useCookies(['userID']);

    const {productID} = useParams();

    const history = useHistory();

    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(`https://do-an-nganh-nodejs.herokuapp.com/api/products/detail/${productID}`);
            setProduct(response.data);
            setLoadingPages(false)
        }
        fetchData();
    },[]);

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };

        fetch(`https://do-an-nganh-nodejs.herokuapp.com/api/products/comment/${productID}`, requestOptions)
        .then(response => response.json())
        .then(result => {setLoadingComment(false); setListComment(result)})
        .catch(error => console.log('error', error));
    },[loadingComment])

    const postComment = () =>{
        if(!cookies.userID){
            history.push("/signIn");
        } else {
            const getComment = document.getElementsByClassName("text");
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("content", comment);
            urlencoded.append("userID", cookies.userID);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(`https://do-an-nganh-nodejs.herokuapp.com/api/products/comment/${productID}`, requestOptions)
            .then(response => response.json())
            .then(result => {getComment.innerHtml = ""; setLoadingComment(true);})
            .catch(error => console.log('error', error));
        }
    }

    function handleBack(){
        history.push("/");
    }

    function onSetCartItem(){
        const findIndex = cartItem.find((dt)=>dt.name === product.name);
        if(findIndex) {
            findIndex.quantity+=1;
        } else {
            setCartItem((prevItem)=>[...prevItem,{image : product.image, name : product.name, price : product.price, quantity : 1}]);
        }
    }

    return (
        <div className="wrapper-form">
            {loadingPages===true ? (<Loading />) : null}
            <div className="form__pro-detail">
            <button className="back" onClick={handleBack}>Back</button>
            <div className="info-product">
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
            <div className="wrapper-comment">
                <h2 className="title-comment">{listComment.length} comments {product.name}</h2>
                <div className="comments">
                    {loadingComment === true ? <Loading className="loading" /> : null}
                    <table>
                        {
                            listComment.map((data,index)=>
                            {
                                return (
                                <tr className="row-comment" key={index}>
                                    <td><img className="avatar" src={data.user.avatar} alt="" /></td>
                                    <td><strong>{data.user.email}</strong><p className="content">{data.content}</p><span className="date-time">{data.commentDate}</span></td>
                                </tr>
                                );
                            }) 
                        }
                    </table>
                </div>
                <div className="form-input" >
                    <textarea className="text" placeholder="Text something..." onChange={e => setComment(e.target.value)}></textarea>
                    <button className="btn-comment" type="submit" onClick={postComment} >Comment</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
