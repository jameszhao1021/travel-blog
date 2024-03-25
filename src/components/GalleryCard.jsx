import { Link } from 'react-router-dom';

function GalleryCard({ gallery, index }) {
    return (
        <div className="card col-lg-12" style={{ backgroundImage: `url(${gallery.preview})`, backgroundSize: 'cover' }}>
            <p className="bg-light opacity-75">{gallery.country}</p>
            <p className="bg-light opacity-75">{gallery.text}</p>
        </div>
    )
}
export default GalleryCard;