import React, { useState, useEffect } from 'react';
import reset from '../../hooks/useCustomForm';
import "./CommentForm.css"


//onSubmit reset?
//addComment function


const CommentForm = (props) => {
    const [comment, setComment] = useState("");
    const [studentChoice, setStudentChoice] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const formValues = {
            user: studentChoice,
            comm_text: comment,
        };
        console.log(formValues);
        props.addNewComment(formValues).then(response => props.getAllComments());
    }


    return ( 
        <div className='comment-container'>
            <form className='comment-form' onSubmit={(event) => handleSubmit(event)}>
                <h4>
                    Comments:
                    </h4>
                    <label>
                        Student:
                    </label>
                    <input type="search"
                    name="student"
                    placeholder="Enter Student Info"
                    value={studentChoice}
                    onChange={(event) => setStudentChoice(event.target.value)}/>
                    <label>
                        Message
                    </label>
                    <textarea
                    name="comment"
                    rows="4"
                    columns= "50"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}></textarea>
                <button type="submit" onClick={reset}>
                    Submit
                </button>
            </form>
                

        </div>
     );
}
 
export default CommentForm;
// {addComment, getComments}
//onClick={addComment(setUserMsg).then(getAllComments())}