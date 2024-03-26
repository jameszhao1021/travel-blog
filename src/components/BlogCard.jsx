import { Link } from 'react-router-dom';
import React from "react";
import './BlogCard.css';

function BlogCard({ blog, index }) {
    console.log(blog);
    return (
        <>
            <div className="col-4 my-2 py-3">
                <div className='blogCard'>
                <div className='blogCardBg'>
                    <Link to={`/blog/${blog._id}`}>
                        <div className="d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                            <div><img className='blogCardImage' src={blog.preview} /></div>
                            <div className='blogTitle'>{blog.title}</div>
                            <div className='blogBottomText'>{blog.country}</div>
                        </div>
                    </Link>
                </div>
                </div>
            </div>
        </>
    )
};
export default BlogCard;