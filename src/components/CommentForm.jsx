import React, { useState, useEffect} from 'react';
import '../index.css'

function CommentForm({ addComment, editingComment, updateComment  }) {

const [commentText, setCommentText] = useState('');


  
  useEffect(() => {
    if (editingComment) {
      setCommentText(editingComment.text);
    //  console.log(editingComment);
    }
  }, [editingComment]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (editingComment) {
      updateComment(editingComment._id, {text: commentText });
     
    } else {
      addComment({ text: commentText });
    }
    setCommentText('');
  };
//  const [newComment, setNewComment] = useState('');
//  console.log(newComment);


//  const handleSubmit = (event) => {
//     event.preventDefault();
//     addComment({ text: newComment });
//     // console.log('new Comment is:', newComment);
//     setNewComment('');
//  }

 return (
  <form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center">
        <div className="mb-3">
          <label htmlFor="comment" className="form-label" style={{letterSpacing: "2px", fontWeight: "300", fontSize: "1rem"}}>Comments</label>
        </div>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            id="comment"
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
            required
            style={{ height: '200px', width: '500px', resize: 'none', overflowY: 'auto'}}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn button-custom my-3">{editingComment ? 'Update Comment' : 'Add Comment'}</button>
        </div>
      </div>
  </form>

   )
  }

export default CommentForm;