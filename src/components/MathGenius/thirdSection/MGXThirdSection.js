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
                    <a className="MGX_download_app_store_link" href="https://apps.apple.com/us/app/math-leveling-x/id1535821552"><img className="math_leveling_logo" src={mathlevelinglogo} alt="mathlevelinglogo" /></a>
                    <a className="MGX_download_app_store_link" href="https://apps.apple.com/us/app/math-leveling-x/id1535821552"><img className="MGX_download_app_store" src={download_app_store} alt="download_app_store" /></a>
                </div>
            </div>

    );
}

//https://apps.apple.com/us/app/math-leveling-x/id1535821552
export default MGXThirdSection;


