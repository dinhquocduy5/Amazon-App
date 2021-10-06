
import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../SASS/SignUp.scss'

import {app} from '../config/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const history = useHistory();

    const auth = getAuth();
    function SignUp(){
        createUserWithEmailAndPassword(auth, username, password)
        .then(() => {
            history.push("/");
        })
        .catch(() => {
            console.log("Tài khoản đã tồn tại!")
        });
    }
    

    return (
        <div className="form__sign-up">
            <Link to="/" >
                <img className="form__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt =""/>
            </Link>
            <div className="box__sign-up">
                <h1 className="form__title">Sign Up </h1>
                <form action="/" className="form__box">
                    <label htmlFor="username" className="title" >User Name</label>
                    <input name="username" type="text" className="username" placeholder="Enter your username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    
                    <label htmlFor="password" className="title" >Password</label>
                    <input name="password" type="password" className="password" placeholder="Enter your password" value = {password} onChange={(e)=>setPassword(e.target.value)}/>
                   
                    <label htmlFor="password2" className="title" >Re-type password</label>
                    <input name="password2" type="password" className="password2" placeholder="Re-type your password" value = {password2} onChange={(e)=>setPassword2(e.target.value)}/>
                    
                </form>
                <button type="submit" className="btn_submit-sign-up" onClick={SignUp}>Sign Up</button>
            </div>
            <p className="question">You had an account ? 
                <Link to="/signin" >
                    Log in
                </Link>
            </p>
        </div>
    )
}

export default Signup
