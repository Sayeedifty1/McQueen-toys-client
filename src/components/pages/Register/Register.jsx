import { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    const { createUser, userProfileUpdate } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState();
    const location = useLocation();
    useTitle ('Register');
    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)
        createUser(email, password)

            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigate(from, { replace: true });
                // update user photo url and name
                userProfileUpdate(name, photo)
                    .then(() => {
                        console.log('User profile updated successfully');

                    })
                    .catch(error => {
                        console.log('Failed to update user profile', error);
                    });
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message);
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <div className="w-5/6 mx-auto flex justify-center items-center h-screen bg-gray-100" style={{
            backgroundImage: `url(https://i.ibb.co/f0y4wjG/cover.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="w-2/6 bg-white rounded-lg shadow-lg p-6 bg-opacity-20">
                <h3 className="text-xl text-white font-semibold mb-6">Please Register</h3>
                <Form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-2" htmlFor="name">Name</label>
                        <input className="border rounded-lg px-3 py-2 w-full" type="text" name='name' placeholder="Your Name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-2" htmlFor="photo">Photo URL</label>
                        <input className="border rounded-lg px-3 py-2 w-full" type="text" name='photo' placeholder="Photo URL" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-2" htmlFor="email">Email address</label>
                        <input className="border rounded-lg px-3 py-2 w-full" type="email" name='email' placeholder="Enter email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-2" htmlFor="password">Password</label>
                        <input className="border rounded-lg px-3 py-2 w-full" type="password" name='password' placeholder="Password" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-2" htmlFor="accept">Accept <Link to="/terms" className="text-blue-600 hover:underline">Terms and Conditions</Link></label>
                        <input onClick={handleAccepted} type="checkbox" name="accept" className="mr-2" />
                        <span className='text-white'>I agree to the terms and conditions</span>
                    </div>

                    <p className='text-red-600 mb-2'>{error}</p>

                    <button disabled={!accepted} className={`relative border-2 rounded-2xl border-white bg-transparent py-2.5 px-5 font-medium text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 before:rounded-2xl ${!accepted ? 'opacity-50 cursor-not-allowed' : ''}`} type="submit">
                        Register
                    </button>
                    <br />
                    <p className="text-red-500 text-sm mt-4">
                        Already Have an Account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                    </p>
                    <p className="text-success"></p>
                    <p className="text-danger"></p>
                </Form>
            </div>
        </div>
    );
};

export default Register;
