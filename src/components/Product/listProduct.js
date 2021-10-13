import React from 'react'
import {useContext, useState, useEffect} from 'react'
import Product from './Product'
import './Product.css'
import axios from 'axios'

import { SearchContext} from '../Context/SearchContext';
import Pagination from '../Pagination/Pagination'


function ListProduct() {
    const [movies, setMovies] = useState([]);

    const [searchItem] = useContext(SearchContext);

    const handleSortByName = () => {
        let select = document.getElementById("SBName").value;
        if(select === "A-Z") setMovies(movies.sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          })
          );

        if(select === "Z-A") setMovies(movies.sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
          
            // names must be equal
            return 0;
          })
          );
    }

    const handleSortByPrice = () => {
        let select = document.getElementById("SBPrice").value;
        if(select === "low to high") setMovies(movies.sort((a,b) => a.price-b.price));
        if(select === "high to low") setMovies(movies.sort((a,b) => b.price-a.price)); 
    }

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await axios.get('https://do-an-nganh-nodejs.herokuapp.com/api/products');
                setMovies(response.data);
              } catch (error) {
                console.error(error);
              }
            }
            fetchData();
            
        }
       
    ,[]);


    
    return (
        <div className="listProduct">
            <div className="form__filter">
                <h2>Sort By :</h2>
                <form action="/">
                    <label name="Sort by name">Sort by name</label>
                    <select className="form__option" id="SBName" onChange={handleSortByName}>
                        <option value="default">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                    <label name="Sort by price">Sort by price</label>
                    <select className="form__option" id="SBPrice" onChange={handleSortByPrice}>
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
            <Pagination/>
        </div>
    )
}

export default ListProduct
