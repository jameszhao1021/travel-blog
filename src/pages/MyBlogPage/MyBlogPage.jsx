import React from "react";
import CountrySelectForm from '../../compoments/CountrySelectForm'
import BlogForm from "../../compoments/BlogForm";
import BlogFormModal from "../../compoments/BlogFormModal";
import { useState, useEffect } from "react";
import BlogCard from "../../compoments/BlogCard";
import * as blogsAPI from '../../utilities/blogs-api'


function MyBlogPage({ uploadImage }) {

    const [blogs, setBlogs] = useState([]);
    const [showModal, setShowModal] = useState(false);
  const[preview, setPreview] = useState(null)

    // async function handleUpload(e) {
    //     try {
    //         const data = await uploadImage(preview);
    //         setPreview(data.url);
    //         console.log(preview)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    async function handleUpload() {
        try {
            if (!preview) {
                console.error("No file selected.");
                return;
            }

            const data = await uploadImage(preview);
            console.log(data.url); // Assuming 'data.url' contains the uploaded image URL
        } catch (err) {
            console.log(err);
        }
    }
    function handleFileChange(e) {
        const file = e.target.files[0];
        setPreview(file); // Set the selected file as the preview
    }
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
        <div>
            <h1>MyBlogPage</h1>

            <input type="file" name="preview" onChange={handleFileChange} />
                    <button onClick={handleUpload}>upload</button>
                 

            <button className="btn btn-secondary float-start" onClick={toggleModal} >Create Blog</button>
            <BlogFormModal uploadImage={uploadImage} blogs={blogs} setBlogs={setBlogs} showModal={showModal} toggleModal={toggleModal} />
            <div className=" container d-flex  py-2 gap-3">
                {blogCards}
            </div>

            

        </div>
    )
}


export default MyBlogPage