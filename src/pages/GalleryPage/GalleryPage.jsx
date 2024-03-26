import React from "react";
import CountrySelectForm from '../../components/CountrySelectForm'
import GalleryForm from "../../components/GalleryForm";
import GalleryFormModal from "../../components/GalleryFormModal";
import { useState, useEffect } from "react";
import GalleryCard from "../../components/GalleryCard";
import * as galleriesAPI from '../../utilities/galleries-api';
import '../../index.css';


function GalleryPage({ user, uploadImage }) {
    const [galleries, setGalleries] = useState([]);
    const [showModal, setShowModal] = useState(false);
    function toggleModal() {
        setShowModal(prev => !prev);
    }
    useEffect(() => {
        galleriesAPI.getMyGalleries().then((galleries) => {
            setGalleries(galleries);
        });
    }, []);

    const galleryCards = galleries.map((gallery, index) => (
        <GalleryCard key={index} gallery={gallery} />
    ))
    return (
        <>
        <div className="pageTitle">Photo Gallery</div>
            <div>Post photos of your favourite places around the world here</div>
            
            <div>
                <select>
                    <option value="All Continents">All Continents</option>
                    <option value="Public Posts">Public Posts</option>
                    <option value="Private Posts">Private Posts</option>
                </select>
            </div>

            <div>
                { user && <button className="btn btn-secondary col-lg-2 float-start" onClick={toggleModal} >Post</button> } 
                <GalleryFormModal uploadImage={uploadImage} galleries={galleries} setGalleries={setGalleries} showModal={showModal} toggleModal={toggleModal} />
            </div>

            <div className="container">
                <div className="row">
                    {galleryCards}
                </div>
            </div>
            
        </>
    );
};
export default GalleryPage;

