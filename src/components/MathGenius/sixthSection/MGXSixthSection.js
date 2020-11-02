import React, { useEffect } from "react";
import sixth01 from "./sixthpart01.png";
import sixth02 from "./sixthpart02.png";
import Aos from "aos";
import "aos/dist/aos.css";


const MGXSixthSection = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (

        <div className="MGXSixthSection">

                <div className="MGXSixthSection-textHolder">
                    <p>Enabled some cooperation and sharing</p>
                    <p className="MGXSmall-text">It's not every student for themselves. For students to be able to solve math problems, gather points and share them and level upp together as a class is a powerful motivator.  </p>
                </div>
                
                <div data-aos="fade-up" className="MGXSixthSection-imageHolder">
                   <img id="MGXSixthSection-image01" className="MGXSixthSection-images" src={sixth01} alt="sixth01" />
                   <img id="MGXSixthSection-image02" className="MGXSixthSection-images" src={sixth02} alt="sixth02" />
                </div>
               
            </div>

    );
}



export default MGXSixthSection;


