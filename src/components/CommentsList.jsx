import React from 'react';
import CommentCard from './CommentCard';

function CommentsList({ comments, deleteComment, startEditComment }) {

    if (comments.length === 0) {
        return <p style= {{color: 'black'}}>No Comments Yet!</p>
    }
  return (
    <div>
      {comments.map((comment, index) => (
        <CommentCard key={index} comment={comment} deleteComment = {deleteComment} startEditComment= { startEditComment } />
      ))}
     
    </div>
  );
}

export default CommentsList;