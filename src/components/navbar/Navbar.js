import React from "react";
import { Link } from "react-router-dom";
import logo1 from "./worksheet_logo.png";
import logo2 from "./adjusted_logo.png";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/app" style={{ textDecoration: 'none' }}>
                <img id="standard_logo" src={logo1} alt=""/>
                <img id="adjusted_logo" src={logo2} alt=""/>
                </Link>
                
            </div>
        );
    }
}

export default Navbar;