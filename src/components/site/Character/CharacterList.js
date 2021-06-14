import React, {useState} from 'react';
import { Button, 
    TextField, 
    Select, 
    FormControl, 
    InputLabel } from '@material-ui/core';

const CharacterList = (props) => {
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

    console.log(props);
    const characterList = (e, CharacterList) => {
        e.preventDefault();
        fetch(`http://localhost:3000/character/${props.characterList.owner_id}`,{
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
            })
        }).then ((res) =>{
            props.fetchCharacters();
        })
    }
    
    return(
        <>
            {
                props.character.map((res,key) => {
                    return(
                        <tr key={key}>
                            <td>{CharacterData.charName}</td>
                            <td>{CharacterData.charClass}</td>
                            <td>{CharacterData.race}</td>
                            <td>{CharacterData.STR}</td>
                            <td>{CharacterData.DEX}</td>
                            <td>{CharacterData.CON}</td>
                            <td>{CharacterData.INT}</td>
                            <td>{CharacterData.WIS}</td>
                            <td>{CharacterData.CHA}</td>
                            <td>{CharacterData.description}</td>
                            <td>{CharacterData.campaign}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default CharacterList;