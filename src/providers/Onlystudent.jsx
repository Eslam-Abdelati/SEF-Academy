import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
const Onlystudent = ({ children }) => {
    // const { currentUser } = useContext(AuthContext);
    const currentUser = { role: "student" }
    const location = useLocation()
    if (currentUser?.role === 'student') {
        return children
    }
    else if (!currentUser) {
        return <Navigate to='/Login' state={{ from: location }} replace />
    }
}
export default Onlystudent
export const Studentlink = ({ children }) => {
    // const { currentUser } = useContext(AuthContext);
    const currentUser = { role: "student" }
    if (currentUser?.role === "student") {
        return children
    }

}
