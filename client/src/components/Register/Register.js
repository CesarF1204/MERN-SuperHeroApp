import React, { useState } from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const Register = (props) => {
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    const register = () => {
        if(first_name.trim() === '' || last_name === '' || email.trim() === '' || password.trim() === '') {
            alert('Please input a valid entry.');
        }
        else {
            axios.post("http://localhost:8000/user/register", {
                first_name,
                last_name,
                email,
                password
            }).then((response) => {
                console.log(response);
            });
            alert('Registered Successfully!')
            history.push("/login")
        }
        
    }
        return(
            <div className="register">
                
                <label htmlFor="first_name">First Name:</label>
                <input type="text" id="first_name" name="first_name" onChange={(e) => {setFirstName(e.target.value)}}/>

                <label htmlFor="last_name">Last Name:</label>
                <input type="text" id="last_name" name="last_name" onChange={(e) => {setLastName(e.target.value)}}/>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}}/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>

                <button className="register-btn" onClick={register}>Create</button>
                
            </div>
        )
    }

export default Register;