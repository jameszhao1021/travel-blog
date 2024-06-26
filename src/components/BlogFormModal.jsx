import React, { useState, useRef, useEffect } from "react";
import * as blogsAPI from "../utilities/blogs-api";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import BlogForm from "./BlogForm";

const BlogFormModal = ({
  blog,
  toggleFormModal,
  showFormModal,
  uploadImage,
  blogs,
  setBlogs,
  editBlog,
  setEditBlog,
  newBlog,
  setNewBlog,
  selectedCountry,
  setSelectedCountry,
}) => {
  const [preview, setPreview] = useState("");
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (editBlog) {
      setNewBlog({ ...editBlog });

      // setLoading(false);
    } else {
      setNewBlog({
        view: 'Public Post',
        country: "",
        preview: "",
        title: "",
        text: "",
      });
    }
  }, [editBlog, setNewBlog]);

  async function addBlog(blog) {
    const newBlog = await blogsAPI.createBlog(blog);
    setBlogs([...blogs, newBlog]);
  }

  function resetAfterClose() {
    setSelectedCountry("");
    setEditBlog(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    if (preview) {
      const data = await uploadImage(preview);
      console.log("data about picture uploaded: " + data);
      newBlog.preview = data.url;
    } else {
      setPreview("");
    }
    let submittedBlog = { ...newBlog };
    if (!editBlog) {
      // Create a copy of newBlog to pass to addBlog and setBlogs
      await addBlog(submittedBlog); // Pass the copy to addBlog
      setNewBlog({
        view: 'Public Post',
        country: "",
        preview: "",
        title: "",
        text: "",
      });
      setSelectedCountry("");
      formRef.current.reset();
    } else {
      const editedBlog = await blogsAPI.updateBlog(editBlog._id, submittedBlog);
      setEditBlog(editedBlog);
      setBlogs(
        blogs.map((blog) => (blog._id === editedBlog._id ? editedBlog : blog))
      );
    }
    toggleFormModal();
    resetAfterClose();
    setIsSubmitting(false);
  }

  return (
    <Modal
      centered
      show={showFormModal}
      style={{ maxHeight: "100vh", overflowY: "auto" }}
    >
      <Modal.Header>
        <Modal.Title>Blog Form</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "800px", overflowY: "hidden" }}>
        <BlogForm
          editBlog={editBlog}
          formRef={formRef}
          setPreview={setPreview}
          newBlog={newBlog}
          setNewBlog={setNewBlog}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            toggleFormModal();
            resetAfterClose();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default BlogFormModal;
