import React, { useState } from 'react';
import CountrySelectForm from '../components/CountrySelectForm'
import * as blogsAPI from '../utilities/blogs-api'

function BlogForm({uploadImage, blogs, setBlogs}){

    const [newBlog, setNewBlog] = useState({
        country:'',
        preview:'',
        title:'',
        text:''
    })
   
    const [preview, setPreview] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);

    async function addBlog(blog) {
        const newBlogData = await blogsAPI.createBlog(blog);
        setBlogs(prevBlogs => [...prevBlogs, newBlogData]);
    }


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
        let submittedBlog = { ...newBlog };  // Create a copy of newBlog to pass to addBlog and setBlogs
       await  addBlog(submittedBlog); // Pass the copy to addBlog
       await setBlogs((prev) => [...prev, submittedBlog]); // Pass the copy to setBlogs
        setNewBlog({
            country:'',
            preview:'',
            title:'',
            text:''
        });
        setSelectedCountry('')
        e.target.reset();
    }

    return (
        <div className="container" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <form className='row d-flex flex-column' autoComplete="off" onSubmit={handleSubmit}>

                <div className='col-lg-6 d-flex align-items-center gap-3'>
                    <CountrySelectForm handleChange={handleChange} newBlog={newBlog} setNewBlog={setNewBlog} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>

                    <label>Where did you go?</label>
                </div>

                <div className=' d-flex align-items-center gap-3'>
                    <input type="file" name="preview" onChange={handleChange} />
                    {/* <button onClick={handleUpload}>Upload</button> */}
                    <label>Upload preview picture</label>
                </div>
                <input type="text" name='title' placeholder='Type your title here' value={newBlog.title} onChange={handleChange} />
                <textarea name="text" id="text" rows='20' placeholder='Write your blog here' value={newBlog.text} onChange={handleChange}></textarea>
                <div className='justify-content-center mb-3'>
                    <button className='btn btn-secondary col-lg-2' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );

}
export default BlogForm