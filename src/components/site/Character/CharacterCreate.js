import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles'
import { Button, TextField, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';


const CharacterCreate = (props) =>{
    const [charName, setCharName] = useState(''); 
    const [charClass, setCharClass] = useState('');
    const [race, setRace] = useState('');
    const [str, setStr] = useState('');
    const [dex, setDex] = useState('');
    const [con, setCon] = useState('');
    const [int, setInt] = useState('');
    const [wis, setWis] = useState('');
    const [cha, setCha] = useState('');
    const [description,setDescription] = useState('');
    const [campaign, setCampaign] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        fetch('http://localhost:3003/character/create', {
            method: 'POST',
            body: JSON.stringify({
                charName: charName,
                charClass: charClass,
                race: race,
                STR: str,
                DEX: dex,
                CON: con,
                INT: int,
                WIS: wis,
                CHA: cha,
                description: description,
                campaign: campaign
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((res) => res.json())
            .then((charData) =>{
                console.log(charData);
                // setCharName('');
                // setCharClass('');
                // setRace('');
                // setStr('');
                // setDex('');
                // setCon('');
                // setInt('');
                // setWis('');
                // setCha('');
                // setDescription('');
                // setCampaign('');
                // props.fetchCharacters('');
            })
    }

    return(
        <>
            <h3>Create a new Character!</h3>
            <form 
            //className={classes.root} 
            autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <TextField id='outlined-basic' label='Name' variant='outlined' value={charName} onChange={(e) => setCharName(e.target.value)} />
                </div>
                <div>
                    <FormControl variant='outlined' 
                    //className={classes.FormControl}
                    >
                    <InputLabel>Class</InputLabel>
                    <Select 
                    id='demo-simple-select-outlined' 
                    value={charClass} onChange={(e) => setCharClass(e.target.value)}>
                        <MenuItem value=''> <em>None</em></MenuItem>
                        <MenuItem value='Barbarian'>Barbarian</MenuItem>
                        <MenuItem value='Bard' >Bard</MenuItem>
                        <MenuItem value='Cleric' >Cleric</MenuItem>
                        <MenuItem value='Druid' >Druid</MenuItem>
                        <MenuItem value='Fighter' >Fighter</MenuItem>
                        <MenuItem value='Monk' >Monk</MenuItem>
                        <MenuItem value='Paladin' >Paladin</MenuItem>
                        <MenuItem value='Ranger' >Ranger</MenuItem>
                        <MenuItem value='Rouge' >Rouge</MenuItem>
                        <MenuItem value='Sorcerer' >Sorcerer</MenuItem>
                        <MenuItem value='Warlock' >Warlock</MenuItem>
                        <MenuItem value='Wizard' >Wizard</MenuItem>
                    </Select>
                    </FormControl>
                    <FormControl variant='outlined' 
                    //className={classes.FormControl}
                    >
                        <InputLabel>Race</InputLabel>
                        <Select id='demo-simple-select-outlined' value={race} onChange={(e) => setRace(e.target.value)}>
                            <MenuItem value='' ><em>None</em></MenuItem>
                            <MenuItem value='Dwarf' >Dwarf</MenuItem>
                            <MenuItem value='Elf' >Elf</MenuItem>
                            <MenuItem value='Halfling' >Halfling</MenuItem>
                            <MenuItem value='Human' >Human</MenuItem>
                            <MenuItem value='DragonBorn' >DragonBorn</MenuItem>
                            <MenuItem value='Gnome' >Gnome</MenuItem>
                            <MenuItem value='Half-Elf' >Half-Elf</MenuItem>
                            <MenuItem value='Half-Orc' >Half-Orc</MenuItem>
                            <MenuItem value='Tiefling' >Tiefling</MenuItem>

                        </Select>
                    </FormControl>
                </div>
                <div>
                    <TextField label='Strength' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={str} onChange={(e) => setStr(e.target.value)} />
                    <TextField label='Dexterity' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={dex} onChange={(e) => setDex(e.target.value)} />
                    <TextField label='Constitution' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={con} onChange={(e) => setCon(e.target.value)} />
                    <TextField label='Intelligence' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={int} onChange={(e) => setInt(e.target.value)} />
                    <TextField label='Wisdom' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={wis} onChange={(e) => setWis(e.target.value)} />
                    <TextField label='Charisma' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={cha} onChange={(e) => setCha(e.target.value)} />
                </div>
                <div>
                    <TextField label='Character Description' id='outlined-size-small' defaultValue='' variant='outlined' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <TextField label='Campaign' id='outlined-size-small' defaultValue='' variant='outlined' value={campaign} onChange={(e) => setCampaign(e.target.value)} />
                </div>
            </form>
            <Button type='submit' onClick={console.log("character")}>Click to create character</Button>
        </>
    )
}
export default withStyles() (CharacterCreate);