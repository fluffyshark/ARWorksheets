import React, { useEffect } from "react";
import mathlevelinglogo from "./math_leveling_logo.png"
import download_app_store from "./download_app_store.png"
import Aos from "aos";
import "aos/dist/aos.css";

const MGXThirdSection = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (

        <div className="MGXThirdSection">

                <div className="MGXThirdSection-textHolder">
                    <p>Made an app that gave instant feedback</p>
                </div>

                <div data-aos="fade-up" className="MGXThirdSection-imageHolder">
                    <img className="math_leveling_logo" src={mathlevelinglogo} alt="mathlevelinglogo" />
                    <img className="MGX_download_app_store" src={download_app_store} alt="download_app_store" />
                </div>
            </div>

    );
}


export default MGXThirdSection;


