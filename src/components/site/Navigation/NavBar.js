import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Box from '@material-ui/core/Box';
//import { makeStyles } from '@material-ui/core/styles';
import CharacterEdit from '../Character/CharacterEdit';
//import logoutWoodenX from '../../../assets/logoutWoodenX.png';
import { Navbar } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import Logout from '../Logout/Logout';
import CharacterIndex from '../Character/CharacterIndex';
import CharacterCreate from '../Character/CharacterCreate';
import FAQ from '../FAQ'
import Splash from '../Splash'
import { Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../Navigation/NavBar.css';

import App from '../../../App';

import NavBarCSS from './NavBar.css';



// const styles = {
//   root: {
//     display: 'flex',
//   },
//   paper: {
//     marginRight: theme.spacing(2),
//   },
//}


// const styles = {
//   root: {
//     width: '10%',
//     marginTop: '5em',
//     backgroundColor: 'black',
//     color: '#F78A7E'
//   },
  // icon: {
  //   color: '#F78A7E'
  // }
//}

const SiteBar = (props) => {
 

  
  return (
    
<Router>
    <>

        <div>
             <Link to='/characterindex'><Box component="div" display="inline" p={1} m={1} bgcolor="background.paper">Character Index</Box></Link>
             <Link to='/charactercreate'><Box component="div" display="inline" p={1} m={1} bgcolor="background.paper">Character Create</Box></Link>
             <Link to='/FAQ'><Box component="div" display="inline" p={1} m={1} bgcolor="background.paper">FAQ</Box></Link>
             <Link to='/'><Box component="div" display="inline" p={1} m={1} bgcolor="background.paper"><Logout clearSession={props.clearSession} /></Box></Link>
             
    
         

        </div>
    
        <div className='navbar-route'>
    
                    <Switch>
                        <Route exact path='/characterindex'><CharacterIndex /></Route>
                        <Route exact path='/charactercreate'><CharacterCreate /></Route>
                        <Route exact path='/FAQ'><FAQ /></Route>
                        <Route exact path='/character/CharacterEdit'><CharacterEdit characterToUpdate={props.characterToUpdate} fetchCharacters={props.fetchCharacters} sessionToken={props.sessionToken}/></Route>

                    </Switch>

        </div>
        </>

</Router>
  );
}

export default SiteBar;
