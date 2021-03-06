import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Button, TextField, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { Form, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../../../helpers/environment'
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    root:{
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '20ch',
            // padding: "10px",
            align: 'center',
            flexGrow: 1,
            // display: "flex",
            // justify-content: "center",
            // float: "center",
        },
    },
    formControl:{
        margin: theme.spacing(1),
        width:"20ch",
        align: 'center',
        textAlign: "center"
    },
    statControl:{
        margin: theme.spacing(1),
        width:"20ch",
        align: 'center',
        textAlign: "center"
    },
    divControl:{
        // display: 'flex',
        // justifyContent: 'space-between',
        // alignItems:'center',
        float:'center',
        textAlign:'center'
    }
}));
const CharacterEdit = (props) => {
    const [editCharName, setEditCharName] = useState(props.characterToUpdate.charName);
    const [editCharClass, setEditCharClass] = useState(props.characterToUpdate.charClass);
    const [editRace, setEditRace] = useState(props.characterToUpdate.race);
    const [editStr, setEditStr] = useState(props.characterToUpdate.STR);
    const [editDex, setEditDex] = useState(props.characterToUpdate.DEX);
    const [editCon, setEditCon] = useState(props.characterToUpdate.CON);
    const [editInt, setEditInt] = useState(props.characterToUpdate.INT);
    const [editWis, setEditWis] = useState(props.characterToUpdate.WIS);
    const [editCha, setEditCha] = useState(props.characterToUpdate.CHA)
    const [editDescription, setEditDescription] = useState(props.characterToUpdate.description);
    const [editBackground, setEditBackground] = useState(props.characterToUpdate.background)
    const [editCampaign, setEditCampaign] = useState(props.characterToUpdate.campaign);
    const classes = useStyles();

    const characterEdit = (event, characters) => {
        event.preventDefault();
        fetch(`${APIURL}/character/${props.characterToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                character: {
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
                    background: editBackground,
                    campaign: editCampaign
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((res) => {
            props.fetchCharacters();
            props.updateOff();
        })
    }
    return (
        <>
            <div className={classes.divControl}>
            <h3>Edit your character</h3>
            <Form className={classes.root}>
                <Modal isOpen={true}>
                <ModalHeader>Update Character Information</ModalHeader>
                <ModalBody>
                    <Form
                        className={classes.root} autoComplete="off"
                        onSubmit={characterEdit}>
                        <div>
                            <TextField id='outlined-basic' label='Name' variant='outlined' value={editCharName} onChange={(e) => setEditCharName(e.target.value)} />
                        </div>
                        <div>
                            <FormControl variant='outlined'
                                className={classes.FormControl}
                            >
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
                            <FormControl variant='outlined'
                                className={classes.FormControl}
                            >
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


                            <TextField label='Intelligence' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={editInt} onChange={(e) => setEditInt(e.target.value)} />


                            <TextField label='Wisdom' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={editWis} onChange={(e) => setEditWis(e.target.value)} />
                            <TextField label='Charisma' id='outlined-size-small' defaultValue='' variant='outlined' size='small' value={editCha} onChange={(e) => setEditCha(e.target.value)} />
                        </div>
                        <div>
                            <TextField label='Character Description' id='outlined-size-small' defaultValue='' variant='outlined' value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                        </div>
                        <div>
                            <FormControl variant='outlined'
                                className={classes.formControl}
                            //className={classes.FormControl}
                            >
                                <InputLabel>Background</InputLabel>
                                <Select
                                    id='demo-simple-select-outlined'
                                    value={editBackground} onChange={(e) => setEditBackground(e.target.value)}>
                                    <MenuItem value=''> <em>None</em></MenuItem>
                                    <MenuItem value='Acolyte'>Acolyte</MenuItem>
                                    <MenuItem value='Criminal/Spy' >Criminal/Spy</MenuItem>
                                    <MenuItem value='Folk Hero' >Folk Hero</MenuItem>
                                    <MenuItem value='Haunted One' >Haunted One</MenuItem>
                                    <MenuItem value='Noble' >Noble</MenuItem>
                                    <MenuItem value='Sage' >Sage</MenuItem>
                                    <MenuItem value='Soldier' >Soldier</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <TextField label='Campaign' id='outlined-size-small' defaultValue='' variant='outlined' value={editCampaign} onChange={(e) => setEditCampaign(e.target.value)} />
                        </div>
                    </Form>
                    <Button onClick={characterEdit}>Update Character</Button>
                </ModalBody>
            </Modal>
            </Form>
        </div>
        </>
    )
}

export default withStyles()(CharacterEdit);