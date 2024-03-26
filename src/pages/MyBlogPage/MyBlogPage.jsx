import React from "react";
import CountrySelectForm from '../../components/CountrySelectForm'
import BlogForm from "../../components/BlogForm";
import BlogFormModal from "../../components/BlogFormModal";
import { useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import * as blogsAPI from '../../utilities/blogs-api';
import InteractiveMap from "../../components/InteractiveMap";
import '../../index.css';


function MyBlogPage({ user, uploadImage }) {
    const [newBlog, setNewBlog] = useState({
        country: '',
        preview: '',
        title: '',
        text: ''
      })
    
    const [blogs, setBlogs] = useState([]);
    const [showFormModal, setShowFormModal] = useState(false);

    const [editBlog, setEditBlog] = useState(null)



    function toggleFormModal() {
        setShowFormModal(prev => !prev);
      
    }

    useEffect(() => {
        blogsAPI.getMyBlogs().then((blogs) => {
            setBlogs(blogs);
        });
    }, []);

    async function handleDelete(blogId) {
        try {
            // Call the deleteBlog function from the API, passing the blogId
            await blogsAPI.deleteBlog(blogId);

            // Filter out the deleted blog from the current list of blogs
            const updatedBlogs = blogs.filter(blog => blog._id !== blogId);

            // Update the state with the new list of blogs
            setBlogs(updatedBlogs);

            console.log("Blog deleted successfully");
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    }

    const blogCards = blogs.map((blog, index) => (
        <BlogCard newBlog={newBlog} setNewBlog={setNewBlog}  key={index} blog={blog} setBlogs={setBlogs} setEditBlog={setEditBlog} toggleFormModal={toggleFormModal} handleDelete={handleDelete} showFormModal={showFormModal} />
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
                        <button className="btn button-custom" onClick={toggleFormModal}>Create Blog</button>
                        <BlogFormModal newBlog={newBlog} setNewBlog={setNewBlog} uploadImage={uploadImage} blogs={blogs} setBlogs={setBlogs} showFormModal={showFormModal} toggleFormModal={toggleFormModal} editBlog={editBlog} setEditBlog={setEditBlog}/>
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