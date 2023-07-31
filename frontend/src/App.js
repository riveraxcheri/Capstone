// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import useAuth from "./hooks/useAuth";

// Pages Imports

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import StorePage from "./pages/StorePage/StorePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import SearchBar from "./components/SearchBar/SearchBar";
import TeacherHome from "./pages/HomePage/TeacherHome";
import StudentHome from "./pages/HomePage/StudentHome";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [userInput, setUserInput] = useState([""]);
  const [user, setUser] = useAuth();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              {user?.is_student === true ? <StudentHome /> : <TeacherHome />}
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/store" element={<StorePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/search"
          element={
            <SearchBar userInput={userInput} setUserInput={setUserInput} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
