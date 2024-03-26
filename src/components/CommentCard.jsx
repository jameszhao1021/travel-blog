import React from 'react';

function CommentCard({ comment }) {
  const { createdAt, text, userName } = comment;
  console.log('comment is:', comment);


  const formattedDate = new Date(createdAt).toLocaleString();

  // If comment.user is an object containing user information, display the username
  // const username = user.name;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <p className="card-text">User: {userName}</p>
        <p className="card-text">{formattedDate}</p>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default CommentCard;
