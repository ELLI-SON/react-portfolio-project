import { useState } from 'react';
import { Button, Label, Col, FormGroup, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage, validateYupSchema} from 'formik';



const NoteForm = () => {
    const[modalOpen, setModalOpen]= useState(false);

    const handleSubmit = (values)=>{
        const userNote = 
        {
            rating: values.rating,
            note: values.note, 
            date: new Date(Date.now()).toISOString()
        }
        console.log(userNote);
        setModalOpen(false);
    }
    return(
        <>
            <Button color= 'success' onClick={()=> setModalOpen(true)}> Add Notes</Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={()=> setModalOpen(false)}>Add Notes</ModalHeader>
                <ModalBody>
                    <Formik 
                        initialValues={{
                            rating: undefined,
                            note: ''
                        }}
                        onSubmit={handleSubmit}
    
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='rating'>What do you rate this as out of 5?</Label>
                                <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Field>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='notes'>Your Notes</Label>
                                <Field
                                    name='notes'
                                    as='textarea'
                                    rows='8'
                                    placeholder='Your Notes'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>Submit</Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default NoteForm;
