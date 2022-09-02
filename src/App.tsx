import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Article } from "./pages/Article";
import { AuthProvider } from "./contexts/AuthContext";
import {PrivateRoute} from "./utils/PrivateRouter" 
import { Test } from "./pages/Test";
import { Chart } from "./commponents/Chart";
import { Header } from "./commponents/Header";
import './CSS/Chart.css'
function App() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const postData = collection(db, "family");
  //   console.log(postData)
  //   getDocs(postData).then((snapshot) => {
  //     console.log(snapshot.docs.map((doc) => doc.data()))
  //   })
  // }, []);

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header/>
          <Routes>
          <Route
        path="secret"
        element={<PrivateRoute children={<Article />} />}
      />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/test" element={<Test/>} />
            {/* <Route path="/chart" element={<Chart/>} /> */}
            {/* <Route path="/article" element={<Article />} /> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
