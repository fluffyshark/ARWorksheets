import React from "react";
import { Link } from "react-router-dom";
import facebook_share from "./facebook-share.png";
import twitter_share from "./twitter-share.png";
import pinterest_share from "./pinterest-share.png";

    

class Contact extends React.Component {
    
        

    
        

    
    
        componentDidMount() {
            const facebook_btn = document.querySelector(".facebook-btn");
            const twitter_btn = document.querySelector(".twitter-btn");        
            const pinterest_btn = document.querySelector(".pinterest-btn");

            const pinterest_img = document.querySelector(".pinterest-img");

            let postURL = encodeURI(document.location.href);
            let postTitle = encodeURI("Hi everyone, please check this out!");
            let postImg = encodeURI(pinterest_img.src);

            facebook_btn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postURL}`);
            twitter_btn.setAttribute("href", `https://twitter.com/share?url=${postURL}&text=${postTitle}&via=[via]&hashtags=[hashtags]
            `);
            pinterest_btn.setAttribute("href", "https://www.pinterest.se/robiny13961089/"
            );
        };
    
    
       
    

    render() {

        return (
            <div className="contact">
                
                <div className="contact_first_section">
                    <h1 className="contact_title_1">How can we help?</h1>
                    <h1 className="contact_title_2">Contact us anytime.</h1>
                    <div className="contact_info">
                        <p className="contact_info_text">SEND US A MESSAGE</p>
                        <p className="contact_info_email">hello@motivatinglearning.com</p>
                    </div>
                </div>

                <div className="contact_last_section">
                    <div className="text_container_1">
                        <Link to="/app" style={{ textDecoration: 'none' }}>
                            <p>Home</p>
                        </Link>
                        <Link to="/download_worksheets" style={{ textDecoration: 'none' }} >
                            <p>Get Worksheets</p>
                        </Link>
                        <a style={{textDecoration: 'none'}} href="https://apps.apple.com/se/app/ar-worksheets/id1523196289">
                            <p>Get the App</p>
                        </a>
                    </div>
                    <div className="text_container_2">
                        <Link to="/tos" style={{ textDecoration: 'none' }}>
                            <p>Terms Of Use</p>
                        </Link>
                        <Link to="/privacy" style={{ textDecoration: 'none' }}>
                            <p>Privacy Policy</p>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <p>Want to help?</p>
                        </Link>
                    </div>
                    <div className="text_container_3">
                        <p className="follow_us_on">Help Us Grow!</p>

                        <a href="#" className="facebook-btn">
                            <img className="facebook-img" src={facebook_share} alt="facebook_share_btn"/>
                        </a>
                        <a href="#" className="twitter-btn">
                            <img className="twitter-img" src={twitter_share} alt="twitter_share_btn"/>
                        </a>
                        <a href="#" className="pinterest-btn">
                            <img className="pinterest-img" src={pinterest_share} alt="pinterest_share_btn"/>
                        </a>
                        
                        
                    </div>
                        
                </div>
               

            </div>
        );
    }
}

export default Contact;

