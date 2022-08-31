import React from "react";
import { useAuth } from "../contexts/AuthContext";
export const Article:React.FC = () => {
  const {currentUser} = useAuth();
  console.log(currentUser)
  return(
    <>
      <p>{currentUser ? 'ログインしているよ':"ログインしていないよ"}</p>
    </>
  )
}