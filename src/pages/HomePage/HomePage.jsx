import React from "react";
import { useNavigate } from "react-router-dom"; 
import './HomePage.css';


function HomePage(){

    const navigate = useNavigate();
    const navigateToCommunity = () => {
        navigate('/community'); // Use navigate method to change the route
    };



    return(
        <div className="home-page">
            <h1>Travel WikkiMedia</h1>
            <p style={{ textAlign: 'justify' }}>
            Explore the globe with Travel WikkiMedia, your gateway to a worldwide network of adventurers. Uncover and share journey tales, and connect with fellow travelers. With us, every voyage becomes a shared story. Dream, explore, discover, and inspire on each journey.</p>
            <button type="button" className="btn btn-info" onClick={navigateToCommunity}>Start Your Journey</button>
            {/* <div className="home-page-pic">
                <img src="/homepage-pic2.jpg" alt="travel picture 2" />
                <img src="/homepage-pic3.jpg" alt="travel picture 3" />
                <img src="/homepage-pic4.jpg" alt="travel picture 4" />
            </div> */}
        </div>
    )
}


export default HomePage;