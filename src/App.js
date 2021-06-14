import React, {useEffect, useState} from 'react';
import Auth from './components/site/Auth/Auth.js';
import CharacterCreate from '../src/components/site/Character/CharacterCreate';
//import ReactDOM from 'react-dom';
import Logout from './components/site/Logout/Logout.js';
import NavBar from './components/site/Navigation/NavBar';
// import CharacterIndex from '../src/components/site/Character/CharacterIndex';

function App() {

  const [sessionToken, setSessionToken] = useState('')

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
    <CharacterCreate sessionToken={sessionToken} /> : <Auth updateToken={updateToken}/>  //import character index file, change if needed
  }
  


  return (
    <div className="App">
      <NavBar />
      {viewConductor()}
    </div>
    
  );

  

}



export default App;
