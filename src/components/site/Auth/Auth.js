import React from 'react';
import './Auth.css';
import Login from './Login';
import Register from './Register';

const Auth = (props) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [login, setLogin] = useState(true);

    // const title = () => {
    //     return login ? 'Login' : 'Register';
    // }


    // const loginToggle = (e) => {
    //     e.preventDefault();
    //     setLogin(!login);
    //     setEmail('');
    //     setPassword('');
        
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // let reqBody = login ? 
    //     // {
    //     //     email: email,
    //     //     password: password
    //     // } : {
    //     //     email: email,
    //     //     password: password
    //     // }

    //     let url = login ? 'http://localhost:3003/user/login' :
    //     'http://localhost:3003/user/register';

    //     fetch(url, {
    //         method: 'POST',
    //         body: JSON.stringify(({user: {email: email, password: password}})),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //         })
    // })
    //     .then(response => response.json())
    //     .then(json => props.updateLocalStorage(json.token)) //look over
    //     .catch(err =>  console.log(err))
    

    // }

    return(
        <div>
        <h1>Dungeons & Dragons Character Creator</h1>
        <Login updateToken={props.updateToken}/>
        <Register updateToken={props.updateToken}/>
        </div>
        // <div>
        //     <form>
        //         <h1>{title()}</h1>
        //         <label htmlFor="email">Email:</label>
        //         <br/>
        //         <input type="text" 
        //         id='email' 
        //         value={email} 
        //         onChange={(e) => setEmail(e.target.value)} />
        //         <br/>
        //         <label htmlFor="password">Password:</label>
        //         <br/>
        //         <input type="password" 
        //         id='password' 
        //         value={password} 
        //         onChange={(e) => setPassword(e.target.value)} />
        //         <br/>
        //         <button onClick={loginToggle}>Register/Login</button>
        //         <br />
        //         <button type="submit" onClick={handleSubmit}>Submit</button>
        //     </form>
        // </div>
    )
    }


export default Auth;
