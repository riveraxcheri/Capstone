import React, { useState, useEffect } from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import "./CommentForm.css"

//onSubmit reset?
//addComment function


const CommentForm = ({addComment}) => {
    const [message, setMessage] = useState("");

    const [formData, handleSubmit, handleInputChange, reset] = useCustomForm(
        message,
        setMessage
    );


    return ( 
        <div className='comment-container'>
            <form className='comment_form' onSubmit={handleSubmit}>
                <h4>
                    Send a Positive Behavior Reinforcement Msg!
                    </h4>
                    <label htmlFor='email'
                    placeholder='Email'>
                        Email
                    </label>
                    <input type='email'
                    name='email'/>
                    <label htmlFor='message'
                    placeholder='message'>
                        Message
                    </label>
                    <textarea
                    name='message'
                    rows="4"
                    columns= "50"
                    value={formData.message}
                    onChange={handleInputChange}></textarea>
                <button type='submit'>
                    Submit
                </button>
                </form>
                

        </div>
     );
}
 
export default CommentForm;
// {addComment, getComments}
//onClick={addComment(setUserMsg).then(getAllComments())}