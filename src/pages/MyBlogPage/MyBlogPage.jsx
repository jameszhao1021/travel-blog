import React from "react";
import CountrySelectForm from '../../compoments/CountrySelectForm'
import BlogForm from "../../compoments/BlogForm";
import { useState, useEffect } from "react";
import BlogCard from "../../compoments/BlogCard";
import './myBlogPage.css';
import * as blogsAPI from '../../utilities/blogs-api'
function MyBlogPage({ uploadImage}){

    const [blogs, setBlogs] = useState([]);

    // useEffect(() => {
    //     blogsAPI.getBlogs().then((blogs) => {
    //         setBlogs(blogs);
    //     });
    // }, []);

    return(
        <div>
            <h1>MyBlogPage</h1>
            
            <div className="row mt-3 mb-3">
                <div className="col-sm profile">
                    <div>username</div>
                    <div><img src="../../../public/images/profile.png" className="profileImage"/></div>
                    <div>Bio</div>
                </div>

                <div className="col-sm">
                    <div>Post count: count </div>
                    <div>More features coming..</div>
                </div>

                <div className="col-sm">
                    <div><img src="../../../public/images/map.png" className="mapImage"/></div>
                </div>
            </div>

            <div className="row mt-3 mb-3">
                <div className="col-sm">
                    <button>Edit profile</button>
                </div>
                <div className="col-sm">
                    <button>New Post</button>
                </div>
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
            
            <BlogForm uploadImage={uploadImage} blogs={blogs} setBlogs={setBlogs}/>
        </div>
    );
};


export default MyBlogPage;
