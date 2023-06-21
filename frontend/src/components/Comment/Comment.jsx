import React from 'react';
import CommentForm from '../CommentForm/CommentForm';

const Comment = ({comment}) => {
    return ( 
        <li className='comment_list'>
            <p>{comment.user.username}</p>
            <p>{comment && comment?.comm_text}</p>
        </li>
     );
}
 
export default Comment;
// {comment}