import React from 'react';
import './CommentCard.css'

function CommentCard({ comment }) {
  const { createdAt, text, userName } = comment;
  console.log('comment is:', comment);


  const formattedDate = new Date(createdAt).toLocaleString();

  // If comment.user is an object containing user information, display the username
  // const username = user.name;

  return (
    <div className="d-flex justify-content-center">
      <div className="comment-card">
        <div className="comment-user">
          <strong>{userName}</strong> | <span>{formattedDate}</span>
        </div>
        <div className="comment-text my-2">{text}</div>
      </div>
    </div>
    
  );
}

export default CommentCard;
