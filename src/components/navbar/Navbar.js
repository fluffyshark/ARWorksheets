import React from "react";
import logo from "./worksheet_logo.png";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img src={logo} alt=""/>
            </div>
        );
    }
}

export default Navbar;