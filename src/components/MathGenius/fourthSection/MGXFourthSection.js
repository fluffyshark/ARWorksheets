import React, { useEffect } from "react";
import app01 from "./app01.png";
import app02 from "./app02.png";
import app03 from "./app03.png";
import app04 from "./app04.png";
import Aos from "aos";
import "aos/dist/aos.css";


const MGXFourthSection = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (

        <div className="MGXFourthSection">

                <div className="MGXFourthSection-textHolder">
                    <p>Made hard work more bearable with points and levels</p>
                    <p className="MGXSmall-text">Let them enjoy their own progression</p>
                </div>

                <div data-aos="fade-up" className="MGXFourthSection-imageHolder">
                   <img id="MGXFourthSection-app01" className="MGXFourthSection-app_images" src={app01} alt="app01" />
                   <img id="MGXFourthSection-app02" className="MGXFourthSection-app_images" src={app02} alt="app02" />
                   <img id="MGXFourthSection-app03" className="MGXFourthSection-app_images" src={app03} alt="app03" />
                   <img id="MGXFourthSection-app04" className="MGXFourthSection-app_images" src={app04} alt="app04" />
                   
                </div>
            
            </div>

    );
}


export default MGXFourthSection;


