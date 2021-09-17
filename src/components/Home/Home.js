import React from 'react'
import './Home.css'
import listProduct from '../Product/listProduct'


function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3740_.jpg" alt="accesories" />
            <div className="home__row">
                <listProduct />
            </div>     
        </div>
    )
}

export default Home
