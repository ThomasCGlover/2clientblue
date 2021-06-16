import React, {useEffect, useState} from 'react';
import Auth from './components/site/Auth/Auth.js';



import CharacterIndex from '../src/components/site/Character/CharacterIndex';





//import ReactDOM from 'react-dom';
//import Logout from './src/components/site/Logout/Logout';
import Logout from './components/site/Logout/Logout.js';
import NavBar from './components/site/Navigation/NavBar';

// import CharacterIndex from '../src/components/site/Character/CharacterIndex';
import { BrowserRouter as Router } from 'react-router-dom';




function App() {
  
  const [sessionToken, setSessionToken] = useState(undefined)
  const [characterToUpdate, setCharacterToUpdate] = useState({}) 
  
  useEffect(() => {
    if(localStorage.getItem(!undefined)) {
      setSessionToken(localStorage.getItem('token'))
      console.log(sessionToken);
    };
  });

  
  
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
  
  
    const updateCharacter = (character) =>{
      setCharacterToUpdate(character)
    }
  

  return (
    <div className="App">

      <NavBar 
      clearSession = {clearToken}
      characterToUpdate={characterToUpdate}
      />

      {viewConductor()}
    </div>
    
  );


  
}





export default App;

