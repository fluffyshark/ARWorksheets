import React from "react";
import download_app_store from "./download_app_store.png";

class MGXSeventhSection extends React.Component {
    

    render() {
        return (
            <div className="MGXSeventhSection">

                <div className="MGXSeventhSection-textHolder">
                    <p>THE RESULT</p>
                    <p className="result-text">In the span of 60 minutes my class of 22 students solved 6,627 math problem. That's around 300 for each student.</p>
                    <p className="result-text2">And they wished to continue on the next lesson</p>
                    <a className="MGX_download_app_store_link" href="https://apps.apple.com/us/app/math-leveling-x/id1535821552"><img src={download_app_store} alt="download" /></a>
                </div>
           
            </div>
        );
    }
}

export default MGXSeventhSection;


