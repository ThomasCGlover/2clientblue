import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const EmailUpdate = (props) =>{
    const [newEmail, setNewEmail]= useState(props.emailToUpdate.email)
    const emailEdit = (event, email) =>{
        event.preventDefault();
        fetch(`http://localhost:3003/update/${props.emailToUpdate.id}`,{
            method: 'PUT',
            body: JSON.stringify({ email:newEmail }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then ((res)=>{
            console.log(newEmail);
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