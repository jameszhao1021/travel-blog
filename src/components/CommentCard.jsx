import {useState, useEffect} from 'react';
import { getUser } from '../utilities/users-service';


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
    <div className="comment-card">
      <div className="card-body">
         <p className="card-text">User: {userName}</p>
         <p className="card-text">{formattedDate}</p>
         <p className="card-text">{text}</p>
         {isCurrentUser && (
           <div className="comment-actions">
              <button onClick={() => deleteComment(comment._id)} title="Delete">🗑</button>
              <button onClick={() => startEditComment(comment)} title="Edit">✎</button>
           </div> 
         )}
      </div>
    </div>
  );
}

export default CommentCard;
