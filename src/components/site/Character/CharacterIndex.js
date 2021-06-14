import React, {useState, useEffect} from 'react';
import CharacterCreate from './CharacterCreate';


const CharacterIndex = (props) =>{
    console.log(props);
    return(
        <>
            {
                props.character.map((character,key) => {
                    return(
                        <tr key={key}>
                            <td>{character.charName}</td>
                            <td>{character.charClass}</td>
                            <td>{character.race}</td>
                            <td>{character.str}</td>
                            <td>{character.dex}</td>
                            <td>{character.con}</td>
                            <td>{character.int}</td>
                            <td>{character.wis}</td>
                            <td>{character.cha}</td>
                        </tr>
                    )
                })
            }
        </>
    )
    
}



export default CharacterIndex;