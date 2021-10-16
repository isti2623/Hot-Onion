import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, user } = useAuth();

    return (
        <div className='text-center mt-5'>
            {
                user.email ?
                    <h1 className='text-success'>{user.displayName}</h1>
                    :
                    <h1 className='text-danger'>Please Login</h1>
            }
            <br />
            {
                user.email ?
                    <h1>Your Have Successfully Looged in</h1>
                    :
                    <button className='mt-3' onClick={signInUsingGoogle}>Google Sign In</button>
            }

            <br />
            <Link to="/home">Back home</Link>
        </div>
    );
};
export default Login;