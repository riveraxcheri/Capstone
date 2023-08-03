import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./StorePage.css"


import ProductCard from "../../components/ProductCard/ProductCard";
// import axios from "axios";
// import Dropdown from "../../components/Dropdown/Dropdown";
// import ProductList from "../../components/ProductList/ProductList";

const StorePage = () => {

  const [user, token] = useAuth();



  return (
    <div className="store-container">
      <h1>Welcome to the Academy PBIS Store, {user.username}!</h1>
        <div className="card-container">

          <ProductCard/>
        </div>
        
        
    </div>
  );
};

export default StorePage;
