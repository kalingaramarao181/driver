import Cookies from "js-cookie";
import { Redirect, Route } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const AdminSecure = (props) => {
    const token = Cookies.get('jwtToken');
    
    // Check if token exists
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000; // in seconds
            if (decodedToken.exp < currentTime) {
                alert("Session Expired Keep Login")
                return <Redirect to="/login" />;
            }

            // Check if the user is an admin
            if (decodedToken.isDriver === 1) {
                return <Route {...props} />;
            } else {
                return <Redirect to="/login" />;
            }
        } catch (error) {
            console.error('Invalid token:', error);
            return <Redirect to="/login" />;
        }
    }

    return <Redirect to="/login" />;
};

export default AdminSecure;