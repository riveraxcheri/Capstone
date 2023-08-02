import React, { useState, useEffect } from "react";

import CommentList from "../CommentList/CommentList";
import axios from "axios";
import "./MessageBoard.css"
const MessageBoard = () => {
  const [entries, setEntries] = useState([]);

  useEffect(()=> {
    console.log("Hello World");
  },[])
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
  }

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
  //};
  //     getUserComments();
  //   }, [token]);
  // POST New Comment
  // async function addNewComment(newComment) {
  //   const response = await axios.post(
  //     "http://127.0.0.1:8000/api/comments/",
  //     newComment,
  //     {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     }
  //   );
  //   if (response.status === 204) {
  //     console.log("Comment Added!");
  //   };
  // }

  return (
    <div className="comment-container">
      
      <div className="comment-section">
        <h3>Message Board</h3>
        <CommentList entries={entries} />
      </div>
      <div className="all-button">
        <button onClick={getAllComments}>See All Comments</button>
      </div>
      <div className="user-button">
        <button>See Your Messages</button>
      </div>
    </div>
  );
};

export default MessageBoard;
