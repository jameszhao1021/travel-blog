import { Link } from 'react-router-dom';
import React from "react";

function BlogCard({ blog, index }) {
    console.log(blog);
    return (
        <Link to={`/blog/${blog._id}`}>
        <div className="card col-lg-12" style={{ backgroundImage: `url(${blog.preview})`, backgroundSize: 'cover' }}>
            <p className="bg-light opacity-75">{blog.country}</p>
            <p className="bg-light opacity-75">{blog.title}</p>
        </div>
        </Link>
    )
}
export default BlogCard;