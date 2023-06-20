import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ProductsTable from "../../components/ProductsTable/ProductsTable";

import axios from "axios";

const StorePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [items, setItems] = useState([]);


  useEffect(() => {
    const fetchStore = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/store/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setItems(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchStore();
  }, [token]);
//GET
async function getAllProducts() {
    const response = await axios.get("http://127.0.0.1:8000/api/store/");
    console.log(response.data);
    setItems(response.data)
}
//POST
async function addProducts(newProduct) {
    const response = await axios.post(
        "http://127.0.0.1:8000/api/store/",
        newProduct
    );
    if (response.status === 204) {
        console.log("New Product Added!");
        getAllProducts();
    }
}


  return (
    <div className="container">
      <h1>Welcome to the Academy PBIS Store, {user.username}!</h1>
        <p>This will eventually be where all products will be displayed:</p>
        
        
    </div>
  );
};

export default StorePage;
// {products &&
//   products.map((product) => (
//     <p key={product.id}>
//       {product.name} {product.cost} {product.category}
//     </p>
//   ))}