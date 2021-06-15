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
// import { BrowserRouter as Router } from 'react-router-dom';
import { Form, Container, Row, Col } from 'reactstrap';
import NavBar from "../Navigation/NavBar";

const CharacterIndex = (props) => {

    const [character, setCharacters] = useState([]);
    const[createActive, setCreateActive] = useState(false);
    const[updateActive, setUpdateActive] = useState(false);
    const [characterToUpdate, setCharacterToUpdate] = useState({})

    const fetchCharacters = async () => {
        await fetch("http://localhost:3003/character", {
            method: "GET",
            //   body: JSON.stringify({
            //       character: character
            //   }),
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': props.sessionToken,
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
        <CharacterCreate token={props.token} />)
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

    useEffect(() => {
        fetchCharacters();
    }, []);

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: "inline-block",
            margin: "0 2px",
            transform: "scale(0.8)",
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
            <Card className>
                <CardContent>
                    <Typography className variant='h5'>
                        {<CharacterTable character={character} fetchCharacters={fetchCharacters} editCharacterInfo={editCharacterInfo} sessionToken={props.sessionToken}/>}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Router>
                        <Route to='/character/CharacterEdit'><CharacterEdit characterToUpdate={characterToUpdate} fetchCharacters={fetchCharacters} sessionToken={props.sessionToken}/></Route>
                    <Link to='/character/CharacterEdit'>
                    <Button size='small'>Edit</Button>
                    </Link>
                    </Router>
                </CardActions>
            </Card>
            <CharacterCreate sessionToken={props.sessionToken} fetchCharacters={fetchCharacters}/>
            {/* <Button onClick={displayCreate()}>Create New Character</Button> */}
            {/* <Container>
                <Row>
                    <Col>
                    <CharacterCreate toke={props.toke}/>
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

