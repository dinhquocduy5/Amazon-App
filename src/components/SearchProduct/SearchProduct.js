import React, { useContext, useEffect, useState } from 'react'
import Product from '../Product/Product';
import useQuery from '../useQuery'
import './SearchProduct.css'

function SearchProduct() {
    const [product, setProduct] = useState([]);
    const query = useQuery();
    const keyWord = query.get("q");


    useEffect(() => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              fetch(`https://do-an-nganh-nodejs.herokuapp.com/api/products/search?q=${keyWord}`, requestOptions)
                .then(response => response.json())
                .then(result => setProduct(result))
                .catch(error => console.log('error', error));
    }, [keyWord])

    return (
        <div className="wrapper-listPro">
            {
                product.map((data, index)=>{
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
    )
}

export default SearchProduct
