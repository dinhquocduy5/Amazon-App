import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Product from './Product'
import './Product.css'
import JSONDATA from "../../MOCK_DATA.json"

const movies = JSONDATA;

function ListProduct() {
    
    return (
        <div className="listProduct">
            <div className="wrap__list-product">
                {
                    movies.map((data, index) => {
                        return <Product
                        key={index}
                        title = {data.name}
                        rating = {data.rating}
                        price = {data.price}
                        image = {data.image}
                        />
                    })
                }
            </div>
            
        </div>
    )
}

export default ListProduct
