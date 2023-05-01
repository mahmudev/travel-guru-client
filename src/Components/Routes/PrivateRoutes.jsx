import React, {  useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location)
    if(loading){
        return (<div className="flex items-center justify-center min-h-screen">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
        />
        <p className="ml-2">Loading...</p>
      </div>)
    }

    if(user){
        return children
    }
    return <Navigate state={{from: location.pathname}} to='/login'></Navigate>
};

export default PrivateRoutes;