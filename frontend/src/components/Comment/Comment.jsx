import React from 'react';


const Comment = ({comment}) => {
    

    return ( 
        <li className='comment'>
            <h4>{comment.user.email}</h4>
            <p>{comment && comment?.comm_text}</p>
        </li>
     );
}
 
export default Comment;
// {comment}