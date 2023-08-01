import React from 'react';

import Comment from "../Comment/Comment";

const CommentList = ({ entries }) => {

  let entriesReversed = [...entries].reverse()

  return (
    <ul>
      {entriesReversed?.map((entry) => (
        <Comment entry={entry} key= {entry.id}/>
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