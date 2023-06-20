import React from 'react';

import Comment from "../Comment/Comment";

const CommentList = ({ entries }) => {


  return (
    <ul>
      {entries?.map((el) => (
        <Comment comment={el} />
      ))}
    </ul>
  );
};

export default CommentList;

// Past Reference (social feed)
//const PostList = ({entries}) => {
//     let entriesReversed = [...entries].reverse()
//     return ( 
//         <ul>
//            {entriesReversed.map(entry => <Post entry= {entry} key= {entry.id}/> )}
//         </ul>
//      );
// }