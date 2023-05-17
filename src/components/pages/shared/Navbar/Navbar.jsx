
import logo from "../../../../../public/logo.png"
import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div className="sticky top-0 z-50">
            <nav className="flex items-center justify-between flex-wrap text-black shadow px-6 bg-base-200">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <img className="h-20 w-auto" src={logo}alt="Logo" />
                    <h1 className='text-2xl border-2 px-1 border-black'><em>McQueen Toys</em></h1>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-black border-white hover:text-gray-900 hover:border-gray-900">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
                    <div className="text-sm lg:flex-grow lg:text-center">
                        <Link to="/" className={`block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-900 mr-4 ${location.pathname === '/' ? 'active' : ''}`}>
                            Home
                        </Link>
                        
                        <Link to="/about" className={`block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-900 mr-4 ${location.pathname === '/about' ? 'active' : ''}`}>
                            About
                        </Link>
                        <Link to="/blog" className={`block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-900 ${location.pathname === '/blog' ? 'active' : ''}`}>
                            Blog
                        </Link>
                    </div>
                    <div className="lg:text-right flex gap-4 tooltip" >
                        <div className='tooltip tooltip-left' data-tip={user?.displayName}>
                            {user &&
                                <img className='w-8 rounded-full border border-black border-1' src={user.photoURL}></img>
                            }
                        </div>

                        {user ?
                            <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-gray-600 hover:text-white hover:border-gray-900 mt-4 lg:mt-0' onClick={handleLogOut}>Logout</button> :
                            <Link to="/login">
                                <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-gray-600 hover:text-white hover:border-gray-900 mt-4 lg:mt-0'>Login</button>
                            </Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

