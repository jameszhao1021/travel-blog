import React from "react";
import { Link } from 'react-router-dom';
// import './SearchResultCard.css';

function SearchResultCard({ result }) { 
    // console.log('result is:', result);
    return (
        <>
            <div className="col-4 my-2 py-3">
                <div className='blogCard'>
                    <div className='blogCardBg'>
                        <Link to={`/search/${result._id}`}>
                            <div className="d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                            <div className=" col-lg-12" style={{ backgroundImage: `url(${result.preview})`, backgroundSize: 'cover', height: '60%' }}></div>
                                <div className='blogTitle'>{result.title}</div>
                                <div className='blogBottomText'>{result.country}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SearchResultCard;