import React, { useState } from 'react';
// import CharacterCreate from './CharacterCreate';
import CharacterEdit from './CharacterEdit';
// import { Button, 
//     TextField, 
//     Select, 
//     FormControl, 
//     InputLabel } from '@material-ui/core';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import CharacterIndex from './CharacterIndex';
import APIURL from '../../../helpers/environment'
import CharacterCSS from './Character.css';
import { makeStyles } from '@material-ui/core';
import { classExpression } from '@babel/types';




const CharacterTable = (props) => {
    const deleteCharacters = (character) =>{
        fetch(`${APIURL}/character/delete/${character.id}`,{
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken 
            })
        })
        .then(() =>props.fetchCharacters())
    }

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
                    <td>
                        <Button id='bttn' onClick={() => {props.editCharacterInfo(characters); props.updateOn()}}>Update Character</Button>
                        <Button id='bttn' onClick={() => deleteCharacters(characters)}>Delete Character</Button>
                    </td>
                  </tr>
    
                  )},
            )
        } 

        return (
            <>
            <h3 id='listHeader'>Character Information</h3>
            <hr />
        <Table >
            <thead>
                <tr id='tRow'>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Race</th>
                    <th>STR</th>
                    <th>DEX</th>
                    <th>CON</th>
                    <th>INT</th>
                    <th>WIS</th>
                    <th>CHA</th>
                    <th>Description</th>
                    <th>Background</th>
                    <th>Campaign</th>
                </tr>
            </thead>
            <tbody>
                {characterMapper()}
            </tbody>
        </Table>
            </>
        )
    }
    
    export default CharacterTable;

//     console.log(props.character);
//     if(this.props.character){
//         await fetchCharacters()
//        const charlist = this.props.character.map((characters, index => { 
//             return(
//                 <div className="card" key={index} style={{width: 30 + 'rem' }}>
//                 <div className="card-body">
//                   <h1 className="card-title">{characters.charName}</h1>
//                     <h2 className="card-text">{characters.description} </h2>
//                       <h4 className="card-text">{characters.background} </h4>
//                       <h4 className="card-text">{characters.campaign} </h4>
// <ul className="list-group list-group-flush">
//               <li className="list-group-item">Class: {characters.charClass}</li>
//               <li className="list-group-item">Race: {characters.race}</li>
//               <li className="list-group-item">STR: {characters.STR}</li>
//               <li className="list-group-item">DEX: {characters.DEX}</li>
//               <li className="list-group-item">CON: {characters.CON}</li>
//               <li className="list-group-item">INT: {characters.INT}</li>
//               <li className="list-group-item">WIS: {characters.WIS}</li>
//               <li className="list-group-item">CHA: {characters.CHA}</li>
//                 <Link to='/CharacterEdit'>
//                     <button type='button'>
//                         Edit
//                     </button>
//                 </Link>
//               {/* <li className="list-group-item"><a href={t.url} target="_blank" rel="noopener noreferrer" className="card-link">Trail Information</a></li> */}
//               </ul>
//               </div>
//           </div>
//             )
//         }))

//     }

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