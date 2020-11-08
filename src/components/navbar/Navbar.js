import React from "react";
import { Link } from "react-router-dom";
import logo1 from "./worksheet_logo.png";
import logo2 from "./adjusted_logo.png";
import logo3 from "./motivating-learning-logo.png";
import star from "./star-icon.png";
import home from "./home-icon.png";
import bell from "./bell-icon.png";
import menu from "./menu-icon.png";

var whichAppIsActive = "blog"
var dropDownIsVisible = false

class Navbar extends React.Component {
    constructor() {
        super()

        this.state = {
            navbarDropdown: {display:"none"}
        }

    }

    hoverDropdown() {
        console.log("HELLO DROM")
        this.setState({
            navbarDropdown: {display:"none"}
        })
        
    }

    reportWindowSize = e => {console.log(window.innerWidth);}
    listenScrollEvent = e => {console.log(window.scrollY)}
        

    componentDidMount() {
        console.log(window.innerWidth)
        console.log(window.innerHeight)
        window.addEventListener('scroll', this.listenScrollEvent)
        window.addEventListener('resize', this.reportWindowSize)

        // document.getElementById("standard_logo").style.display = "inherit";
        // document.getElementById("adjusted_logo").style.display = "none";
        // document.getElementById("motivating_logo").style.display = "none";
        window.scrollTo(0,0);
    }

    
    

    render() {
        return (
            <div className="navbar">
                {/* <div id="ar_worksheets_navbar" className="ar_worksheets_navbar">
                    <Link to="/app" style={{ textDecoration: 'none' }}>
                    <img id="standard_logo" src={logo1} alt=""/>
                    <img id="adjusted_logo" src={logo2} alt=""/>
                    <img id="motivating_logo" src={logo3} alt=""/>
                    </Link>
                </div> */}

                <div className="navbar_blog" id="navbar_blog">
                    <img id="motivating_logo" src={logo3} alt=""/>
                    <p className="navbar_home">HOME</p>
                    <p className="navbar_our_apps" onClick={toggleDropdown} onMouseLeave={() => this.hoverDropdown()}>OUR APPS</p>
                    <p className="navbar_subscribe">SUBSCRIBE</p> 
                </div>

                <div className="navbar_blog_small" >
                    <img id="motivating_logo" src={logo3} alt=""/>
                    <img src={home} className="navbar_home_icon" alt="home"/>
                    <img src={star} className="navbar_star_icon" onClick={toggleDropdown} alt="star"/>
                    <img src={bell} className="navbar_bell_icon" alt="bell"/>
                    <img src={menu} className="navbar_menu_icon" onClick={toggleDropdown_menu} alt="menu"/>
                </div>

                <div className="navbar_our_apps_dropdown" id="navbar_dropdown" style={this.state.navbarDropdown}>
                    <Link to="/math-leveling" onClick={() => whichApp("MathLevelingX")} style={{ textDecoration: 'none' }}><p >MATH LEVELING X</p></Link>
                    <Link to="/app" onClick={() => whichApp("ARWorksheets")} style={{ textDecoration: 'none' }}><p>AR WORKSHEETS</p></Link>
                </div>

                <div className="navbar_menu_dropdown" id="navbar_menu_dropdown" style={{display:"none"}}>
                    <Link className="navbar_menu_icons" to="/math-leveling" style={{ textDecoration: 'none' }}><p >HOME</p></Link>
                    <div className="navbar_menu_icons" to="/app" style={{ textDecoration: 'none' }}><p>SUBSCRIBE</p></div>
                    <div className="navbar_menu_icons" to="/app" style={{ textDecoration: 'none' }}><p>OUR APPS</p></div>
                    <Link className="navbar_menu_apps" onClick={() => whichApp("MathLevelingX")} to="/math-leveling" style={{ textDecoration: 'none' }}><p>MATH LEVELING X</p></Link>
                    <Link className="navbar_menu_apps" onClick={() => whichApp("ARWorksheets")} to="/app" style={{ textDecoration: 'none' }}><p>AR WORKSHEETS</p></Link>
                </div>

                
            </div>
        );
    }
}

export default Navbar;

function toggleDropdown() {
    console.log("DROPDOWN")
    if (dropDownIsVisible == false) {document.getElementById("navbar_dropdown").style.display = "inherit"; 
    dropDownIsVisible = true;
    } else {document.getElementById("navbar_dropdown").style.display = "none";
    dropDownIsVisible = false;
    }    
}

function toggleDropdown_menu() {
    console.log("DROPDOWN")
    if (dropDownIsVisible == false) {document.getElementById("navbar_menu_dropdown").style.display = "inherit"; 
    dropDownIsVisible = true;
    } else {document.getElementById("navbar_menu_dropdown").style.display = "none";
    dropDownIsVisible = false;
    }    
}

function whichApp(app) {
    if (app == "ARWorksheets") {whichAppIsActive = "ARWorksheets"; console.log(whichAppIsActive)}
    if (app == "MathLevelingX") {whichAppIsActive = "MathLevelingX"; console.log(whichAppIsActive)}

    document.getElementById("navbar_dropdown").style.display = "none"
    document.getElementById("navbar_menu_dropdown").style.display = "none";
}




