import React from "react";
import CountrySelectForm from '../../components/CountrySelectForm'
import GalleryForm from "../../components/GalleryForm";
import GalleryFormModal from "../../components/GalleryFormModal";
import { useState, useEffect } from "react";
import GalleryCard from "../../components/GalleryCard";
import * as galleriesAPI from '../../utilities/galleries-api';

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
        <div >
            <h1>galleries page</h1>
            <div className="container-fluid row justify-content-between" >

            <select>
                <option value="All Continents">All Continents</option>
                <option value="Public Posts">Public Posts</option>
                <option value="Private Posts">Private Posts</option>
            </select>
                
                <div className="col-lg-8 d-flex flex-column" >
                    <button className="btn btn-secondary col-lg-2 float-start" onClick={toggleModal} >Post</button>
                    <GalleryFormModal uploadImage={uploadImage} galleries={galleries} setGalleries={setGalleries} showModal={showModal} toggleModal={toggleModal} />
                    <div className=" container d-flex py-2 gap-3">
                        {galleryCards}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GalleryPage;

