import React, { useState } from 'react';
// import CharacterCreate from './CharacterCreate';
// import CharacterEdit from './CharacterEdit';
// import { Button, 
//     TextField, 
//     Select, 
//     FormControl, 
//     InputLabel } from '@material-ui/core';
import { Table, Button } from 'reactstrap';

const CharacterTable = (props) => {
    console.log(props.character);
    const characterMapper = () => {

        return props.character.map((characters, index) => {
            return (


                <tr key={index}>
                    <td>{characters.charName}</td>
                    <td>{characters.charClass}</td>
                    <td>{characters.race}</td>
                    <td>{characters.STR}</td>
                    <td>{characters.DEX}</td>
                    <td>{characters.CON}</td>
                    <td>{characters.INT}</td>
                    <td>{characters.WIS}</td>
                    <td>{characters.CHA}</td>
                    <td>{characters.description}</td>
                    <td>{characters.background}</td>
                    <td>{characters.campaign}</td>
                    <td>{characters.id}</td>
                </tr>

            )
        },
        )
    }
    return (
        <>
            <h3>Character Information</h3>
            <Table>
                <thead></thead>
                <tbody>{characterMapper()}</tbody>
            </Table>
        </>
    )
}

export default CharacterTable;
// const CharacterList = (props) => {
//     const fetchCharacters = () => {
//         fetch('http://localhost:3000/character/me/:id', {
//             method: 'GET',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.sessionToken
//             })
//         }).then((res) => res.json())
//         .then((logData) => {
//             setCharacters(logData)
//         })
//     }
//         const characterMap = () => {
//             return props.characters.map((character, index) => {
//         return(
//             <>
//             <div className='mainDiv'>
//                 <h3>Character List</h3>
//                 <ul>
//                     <li><TextField label='Name' value={charName}></TextField></li>
//                     <li><TextField label='Class' value={charClass}></TextField></li>
//                     <li><TextField label='Race' value={race}></TextField></li>
//                     <li><TextField label='STR' value={STR}></TextField></li>
//                     <li><TextField label='DEX' value={DEX}></TextField></li>
//                     <li><TextField label='CON' value={CON}></TextField></li>
//                     <li><TextField label='INT' value={INT}></TextField></li>
//                     <li><TextField label='WIS' value={WIS}></TextField></li>
//                     <li><TextField label='CHA' value={CHA}></TextField></li>
//                     <li><TextField label='Description' value={description}></TextField></li>
//                     <li><TextField label='Campaign' value={campaign}></TextField></li>
//                 </ul>
//             </div>
//             </>
//     )
//         })
// }

// export default DisplayCharacter;