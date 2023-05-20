import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import ReactSpeedometer from "react-d3-speedometer"


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center"><ReactSpeedometer
            value={777}
            currentValueText="Loading..."
            customSegmentLabels={[
                {
                    text: "0",
                    position: "INSIDE",
                    color: "#555",
                },
                {
                    text: "25",
                    position: "INSIDE",
                    color: "#555",
                },
                {
                    text: "50",
                    position: "INSIDE",
                    color: "#555",
                    fontSize: "19px",
                },
                {
                    text: "75",
                    position: "INSIDE",
                    color: "#555",
                },
                {
                    text: "100",
                    position: "INSIDE",
                    color: "#555",
                },
            ]}
        /></div>
    }

    if (user?.email) {

        return children
    }
    else {
        Swal.fire({
            icon: "success",
            title: "Login",
            text: "You need to login first!",
            confirmButtonText: "OK",
        });


        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }






};

export default PrivateRoute;