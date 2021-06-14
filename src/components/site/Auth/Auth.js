import React from 'react';
import './Auth.css';
import Login from './Login';
import Register from './Register';

const Auth = (props) => {
    

    return(
        <div>
        <h1>Dungeons & Dragons Character Creator</h1>
        <Login updateToken={props.updateToken}/>
        <Register updateToken={props.updateToken}/>
        </div>
       
    )
    }


export default Auth;
