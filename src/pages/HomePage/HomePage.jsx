import React from "react";
import { useNavigate } from "react-router-dom"; 
import Footer from "../../components/Footer";
import './HomePage.css';
import '../../index.css';

function HomePage(){
    const navigate = useNavigate();
    const navigateToCommunity = () => {
        navigate('/community'); // Use navigate method to change the route
    };

    return(
        <div className="homeContainer">
            <div className="home-page">
                <div className="pageTitle">Travel WikkiMedia</div>
                {/* <div className="home-page-pic">
                    <img src="/homepage-pic2.jpg" alt="travel picture 2" />
                    <img src="/homepage-pic3.jpg" alt="travel picture 3" />
                    <img src="/homepage-pic4.jpg" alt="travel picture 4" />
                </div> */}
            </div>

            <div className="homeMainImage">
                <div className="homeMainText">
                    <span>Explore the globe with Travel WikkiMedia, your gateway to a worldwide network of adventurers.</span>
                    <span>Uncover and share journey tales, and connect with fellow travelers. With us, every voyage becomes a shared story.</span>
                    <span>Dream, explore, discover, and inspire on each journey.</span>

                    <div  className="buttonContainer">
                        <button type="button" className="btn btn-info button-custom-home" onClick={navigateToCommunity}>Start Your Journey</button>
                    </div>
                </div>         
            </div>
            <Footer />
        </div>
    )
}


export default HomePage;