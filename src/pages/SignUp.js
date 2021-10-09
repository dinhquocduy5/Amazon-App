
import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../SASS/SignUp.scss'
import axios from 'axios';

function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const account ={
        'email' : username,
        'password' : password,
        'retypePassword' : password2
    }

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
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        // axios({
        //     method: 'post',
        //     url: 'https://do-an-nganh-nodejs.herokuapp.com/api/auth/register',
        //     headers: {
        //                 'Content-Type': 'application/x-www-form-urlencoded'
        //             },
        //     data: 
        //         {
        //             account
        //         }
        //   }).then((res)=>console.log(res));
        // axios.post('https://do-an-nganh-nodejs.herokuapp.com/api/auth/register', formData,
        // // {
        // //     email: 'dinhquocduy123@gmail.com',
        // //     password: password,
        // //     retypePassword: password2
        // //   }
        // //   ,
        //   {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        //   }
        //   )
        //   .then( (response)=> {
        //     console.log(response);
        //   })
        //   .catch( (error)=> {
        //     console.log(error);
        //   });
    }
    

    return (
        <div className="form__sign-up">
            <Link to="/" >
                <img className="form__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt =""/>
            </Link>
            <div className="box__sign-up">
                <h1 className="form__title">Sign Up </h1>
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
                <Link to="/signin" >
                    Log in
                </Link>
            </p>
        </div>
    )
}

export default Signup
