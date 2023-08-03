import React, { useState, useEffect } from "react";
import reset from "../../hooks/useCustomForm";
import "./CommentForm.css";
import useCustomForm from "../../hooks/useCustomForm";

const CommentForm = ({ addNewComment }) => {
  const [entry, setEntry] = useState("");
  const [username, setUsername] = useState("");
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    entry,
    setEntry
  )

  return (
    <div className="comment-container">
      <form className="comment-form" onSubmit={(event) => handleSubmit(event)}>
        <h4>Comments:</h4>
        <label>Student:{username}</label>
        <label>Message</label>
        <textarea
          name="comment"
          rows="4"
          columns="50"
          value={formData.entry}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit" onClick={addNewComment(setEntry).then({reset})}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
// {addComment, getComments}
//onClick={addComment(setUserMsg).then(getAllComments())}
