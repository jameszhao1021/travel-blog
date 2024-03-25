import React, { useState } from 'react';
import CountrySelectForm from './CountrySelectForm'
import * as galleriesAPI from '../utilities/galleries-api'

function GalleryForm({ handleChange, uploadImage, formRef, preview, setPreview, newGallery, setNewGallery, selectedCountry, setSelectedCountry }) {

    function handleChange(e) {
        if (e.target.name === 'preview') {
            const selectedFile = e.target.files[0];
            setPreview(selectedFile);
            setNewGallery({ ...newGallery, preview: selectedFile }); 
        } else {
            setNewGallery({ ...newGallery, [e.target.name]: e.target.value });
        }
    }

    return (
        <div className='row' >
            <form className='container d-flex flex-column' autoComplete="off" style={{ maxHeight: '750px', overflowY: 'hidden' }} ref={formRef}>

                <div className='col-lg-12 d-flex align-items-center gap-3'>
                    <CountrySelectForm handleChange={handleChange} newGallery={newGallery} setNewGallery={setNewGallery} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
                    <label>Select a country</label>
                </div>

                <div className=' d-flex align-items-center gap-3'>
                    <input type="file" name="preview" onChange={handleChange} />
                    <label>Upload a picture</label>
                </div>
                <textarea name="text" id="text" rows='23' placeholder='Write a short caption here' value={newGallery.text} onChange={handleChange} required></textarea>
            </form>
        </div>
    );

}
export default GalleryForm