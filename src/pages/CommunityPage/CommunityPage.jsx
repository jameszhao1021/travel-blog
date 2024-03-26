import { useState, useEffect } from 'react';
import React from "react";
import '../../index.css';
import BlogCard from "../../components/BlogCard";
import * as blogsAPI from '../../utilities/blogs-api';

function CommunityPage(){

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        blogsAPI.getMyBlogs().then((blogs) => {
            setBlogs(blogs);
        });
    }, []);

    const blogCards = blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
    ))


    return(
        <>
            <div className="pageTitle">Explore Community</div>
            <div className="pageDescription">Discover the wonders of the world | Adventure awaits just around the corner</div>


            <div className="container">
                <div className="row">
                    {blogCards}
                </div>
            </div>
        </>
    )
}


export default CommunityPage;