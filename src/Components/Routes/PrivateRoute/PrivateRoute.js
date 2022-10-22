import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    // Using Context to access user 
    const {user, loader} = useContext(AuthContext);
    // To redirect the path after log in 
    const location = useLocation();

    
if(loader){
    return <Spinner animation='border' variant='secondary' />
}

    if(!user){
        return <Navigate to="/logIn" state={{form: location}} replace/>
    }
    else{
        return children;
    }

};

export default PrivateRoute;