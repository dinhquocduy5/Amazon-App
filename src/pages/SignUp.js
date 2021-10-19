
import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../SASS/SignUp.scss'

function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");


    const history = useHistory();
    const register = (e)=>{
        e.preventDefault(); 
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("email", username);
            urlencoded.append("password", password);
            urlencoded.append("retypePassword", password2);

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
            };

            fetch("https://do-an-nganh-nodejs.herokuapp.com/api/auth/register", requestOptions)
            .then(response => response.json())
            .then(result => 
                {
                    const success = document.querySelector('.register-success');
                    const fail = document.querySelector('.register-fail');
                    const empty = document.querySelector('.empty-email');
                    const notMatchPassword = document.querySelector('.confirm-incorrect')
                    if(username !== "" && password === password2 && result.status === false) {
                        if(fail.classList.contains("active")) fail.classList.remove("active");
                        if(empty.classList.contains("active")) empty.classList.remove("active");
                        if(notMatchPassword.classList.contains("active")) notMatchPassword.classList.remove("active");
                        fail.className += " active"; 
                        
                    } else if(username !== "" && password === password2 && result.status === true)
                    {
                        if(fail.classList.contains("active")) fail.classList.remove("active");
                        if(empty.classList.contains("active")) empty.classList.remove("active");
                        if(notMatchPassword.classList.contains("active")) notMatchPassword.classList.remove("active");
                        success.className += " active";
                        setTimeout(()=> history.push("/signin"), 1500);
                    } else if(username==="") {
                        if(fail.classList.contains("active")) fail.classList.remove("active");
                        if(empty.classList.contains("active")) empty.classList.remove("active");
                        if(notMatchPassword.classList.contains("active")) notMatchPassword.classList.remove("active");
                        empty.className += " active";
                    } else if(password !== password2) {
                        if(fail.classList.contains("active")) fail.classList.remove("active");
                        if(empty.classList.contains("active")) fail.classList.remove("active");
                        if(notMatchPassword.classList.contains("active")) notMatchPassword.classList.remove("active");
                        notMatchPassword.className += " active";
                    }
                }
            )
            .catch(error => console.log('error', error));
    }
    

    return (
        <div className="form__sign-up">
            <Link to="/" >
                <img className="form__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt =""/>
            </Link>
            <div className="box__sign-up">
                <h1 className="form__title">Sign Up </h1>
                <div className="register-success">✅ Register Successfully!</div>
                <div className="register-fail">❌ Email is exist! Please enter another email</div>
                <div className="confirm-incorrect">❌ Password does not match!</div>
                <div className="empty-email">You need enter the email!</div>
                <form className="form__box" onSubmit={register}>
                    <label htmlFor="username" className="title" >User Name</label>
                    <input name="username" type="text" className="username" placeholder="Enter your username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    
                    <label htmlFor="password" className="title" >Password</label>
                    <input name="password" type="password" className="password" placeholder="Enter your password" value = {password} onChange={(e)=>setPassword(e.target.value)}/>
                   
                    <label htmlFor="password2" className="title" >Re-type password</label>
                    <input name="password2" type="password" className="password2" placeholder="Re-type your password" value = {password2} onChange={(e)=>setPassword2(e.target.value)}/>
                    <button type="submit" className="btn_submit-sign-up">Sign Up</button>
                </form>
                {/* <button type="submit" className="btn_submit-sign-up" onClick={SignUp}>Sign Up</button> */}
            </div>
            <p className="question">You had an account ? 
                <Link className="link-direct" to="/signin" >
                    Log in
                </Link>
            </p>
        </div>
    )
}

export default Signup
