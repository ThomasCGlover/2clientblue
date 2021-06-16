import React from 'react';
import CharacterIndex from './CharacterIndex';
import { Button } from '@material-ui/core';


const EmailDisplay = (props) => {
    // const emailMapper= () =>{
    //     console.log(props.email.email);
    //     // return props.email.email.map((email) =>{
    //         return(
    //             <div>
    //                 <h3> Welcome {props.email.email}</h3>
    //                 <Button onClick={() =>{props.editEmailInfo(email); props.updateOn()}}>Update Email</Button>
    //             </div>
    //         )
    //     // })
    // }
    return (
        <div>
            <h3> Welcome {props.email.email}</h3>
            <Button onClick={() => { props.editEmailInfo(); props.updateEmailOn() }}>Update Email</Button>
        </div>
    )
}

export default EmailDisplay;