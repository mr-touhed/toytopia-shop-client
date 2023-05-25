import { useContext } from "react";
import { UserContext } from "../AuthContext/AuthContext";
import { ClimbingBoxLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRouter = ({children}) => {

    const location = useLocation()



    const {user,loading} = useContext(UserContext)
    if (loading) return <div className="flex justify-center relative bottom-[-100px]">
        <ClimbingBoxLoader color={"#ef3e92"}
    loading={loading}
    // cssOverride={styles}
    size={60}
    aria-label="Loading Spinner"
    data-testid="loader"></ClimbingBoxLoader>
    </div>
    
    if(!user) return <Navigate to="/login" state={{from:location}} replace/>

    if(user) return children
    
};

export default PrivetRouter;