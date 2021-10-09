import {React, useContext} from 'react'
import { CartContext } from '../components/Context/CartContext'

import '../SASS/Checkout.scss'

function Checkout() {
    const [cartItem, setCartItem, onItemClick] = useContext(CartContext);
    const itemPrice = cartItem.reduce((a,c)=>(a+(c.quantity*c.price)),0);
    const tax = (itemPrice * 0.01);
    const totalPrice = itemPrice + tax;

    function handleItemClick(data){
        if(onItemClick){
            onItemClick(data)
        }
    }
    
    return (
        <div class="checkout">
            <div class="detail__product">
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
                            <tr class="gradient">
                                <td>{index+1}</td>
                                <td><img src={data.image} alt="" />
                                <p>{data.name}</p>
                                </td>
                                <td>
                                    <input className="text-quantity" type="text" value={data.quantity}/>
                                    <button className="btn-removePro" onClick={()=>handleItemClick(data)}>Remove</button>
                                </td>
                                <td>{data.price} VNĐ</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
            <div className="wrap-total-form">
                <div className="total-form">
                    <h1>Detail</h1>
                    <p className="title sub-total">Subtotal<span>{itemPrice} VNĐ</span></p>
                    <p className="title tax">Tax<span>{tax} VNĐ</span></p>
                    <p className="title shipping">Shipping<span>0 VNĐ</span></p>
                    <div className="line"></div>
                    <h2 className="title total">Total<span>{totalPrice} VNĐ</span></h2>
                </div>
                <button className="btn-checkOut">Check Out</button>
            </div>
        </div>
    )
}

export default Checkout
