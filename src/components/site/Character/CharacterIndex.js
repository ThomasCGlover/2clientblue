import React, { useState, useEffect } from "react";
// import CharacterCreate from "./CharacterCreate";
import { makeStyles } from "@material-ui/core/styles";
import {Card} from '@material-ui/core';
import {CardActions} from '@material-ui/core';
import {CardContent} from '@material-ui/core'; 
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core'; 
import CharacterTable from "./CharacterList";
import { withStyles } from "@material-ui/styles";

const CharacterIndex = (props) => {
  const [character, setCharacters] = useState([]);

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
      .then((logData) =>{
        setCharacters(logData)
        console.log(logData)
      }
      )};

  useEffect(() => {
    fetchCharacters();
  }, []);

 
  return(
      <Card>
        <CardContent>
            <Typography className variant='h5'>
                {<CharacterTable character={character} fetchCharacters={fetchCharacters} />}
            </Typography> 
        </CardContent>
        <CardActions>
        <Button size='small'>Edit</Button>
        </CardActions>
    </Card>
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