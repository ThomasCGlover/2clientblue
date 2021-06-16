import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// import DeleteIcon from '@material-ui/icons/Delete';
import './Logout.css'
import logoutWoodenX from '../../../assets/logoutWoodenX.png'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: 
  },
}))

export default function Logout(props) {
  //const logoutWoodenX =
  const classes = useStyles()

  return (
    <div className='logout'>
      <Button id='logout'
        onClick={props.clearSession}
        //set undefined ternary
          variant="contained"
          color="secondary"
          //setSessionToken(localStorage.setItem('token', undefined));
          //className={classes.button}
          // startIcon={DeleteIcon }
          //startIcon={logoutWoodenX}
        >
          Log Out
        </Button>


        

       </div>



    );
  }
  


// export default Logout;
