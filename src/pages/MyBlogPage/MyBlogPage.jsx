import React from "react";
import CountrySelectForm from '../../components/CountrySelectForm'
import BlogForm from "../../components/BlogForm";
import BlogFormModal from "../../components/BlogFormModal";
import { useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import InteractiveMap from "../../components/InteractiveMap";
import * as blogsAPI from '../../utilities/blogs-api';
import InteractiveMap from "../../components/InteractiveMap";
import '../../index.css';


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
        <div >
        <div className="pageTitle">My Blog</div>
            <div className="container-fluid row justify-content-between" >
                <div className="col-lg-3 profile">
                    <div>{user.name}</div>
                    <div ><img src="../../../public/images/profile.png" className="profileImage" alt="Profile" style={{maxWidth:'250px', maxHeight:'250px'}}/></div>
                    <div>Bio</div>
                    <div className="col-sm">
                        <div>Post count: count </div>
                        <div>More features coming..</div>
                        <div>
                            <div className="col-sm">
                                <button>Edit profile</button>
                            </div>
                        </div>
                        <div>
                            <select>
                                <option value="All Posts">All Posts</option>
                                <option value="Public Posts">Public Posts</option>
                                <option value="Private Posts">Private Posts</option>
                            </select>
                        </div>
                    </div>
                    <div className="row ">
                        <InteractiveMap />
                    </div>
                </div>
                <div className="col-lg-8 d-flex flex-column" >
                    <button className="btn btn-secondary col-lg-2 float-start" onClick={toggleModal} >Create Blog</button>
                    <BlogFormModal uploadImage={uploadImage} blogs={blogs} setBlogs={setBlogs} showModal={showModal} toggleModal={toggleModal} />
                    <div className=" container d-flex py-2 gap-3">
                        {blogCards}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MyBlogPage;