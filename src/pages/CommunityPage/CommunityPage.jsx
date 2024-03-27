import { useState, useEffect } from 'react';
import React from "react";
import '../../index.css';
import BlogCard from "../../components/BlogCard";
import * as blogsAPI from '../../utilities/blogs-api';

function CommunityPage() {

    const [blogs, setBlogs] = useState([]);
    const [continent, setContinent] = useState('All')
    function handleChange(e) {
        setContinent(e.target.value)
    }

    useEffect(() => {
        blogsAPI.getSelectedBlogs(continent).then((blogs) => {
            setBlogs(blogs);
        });
    }, [continent]);


    const blogCards = blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
    ))

    const showCards = blogs.length ? (
        <div className="row communityBlogCard">
            {blogCards}
        </div>
    ) : (
        <h2>No blog yet</h2>
    );

    return (
        <>
            <div className="pageTitle">Explore Community</div>
            <div className="pageDescription">Discover the wonders of the world | Adventure awaits just around the corner</div>
            <select className='col-lg-1' name='continent' value={continent} onChange={handleChange}>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Ocienia">Ocienia</option>
                <option value="Antactic">Antactic</option>
            </select>

            <div className="container">
                <div className="row communityBlogCard">
                    {showCards}
                </div>
            </div>
        </>
    )
}


export default CommunityPage;