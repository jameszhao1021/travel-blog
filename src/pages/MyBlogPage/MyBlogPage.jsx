import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import BlogCard from "../../compoments/BlogCard";
import './myBlogPage.css';

function MyBlogPage({ user }){

    

    // useEffect(() => {
    //     blogsAPI.getBlogs().then((blogs) => {
    //         setBlogs(blogs);
    //     });
    // }, []);

    return (
        <div>
            <h1>MyBlogPage</h1>

            <div className="row mt-3 mb-3">
                <div className="col-sm profile">
                    <div>{user.name}</div>
                    <div><img src="../../../public/images/profile.png" className="profileImage" alt="Profile" /></div>
                    <div>Bio</div>
                </div>

                <div className="col-sm">
                    <div>Post count: count </div>
                    <div>More features coming..</div>
                </div>

                <div className="col-sm">
                    <div><img src="../../../public/images/map.png" className="mapImage" alt="Map" /></div>
                </div>
            </div>

            <div className="row mt-3 mb-3">
                <div className="col-sm">
                    <button>Edit profile</button>
                </div>

                <Link to="/myblog/new" className="col-sm">
                    <button>New Post</button>
                </Link>
            </div>

            <div className="row mb-3 col-3">
                <select>
                    <option value="All Posts">All Posts</option>
                    <option value="Public Posts">Public Posts</option>
                    <option value="Private Posts">Private Posts</option>
                </select>
            </div>

            <div className="row">
                <BlogCard />
            </div>

            
        </div>
    );
};


export default MyBlogPage;
