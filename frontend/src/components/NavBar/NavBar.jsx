import { useContext } from "react";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const [userInput, setUserInput] = useState([""]);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Academy PBIS Store</b>
          </Link>
        </li>
        <li>{<button onClick={() => navigate("/")}>Home</button>}</li>
        <li>{<button onClick={() => navigate("/store")}>Store</button>}</li>
        <li>{<button onClick={() => navigate("/cart")}>Cart</button>}</li>
        <li>
          {<button onClick={() => navigate("/comments")}>Message Board</button>}
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
        <li>
          {<SearchBar userInput={userInput} setUserInput={setUserInput} />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
