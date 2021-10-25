import React from 'react'
import {useContext, useState, useEffect} from 'react'
import Product from './Product'
import './Product.css'
import axios from 'axios'

import { SearchContext} from '../Context/SearchContext';

function ListProduct() {
    const [movies, setMovies] = useState([]);
    const [sortType, setSortType] = useState('');
    const [defaultArray, setDefaultArray] = useState([])
    const [loading, setLoading] = useState(true);

    const [searchItem] = useContext(SearchContext);

    var load = document.querySelector(".loader");
    useEffect(()=>{
        if(loading===false) load.className += (" hidden");
    },[loading])

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await axios.get('https://do-an-nganh-nodejs.herokuapp.com/api/products');
                setLoading(false)
                setMovies(response.data)
                setDefaultArray(response.data)
              } catch (error) {
                console.error(error);
              }
            }
            fetchData();   
        }
       
    ,[]);

    useEffect(() => {
        const sortArray = (type) => {
            let sorted = [];
            if(type === "low to high") sorted = [...movies].sort((a,b) => a.price - b.price)
            if(type === "high to low") sorted = [...movies].sort((a,b) => b.price - a.price)
            if(type === 'A-Z') sorted = [...movies].sort((a,b) => a.name.localeCompare(b.name))
            if(type === 'Z-A') sorted = [...movies].sort((a,b) => b.name.localeCompare(a.name))
            if(type === 'default') sorted = [...defaultArray]

            setMovies(sorted)
        }

        sortArray(sortType)
    },[sortType])


    
    return (
        <div className="listProduct">
            <div class="loader">
                <div class="outer"></div>
                <div class="middle"></div>
                <div class="inner"></div>
            </div>
            <div className="form__filter">
                <form action="/">
                    <label name="Sort by name" className="sort">Sort by name:</label>
                    <select className="form__option" id="SBName" onChange={(e) => setSortType(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                    <label name="Sort by price" className="sort">Sort by price:</label>
                    <select className="form__option" id="SBPrice" onChange={(e) => setSortType(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="low to high">Low to high</option>
                        <option value="high to low">High to low</option>
                    </select>
                </form>
            </div>
            <div className="wrap__list-product">
                {
                    movies.filter((data) => {
                        if(searchItem === ""){
                            return data;
                        } else if(data.name.toLowerCase().includes(searchItem.toLowerCase())){
                            return data;
                        }
                    })
                    .map((data, index) => {
                        return <Product
                            key={index}
                            id = {data._id}
                            title = {data.name}
                            price = {data.price}
                            image = {data.image}
                            description = {data.description}
                            />
                    })          
                }
            </div>
        </div>
    )
}

export default ListProduct
