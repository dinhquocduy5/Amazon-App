import React, { useState } from 'react'
import './Home.css'
import ListProduct from '../Product/ListProduct'
import Filter from '../Filter/Filter'
import JSONDATA from "../../MOCK_DATA.json"


function Home() {
    const {searchItem, setSearchItem} = useState("");

    function handleSearch(){
        
    }

    return (
        <div className="home">
            <Filter onSubmit ={handleSearch}/>
            <ListProduct />       
        </div>
    )
}

export default Home
