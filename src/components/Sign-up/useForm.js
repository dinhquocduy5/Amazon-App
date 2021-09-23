import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router';
import { UserContext } from '../Context/UserContext';


const useForm = validate => {
    const history = useHistory();

    const [user, setUser] = useContext(UserContext);

    const [errors, setErrors] = useState("");

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validate(user))
        
        history.push("/");
    }
    return {handleChange, user, handleSubmit, errors};
}

export default useForm
