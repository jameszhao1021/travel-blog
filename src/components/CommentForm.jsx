import React, { useState } from 'react';

function CommentForm({ addComment }) {
 const [newComment, setNewComment] = useState('');

//  console.log(newComment);


 const handleSubmit = (event) => {
    event.preventDefault();
    addComment({ text: newComment });
    // console.log('new Comment is:', newComment);
    setNewComment('');
 }

 return (
    <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="comment" style={{ color: 'black', fontSize: 'medium' }}>Comments:</label>
              <textarea 
                className="form-control" 
                id="comment" 
                rows="3" 
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
   )
  }

export default CommentForm;