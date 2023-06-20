// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from 'react';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import StorePage from "./pages/StorePage/StorePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import SearchBar from "./components/SearchBar/SearchBar";
import TeacherPage from "./pages/HomePage/TeacherPage";
import StudentPage from "./pages/HomePage/StudentPage";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [userInput, setUserInput] = useState([""]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/student"
          element={
            <PrivateRoute>
              <StudentPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/teacher"
          element={
            <PrivateRoute>
              <TeacherPage />
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
        <Route path="/search" 
          element={<SearchBar 
          userInput={userInput}
          setUserInput={setUserInput}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
