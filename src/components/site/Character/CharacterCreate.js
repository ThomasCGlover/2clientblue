import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Button, TextField, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { Form } from 'reactstrap';
import APIURL from '../../../helpers/environment'
import { makeStyles } from '@material-ui/core';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles((theme)=>({
    root:{
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '25ch',
            padding: "10px",
            align: 'center',
            flexGrow: 1,
            // display: "flex",
            // justify-content: "center",
            // float: "center",
        },
    },
    formControl:{
        margin: theme.spacing(2),
        width:"20ch",
        align: 'center',
    }
}));


export default function CharacterCreate (props) {
    const [charName, setCharName] = useState('');
    const [charClass, setCharClass] = useState('');
    const [race, setRace] = useState('');
    const [str, setStr] = useState('');
    const [dex, setDex] = useState('');
    const [con, setCon] = useState('');
    const [int, setInt] = useState('');
    const [wis, setWis] = useState('');
    const [cha, setCha] = useState('');
    const [description, setDescription] = useState('');
    const [background, setBackground] = useState('');
    const [campaign, setCampaign] = useState('');
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${APIURL}/character/create`, {
            method: 'POST',
            body: JSON.stringify({
                character: {
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
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((res) => res.json())
            .then((charData) => {
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
                props.fetchCharacters();
            })
    }

    return (
        <>
        <div className="create">
            <h3 id='createHeader'>Create a new Character</h3>
            <Form
                //className={classes.root} 
                // autoComplete="off"
                className={classes.root}
                onSubmit={handleSubmit}
                >
                <div>
                <div>
                    <TextField id='outlined-basic' label='Name' variant='outlined' value={charName} onChange={(e) => setCharName(e.target.value)} />
                </div>
                <div className='characterGrid'>
                    <FormControl variant='outlined'
                    className={classes.formControl}
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
                    className={classes.formControl}
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
                    <TextField label='Character Description' id='outlined-multiline-static' multiline rows={4} defaultValue='' variant='outlined' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                <FormControl variant='outlined'
                    className={classes.formControl}
                    //className={classes.FormControl}
                    >
                <InputLabel>Background</InputLabel>
                        <Select
                            id='demo-simple-select-outlined'
                            value={background} onChange={(e) => setBackground(e.target.value)}>
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
                    <TextField label='Campaign' id='outlined-size-small' defaultValue='' variant='outlined' value={campaign} onChange={(e) => setCampaign(e.target.value)} />
                </div>
                </div>
            </Form>
            <Button onClick={handleSubmit}>Click to create character</Button>
            </div>
        </>
    )
}
// export default withStyles()(CharacterCreate);