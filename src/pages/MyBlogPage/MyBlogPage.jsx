import React from "react";
import CountrySelectForm from '../../components/CountrySelectForm'
import BlogForm from "../../components/BlogForm";
import BlogFormModal from "../../components/BlogFormModal";
import { useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import * as blogsAPI from '../../utilities/blogs-api';
import InteractiveMap from "../../components/InteractiveMap";
import '../../index.css';
import './myBlogPage.css'


function MyBlogPage({ user, uploadImage }) {
    const [blogs, setBlogs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    function toggleModal() {
        setShowModal(prev => !prev);
    }
    useEffect(() => {
        blogsAPI.getMyBlogs().then((blogs) => {
            setBlogs(blogs);
        });
    }, []);

    const blogCards = blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
    ))
    return (
        <>
        <div className="pageTitle">My Blog</div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 profile">   
                        <div ><img src="../../../public/images/profile.png" className="profileImage" alt="Profile" style={{maxWidth:'250px', maxHeight:'250px'}}/></div>
                        <div>{user.name}</div>
                        <div className="bio">🌍 Wanderlust Enthusiast <br /> 🏔️Adventure Seeker <br /> Storyteller ✈️</div>
                        <button className="btn button-custom">Edit profile</button>
                    </div>

                    <div className="col-lg-8">
                        <InteractiveMap />
                    </div> 
                </div>
            </div>

            <div className="d-flex justify-content-between myBlogButtonDiv">
                <div className="">
                        <select>
                            <option value="All Posts">All Posts</option>
                            <option value="Public Posts">Public Posts</option>
                            <option value="Private Posts">Private Posts</option>
                        </select>
                </div>
                <div className="">
                        <button className="btn button-custom" onClick={toggleModal} >Create Blog</button>
                        <BlogFormModal uploadImage={uploadImage} blogs={blogs} setBlogs={setBlogs} showModal={showModal} toggleModal={toggleModal} />
                </div>
            </div>
            

            <div className="container myBlogPostDiv">
                <div className="row">
                    {blogCards}
                </div>
            </div>
        </>
    );
};
export default MyBlogPage;