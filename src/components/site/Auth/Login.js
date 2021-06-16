import React, {useState} from 'react';
// import {Form, FormGroup, Label, Input, Button} from 'reactstrap';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3003/user/login", {
            method: 'POST',
            body: JSON.stringify({user: {email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            // console.log((data));
            props.updateToken(data.sessionToken)
        })
        // .catch(
        //     alert('Username or Password is incorrect')
        // )
    }

    return(
        <div>
        <form>
            <div className='login'>
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <br/>
            <input type="text" 
            id='loginemail' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <label htmlFor="password">Password:</label>
            <br/>
            <input type="password" 
            id='loginpassword' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        </form>
    </div>
    )

}

export default Login;
