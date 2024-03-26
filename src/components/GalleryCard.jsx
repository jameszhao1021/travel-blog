import { Link } from 'react-router-dom';
import './BlogCard.css'



function GalleryCard({ gallery, index }) {
    return (
        <div className='col-4 my-2 py-3'>
            <div className='blogCard'>
                <div className='blogCardBg'>
                    <div className="d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                        <div><img className='blogCardImage' src={gallery.preview} /></div>
                        <div className='blogTitle'>{gallery.text}</div>
                        <div className='blogBottomText'>{gallery.country}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GalleryCard;