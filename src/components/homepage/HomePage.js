import React from "react";
import Main_background from "../main_background/Main_background";
import Extension from "../extension_section/extension_section";
import Email_section from "../email_section/Email_section";
import Worksheets_section from "../worksheet_section/worksheetSection";
import Contact from "../contact/contact"


class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage">
                <Main_background />
                <Extension />
                <Email_section />
                <Worksheets_section />
                <Contact />
            </div>
        );
    }
}

export default HomePage;