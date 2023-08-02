import React, { useState, useEffect } from "react";
import reset from "../../hooks/useCustomForm";
import "./CommentForm.css";

//onSubmit reset?
//addComment function

const CommentForm = ({ addNewComment }) => {
  const [comment, setComment] = useState("");
  const [student, setStudent] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formValues = {
      user: student,
      comm_text: comment,
    };
    console.log(formValues);
    addNewComment(formValues);
  }

  return (
    <div className="comment-container">
      <form className="comment-form" onSubmit={(event) => handleSubmit(event)}>
        <h4>Comments:</h4>
        <label>Student Id:</label>
        <input
          type="number"
          name="student"
          placeholder="Enter Student Id"
          value={student}
          onChange={(event) => setStudent(event.target.value)}
        />
        <label>Message</label>
        <textarea
          name="comment"
          rows="4"
          columns="50"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <button type="submit" onClick={reset}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
// {addComment, getComments}
//onClick={addComment(setUserMsg).then(getAllComments())}
