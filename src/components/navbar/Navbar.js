import React from "react";
import logo1 from "./worksheet_logo.png";
import logo2 from "./adjusted_logo.png";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img id="standard_logo" src={logo1} alt=""/>
                <img id="adjusted_logo" src={logo2} alt=""/>
            </div>
        );
    }
}

export default Navbar;