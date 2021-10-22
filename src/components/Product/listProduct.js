import React from 'react'
import {useContext, useState, useEffect} from 'react'
import Product from './Product'
import './Product.css'
import axios from 'axios'

import { SearchContext} from '../Context/SearchContext';
import Pagination from '../Pagination/Pagination'


function ListProduct() {
    const [movies, setMovies] = useState([]);
    const [sortType, setSortType] = useState('');
    const [defaultArray, setDefaultArray] = useState([])
    const [page, setPage] = useState(1);
    const [listPage, setListPage] = useState([1,2])

    const [searchItem] = useContext(SearchContext);

    const getPageLits = async () => {
        try {
            const response = await axios.get('https://do-an-nganh-nodejs.herokuapp.com/api/products/');
            return response.data.length
          } catch (error) {
            console.error(error);
          }
        }

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await axios.get('https://do-an-nganh-nodejs.herokuapp.com/api/products/page', {params: {page: page}});
                console.log(response.data.products)
                setMovies(() => {
                    setDefaultArray(response.data.products)
                    return response.data.products
                });
              } catch (error) {
                console.error(error);
              }
            }
            fetchData();   
        }
       
    ,[page]);

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
            <div className="form__filter">
                <h2>Sort By :</h2>
                <form action="/">
                    <label name="Sort by name">Sort by name</label>
                    <select className="form__option" id="SBName" onChange={(e) => setSortType(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                    <label name="Sort by price">Sort by price</label>
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
            <ul className="pagination">
                  {
                      listPage.map((page) => (
                          <li 
                          key={page}
                          onClick = {() => setPage(page)}
                          ><a>{page}</a></li>
                      ))
                  }
            </ul>
        </div>
    )
}

export default ListProduct
