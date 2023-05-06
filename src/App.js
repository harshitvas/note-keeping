import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandingPage from "./Screens/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./Screens/MyNotes";
import LoginPage from "./Screens/LoginPage";
import RegisterPage from "./Screens/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header className="bg-gray-900 text-white" />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              exact
              element={<LandingPage className="bg-white" />}
            />
            <Route
              path="/mynotes"
              exact
              element={<MyNotes className="bg-white" />}
            />
            <Route
              path="/login"
              exact
              element={<LoginPage className="bg-white" />}
            />
            <Route
              path="/register"
              exact
              element={<RegisterPage className="bg-white" />}
            />
          </Routes>
        </div>
        <Footer className="bg-gray-900 text-white" />
      </div>
    </BrowserRouter>
  );
}

export default App;
