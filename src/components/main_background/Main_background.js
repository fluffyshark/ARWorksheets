import React from "react";
import { Link } from "react-router-dom";
import ReactGa from 'react-ga';
import dark_overlay from "./dark_overlay.png";
import hand_ipad from "./hand_ipad-min.png";
import mac from "./mac.png";
import cup from "./cup.png";
import iPhone from "./iphone.png";
import download_icon from "./download_icon.png";
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
        window.scrollTo(0,0);
    }
    

    
    

    render() {
        return (
            <div className="background">
                    <img className="dark_overlay" src={dark_overlay} alt="" />
                    <p className="main_title">Correct worksheets effortless with AR</p>
                    <p className="main_text"> Will you be able to correct a student's worksheet in less that 10 seconds, every time?</p>
                    <img className="iPad_image" src={hand_ipad} alt="" />
                    <img className="mac" src={mac} alt="" />
                    <img className="cup" src={cup} alt="" />
                    <img className="iphone" src={iPhone} alt="" />
                    <Link className="downlad_worksheet_btn" to="/download_worksheets" onClick={ClickDownloadWorksheets} style={{ textDecoration: 'none' }}>
                            <p>Download Worksheets</p>
                            <img src={download_icon} alt="" id="download_icon"/>
                            
                    </Link>
                    
                    <div className="downlad_from_app_store">
                        <a href="https://apps.apple.com/se/app/ar-worksheets/id1523196289"><img src={download_app_store} alt="" onClick={ClickToAppStore}/></a>
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

function ClickDownloadWorksheets() {
    ReactGa.event({
        category: 'Button - Download Worksheets',
        action: 'Takes users to Worksheets Section'
    })
}
function ClickToAppStore() {
    ReactGa.event({
        category: 'Button - Go to App Store',
        action: 'Takes users to App Store'
    })
}