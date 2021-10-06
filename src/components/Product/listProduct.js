import React from 'react'
import {useContext, useState} from 'react'
import Product from './Product'
import './Product.css'
import JSONDATA from "../../MOCK_DATA.json"
import { collection, getDocs } from "firebase/firestore"; 
import {db} from '../../config/firebase'

import { SearchContext} from '../Context/SearchContext';


function ListProduct() {
    // const movies = JSONDATA;
    const [movies, setMovies] = useState([]);

    const [searchItem] = useContext(SearchContext);

    async function getData(){
        const docRef = collection(db, "movies");
        const docSnap = await getDocs(docRef);
        setMovies(docSnap.data());
    }
    getData();

    console.log(movies)

    
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
                    movies.map((doc,index)=>
                    {
                        return (<Product
                            key={index}
                            title = {doc.data().name}
                            rating = {doc.data().rating}
                            price = {doc.data().price}
                            image = {doc.data().image}
                            descrip = {doc.data().description}
                        />)
                    }
                    )
                    
                    // movies.filter((data) => {
                    //     if(searchItem == ""){
                    //         return data;
                    //     } else if(data.name.toLowerCase().includes(searchItem.toLowerCase())){
                    //         return data;
                    //     }
                    // }).map((data, index) => {
                    //     return <Product
                    //         key={index}
                    //         title = {data.name}
                    //         rating = {data.rating}
                    //         price = {data.price}
                    //         image = {data.image}
                    //         descrip = {data.descrip}
                    //         />
                    // })
                    
                            
                    
                }
            </div>
            
        </div>
    )
}

export default ListProduct
