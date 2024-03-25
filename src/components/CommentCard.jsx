import React, { useState } from 'react';
function CommentCard({ addComment }) {
 const [newComment, setNewComment] = useState('');


 const handleSubmit = (event) => {
    event.preventDefault();
    addComment(newComment);
    setNewNote('');

 return (
    <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="comment">Comments:</label>
              <textarea 
                className="form-control" 
                id="comment" 
                rows="3" 
                value={comment}
                onChange={(event) => setNewComment(event.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
   )
  }
}

 export default CommentCard;