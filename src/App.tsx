import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Article } from "./pages/Article";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute } from "./utils/PrivateRouter";
import { Test } from "./pages/Test";
import { Chart } from "./commponents/Chart";
import { Header } from "./commponents/Header";
import "./CSS/Chart.css";
import "./CSS/reset.css";
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { Companies } from "./pages/Companies";
import Posts from "./pages/Posts";
import Post from "./pages/post";
import { CompanyIndex } from "./pages/CompanyIndex";
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
          <Header />
          <Routes>
            <Route path="test" element={<PrivateRoute children={<Test />} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/company/:id" element={<Company />} /> */}
            <Route path="/companies" element={<Companies />}>
              <Route index element={<CompanyIndex />} />
              <Route path=":companyId" element={<Company />} />
            </Route>
            <Route path="/posts" element={<Posts />}>
              <Route path=":postId" element={<Post />} />
            </Route>
            <Route path="/article" element={<Article />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
