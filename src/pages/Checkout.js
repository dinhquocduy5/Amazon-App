
import {React, useContext} from 'react'
import { CartContext } from '../components/Context/CartContext'
import NumberWithCommas from '../components/NumberWithCommas';

import '../SASS/Checkout.scss'

function Checkout() {
    const [cartItem, setCartItem, onMinusClick, onAddClick] = useContext(CartContext);
    const itemPrice = cartItem.reduce((a,c)=>(a+(c.quantity*c.price)),0);
    const tax = (itemPrice * 0.05);
    const totalPrice = itemPrice + tax;

    // function handleCLick(data) {
    //     if(onItemClick){
    //         onItemClick(data)
    //     }
    // }

    function handleMinusClick(data) {
        if(onMinusClick){
            onMinusClick(data)
        }
            
    }

    function handleAddClick(data) {
        if(onAddClick){
            onAddClick(data)
        }
            
    }
    
    return (
        <div className="checkout">
            <div className="detail__product">
                <h1>Check Out</h1>
                <table>
                    <tr>
                        <th>Number.</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    {
                        cartItem.map((data, index)=>(
                            <tr className="gradient">
                                <td>{index+1}</td>
                                <td><img src={data.image} alt="" />
                                <p>{data.name}</p>
                                </td>
                                <td>
                                    <button className="btn-minus" onClick={()=>handleMinusClick(data)}>-</button>
                                    <input className="text-quantity" type="text" value={data.quantity}/>
                                    <button className="btn-add" onClick={()=>handleAddClick(data)}>+</button>
                                </td>
                                <td>{NumberWithCommas(data.price)} VNĐ</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
            <div className="wrap-total-form">
                <div className="total-form">
                    <h1>Detail</h1>
                    <p className="title sub-total">Subtotal<span>{NumberWithCommas(itemPrice)} VNĐ</span></p>
                    <p className="title tax">Tax<span>{NumberWithCommas(tax)} VNĐ</span></p>
                    <p className="title shipping">Shipping<span>0 VNĐ</span></p>
                    <div className="line"></div>
                    <h2 className="title total">Total<span>{NumberWithCommas(totalPrice)} VNĐ</span></h2>
                </div>
                <button className="btn-checkOut">Check Out</button>
            </div>
        </div>
    )
}

export default Checkout
