import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import TeacherPage from "../../components/TeacherPage/TeacherPage";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [qrCodes, setQrCodes] = useState([]);

  useEffect(() => {
    const qrCodesGenerator = async () => {
      try {
        let response = await axios.get(
          `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user.id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        
        setQrCodes(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    qrCodesGenerator();
  }, [token]);

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {/* <p> key={user.id}</p>
        {user &&
        user.map((user) => (
        <p key={user.id}>
        {user.first_name} {user.id} {user.points}
         </p> ))} */}
      <button >
        Get QR Code</button>
      <TeacherPage/>
      {/* <button onClick={( 
        <TeacherPage/>
      )} >Teachers</button> */}
    </div>
  );
};

export default HomePage;
