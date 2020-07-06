import React from "react";
import { Link } from "react-router-dom"

import iPad_product from "./iPad_product.png"
import download_icon from "./download_icon.png";
import download_icon_purple from "./download_icon_purple.png";
import download_app_store from "./download_app_store.png";
import saves_time_icon from "./saves_time_icon.png";
import organize_icon from "./organize_icon.png";
import fun_icon from "./fun_icon.png";

class Main_background extends React.Component {


    reportWindowSize = e => {console.log(window.innerWidth);}
    listenScrollEvent = e => {console.log(window.scrollY)}
        

    componentDidMount() {
        console.log(window.innerWidth)
        console.log(window.innerHeight)
        window.addEventListener('scroll', this.listenScrollEvent)
        window.addEventListener('resize', this.reportWindowSize)

        document.getElementById("standard_logo").style.display = "inherit";
        document.getElementById("adjusted_logo").style.display = "none";
    }
    

    
    

    render() {
        return (
            <div className="background">
                    <p className="main_title">Correct worksheets effortless with AR</p>
                    <p className="main_text"> Will you be able to correct a student's worksheet in less that 10 seconds, every time?</p>
                    <img className="iPad_image" src={iPad_product} alt="" />
                    <Link className="downlad_worksheet_btn" to="/download_worksheets" style={{ textDecoration: 'none' }}>
                            <p>Download Worksheets</p>
                            <img src={download_icon} alt="" id="download_icon"/>
                            <img src={download_icon_purple} alt="" id="download_icon_purple"/>
                    </Link>
                    
                    <div className="downlad_from_app_store">
                        <img src={download_app_store} alt=""/>
                    </div>

                    <div className="feature_box" id="feature_box_1">
                        <img src={saves_time_icon} alt=""/>
                        <p>Get it done faster. Saves you time.</p>
                    </div>

                    <div className="feature_box" id="feature_box_2">
                        <img src={organize_icon} alt=""/>
                        <p>Organize & Manage your students score.</p>
                    </div>

                    <div className="feature_box" id="feature_box_3">
                        <img src={fun_icon} alt=""/>
                        <p>It's more fun this way. Enjoy it.</p>
                    </div>
               
            </div>
        );
    }
}

export default Main_background;