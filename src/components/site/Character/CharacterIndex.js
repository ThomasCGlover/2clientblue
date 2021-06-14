import React, { useState, useEffect } from "react";
// import CharacterCreate from "./CharacterCreate";
import { makeStyles } from "@material-ui/core";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
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

  export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
  return(
      <Card className>
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