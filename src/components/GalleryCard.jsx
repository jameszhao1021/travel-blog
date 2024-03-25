import { Link } from 'react-router-dom';

function GalleryCard({ gallery, index }) {
    return (
        <div className='col-sm-4 my-2'>
            <div className="d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${gallery.preview})`, backgroundSize: "cover", height: "30vmin"}}>
                <div className="bg-light opacity-75">
                    <p>Country: {gallery.country}</p>
                    <p>{gallery.text}</p>
                </div>
            </div>
        </div>
    )
}
export default GalleryCard;