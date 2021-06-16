import { render } from '@testing-library/react';
import React, {useState} from 'react';
// import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [updatEmail, setUpdateEmail] = useState('');
    // const [validEmail, setValidEmail] = useState(true);

    // const ValidateEmail = (val) => {

    //     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)){
        
    //     setValidEmail(true)
    //     } else{
    //     setValidEmail(false)
       
    //     }
        
    // }


    

    
    

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3003/user/register", {
            method: 'POST',
            body: JSON.stringify({user: {email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then
        .then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
        // .catch(
        //     alert('Email already in use!')
        // )
    }

    return(
        <div>
        <form>
            <h1>Register</h1>
            <label htmlFor="email">Email:</label>
            <br/>
            <input type="text" 
            id='registeremail' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}  />
            <br/>
            <label htmlFor="password">Password:</label>
            <br/>
            <input type="password" 
            id='registerpassword' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <h2>Update User Email</h2>
            <label htmlFor="email">Email to Update:</label>
            <br />
            <input type="text"
            id='registeremail'
            value={email}
            onChange={(e) => setUpdateEmail(e.target.value)} />
        </form>
    </div>
    )

}

export default Register;
