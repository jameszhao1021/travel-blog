import React from "react";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import BlogCard from "../../compoments/BlogCard";
import './myBlogPage.css';

function MyBlogPage({ user, blogs, setBlogs }){

    
=======
import CountrySelectForm from '../../components/CountrySelectForm'
import BlogForm from "../../components/BlogForm";
import BlogFormModal from "../../components/BlogFormModal";
import { useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import * as blogsAPI from '../../utilities/blogs-api'

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

    }, [blogs]);

    const blogCards = blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
    ))

    return (
        <div >
            <h1>MyBlogPage</h1>

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
                        <img src="../../../public/images/map.jpg" className="mapImage" alt="Map" />
                    </div>

                </div>

>>>>>>> 57fb59a3a9da55279aaac8c7a8fb8c3fbc5e672f

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

<<<<<<< HEAD
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
            {console.log("Blogs:", blogs)}
                {blogs.map((blog, index) => (
                    <div key={index}>
                        <BlogCard blog={blog} index={index} />
                    </div>
                ))}
            </div>

            
        </div>
    );
};
=======
>>>>>>> 57fb59a3a9da55279aaac8c7a8fb8c3fbc5e672f


export default MyBlogPage;
