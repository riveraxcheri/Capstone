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
import MessageBoard from "./components/MessageBoard/MessageBoard";
import ProductList from "./components/ProductList/ProductList";
import StudentTable from "./components/StudentInfo/StudentTable";
import Transactions from "./components/Transactions/Transactions";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import QrAccessPage from "./components/QrAccessPage/QrAccessPage";

function App() {
  const [userInput, setUserInput] = useState([""]);
  const [user, token] = useAuth();
  const [studentData, setStudentData] = useState([""]);
  const [items, setItems] = useState();
  const [students, setStudents] = useState();

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
          path="/qrcode"
          element={
            <PrivateRoute>
              {user?.is_student === false ? (
                <QrAccessPage studentData={studentData} />
              ) : (
                <StudentHome />
              )}
            </PrivateRoute>
          }
        />
        <Route
          path="/student"
          element={
            <PrivateRoute>
              {user?.is_student === false ? (
                <StudentTable students={students} userInput={userInput}/>
              ) : (
                <StudentHome />
              )}
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              {user?.is_student === false ? (
                <ProductList items={items} userInput={userInput}/>
              ) : (
                <StorePage />
              )}
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
        <Route
          path="/transactions"
          element={
            <PrivateRoute>
              <Transactions />
            </PrivateRoute>
          }
        />
        <Route path="/comments" element={<MessageBoard />} />
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
