import React, { useState, useRef } from 'react';
import * as blogsAPI from '../utilities/blogs-api'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BlogForm from './BlogForm'

const BlogFormModal = ({ toggleModal, showModal, uploadImage, blogs, setBlogs }) => {
    const [preview, setPreview] = useState('');
    const formRef = useRef(null); 
    const [newBlog, setNewBlog] = useState({
        country:'',
        preview:'',
        title:'',
        text:''
    })
    const [selectedCountry, setSelectedCountry] = useState(null);

    async function addBlog(blog) {
        const newBlog = await blogsAPI.createBlog(blog);
        setBlogs([...blogs, newBlog]);
    }

    async function handleSubmit(e) {
        e.preventDefault();
       
        if (preview) {
            const data = await uploadImage(preview);
            console.log('data about picture uploaded: '+ data)
            newBlog.preview = data.url;
        } else {
            setPreview('');
        }
        let submittedBlog = { ...newBlog };  // Create a copy of newBlog to pass to addBlog and setBlogs
       await  addBlog(submittedBlog); // Pass the copy to addBlog
       //await setBlogs((prev) => [...prev, submittedBlog]); // Pass the copy to setBlogs
        setNewBlog({
            country:'',
            preview:'',
            title:'',
            text:''
        });
        setSelectedCountry('')
        formRef.current.reset();
        toggleModal();
    }


    return (
        <div>
          <Modal centered show={showModal} style={{ maxHeight: '100vh', overflowY: 'auto' }}>
            <Modal.Body style={{ maxHeight: '800px', overflowY: 'hidden' }}>
              {/* Adjust maxHeight as needed to control the height */}
              <BlogForm uploadImage={uploadImage} blogs={blogs} setBlogs={setBlogs} newBlog={newBlog} setNewBlog={setNewBlog} preview={preview} setPreview={setPreview} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}  formRef={formRef}/>
            </Modal.Body>
            <Modal.Footer >
            <Button variant="secondary" onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="secondary" onClick={toggleModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );

}
export default BlogFormModal