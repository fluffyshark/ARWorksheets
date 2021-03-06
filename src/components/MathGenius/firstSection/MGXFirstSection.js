import React from "react";
import background from "./background.jpg";

class MGXFirstSection extends React.Component {
    
    reportWindowSize = e => {console.log(window.innerWidth);}
    listenScrollEvent = e => {console.log(window.scrollY)}
        

    componentDidMount() {
        console.log(window.innerWidth)
        console.log(window.innerHeight)
        window.addEventListener('scroll', this.listenScrollEvent)
        window.addEventListener('resize', this.reportWindowSize)

        // document.getElementById("standard_logo").style.display = "none";
        // document.getElementById("adjusted_logo").style.display = "none";
        // document.getElementById("motivating_logo").style.display = "inherit";
        window.scrollTo(0,0);
    }


    render() {
        return (
            <div className="MGXFirstSection">

                <div className="MGXBackgroundGradient">
                    <div className="MGXFirstSection-TextHolder">
                        <p className="MGXFirstSection-text-1">This is how my</p>
                        <p className="MGXFirstSection-text-2">STUDENTS<br/>MASTERED</p>
                        <p className="MGXFirstSection-text-3">The multiplication table</p>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default MGXFirstSection;


