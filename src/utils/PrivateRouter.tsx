import React, { ReactNode } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useContext } from "react";
import { Route } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
type Props = {
  children: ReactNode;
};
export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? (
    <>
      {children}
      <div className="notice">
        <i>you are in a private route.</i>
      </div>
    </>
  ) : (
    <SignIn />
    // <Navigate to="/signin" />
  );
};
