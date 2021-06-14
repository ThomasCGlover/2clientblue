import React from 'react';
import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';
//import DeleteIcon from '@material-ui/icons/Delete';
import './Logout.css';
import logoutWoodenX from '../../assets/logoutWoodenX.png';

const Logout = (props) => {
    return(
        <div>
           
        </div>
    )


//const useStyles = makeStyles((theme) => ({
  //button: {
    //margin: theme.spacing(1),
  //},
//export default function IconLabelButtons() {
  //const classes = useStyles();

  return (
   <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        //startIcon={<DeleteIcon />}
        img id="logoutWoodenX" src={logoutWoodenX} alt="Power Button" 
        onClick={props.clearSession}
      >
        Log Out
      </Button>
    </div>
);
};




export default Logout;
