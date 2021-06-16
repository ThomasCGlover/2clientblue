import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../../../helpers/environment';
import { TextField } from '@material-ui/core';

const EmailUpdate = (props) =>{
    const [newEmail, setNewEmail] = useState(props.emailToUpdate.email);
    const emailEdit = (event, email) =>{
        event.preventDefault();
        fetch(`${APIURL}/user/update/${props.emailToUpdate.id}`,{
            method: 'PUT',
            body: JSON.stringify({ 
                user:{
                    email:newEmail
                }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then ((res)=>{
            console.log(newEmail);
            props.fetchEmail();
            props.updateEmailOff();
        })
    } 
    return(
        <>
        <Modal isOpen={true}>
            <ModalHeader>Change your email!</ModalHeader>
            <ModalBody>
                <Form onSubmit={emailEdit}>
                    <div>
                    <TextField id='outlined-basic' label='New Email' variant='outlined' value={newEmail} onChange={(e) =>setNewEmail(e.target.value)} />
                    </div>
                </Form>
            </ModalBody>
            <Button onClick={emailEdit}>Submit Changes</Button>
        </Modal>
        </>
    )
}
export default EmailUpdate;