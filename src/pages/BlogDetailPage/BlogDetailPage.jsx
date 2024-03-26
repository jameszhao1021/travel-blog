import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { getBlogDetails } from '../../utilities/blogs-api';
import CommentForm from '../../components/CommentForm'; 
import CommentsList from '../../components/CommentsList'; 
import * as blogsAPI from '../../utilities/blogs-api';
import './BlogDetailPage.css';

function BlogDetailPage() {
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]); 
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
  }, [blogId]);

  async function addComment(comment) {
    // console.log('Adding comment:', comment);
    const newComment = await blogsAPI.createBlogComment(blogId, comment);
    setComments([...comments, newComment]);
  }
  
  if (!blog) { 
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="text-center">
        <h1>{blog.title}</h1>
        <p>{blog.country}</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={blog.preview} alt="blog picture" className="img-fluid mb-3" style={{ maxWidth: '100%' }} />
        </div>
        <div className="col-md-6">
          <div className="blog-text">{blog.text}</div>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-8">
          <CommentForm addComment={addComment}/>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-8">
          <CommentsList comments={comments} />
        </div>
      </div>
    </div>
  );
}

export default BlogDetailPage;
