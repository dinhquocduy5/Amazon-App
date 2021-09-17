import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { db } from '../../firebase';
import Product from './Product'

function useMovies(){
    const[movies, setMovies] = useState([]);

    useEffect(()=>{
        db
            .collection('Movies')
            .onSnapshot((snapshot)=>{
                const newMovies = snapshot.docs.map((doc)=>({
                    id : doc.id,
                    ...doc.data()
                }))
                setMovies(newMovies);
            })
    })
    return movies;
}

async function listProduct() {
    const movies = useMovies;
    return (
        <div>

            {
                movies.map((data, index) => {
                    return <Product
                    key={index}
                    title = {data.title}
                    rating = {data.rating}
                     price = {data.price}
                     image = {data.img}
                    />
                    
                })
            }
        </div>
    )
}

export default listProduct
