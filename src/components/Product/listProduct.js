import React from 'react'
import {useContext} from 'react'
import Product from './Product'
import './Product.css'
import JSONDATA from "../../MOCK_DATA.json"

import { SearchContext} from '../Context/SearchContext';



function ListProduct() {
    const movies = JSONDATA;

    const [searchItem] = useContext(SearchContext);

  
    return (
        <div className="listProduct">
            <div className="form__filter">
                <h2>Sort By :</h2>
                <form action="/">
                    <label name="Sort by name">Sort by name</label>
                    <select className="form__option">
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                    <label name="Sort by price">Sort by price</label>
                    <select className="form__option">
                        <option value="low to high">Low to high</option>
                        <option value="high to low">High to low</option>
                    </select>
                </form>
            </div>
            <div className="wrap__list-product">
                {
                    movies.filter((data) => {
                        if(searchItem == ""){
                            return data;
                        } else if(data.name.toLowerCase().includes(searchItem.toLowerCase())){
                            return data;
                        }
                    }).map((data, index) => {
                        return <Product
                            key={index}
                            title = {data.name}
                            rating = {data.rating}
                            price = {data.price}
                            image = {data.image}
                            descrip = {data.descrip}
                            />
                    })
                    
                            
                    
                }
            </div>
            
        </div>
    )
}

export default ListProduct
