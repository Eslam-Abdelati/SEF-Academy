import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
const Onlyadmin = ({ children }) => {
    // const { currentUser } = useContext(AuthContext);
    const currentUser = { role: "admin" }
    const location = useLocation()
    if (currentUser?.role === 'admin') {
        return children
    }
    else if (!currentUser) {
        return <Navigate to='/Login' state={{ from: location }} replace />
    }
}
export const Adminlink = ({ children }) => {
    // const { currentUser } = useContext(AuthContext);
    const currentUser = { role: "admin" }
    if (currentUser?.role === "admin") {
        return children
    }

}
export default Onlyadmin