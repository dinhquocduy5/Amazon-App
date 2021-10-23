import {React, useContext} from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { CartContext } from '../Context/CartContext';
import { SearchContext} from '../Context/SearchContext'

import { useCookies } from 'react-cookie';


function Header() {

    const [cartItem] = useContext(CartContext);

    const [searchItem, setSearchItem] = useContext(SearchContext);

    const [cookies, setCookies, removeCookie] = useCookies(['userID']);

    let queryParameters = {
        userID : cookies.userID
    }


    function handleClickSignOut(){
        setTimeout(()=>
            removeCookie('userID'),
            removeCookie('email')
        ,500);
    }

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
                        <span className="title__link">Hi, Good morning!</span>
                        {
                            cookies.userID !== undefined ? (
                                <ul className="navbar-user">
                                    <li className="username">
                                        <a className="email-user" >{cookies.email}</a>
                                        <ul className="list-item">
                                            <li className="item"><Link className="link" to={{pathname: '/editInfo', query: queryParameters}}>Edit Profile</Link></li>
                                            <li className="item"><Link className="link" to="/" onClick={handleClickSignOut}>Log Out</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            )
                            : 
                            (<Link className="link" to="/signIn">Sign In</Link>)
                        }
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
