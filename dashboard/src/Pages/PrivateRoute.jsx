import React, { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const {isauth} = useContext(AuthContext);
  if (!isauth) {
    return <Navigate to="/login" />;
  }
  return children;
  
};

export default PrivateRoute;
