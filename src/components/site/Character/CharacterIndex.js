import React from 'react';
import CharacterCreate from './CharacterCreate';
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import CharacterList from './CharacterList';

const CharacterIndex = (props) =>{
    // console.log(props);

    return(
        <div>
        <h1>Test!!!</h1>
        <Button onClick={<CharacterCreate sessionToken={props.sessionToken}/>} >Create a new Character</Button>
        <Button onClick={<CharacterList sessionToken={props.sessionToken} />}>See your Characters</Button>
{/* //             {
//                 props.CharacterCreate.map((character,key) => {
//                     return(
//                         <tr key={key}>
//                             <td>{character.charName}</td>
//                             <td>{character.charClass}</td>
//                             <td>{character.race}</td>
//                             <td>{character.str}</td>
//                             <td>{character.dex}</td>
//                             <td>{character.con}</td>
//                             <td>{character.int}</td>
//                             <td>{character.wis}</td>
//                             <td>{character.cha}</td>
//                         </tr>
//                     )
//                 })
//             }*/}
    </div> 
    )
    
    }



export default withStyles(CharacterIndex);