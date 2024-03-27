import { Link } from 'react-router-dom';
import './GalleryCard.css'



function GalleryCard({ gallery, index }) {
    return (
        <>
                <div className="col-4 my-2 py-3 px-4">
                    <div className="card-custom">
                        <img className="gallery-image" src={gallery.preview} alt="Card image" />

                        <div className="card-body">
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className=''><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" className="rounded-circle" height="40px" width="40px" alt="avatar" /></div>
                                <div className='align-items-center mx-4 userNameDiv'>
                                Username | 27 Mar 2024
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