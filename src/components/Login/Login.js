import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, user } = useAuth();

    return (
        <div className='text-center mt-5'>
            <h2>Please Login </h2>
            <h1 className='text-danger'>{user.displayName}</h1>
            <img src={user.photoURL} alt="" srcset="" />
            <br />
            <button className='mt-3' onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <Link to="/home">Back home</Link>
        </div>
    );
};
export default Login;