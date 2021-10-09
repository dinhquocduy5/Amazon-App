import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useHistory } from 'react-router';

import axios from 'axios';
import "../SASS/Login.scss"

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    function Login(){
        axios.post('https://do-an-nganh-nodejs.herokuapp.com/api/auth/login', {
            email: username,
            password: password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="form__login">
            <Link to="/" >
                <img className="form__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt =""/>
            </Link>
            <div className="box__sign-in">
                <h1 className="form__title">Sign In </h1>
                <form action="/" className="form__box">
                    <label name="username" className="title" >User Name</label>
                    <input type="text" className="username" placeholder="Enter your username" value= {username} onChange={(e)=>setUsername(e.target.value)}/>
                    <label name="password" className="title" >Password</label>
                    <input type="password" className="password" placeholder="Enter your password" value={password} onChange ={(e)=>setPassword(e.target.value)}/>
                </form>
                <button type="submit" className="btn_submit-login" onClick={Login}>Sign In</button>
            </div>
            <p className="question">Don't have account ? 
                <Link to="/signup" >
                    Create a account
                </Link>
            </p>
        </div>
    )
}

export default Login
