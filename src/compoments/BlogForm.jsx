import React, { useState } from 'react';
import CountrySelectForm from '../compoments/CountrySelectForm'
import * as blogsAPI from '../utilities/blogs-api'

function BlogForm({uploadImage, blogs, setBlogs}){

    const [newBlog, setNewBlog] = useState('')

    const [preview, setPreview] = useState('');

    async function addBlog(blog) {
        const newBlog = await blogsAPI.createBlog(blog);
        setBlogs([...blogs, newBlog]);
    }

    //test cloudinary
    // async function handleUpload(e) {
    //     try{
    //     const data = await uploadImage(preview);
    //     setPreview(data.url);
    //     console.log(preview)
    // }catch(err){
    //     console.log(err)
    // }
    // }

    function handleChange(e) {
        setNewBlog({ ...newBlog, [e.target.name]: e.target.value })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (preview) {
            const data = await uploadImage(preview);
            newBlog.preview = data.url;
        } else {
            setPreview('');
        }
        addBlog(newBlog);
        setBlogs((prev) => [...prev, newBlog]);
        setNewBlog({});
    }

    return (
        <div className='row'>
            <form className='container d-flex flex-column' autoComplete="off" onSubmit={handleSubmit}>

                <div className='col-lg-6 d-flex align-items-center gap-3'>
                    <CountrySelectForm handleChange={handleChange}/>

                    <label>Where did you go?</label>
                </div>

                <div className=' d-flex align-items-center gap-3'>
                    <input type="file" name="preview"  onChange={handleChange} />
                    {/* <button onClick={handleUpload}>Upload</button> */}
                    <label>Upload preview piacture</label>
                </div>
                <input type="text" name='title' placeholder='Type your title here' onChange={handleChange} />
                <textarea name="text" id="text" rows='20' placeholder='Write your blog here' onChange={handleChange}></textarea>
                <div className='justify-content-center'>
                    <button className='btn btn-secondary col-lg-2 ' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );

}
export default BlogForm