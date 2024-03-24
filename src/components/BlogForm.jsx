import React, { useState } from 'react';
import CountrySelectForm from '../components/CountrySelectForm'
import * as blogsAPI from '../utilities/blogs-api'

function BlogForm({ handleChange, uploadImage, formRef, preview, setPreview, newBlog, setNewBlog, selectedCountry, setSelectedCountry }) {

    // const [newBlog, setNewBlog] = useState({
    //     country:'',
    //     preview:'',
    //     title:'',
    //     text:''
    // })

    // const [preview, setPreview] = useState('');
    // const [selectedCountry, setSelectedCountry] = useState(null);

    // async function addBlog(blog) {
    //     const newBlog = await blogsAPI.createBlog(blog);
    //     setBlogs([...blogs, newBlog]);
    // }



    
    //    test cloudinary
 
    // function handleChange(e) {
    //     if(e.target.name == 'preview'){ 
    //     setNewBlog({ ...newBlog, [e.target.name]: e.target.files[0] })
    //     }else{
    //     setNewBlog({ ...newBlog, [e.target.name]: e.target.value })
    //     }
    // }
    function handleChange(e) {
        if (e.target.name === 'preview') {
            // If the input is for the preview picture and a file is selected
            const selectedFile = e.target.files[0];
            setPreview(selectedFile); // Optionally, you can set the preview state
            setNewBlog({ ...newBlog, preview: selectedFile }); // Set the selected file in the newBlog state
        } else {
            // For other inputs, update the value in the newBlog state
            setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
        }
    }



    // function handleChange(e) {
    //     const { name, value, files } = e.target;

    //     if (name === 'preview' && files.length > 0) {
    //         // If the input is for the preview picture and a file is selected
    //         setNewBlog({ ...newBlog, [name]: files[0] }); // Set the selected file
    //     } else {
    //         // For other inputs, update the value in the newBlog state
    //         setNewBlog({ ...newBlog, [name]: value });
    //     }
    // }


    // async function handleSubmit(e) {
    //     e.preventDefault();

    //     if (preview) {
    //         const data = await uploadImage(preview);
    //         newBlog.preview = data.url;
    //     } else {
    //         setPreview('');
    //     }
    //     let submittedBlog = { ...newBlog };  // Create a copy of newBlog to pass to addBlog and setBlogs
    //    await  addBlog(submittedBlog); // Pass the copy to addBlog
    //    await setBlogs((prev) => [...prev, submittedBlog]); // Pass the copy to setBlogs
    //     setNewBlog({
    //         country:'',
    //         preview:'',
    //         title:'',
    //         text:''
    //     });
    //     setSelectedCountry('')
    //     e.target.reset();
    // }

    return (
        <div className='row' >
            <form className='container d-flex flex-column' autoComplete="off" style={{ maxHeight: '750px', overflowY: 'hidden' }} ref={formRef}>

                <div className='col-lg-12 d-flex align-items-center gap-3'>
                    <CountrySelectForm handleChange={handleChange} newBlog={newBlog} setNewBlog={setNewBlog} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
                    <label>Where did you go?</label>
                </div>

                <div className=' d-flex align-items-center gap-3'>
                    <input type="file" name="preview" onChange={handleChange} />
                    {/* <input type="file" name="preview" onChange={(e) => e.target.files[0]} /> */}
                    <label>Upload preview piacture</label>
                </div>
                <input type="text" name='title' placeholder='Type your title here' value={newBlog.title} onChange={handleChange} required />
                <textarea name="text" id="text" rows='23' placeholder='Write your blog here' value={newBlog.text} onChange={handleChange} required></textarea>
                {/* <div className='justify-content-center'>
                    <button className='btn btn-secondary col-lg-2 ' type='submit'>Submit</button>
                </div> */}
            </form>
        </div>
    );

}
export default BlogForm