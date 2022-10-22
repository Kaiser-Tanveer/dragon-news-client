import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const Profile = () => {
    // Getting form values by Context 
    const { user } = useContext(AuthContext);
    // Getting form value with useState 
    const [name, setName] = useState(user.displayName);

    const submitHandler = e => {
        e.preventDefault();
        console.log(name);
    }

    const nameChangeHandler = e => {
        setName(e.target.value);
    }
    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder='Enter Email' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={nameChangeHandler} type="name" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control defaultValue={user?.photoURL} type="name" placeholder="Enter PhotoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;