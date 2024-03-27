import { Link } from 'react-router-dom';
import { useState } from "react";
import React from "react";
import './BlogCard.css';
import BlogDeleteModal from "./BlogDeleteModal";

function BlogCard({ blog, index, handleDelete, toggleFormModal, setEditBlog }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    function toggleDeleteModal() {
        setShowDeleteModal(prev => !prev);
    }

    return (
        <>
            <div className="col-4 my-2 py-3">
                <div className='blogCard'>
                    <div className='blogCardBg'>
                        <Link to={`/blog/${blog._id}`}>
                            <div className="d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                            <div className=" backGoundImage col-lg-12" style={{ backgroundImage: `url(${blog.preview})`, backgroundSize: 'cover' }}></div>
                                <div className='blogTitle'>{blog.title}</div>
                                <div className='blogBottomText'>{blog.country}</div>
                            </div>
                        </Link>
                        <div className='buttons'>
                            <button className='button' onClick={() => { toggleFormModal(); setEditBlog(blog) }}>Edit</button>
                            <button className='button' onClick={toggleDeleteModal}>Delete</button>
                            <BlogDeleteModal showDeleteModal={showDeleteModal} toggleDeleteModal={toggleDeleteModal} handleDelete={handleDelete} blog={blog} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default BlogCard;