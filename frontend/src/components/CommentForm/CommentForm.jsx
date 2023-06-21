import React, { useState, useEffect } from 'react';
import useCustomForm from '../../hooks/useCustomForm';

//onSubmit reset?

const CommentForm = ({addComment, getComments}) => {
    const [userMsg, setUserMsg] = useState("");
    const [date, setDate] = useState("")
    const [formData, handleSubmit, handleInputChange, reset] = useCustomForm(
        userMsg,
        setUserMsg
    );
    return ( 
        <div className='comment_container'>
            <form className='comment_form' onSubmit={handleSubmit}>
                <lable>
                    Send a Positive Behavior Reinforcement Msg!
                    <input type='text'
                    name='userMsg'
                    value={formData.userMsg}
                    onChange={handleInputChange}/>
                </lable>
                <button onClick={addComment(setUserMsg, setDate).then(getComments())}>
                    Post Message
                </button>
                </form>
                

        </div>
     );
}
 
export default CommentForm;
// {addComment, getComments}