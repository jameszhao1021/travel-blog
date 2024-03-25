import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { getBlogDetails } from '../../utilities/blogs-api'; 
import CommentCard from '../../components/CommentCard';
import './BlogDetailPage.css';

function BlogDetailPage() {
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState('');
  const { blogId } = useParams();

  useEffect(() => {
    if (blogId) {
      getBlogDetails(blogId)
        .then(blogDetail => {
          setBlog(blogDetail);
        })
        .catch(error => {
          console.error('Error fetching blog details:', error);
        });
    }
  }, [blogId]);



async function addComment(comment) {
  const newComment = await notesAPI.createComment(comment);
  // console.log('new Comment:', newComment);
  setComments([...comments, newComment]);
  //  console.log(comments);
}

  // Conditional rendering: Show loading text until the blog details are fetched
  if (!blog) { // Changed condition to check for blog state variable
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>Country: {blog.country}</p>
      <div className="row">
        <div className="col-md-6">
          <img src={blog.preview} alt="blog picture" className="img-fluid mb-3" style={{ maxWidth: '100%' }} />
          <CommentCard addComment = { addComment }/>
        </div>
        <div className="col-md-6">
          <div className="blog-text">{blog.text}</div>
        </div>
      </div>
    </div>
  );
}


export default BlogDetailPage;
