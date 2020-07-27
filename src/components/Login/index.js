import React, { useState } from 'react';

import './login.css'

function Login() {

    const [login, setLogin] = useState({
        usn: '',
        password: ''
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setLogin(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(login)
    }

    return (
        <div className="login-container">
            <form>
                <h1>Login</h1>
                <div className="input-feilds">
                    <label>USN</label>
                    <input 
                    type="text" 
                    id='usn'
                    value={login.usn}
                    onChange={handleChange}
                    placeholder="Your University Registration Number"/>
                </div>
              
                <div className="input-feilds">
                    <label>Password</label>
                    <input 
                    type="password" 
                    id="password"
                    value={login.password}
                    onChange={handleChange}
                    placeholder="Password"/>
                </div>
               
                <button onClick={handleLogin}>Login</button>

                <a href="#">Forgot Password? </a>
            </form>
        </div>
    )
}

export default Login