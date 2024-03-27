import React from 'react';
import CommentCard from './CommentCard';

function CommentsList({ comments, deleteComment, startEditComment }) {

    if (comments.length === 0) {
        return <div style= {{ letterSpacing: "2px", fontWeight: "200", fontSize: "1rem"}}>No Comments Yet!</div>
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