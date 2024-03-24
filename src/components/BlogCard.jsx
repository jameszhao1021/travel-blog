// import { Link } from 'react-router-dom';

// function BlogCard({ blog }) {
//     return (
//         // link to blog Id
//         <Link to={`/blog/${blog.Id}`}>
//         {/* <Link to={`/blog/${blog.title}`}> */}
//             <div style={{ backgroundImage: `url(${blog.preview})`}}>
//                 <h2>Title: {blog.title}</h2>
//                 <div>Country: {blog.country}</div>
//             </div>
//         </Link>
//     );
// };

// export default BlogCard;

import React from "react";


function BlogCard({ blog, index }) {



    return (
        <div className="card col-lg-12" style={{ backgroundImage: `url(${blog.preview})`, backgroundSize: 'cover' }}>
            <p className="bg-light opacity-75">{blog.country}</p>
            <p className="bg-light opacity-75">{blog.title}</p>
        </div>
    )
}


export default BlogCard;