import {useState, useEffect} from 'react';
import { getUser } from '../utilities/users-service';
import './CommentCard.css';

function CommentCard({ comment, deleteComment, startEditComment }) {
  const { createdAt, text, userName, user } = comment;
  //  console.log('comment is:', comment);
  const formattedDate = new Date(createdAt).toLocaleString();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const loggedInUser = getUser();
    // console.log("Logged in user:", loggedInUser);
    setCurrentUser(loggedInUser );
  }, []);
  
  // console.log('user:', user);
  // console.log('currentUser:', currentUser);
  const isCurrentUser = currentUser && user === currentUser._id;
  // console.log(isCurrentUser);

  
  
  return (
    <div className="d-flex justify-content-center">
      <div className="comment-card">
        <div className="comment-user">
          <strong>{userName}</strong> | <span>{formattedDate}</span>
        </div>
        <div className="comment-text my-2">{text}</div>
        {isCurrentUser && (
          <div className="comment-actions">
             <button className='btn button-custom mx-2' onClick={() => deleteComment(comment._id)} title="Delete">🗑</button>
             <button className='btn button-custom' onClick={() => startEditComment(comment)} title="Edit">✎</button>
          </div> 
        )}
    </div>
    </div>
        
    
  );
}

export default CommentCard;
