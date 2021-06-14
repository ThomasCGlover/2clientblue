import React, {useState} from 'react';
import { Button, 
    TextField, 
    Select, 
    FormControl, 
    InputLabel } from '@material-ui/core';

const DisplayCharacter = (props) => {
    const [charName, setCharName] = useState(''); 
    const [charClass, setCharClass] = useState('');
    const [race, setEditRace] = useState('');
    const [STR, setStr] = useState('');
    const [DEX, setDex] = useState('');
    const [CON, setCon] = useState('');
    const [INT, setInt] = useState('');
    const [WIS, setEWis] = useState('');
    const [CHA, setCha] = useState('');
    const [description,setDescription] = useState('');
    const [campaign, setCampaign] = useState('');

        fetch(`http://localhost:3000/me/:id`,{
            method: 'GET',
            body: JSON.stringify({
                charName,
                charClass,
                race,
                STR,
                DEX,
                CON,
                INT,
                WIS,
                CHA,
                description,
                campaign
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then ((res) => res.json())
        .then((characterData) => {
            console.log(characterData);
        })
        
        return(
            <>
            <div className='mainDiv'>
                <h3>Character List</h3>
                <ul>
                    <li><TextField label='Name' value={charName}></TextField></li>
                    <li><TextField label='Class' value={charClass}></TextField></li>
                    <li><TextField label='Race' value={race}></TextField></li>
                    <li><TextField label='STR' value={STR}></TextField></li>
                    <li><TextField label='DEX' value={DEX}></TextField></li>
                    <li><TextField label='CON' value={CON}></TextField></li>
                    <li><TextField label='INT' value={INT}></TextField></li>
                    <li><TextField label='WIS' value={WIS}></TextField></li>
                    <li><TextField label='CHA' value={CHA}></TextField></li>
                    <li><TextField label='Description' value={description}></TextField></li>
                    <li><TextField label='Campaign' value={campaign}></TextField></li>
                </ul>
            </div>
            </>
    )
}
    
export default DisplayCharacter;