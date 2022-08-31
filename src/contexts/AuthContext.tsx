import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase";
type AuthContextProps = {
  currentUser: User | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });
type Props ={
  children: ReactNode
}
export const AuthProvider: React.FC<Props> = ({children}) => {
  const [currentUser, setCurrentUser] = useState<User |any>(null)
   

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      setCurrentUser(user)
    })
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>{
  return useContext(AuthContext);
} 
