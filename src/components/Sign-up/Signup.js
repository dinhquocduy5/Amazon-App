
import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"
import useForm from './useForm'
import validate from './validateInfo'

function Signup() {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);

    return (
        <div className="form__sign-up">
            <Link to="/" >
                <img className="form__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt =""/>
            </Link>
            <div className="box__sign-up">
                <h1 className="form__title">Sign Up </h1>
                <form action="/" className="form__box">
                    <label htmlFor="username" className="title" >User Name</label>
                    <input name="username" type="text" className="username" placeholder="Enter your username" value={values.username} onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
                    <label htmlFor="password" className="title" >Password</label>
                    <input name="password" type="password" className="password" placeholder="Enter your password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                    <label htmlFor="password2" className="title" >Re-type password</label>
                    <input name="password2" type="password" className="password2" placeholder="Re-type your password" value={values.password2} onChange={handleChange}/>
                    {errors.password2 && <p>{errors.password2}</p>}
                </form>
                <button type="submit" className="btn_submit-sign-up" onClick={handleSubmit}>Sign Up</button>
            </div>
            <p>You had an account ? 
                <Link to="/signin" >
                    Log in
                </Link>
            </p>
        </div>
    )
}

export default Signup
