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