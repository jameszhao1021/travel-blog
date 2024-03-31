import { useState, useEffect } from 'react';
import React from "react";
import '../../index.css';
import BlogCard from "../../components/BlogCard";
import * as blogsAPI from '../../utilities/blogs-api';
import Footer from '../../components/Footer';
function CommunityPage() {
    const [loading, setLoading] = useState(true); 
    const [blogs, setBlogs] = useState([]);
    const [continent, setContinent] = useState('All')
    function handleChange(e) {
        setContinent(e.target.value)
    }

    useEffect(() => {
        setLoading(true); // Set loading to true when fetching starts
        blogsAPI.getSelectedBlogs(continent)
            .then((blogs) => {
                setBlogs(blogs);
            })
            .finally(() => {
                setLoading(false); // Set loading to false when fetching completes
            });
    }, [continent]);

    const blogCards = blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
    ))

    const showCards = loading ? ( // Display "Loading" if data is still loading
    <h2>Loading...</h2>
) : (
    blogs.length ? (
        <div className="row communityBlogCard">
            {blogCards}
        </div>
    ) : (
        <h2>No blog yet</h2>
    )
);

    return (
        <div className='container'>
            <div className="pageTitle">Explore Community</div>
            <div className="pageDescription">Discover the wonders of the world | Adventure awaits just around the corner</div>
            <div className='col-sm-2'>
                <select className='form-select' name='continent' value={continent} onChange={handleChange}>
                    <option value="All">All Posts</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Ocienia">Oceania</option>
                    <option value="Antarctic">Antarctic</option>
                </select>
            </div>
            

            <div className="container">
                <div className="row communityBlogCard">
                    {showCards}
                    <Footer />
                </div>
            </div>
        </div>
    )
}


export default CommunityPage;