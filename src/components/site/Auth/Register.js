import { render } from '@testing-library/react';
import React, {useState} from 'react';
// import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
<<<<<<< HEAD

import $ from 'jquery';

import APIURL from '../../../helpers/environment'


// const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');


//     const [updateEmail, setupdateEmail] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();

    // const [validEmail, setValidEmail] = useState(true);

    // const ValidateEmail = (val) => {

    //     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)){
        
    //     setValidEmail(true)
    //     } else{
    //     setValidEmail(false)
       
    //     }
        
    // }


    

    
    




=======

// import $ from 'jquery';

import APIURL from '../../../helpers/environment'


// const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');


//     const [updateEmail, setupdateEmail] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();

    // const [validEmail, setValidEmail] = useState(true);

    // const ValidateEmail = (val) => {

    //     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)){
        
    //     setValidEmail(true)
    //     } else{
    //     setValidEmail(false)
       
    //     }
        
    // }
>>>>>>> fab71f6221ebfba85e2244f09b27589bfce587ef


    

    
    





        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            
        function validateEmail(email) {
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }
        function validate() {
          const $result = $("#result");
          const email = $("#email").val();
          $result.text("");
    
          if (validateEmail(email)) {
            $result.text(email + " is valid :)");
            $result.css("color", "green");
          } else {
            $result.text(email + " is not valid :(");
            $result.css("color", "red");
          }
          return false;
          
        }
        
        $("#validate").on("click", validate);*/

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/register`, {

<<<<<<< HEAD
=======
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/register`, {

>>>>>>> fab71f6221ebfba85e2244f09b27589bfce587ef
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
            
            <div className='registerEmail'>
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

        </form>
<<<<<<< HEAD

=======
>>>>>>> fab71f6221ebfba85e2244f09b27589bfce587ef
    </form>

    </div>
    )


}

export default Register;
