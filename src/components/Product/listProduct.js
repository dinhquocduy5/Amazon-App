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
            <div className="form__filter">
                <h2>Sort By :</h2>
                <form action="/">
                    <input type="text" className="text-name" placeholder="Search any products..."/>
                    <label name="Sort by name">Sort by name</label>
                    <select className="form__option">
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                    <label name="Sort by price">Sort by name</label>
                    <select className="form__option">
                        <option value="low to high">Low to high</option>
                        <option value="high to low">High to low</option>
                    </select>
                </form>
            </div>
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
