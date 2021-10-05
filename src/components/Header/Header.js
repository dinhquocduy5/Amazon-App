import {React, useContext} from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { CartContext } from '../Context/CartContext';
import { SearchContext} from '../Context/SearchContext'

import { getAuth } from "firebase/auth";

function Header() {

    const [cartItem] = useContext(CartContext, SearchContext);

    const [searchItem, setSearchItem] = useContext(SearchContext)

    const auth = getAuth();
    const user = auth.currentUser;

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
                <input type="text" className="header__searchBox" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
                <SearchIcon className="header__searchIcon" style={{ fontSize: 40 }} />
            </div>

            {/* Links */}
            <div className="header__nav">
                    <div className="header__option">
                        <span className="title__link">Hello {user ? user.email : "buddy"},</span>
                        <Link to="/signin"><span>{user ? "Log Out" : "Sign in"}</span></Link>
                    </div>
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
                <span className="header__quantity">{cartItem.length}</span>
            </div>
            </Link>
        </div>
    )
}

export default Header
