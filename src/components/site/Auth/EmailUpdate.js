import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../../../helpers/environment';

const EmailUpdate = (props) =>{
    const [newEmail, setNewEmail] = useState(props.emailToUpdate.email);
    const emailEdit = (event, email) =>{
        event.preventDefault();
        fetch(`${APIURL}/update/${props.emailToUpdate.id}`,{
            method: 'PUT',
            body: JSON.stringify({ 
                email:{
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
        <Modal>
            <Form onSubmit={emailEdit}>
            <ModalHeader>Change your email!</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label>New Email:</Label>
                    <Input name='email' value={newEmail} onChange={(e) =>setNewEmail(e.target.value)} />
                </FormGroup>
            </ModalBody>
            </Form>
            <Button type='submit'>Submit Changes</Button>
        </Modal>
    )
}
export default EmailUpdate;