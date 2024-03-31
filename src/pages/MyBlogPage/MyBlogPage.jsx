import React, { useMemo } from "react";
import CountrySelectForm from '../../components/CountrySelectForm'
import BlogForm from "../../components/BlogForm";
import BlogFormModal from "../../components/BlogFormModal";
import ProfileFormModal from "../../components/ProfileFormModal";
import { useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import * as blogsAPI from '../../utilities/blogs-api';
import * as profilesAPI from '../../utilities/profiles-api'
import InteractiveMap from "../../components/InteractiveMap";
import '../../index.css';
import '../MyBlogPage/myBlogPage.css'

function MyBlogPage({ user, uploadImage }) {
    const [newBlog, setNewBlog] = useState({
        country: '',
        preview: '',
        title: '',
        text: ''
    })

    const [blogs, setBlogs] = useState([]);
    const [showFormModal, setShowFormModal] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [editBlog, setEditBlog] = useState(null)

    const [selectedCountry, setSelectedCountry] = useState(null);

    const [profile, setProfile] = useState({
        // picture: '../../../public/images/profile.png',
        // bio: '🌍 Wanderlust Enthusiast\n🏔️ Adventure Seeker\nStoryteller ✈️'
    })

    const [editProfile, setEditProfile] = useState(null)
    const [newProfile, setNewProfile] = useState(profile)

    function toggleFormModal() {
        setShowFormModal(prev => !prev);
    }

    function toggleProfileModal() {
        setShowProfileModal(prev => !prev);
    }

    useEffect(() => {
        blogsAPI.getMyBlogs().then((blogs) => {
            setBlogs(blogs);
        });
    }, []);

    const markedCountries = useMemo(() => blogs.map(blog => blog.country), [blogs])

    useEffect(() => {
        profilesAPI.getMyProfile().then((profile) => {
            setProfile(profile);
        });
    }, []);

    useEffect((() => {
        console.log('see current profile: ' + profile.bio)
    }))
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
        <BlogCard newBlog={newBlog} setNewBlog={setNewBlog} key={index} blog={blog} setBlogs={setBlogs} setEditBlog={setEditBlog} toggleFormModal={toggleFormModal} handleDelete={handleDelete} showFormModal={showFormModal} />
    ))
    return (
        <div className="container">
            <div className="pageTitle">My Blog</div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 profile">
                        {profile.picture ? (
                            <img src={profile.picture} className="profileImage" alt="Profile" style={{ maxWidth: '250px', maxHeight: '250px' }} />
                        ) : (
                            <div className="loading-spinner">Loading...</div>
                        )}
                        <div>{user.name}</div>
                        <div className="bio">{profile.bio}</div>
                        <button className="btn button-custom" onClick={toggleProfileModal}>Edit profile</button>
                        <ProfileFormModal profile={profile} setProfile={setProfile} uploadImage={uploadImage} showProfileModal={showProfileModal} toggleProfileModal={toggleProfileModal} editProfile={editProfile} setEditProfile={setEditProfile} user={user} newProfile={newProfile} setNewProfile={setNewProfile} />
                    </div>
                    <div className="col-lg-8">
                        <InteractiveMap markedCountries={markedCountries} />
                    </div>
                </div>
            </div>
           <div className="container">
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
                    <BlogFormModal newBlog={newBlog} setNewBlog={setNewBlog} uploadImage={uploadImage} blogs={blogs} setBlogs={setBlogs} showFormModal={showFormModal} toggleFormModal={toggleFormModal} editBlog={editBlog} setEditBlog={setEditBlog} selectedCountry={selectedCountry}setSelectedCountry={setSelectedCountry} />
                </div>
            </div>
            <div className="container myBlogPostDiv">
                <div className="row">
                    {blogCards}
                </div>
            </div>
            </div>
        </div>
    );
};
export default MyBlogPage;