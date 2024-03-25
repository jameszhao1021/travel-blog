import React, { useState, useRef } from 'react';
import * as galleriesAPI from '../utilities/galleries-api'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import GalleryForm from './GalleryForm';

const GalleryFormModal = ({ toggleModal, showModal, uploadImage, galleries, setGalleries }) => {
    const [preview, setPreview] = useState('');
    const formRef = useRef(null); 
    const [newGallery, setNewGallery] = useState({
        country:'',
        preview:'',
        text:''
    })
    const [selectedCountry, setSelectedCountry] = useState(null);

    async function addGallery(gallery) {
        const newGallery = await galleriesAPI.createGallery(gallery);
        setGalleries([...galleries, newGallery]);
    }

    async function handleSubmit(e) {
        e.preventDefault();
       
        if (preview) {
            const data = await uploadImage(preview);
            console.log('data about picture uploaded: '+ data)
            newGallery.preview = data.url;
        } else {
            setPreview('');
        }
        let submittedGallery = { ...newGallery }; 
       await  addGallery(submittedGallery);
        setNewGallery({
            country:'',
            preview:'',
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
              <GalleryForm uploadImage={uploadImage} galleries={galleries} setGalleries={setGalleries} newGallery={newGallery} setNewGallery={setNewGallery} preview={preview} setPreview={setPreview} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}  formRef={formRef}/>
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
export default GalleryFormModal