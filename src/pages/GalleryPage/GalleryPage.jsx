import React from "react";
import CountrySelectForm from '../../components/CountrySelectForm'
import GalleryForm from "../../components/GalleryForm";
import GalleryFormModal from "../../components/GalleryFormModal";
import { useState, useEffect } from "react";
import GalleryCard from "../../components/GalleryCard";
import * as galleriesAPI from '../../utilities/galleries-api';
import '../../index.css';
import './GalleryPage.css';
import GalleryCarousel from "../../components/GalleryCarousel";


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
        <div className="container">
        <div className="pageTitle">Photo Gallery</div>
            <div className="pageDescription">Every picture tells a story. Share your favourite discoveries</div>
            <GalleryCarousel />

            <div className="container">
                <div className="row">

                <div>
                    { user && 
                        <div className="d-flex justify-content-end">
                            <button className="btn col-lg-2 float-start post-btn" onClick={toggleModal} >Post</button>    
                        </div> 
                    } 

                    <GalleryFormModal uploadImage={uploadImage} galleries={galleries} setGalleries={setGalleries} showModal={showModal} toggleModal={toggleModal} />
                </div>
                </div>
                
            </div> 

            <div className="row">
                    {galleryCards}
                </div>
        </div>
        </>
    );
};
export default GalleryPage;
