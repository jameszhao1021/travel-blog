import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { getBlogDetails } from '../../utilities/blogs-api';
import CommentForm from '../../components/CommentForm'; 
import CommentsList from '../../components/CommentsList'; 
import * as blogsAPI from '../../utilities/blogs-api';
import './BlogDetailPage.css';
import ShareIcon from '../../components/ShareIcon';


function BlogDetailPage() {
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]); 
  const [editingComment, setEditingComment] = useState(null);


  const { blogId } = useParams();

  useEffect(() => {
    if (blogId) {
      getBlogDetails(blogId)
        .then(blogDetail => {
          setBlog(blogDetail);
          setComments(blogDetail.comments); 
        })
        .catch(error => {
          console.error('Error fetching blog details:', error);
        });
    }
    console.log(blog)
  }, [blogId]);

  async function addComment(comment) {
    // console.log('Adding comment:', comment);
    const newComment = await blogsAPI.createBlogComment(blogId, comment);
    setComments([...comments, newComment]);
  }

  async function deleteComment(id) {
    await blogsAPI.deleteComment(id);
    const updatedComments = comments.filter((c) => c._id !== id);
    setComments(updatedComments);
    // console.log(updatedComments);
}

function startEditComment(comment) {
  setEditingComment(comment);
// console.log(comment);
}

async function updateComment(id, updatedData) {
    console.log(id, updatedData);
  try {
    const commentUpdated = await blogsAPI.updateBlogComment(id, updatedData);
    const commentsUpdated = comments.map(comment =>
      comment._id === id ? commentUpdated : comment
    );

    setComments(commentsUpdated);
    setEditingComment(null); 
  } catch (error) {
    console.error('Error updating comment:', error);
  }
}

  
  if (!blog) { 
    return <div>Loading...</div>
  }

  return (
    <div className="container blogDetailContainer">
      <div className="row my-2 justify-content-end">

        <ShareIcon />
      </div>

      <div className="container ">
        <div className="blog-title col">
          {blog.title}
          <div className="d-flex justify-content-center">
            <div className='col-md-3 my-2' style={{borderTop: "1px solid #d3c1ae"}}></div>
          </div>
        </div> 

        <div className='d-flex justify-content-center align-items-center'>
          <div className=''><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" className="rounded-circle" height="40px" width="40px" alt="avatar" /></div>
          <div className='align-items-center mx-4 userNameDiv'>
            Username | 27 Mar 2024 in {blog.country}
          </div>
        </div>

        <div className='my-3'>
          <img src={blog.preview} alt="blog picture" className="img-fluid mb-3" style={{ maxWidth: '100%' }} />
          <div className="blog-text">{blog.text}</div>
        </div>
        
        
          <div className="divideComment" style={{borderTop: "1px solid #d3c1ae"}}></div>

          <div className="">
              <CommentForm addComment={addComment} editingComment={editingComment} updateComment={updateComment} />
          </div>

          <div className="">
            <CommentsList comments={ comments } deleteComment={ deleteComment } startEditComment= { startEditComment }/>
          </div>
      </div>

    </div>
  );
}

export default BlogDetailPage;
