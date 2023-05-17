/* eslint-disable react/no-unescaped-entities */

import  { useContext, useState } from 'react';
import backgroundImage from '../../../../public/login.jpg';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';



const Login = () => {
    const { signIn, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
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
        <div className="w-5/6 mx-auto flex justify-center items-center h-screen bg-gray-100" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="w-2/6 bg-white rounded-lg shadow-lg p-6 bg-opacity-50">
                <h3 className="text-2xl font-semibold mb-4">Please Login</h3>
                <Form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Email address</label>
                        <input type="email" name="email" placeholder="Enter email" required className="rounded-md py-2 px-4 border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500 w-full" />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Password</label>
                        <input type="password" name="password" placeholder="Password" required className="rounded-md py-2 px-4 border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500 w-full" />
                    </div>
                    <p className='text-red-600 mb-2'>{error}</p>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login
                    </button>
                    <br />
                    <p className="text-secondary mt-4">
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-700 font-medium">Register</Link>
                    </p>
                    <p className='mx-auto text-gray-400'>or</p>
                </Form>
                <div className='flex justify-between'>
                        <button onClick={handleGoogleLogin} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-flex gap-1'>Google Sign-in</button>
                        
                    </div>
            </div>
        </div>
    );
};

export default Login;
