import React, { useState, useEffect } from "react";
import CharacterCreate from "./CharacterCreate";
import { makeStyles } from "@material-ui/core/styles";
import {Card} from '@material-ui/core';
import {CardActions} from '@material-ui/core';
import {CardContent} from '@material-ui/core'; 
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core'; 
import CharacterTable from "./CharacterList";
import { withStyles } from "@material-ui/styles";
import CharacterEdit from "./CharacterEdit";
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Form, Container, Row, Col } from 'reactstrap';
import NavBar from "../Navigation/NavBar";
import APIURL from '../../../helpers/environment'
import EmailUpdate from "../Auth/EmailUpdate";
import EmailDisplay from './EmailDisplay';


const CharacterIndex = ({sessionToken}) => {

    const [character, setCharacters] = useState([]);
    const[createActive, setCreateActive] = useState(false);
    const[updateActive, setUpdateActive] = useState(false);
    const [characterToUpdate, setCharacterToUpdate] = useState({});
    const [emailToUpdate, setEmailToUpdate] =useState({});
    const [email, setEmail] = useState([]);
    const [updateEmailActive, setUpdateEmailActive] = useState(false);
    // const [id, idToUpdate] = useState({})

    const fetchEmail = async () =>{
        fetch(`${APIURL}/user`, {
            method:"GET",
            // body: JSON.stringify({
            //     email:{
            //         id: idToUpdate,
            //         email: emailToUpdate
                
            //     }
            // }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": sessionToken,
            }),
        })
        .then((res) => res.json())
        .then((emailData) =>{
            // setEmail(emailData)
            console.log(emailData);
        })
    };
    const editEmailInfo = (email) =>{
        setEmailToUpdate(email);
        console.log(email);

    }
    const fetchCharacters = async () => {
        await fetch(`${APIURL}/character`, {
            method: "GET",
            //   body: JSON.stringify({
            //       character: character
            //   }),
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': sessionToken,
            }),
        })
            .then((res) => res.json())
            .then((logData) => {
                setCharacters(logData)
                console.log(logData)
            }
            )
    };
    const editCharacterInfo = (character) =>{
        setCharacterToUpdate(character);
        console.log(character);
    }

    
    const displayCreate = () => {
        return(
        <CharacterCreate  />)
    }
    // const createOn = () =>{
    //     setCreateActive(true);
    //     <CharacterCreate  />
    // }

    // const createOff = () =>{
    //     setCreateActive(false)
    // }
    const updateOn = ()=>{
        setUpdateActive(true)
    }
    const updateOff =() =>{
        setUpdateActive(false)
    }
    const updateEmailOn = () =>{
        setUpdateEmailActive(true)
    }
    const updateEmailOff = () =>{
        setUpdateEmailActive(false)
    }
    useEffect(() => {
        fetchCharacters();
        fetchEmail();
    }, []);

    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });

    

    return (
        <>
            <Card>
                <CardContent>
                    <Typography>
                        {<EmailDisplay email={email} fetchEmail={fetchEmail} editEmailInfo={editEmailInfo} updateEmailOn={updateEmailOn} sessionToken={sessionToken} />}
                    </Typography>
                </CardContent>
                <CardActions>
                    {updateEmailActive ? <EmailUpdate emailToUpdate={emailToUpdate} updateEmailOff={updateEmailOff} sessionToken={sessionToken} fetchEmail={fetchEmail}/> : <></>}
                </CardActions>
            </Card>
            <Card className>
                <CardContent>
                    <Typography className variant='h5'>
                        {<CharacterTable character={character} fetchCharacters={fetchCharacters} editCharacterInfo={editCharacterInfo} updateOn={updateOn} sessionToken={sessionToken}/>}
                    </Typography>
                </CardContent>
                <CardActions>
                    {updateActive ? <CharacterEdit characterToUpdate={characterToUpdate} updateOff={updateOff} sessionToken={sessionToken} fetchCharacters={fetchCharacters}/> : <></>}
                </CardActions>
            </Card>
            <CharacterCreate sessionToken={sessionToken} fetchCharacters={fetchCharacters}/>
            {/* <Button onClick={displayCreate()}>Create New Character</Button> */}
            {/* <Container>
                <Row>
                <Col>
                <CharacterCreate toke={props.sessionToken}/>
                </Col>
                </Row>
            </Container> */}
            {/* <Form onSubmit={displayCreate}>
                
                type='submit'
                // onClick={createOn()} 
                
                Create a new Character
                
            </Form> */}
        </>
    )
};



export default withStyles() (CharacterIndex);
    
    //   const characterMap = () => {
    //     return props.character.map((character, index) => {
    //   return (
    //     <>

    //         <tr key={index}>
    //           <td>{character.charName}</td>
    //           <td>{character.charClass}</td>
    //           <td>{character.race}</td>
    //           <td>{character.str}</td>
    //           <td>{character.dex}</td>
    //           <td>{character.con}</td>
    //           <td>{character.int}</td>
    //           <td>{character.wis}</td>
    //           <td>{character.cha}</td>
    //         </tr>;
    //     </>
    //         )},
    //   )}
  
//   const characterMap = () => {
//     return props.character.map((character, index) => {
//   return (
//     <>

//         <tr key={index}>
//           <td>{character.charName}</td>
//           <td>{character.charClass}</td>
//           <td>{character.race}</td>
//           <td>{character.str}</td>
//           <td>{character.dex}</td>
//           <td>{character.con}</td>
//           <td>{character.int}</td>
//           <td>{character.wis}</td>
//           <td>{character.cha}</td>
//         </tr>;
//     </>
//         )},
//   )}