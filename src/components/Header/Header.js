import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className="header">
            {/*logo on the left */}
            <Link to="/">
                <img className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="amazon_logo" />
            </Link>

            {/*Search box */}
            <div className="header__search">
                <input type="text" className="header__searchBox" />
                <SearchIcon className="header__searchIcon" style={{ fontSize: 40 }} />
            </div>

            {/* Links */}
            <div className="header__nav">
                <Link to="/signin"
                className="header__link">
                    <div className="header__option">
                        <span className="title__link">Hello Duy,</span>
                        <span className="primary__link">Sign in</span>
                    </div>
                </Link>

                <Link to="/" 
                className="header__link">
                    <div className="header__option">
                        <span className="title__link">Return</span>
                        <span className="primary__link">& Orders</span>
                    </div>
                </Link>
            </div>

            <Link to="/checkout" className="header__link">
            <div className="header__shoppingCart">
                <ShoppingCartIcon className="header__cartIcon" style={{fontSize: 35}}/>
                <span className="header__quantity">0</span>
            </div>
            </Link>
        </div>
    )
}

export default Header
