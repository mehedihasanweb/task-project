import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';

const MovieForm = () => {
    const loaderData = useLoaderData()
    console.log(loaderData);

    const { name, language, status } = loaderData

    const handleFormSubmit = (event) =>{
        event.preventDefault()

        const form = event.target.value 
        const name = form.name.value 
        console.log(name);
    }

    return (
        <Form onSubmit={handleFormSubmit} className='my-5'>
            <Form.Group className="mb-3">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control type="text" defaultValue={name} placeholder="Movie Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Language</Form.Label>
                <Form.Control type="text" defaultValue={language} placeholder="Language" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" placeholder="Status" defaultValue={status}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default MovieForm;