import React from 'react';
import CommentCard from './CommentCard';

function CommentsList({ comments }) {

    if (comments.length === 0) {
        return <div style= {{ letterSpacing: "2px", fontWeight: "200", fontSize: "1rem"}}>No Comments Yet!</div>
    }
  return (
    <div>
      {comments.map((comment, index) => (
        <CommentCard key={index} comment={comment} />
      ))}
    </div>
  );
}

export default CommentsList;