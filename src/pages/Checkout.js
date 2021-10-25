import {React, useContext} from 'react'
import { CartContext } from '../components/Context/CartContext'

import '../SASS/Checkout.scss'

function Checkout() {
    const [cartItem, onMinusClick, onAddClick] = useContext(CartContext);
    const itemPrice = cartItem.reduce((a,c)=>(a+(c.quantity*c.price)),0);
    const tax = (itemPrice * 0.05);
    const totalPrice = itemPrice + tax;

    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }

    function handleMinusQuantity(data) {
        if(onMinusClick){
            onMinusClick(data)
        }
    }

    function handleAddQuantity(data) {
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
                                    <button className="btn-editQuantity" onClick={()=>handleMinusQuantity(data)}>-</button>
                                    <input className="text-quantity" type="text" value={data.quantity}/>
                                    <button className="btn-editQuantity" onClick={()=>handleAddQuantity(data)}>+</button>
                                </td>
                                <td>{numberWithCommas(data.price)} VNĐ</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
            <div className="wrap-total-form">
                <div className="total-form">
                    <h1>Detail</h1>
                    <p className="title sub-total">Subtotal<span>{numberWithCommas(itemPrice)} VNĐ</span></p>
                    <p className="title tax">Tax<span>{numberWithCommas(tax)} VNĐ</span></p>
                    <p className="title shipping">Shipping<span>0 VNĐ</span></p>
                    <div className="line"></div>
                    <h2 className="title total">Total<span>{numberWithCommas(totalPrice)} VNĐ</span></h2>
                </div>
                <button className="btn-checkOut">Check Out</button>
            </div>
        </div>
    )
}

export default Checkout
