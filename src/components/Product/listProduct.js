import React from 'react'
import {useContext, useState, useEffect} from 'react'
import Product from './Product'
import './Product.css'
import Loading from '../Loading/Loading'
import ReactPaginate from 'react-paginate'

import axios from 'axios'

function ListProduct() {
    const [movies, setMovies] = useState([]);
    const [sortType, setSortType] = useState('');
    const [defaultArray, setDefaultArray] = useState([])
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);

    const moviesPerPage = 8
    const pageVisited = pageNumber*moviesPerPage;
    
    const pageCount = Math.ceil(movies.length / moviesPerPage);

    const pageChange = ({selected}) => {
        setPageNumber(selected);
    }

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
            {loading===true ? (<Loading />) : null}
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
                    movies
                    .slice(pageVisited, pageVisited + moviesPerPage)
                    .map((movie, index) => {
                        return <Product
                                key={index}
                                id = {movie._id}
                                title = {movie.name}
                                price = {movie.price}
                                image = {movie.image}
                                description = {movie.description}
                        />
                    })
                
                }
            </div>
            <ReactPaginate 
                 previousLabel={"Previous"}
                 nextLabel={"Next"}
                 pageCount={pageCount}
                 onPageChange={pageChange}
                 containerClassName={"paginationBtns"}
                 previousLinkClassName={"previousBtn"}
                 nextLinkClassName={"nextBtn"}
                 disabledClassName={"paginationDisabled"}
                 activeClassName={"paginationActive"}
                />
        </div>
    )
}

export default ListProduct
