import React from 'react';
import CommentCard from './CommentCard';

function CommentsList({ comments, deleteComment }) {

    if (comments.length === 0) {
        return <p style= {{color: 'black'}}>No Comments Yet!</p>
    }
  return (
    <div>
      {comments.map((comment, index) => (
        <CommentCard key={index} comment={comment} deleteComment = {deleteComment} />
      ))}
     
    </div>
  );
}

export default CommentsList;