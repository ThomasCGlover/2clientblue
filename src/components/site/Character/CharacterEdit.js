import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles'
import { Button, TextField, Select, FormControl, InputLabel, Modal } from '@material-ui/core';


const CharacterEdit = (props) =>{
    const [editCharName, setEditCharName] = useState(''); 
    const [editCharClass, setEditCharClass] = useState('');
    const [editRace, setEditRace] = useState('');
    const [editStr, setEditStr] = useState('');
    const [editDex, setEditDex] = useState('');
    const [editCon, setEditCon] = useState('');
    const [editInt, setEditInt] = useState('');
    const [editWis, setEditWis] = useState('');
    const [editCha, setEditCha] = useState('');
    const [editDescription,setEditDescription] = useState('');
    const [editCampaign, setEditCampaign] = useState('');

    const characterEdit = (event, character) =>{
        event.preventDefault();
        fetch(`http://localhost:3003/character/${props.characterToUpdate.id}`,{
            method: 'PUT',
            body: JSON.stringify({
                charName: editCharName,
                charClass: editCharClass,
                race: editRace,
                STR: editStr,
                DEX: editDex,
                CON: editCon,
                INT: editInt,
                WIS: editWis,
                CHA: editCha,
                description: editDescription,
                campaign: editCampaign
            })
        }).then ((res) =>{
            props.fetchCharacters();
            props.updateOff();
        })
    }
    return(
        <Modal
        open={open}>
            <h3>Edit your character</h3>
            <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <TextField id='outlined-basic' label='Name' variant='outlined' value={editCharName} onChange={(e) => setEditCharName(e.target.value)} />
                </div>
                <div>
                    <FormControl variant='outlined' className={classes.FormControl}>
                    <InputLabel>Class</InputLabel>
                    <Select 
                    id='demo-simple-select-outlined' 
                    value={editCharClass} onChange={(e) => setEditCharClass(e.target.value)}>
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
                    <FormControl variant='outlined' className={classes.FormControl}>
                        <InputLabel>Race</InputLabel>
                        <Select id='demo-simple-select-outlined' value={editRace} onChange={(e) => setEditRace(e.target.value)}>
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
                    <TextField label='Strength' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={editStr} onChange={(e) => setEditStr(e.target.value)} />
                    <TextField label='Dexterity' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={editDex} onChange={(e) => setEditDex(e.target.value)} />
                    <TextField label='Constitution' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={editCon} onChange={(e) => setEditCon(e.target.value)} />
                    <TextField label='Intelligence' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={EditInt} onChange={(e) => setEditInt(e.target.value)} />
                    <TextField label='Wisdom' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={editWis} onChange={(e) => setEditWis(e.target.value)} />
                    <TextField label='Charisma' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={editCha} onChange={(e) => setEditCha(e.target.value)} />
                </div>
                <div>
                    <TextField label='Character Description' id='outlined-size-small' defaultValue='' variant='outlined' value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                </div>
                <div>
                    <TextField label='Campaign' id='outlined-size-small' defaultValue='' variant='outlined' value={editCampaign} onChange={(e) => setEditCampaign(e.target.value)} />
                </div>
            </form>
            <Button type='submit'>Update Character</Button>
        </Modal>
    )
}
export default withStyles() (CharacterEdit);

