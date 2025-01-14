import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
    // const { currentUser } = useContext(AuthContext);
    const currentUser = null;
    // const currentUser = {data:'data'};
    const location = useLocation()
    if (!currentUser) {
        return <Navigate to='/Login' state={{ from: location }} replace />
    }
    return children
};
export default ProtectedRoute

