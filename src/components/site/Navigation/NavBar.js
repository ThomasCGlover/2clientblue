import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
//import { makeStyles } from '@material-ui/core/styles';
import CharacterEdit from '../Character/CharacterEdit';
//import logoutWoodenX from '../../../assets/logoutWoodenX.png';
import { Navbar } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import Logout from '../Logout/Logout';
import CharacterIndex from '../Character/CharacterIndex';
import CharacterCreate from '../Character/CharacterCreate';
import FAQ from '../FAQ';
import { Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';




// const UseStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   paper: {
//     marginRight: theme.spacing(2),
//   },
// }));

const SiteBar = (props) => {
//   const classes = UseStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  // return focus to the button when we transitioned from !open -> open
  /*const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);*/
  
  return (
    
<Router>
    <>
        <div
        // className={classes.root}
        >
          <Paper
        //   className={classes.paper}
          >
            <MenuList>
             <MenuItem>CharacterIndex</MenuItem>
              <MenuItem>Character Create</MenuItem>
              <MenuItem>FAQ</MenuItem>
              <Logout />
    
            </MenuList>
          </Paper>
        </div>
          <div>
            <Button
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              Character Generator v1.0
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose}>Character Index</MenuItem>
                        <MenuItem onClick={handleClose}>Character Create</MenuItem>
                        <MenuItem onClick={handleClose}>FAQ</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
    
         <div className='navbar-route'>
    
                    <Switch>
                        <Route exact path='/characterindex'><CharacterIndex /></Route>
                        <Route exact path='/charactercreate'><CharacterCreate /></Route>
                        <Route exact path='/faq'><FAQ /></Route>
                        <Route exact path='/logout'><Logout /></Route>
                    </Switch>
    
          </div>
        </>
</Router>
  );
}

// export default withStyles()(SiteBar);
