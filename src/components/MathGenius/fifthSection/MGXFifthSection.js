import React, { useEffect } from "react";
import fifthimage from "./fifthimage.png";
import Aos from "aos";
import "aos/dist/aos.css";


const MGXFifthSection = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (

        <div className="MGXFifthSection">

                <div className="MGXFifthSection-textHolder">
                    <p>Built in inventive to push on by connecting points to rewards</p>
                    <p className="MGXFifthSection-SmallText">The students were not only doing math, they were earning points to buy cards and to upgrade them. Which made them feel rewarded for every problem solved.</p>
                </div>

                <div data-aos="fade-up" className="MGXFifthSection-imageHolder">
                    <img id="MGXFifthSection-image01" src={fifthimage} alt="fifthimage" />
                </div>
              
        </div>

    );
}



export default MGXFifthSection 
    