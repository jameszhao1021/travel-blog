
// function BlogDetailPage() {

//     return (
//         <>
//             <div className="container">

//                 <div>Profile pic & UserName</div>
//                 <div>Date</div>
//                 <div>title</div>
//                 <div>Map</div>
//                 <div>Image</div>
//                 <div>Content</div>

//                 <div>
//                     <div>like count</div>
//                     <div>Like button</div>
//                 </div>

//                 <div>
//                     Comment
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BlogDetailPage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { getBlogDetails } from '../../utilities/blogs-api'; 

function BlogDetailPage() {
  const [blog, setBlog] = useState(null);
  const { blogId } = useParams(); // Use useParams to access the blogId from the URL

  useEffect(() => {
    if (blogId) {
      getBlogDetails(blogId)
        .then(blog => {
          setBlog(blog);
        })
        .catch(error => {
          console.error('Error fetching blog details:', error);
        });
    }
  }, [blogId]); // Dependency array to re-run the effect if blogId changes

  // Conditional rendering: Show loading text until the blog details are fetched
  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    // TODO: more details on the page
    <div>
      <h1>{blog.title}</h1>
      <p>Country: {blog.country}</p>
      <p>{blog.preview}</p>
      <div>{blog.text}</div>
      
    </div>
  );
}

export default BlogDetailPage;
