import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './GalleryCard.css'



function GalleryCard({ gallery, index, user }) {

    const dateTimeString = gallery.updatedAt;
    const dateTime = new Date(dateTimeString);
    const formattedDate = dateTime.toLocaleDateString();
    const [isRendered, setIsRendered] = useState(false);
    const [userName, setUserName] = useState('');
    

    useEffect(() => {
        setIsRendered(true);
        setUserName(gallery.user);
        console.log(gallery.user);
    }, []);


    return (
        <>
                <div className="col-4 my-2 py-3 px-4">
                    <div className="card-custom">
                        <img className="gallery-image" src={gallery.preview} alt="Card image" />

                        <div className="card-body">
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className=''><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" className="rounded-circle" height="40px" width="40px" alt="avatar" /></div>
                                <div className='align-items-center mx-4 userNameDiv'>
                                {isRendered && `${userName} |`} {formattedDate}
                                </div>
                            </div>

                            <div className="card-title font-weight-bold mb-2 country-div">
                                {gallery.country}
                            </div>
                            <div className='gallery-text'>
                                {gallery.text}
                            </div>   
                        </div> 
                    </div>
                </div>
        </>
    )
}
export default GalleryCard;