import React, { useState } from 'react';

import axios from "axios";
import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = ({setLoginUser}) => {
    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) =>{
        const {name, value} = e.target
            setUser({
                ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:8000/user/login", user)
        .then(res=>{alert(res.data.message)
        history.push("/")})
    }
        return(
            <div className="login">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={user.email} onChange={handleChange} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={user.password} onChange={handleChange} />

                <button type="submit" className="login-btn" onClick={login}>Login</button>
                <Link className="link" to="/register">No Account Yet? Register Now!</Link>
            </div>
        )
    }

export default Login;