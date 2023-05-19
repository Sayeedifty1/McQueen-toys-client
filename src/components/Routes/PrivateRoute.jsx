import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children
    }

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to login first!',
        confirmButtonText: 'OK',
    });

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>


};

export default PrivateRoute;