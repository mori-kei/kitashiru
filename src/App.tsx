import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute } from "./utils/PrivateRouter";
import { Test } from "./pages/Test";
import { Header } from "./commponents/Header";
import "./CSS/Chart.css";
import "./CSS/reset.css";
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { Companies } from "./pages/Companies";

import { CompanyIndex } from "./pages/CompanyIndex";
import { NoMatch } from "./pages/NoMatch";
import { Footer } from "./commponents/Footer";
import { Culture } from "./pages/Culture";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="test" element={<PrivateRoute children={<Test />} />} />
            <Route path="culture" element={<PrivateRoute children={<Culture/>} />} />
            <Route path="*" element={<PrivateRoute children={<NoMatch />} />} />
            <Route
              path="/companies"
              element={<PrivateRoute children={<Companies />} />}
            >
              <Route index element={<CompanyIndex />} />
              <Route path=":companyId" element={<Company />} />
            </Route>
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
