import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
const Onlyinstruction = ({ children }) => {
    // const { currentUser } = useContext(AuthContext);
    const currentUser = { role: "instruction" }
    const location = useLocation()
    if (currentUser?.role === 'instruction') {
        return children
    }
    else if (!currentUser) {
        return <Navigate to='/Login' state={{ from: location }} replace />
    }
}
export default Onlyinstruction
export const Instructionlink = ({ children }) => {
    // const { currentUser } = useContext(AuthContext);
    const currentUser = { role: "instruction" }
    if (currentUser?.role === "instruction") {
        return children
    }

}
