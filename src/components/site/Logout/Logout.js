import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import './Logout.css';
import logoutWoodenX from '../../../assets/logoutWoodenX.png';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  export default
   function Logout(props) {
    //const logoutWoodenX = 
    const classes = useStyles();
  
    return (
      <div>
        <Button onClick={props.onClick}
          variant="contained"
          color="secondary"
          //clearSession={props.onClick}
          //className={classes.button}
          startIcon={<DeleteIcon />}
          //startIcon={logoutWoodenX}
        >
          Log Out
        </Button>
        
        
      </div>
    );
  }
  


//export default Logout;
