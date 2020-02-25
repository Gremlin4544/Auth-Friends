import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [value, setValue] = useState({
        username:'',
        password: ''
    });

    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
        axiosWithAuth()
       .post("/login",value)
       .then(resp => {
            localStorage.setItem('token', resp.data.payload);
            props.history.push('/friends');
       })
       .catch(err => console.log(err));
    }

    return (
        <>
        <div>
            <h3>LOG IN</h3>
            <form onSubmit={handleSubmit}>
            <label>Name: <input name='username' id="username" type='text' onChange={handleChange} value={value.username}/></label>
                <label>Password: <input type="password" name='password' id='password'  onChange={handleChange} value={value.password}/></label>
                <button>Log In</button>
            </form>
        </div>
        </>
    )
};

export default Login;