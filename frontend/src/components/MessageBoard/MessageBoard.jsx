import React, { useState, useEffect } from "react";
import axios from "axios";

import CommentList from "../CommentList/CommentList";
import axios from "axios";

const MessageBoard = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    console.log("MsgBoard");
  },[]);
  // GET All Comments
  async function getAllComments() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/comments/all/"
      );
      console.log(response.data);
      setEntries(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

    // GET Comments by User
  // async function getUserComments(){
  //     const response = await axios.get(`http://127.0.0.1:8000/api/comments/${user.user_id}/`,{
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //     console.log(response.data);
  //     setComment(response.data);
  // }

  

  return (
    <div>
      <CommentList entries={entries} />
      <button onClick={getAllComments()}>See All Comments</button>
      <button>See Your Messages</button>
    </div>
  );
};

export default MessageBoard;
