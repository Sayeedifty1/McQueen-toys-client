/* eslint-disable react/no-unescaped-entities */

import  { useContext, useState } from 'react';
import {FcGoogle} from 'react-icons/fc';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';



const Login = () => {
    const { signIn, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle ('Login');
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState()
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            });
    };
    const handleGoogleLogin = () => {
       signInWithGoogle()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            });
    };
   
    return (
        <div className="md:w-5/6 mx-auto flex justify-center items-center h-screen bg-gray-100" style={{
            backgroundImage: `url(https://i.ibb.co/f0y4wjG/cover.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="md:w-2/6 bg-white rounded-lg shadow-lg p-6 bg-opacity-20">
                <h3 className="text-2xl font-semibold mb-4 text-white">Please Login</h3>
                <Form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-white">Email address</label>
                        <input type="email" name="email" placeholder="Enter email" required className="rounded-md py-2 px-4 border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500 w-full" />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-white">Password</label>
                        <input type="password" name="password" placeholder="Password" required className="rounded-md py-2 px-4 border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500 w-full" />
                    </div>
                    <p className='text-red-600 mb-2'>{error}</p>
                    <button type="submit" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white  hover:border-yellow-500 mt-4 lg:mt-0">
                        Login
                    </button>
                    <br />
                    <p className="text-white mt-4">
                        Don't have an account? <Link to="/register" className="text-blue-700 hover:text-blue-900 font-medium ">Register</Link>
                    </p>
                    <div className="divider divider-horizontal  text-gray-400">OR</div>
                </Form>
                <div className='flex justify-between'>
                        <button onClick={handleGoogleLogin} className='inline-block px-6 py-4 leading-none border rounded text-white border-white  hover:border-yellow-500 mt-4 lg:mt-0'><FcGoogle></FcGoogle></button>
                        
                    </div>
            </div>
        </div>
    );
};

export default Login;
