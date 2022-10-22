import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    // use context to create user 
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);

    // Error Handling State 
    const [error, setError] = useState();

    // Terms State 
    const [accepted, setAccepted] = useState(false);

    // submitHandler
    const submitHandler = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        // creating user 
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
            form.reset();
            profileUpdateHandler(name, photoURL);
            verifyEmailHandler();
            toast.success('Please, Verify your email before log in');
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    }

    // Update Profile Handler 
    const profileUpdateHandler = (name, photoURL) => {
        const profile = {
            displayName : name,
            photoURL : photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error => {
            console.error(error)
        })
    }

    // Verify Email Handler 
    const verifyEmailHandler = () => {
        verifyEmail()
        .then(()=> {})
        .catch(error=>{console.error(error)})
    }

    // Terms and conditions Handler 
    const termsHandler = e => {
        setAccepted(e.target.checked);
    }
    return (
        <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name='name' type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name='photoURL' type="text" placeholder="Enter Your Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Your Email</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className='text-danger'>
            {error}
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onClick={termsHandler} type="checkbox" label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
            Register
        </Button>
    </Form>
    );
};

export default Register;