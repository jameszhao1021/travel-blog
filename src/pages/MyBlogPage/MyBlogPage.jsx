import React from "react";
import CountrySelectForm from '../../compoments/CountrySelectForm'
import BlogForm from "../../compoments/BlogForm";
import { useState, useEffect } from "react";
import * as blogsAPI from '../../utilities/blogs-api'
function MyBlogPage({uploadImage}){

    const [blogs, setBlogs] = useState([]);

    // useEffect(() => {
    //     blogsAPI.getBlogs().then((blogs) => {
    //         setBlogs(blogs);
    //     });
    // }, []);

    return(
        <>
        <h1>MyBlogPage</h1>
        <BlogForm uploadImage={uploadImage} blogs={blogs} setBlogs={setBlogs}/>
        </>
    );
};


export default MyBlogPage;
