import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const BlogDeleteModal = ({ toggleDeleteModal, showDeleteModal, handleDelete, blog}) => {
   

    return (
        <div>
          <Modal centered show={showDeleteModal}>
            <Modal.Body >
             <h4>Are you sure to delete this blog?</h4>
            </Modal.Body>
            <Modal.Footer >
            <Button variant="danger" onClick={()=>{handleDelete(blog._id); toggleDeleteModal()}}>
                Delete
              </Button>
              <Button variant="secondary" onClick={toggleDeleteModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );

}
export default BlogDeleteModal