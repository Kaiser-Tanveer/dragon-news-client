import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const LogIn = () => {
    // Error State 
    const [error, setError] = useState();
    // Redirect login 
    const location = useLocation();

    const from = location?.state?.form?.pathname || "/";
    // Navigate 
    const navigate = useNavigate();
    // Using context for login 
    const {emailSignIn, setLoading} = useContext(AuthContext);

    const submitHandler = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // Log in Method 
        emailSignIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            if(user.emailVerified){
                navigate(from, {replace: true});
            }
            else{
                toast.error('Your email is not verified! Please, verify!!!')
            }
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
        .finally(()=>{
            setLoading(false);
        })
    }
    return (
    <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className='text-danger'>
            {error}
        </Form.Text>
        <br />
        <Button variant="primary" type="submit">
            Log in
        </Button>
    </Form>
    );
};

export default LogIn;