import React from 'react';


const Comment = ({entry}) => {
    

    return ( 
        <li className='comment'>
            <h4>{entry.user.username}</h4>
            <p>{entry && entry?.comm_text}</p>
        </li>
     );
}
 
export default Comment;
// {comment}