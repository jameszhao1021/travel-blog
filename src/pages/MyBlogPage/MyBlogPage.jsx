import React from "react";
import './myBlogPage.css';

function MyBlogPage(){


    return(
        <>
        
        <div className="row mt-3 mb-3">
            <div className="col-sm profile">
                <div>Username</div>
                <div><img src="../../../public/images/profile.png" className="profileImage"/></div>
                <div>Bio</div>
            </div>

            <div className="col-sm">
                <div>Post count: count </div>
                <div>More features coming..</div>
            </div>

            <div className="col-sm">
                <div><img src="../../../public/images/map.png" className="mapImage"/></div>
            </div>
        </div>

        <div className="row mt-3 mb-3">
            <div className="col-sm">
                <button>Edit profile</button>
            </div>
            <div className="col-sm">
                <button>New Post</button>
            </div>
        </div>

        <div className="row mb-3 col-3">
            <select>
                <option value="All Posts">All Posts</option>
                <option value="Public Posts">Public Posts</option>
                <option value="Private Posts">Private Posts</option>
            </select> 
        </div>

        <div className="row">
            <div >Article Card goes here</div>
        </div>
        
        </>
    )
}


export default MyBlogPage