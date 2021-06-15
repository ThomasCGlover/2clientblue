import React, {useEffect, useState} from 'react';
import Auth from './components/site/Auth/Auth.js';



import CharacterIndex from '../src/components/site/Character/CharacterIndex';





//import ReactDOM from 'react-dom';
//import Logout from './src/components/site/Logout/Logout';
import Logout from './components/site/Logout/Logout.js';
import NavBar from './components/site/Navigation/NavBar';


function App() {

  const [sessionToken, setSessionToken] = useState(undefined)

  useEffect(() => {
    if(localStorage.getItem(!undefined)) {
      setSessionToken(localStorage.getItem('token'))
      console.log(sessionToken);
    };
  });

  // useEffect(() => {
  //   if(localStorage.getItem('token')){

  //   }
  // }, [])
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const viewConductor = () => {
    return sessionToken === localStorage.getItem('token') ?
    <CharacterIndex sessionToken={sessionToken} /> : <Auth updateToken={updateToken}/>  //import character index file, change if needed
  }
  


  return (
    <div className="App">

      <NavBar clearSession = {clearToken} />

      {viewConductor()}
    </div>
    
  );


  
}





export default App;

