import React, { useState, useEffect} from 'react';

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
    <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="comment" style={{ color: 'black', fontSize: 'medium' }}>Comments:</label>
              <textarea 
                className="form-control" 
                id="comment" 
                rows="3" 
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
                required
              ></textarea>
            </div>
            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            <button type="submit" className="btn btn-primary">
              {editingComment ? 'Update Comment' : 'Add Comment'}
            </button>
          </form>
   )
  }

export default CommentForm;