import React from "react";
import Main_background from "../main_background/Main_background";
import Extension from "../extension_section/extension_section";
import Worksheets_section from "../worksheet_section/worksheetSection";



class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage">
                <Main_background />
                <Extension />
                <Worksheets_section />
                
                
            </div>
        );
    }
}

export default HomePage;