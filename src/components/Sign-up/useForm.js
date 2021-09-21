import React, { useState } from 'react'


const useForm = validate => {
    const [values, setValue] = useState({
        username: '',
        password:'',
        password2:''
    })

    const [errors, setErrors] = useState("");

    const handleChange = e => {
        const {name, value} = e.target;
        setValue({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validate(values))
    }
    return {handleChange, values, handleSubmit, errors};
}

export default useForm
