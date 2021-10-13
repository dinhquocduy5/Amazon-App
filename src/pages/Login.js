import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';

import { useCookies } from 'react-cookie';

import "../SASS/Login.scss"

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [cookies, setCookies, removeCookies] = useCookies(['userID']);

    const history = useHistory();

    const login =(e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", username);
        urlencoded.append("password", password);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        fetch("https://do-an-nganh-nodejs.herokuapp.com/api/auth/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            const success = document.querySelector('.login-success');
            const fail = document.querySelector('.login-fail');
            const empty = document.querySelector('.empty-email');
            if(username !== "" && result.status === false) {
                fail.className += " active"
            } else if(username !== "" && result.status === true)
                {
                    if(fail.classList.contains("active")) fail.classList.remove("active");
                    if(empty.classList.contains("active")) fail.classList.remove("active");
                    success.className += " active"
                    setCookies('userID', result.email,{ path: '/' })
                    setTimeout(()=>
                        history.push("/")
                    ,1000);
                } else if(username==="") {
                    empty.className += " active"
                }
            
        }
        )
        .catch(error => console.log('error', error));
    }

    return (
        <div className="form__login">
            <Link to="/" >
                <img className="form__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt =""/>
            </Link>
            <div className="box__sign-in">
                <h1 className="form__title">Sign In </h1>
                <div className="login-success">✅ Login Successfully!</div>
                <div className="login-fail">❌ Email or password incorrect ! Please re-enter email</div>
                <div className="empty-email">You need enter the email!</div>
                <form className="form__box" onSubmit={login}>
                    <label name="username" className="title" >User Name</label>
                    <input type="text" className="username" placeholder="Enter your username" value= {username} onChange={(e)=>setUsername(e.target.value)}/>
                    <label name="password" className="title" >Password</label>
                    <input type="password" className="password" placeholder="Enter your password" value={password} onChange ={(e)=>setPassword(e.target.value)}/>
                    <button type="submit" className="btn_submit-login" >Sign In</button>
                </form>
                
            </div>
            <p className="question">Don't have account ? 
                <Link className="link-direct" to="/signup" >
                    Create a account
                </Link>
            </p>
        </div>
    )
}

export default Login
