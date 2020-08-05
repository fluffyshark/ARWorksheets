import React from "react";

import grammar01 from "./grammar01.png";
import grammar02 from "./grammar02.png";
import grammar03 from "./grammar03.png";
import grammar04 from "./grammar04.png";
import grammar05 from "./grammar05.png";

import grammar06 from "./grammar06.png";
import grammar07 from "./grammar07.png";
import grammar08 from "./grammar08.png";
import grammar09 from "./grammar09.png";
import grammar10 from "./grammar10.png";

import animals01 from "./animals01.png";
import animals02 from "./animals02.png";
import animals03 from "./animals03.png";
import animals04 from "./animals04.png";
import animals05 from "./animals05.png";

import farming01 from "./farming01.png";
import farming02 from "./farming02.png";
import farming03 from "./farming03.png";
import farming04 from "./farming04.png";
import farming05 from "./farming05.png";

import marine01 from "./marine01.png";
import marine02 from "./marine02.png";
import marine03 from "./marine03.png";
import marine04 from "./marine04.png";
import marine05 from "./marine05.png";

import camping01 from "./camping01.png";
import camping02 from "./camping02.png";
import camping03 from "./camping03.png";
import camping04 from "./camping04.png";
import camping05 from "./camping05.png";

import space01 from "./space01.png";
import space02 from "./space02.png";
import space03 from "./space03.png";
import space04 from "./space04.png";
import space05 from "./space05.png";

import foods01 from "./foods01.png";
import foods02 from "./foods02.png";
import foods03 from "./foods03.png";
import foods04 from "./foods04.png";
import foods05 from "./foods05.png";

import hospital01 from "./hospital01.png";
import hospital02 from "./hospital02.png";
import hospital03 from "./hospital03.png";
import hospital04 from "./hospital04.png";
import hospital05 from "./hospital05.png";

import body01 from "./body01.png";
import body02 from "./body02.png";
import body03 from "./body03.png";
import body04 from "./body04.png";
import body05 from "./body05.png";

import mystic01 from "./mystic01.png";
import mystic02 from "./mystic02.png";
import mystic03 from "./mystic03.png";
import mystic04 from "./mystic04.png";
import mystic05 from "./mystic05.png";

import sports01 from "./sports01.png";
import sports02 from "./sports02.png";
import sports03 from "./sports03.png";
import sports04 from "./sports04.png";
import sports05 from "./sports05.png";

import clothing01 from "./clothing01.png";
import clothing02 from "./clothing02.png";
import clothing03 from "./clothing03.png";
import clothing04 from "./clothing04.png";
import clothing05 from "./clothing05.png";

import grammar3_01 from "./grammar3_01.png";
import grammar3_02 from "./grammar3_02.png";
import grammar3_03 from "./grammar3_03.png";
import grammar3_04 from "./grammar3_04.png";
import grammar3_05 from "./grammar3_05.png";

var large_image_selected = 0

var alreadyAddedArray = ["false","false", "false", "false", "false", "false", "false", "false", "false", "false", "false",]
var largeImageArray = [
    grammar01, grammar01, grammar02, grammar03, grammar04, grammar05, 
    grammar06, grammar07, grammar08, grammar09, grammar10, 
    animals01, animals02, animals03, animals04, animals05,
    farming01, farming02, farming03, farming04, farming05,
    marine01, marine02, marine03, marine04, marine05,
    camping01, camping02, camping03, camping04, camping05,
    space01, space02, space03, space04, space05,
    foods01, foods02, foods03, foods04, foods05,
    hospital01, hospital02, hospital03, hospital04, hospital05,
    body01,body02,body03,body04,body05,
    mystic01,mystic02,mystic03,mystic04,mystic05,
    sports01,sports02,sports03,sports04,sports05,
    clothing01,clothing02,clothing03,clothing04,clothing05,
    grammar3_01,grammar3_02,grammar3_03,grammar3_04,grammar3_05
]

class Download_Worksheets extends React.Component {
    constructor() {
        super()

        this.state = {
           
        }
      
        
    }

    highlightImages(props){
        if (props === "image01") { 
            this.setState({
                image02: {left:"34%", transition: '1s' },
                image03: {left:"48%", transition: '1s' },
                image04: {left:"58%", transition: '1s' },
                image05: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image02") { 
            this.setState({
                image03: {left:"46%", transition: '1s' },
                image04: {left:"58%", transition: '1s' },
                image05: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image03") { 
            this.setState({
                image04: {left:"58%", transition: '1s' },
                image05: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image04") { 
            this.setState({
                image05: {left:"70%", transition: '1s' },
            }) 
        }
        
        if (props === "image06") { 
            this.setState({
                image07: {left:"34%", transition: '1s' },
                image08: {left:"48%", transition: '1s' },
                image09: {left:"58%", transition: '1s' },
                image10: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image07") { 
            this.setState({
                image08: {left:"46%", transition: '1s' },
                image09: {left:"58%", transition: '1s' },
                image10: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image08") { 
            this.setState({
                image09: {left:"58%", transition: '1s' },
                image10: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image09") { 
            this.setState({
                image10: {left:"70%", transition: '1s' },
            }) 
        }


        if (props === "image11") { 
            this.setState({
                image12: {left:"34%", transition: '1s' },
                image13: {left:"48%", transition: '1s' },
                image14: {left:"58%", transition: '1s' },
                image15: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image12") { 
            this.setState({
                image13: {left:"46%", transition: '1s' },
                image14: {left:"58%", transition: '1s' },
                image15: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image13") { 
            this.setState({
                image14: {left:"58%", transition: '1s' },
                image15: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image14") { 
            this.setState({
                image15: {left:"70%", transition: '1s' },
            }) 
        }



        if (props === "image16") { 
            this.setState({
                image17: {left:"34%", transition: '1s' },
                image18: {left:"48%", transition: '1s' },
                image19: {left:"58%", transition: '1s' },
                image20: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image17") { 
            this.setState({
                image18: {left:"46%", transition: '1s' },
                image19: {left:"58%", transition: '1s' },
                image20: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image18") { 
            this.setState({
                image19: {left:"58%", transition: '1s' },
                image20: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image19") { 
            this.setState({
                image20: {left:"70%", transition: '1s' },
            }) 
        }




        if (props === "image21") { 
            this.setState({
                image22: {left:"34%", transition: '1s' },
                image23: {left:"48%", transition: '1s' },
                image24: {left:"58%", transition: '1s' },
                image25: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image22") { 
            this.setState({
                image23: {left:"46%", transition: '1s' },
                image24: {left:"58%", transition: '1s' },
                image25: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image23") { 
            this.setState({
                image24: {left:"58%", transition: '1s' },
                image25: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image24") { 
            this.setState({
                image25: {left:"70%", transition: '1s' },
            }) 
        }



        if (props === "image26") { 
            this.setState({
                image27: {left:"34%", transition: '1s' },
                image28: {left:"48%", transition: '1s' },
                image29: {left:"58%", transition: '1s' },
                image30: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image27") { 
            this.setState({
                image28: {left:"46%", transition: '1s' },
                image29: {left:"58%", transition: '1s' },
                image30: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image28") { 
            this.setState({
                image29: {left:"58%", transition: '1s' },
                image30: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image29") { 
            this.setState({
                image30: {left:"70%", transition: '1s' },
            }) 
        }



        if (props === "image31") { 
            this.setState({
                image32: {left:"34%", transition: '1s' },
                image33: {left:"48%", transition: '1s' },
                image34: {left:"58%", transition: '1s' },
                image35: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image32") { 
            this.setState({
                image33: {left:"46%", transition: '1s' },
                image34: {left:"58%", transition: '1s' },
                image35: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image33") { 
            this.setState({
                image34: {left:"58%", transition: '1s' },
                image35: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image34") { 
            this.setState({
                image35: {left:"70%", transition: '1s' },
            }) 
        }



        if (props === "image36") { 
            this.setState({
                image37: {left:"34%", transition: '1s' },
                image38: {left:"48%", transition: '1s' },
                image39: {left:"58%", transition: '1s' },
                image40: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image37") { 
            this.setState({
                image38: {left:"46%", transition: '1s' },
                image39: {left:"58%", transition: '1s' },
                image40: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image38") { 
            this.setState({
                image39: {left:"58%", transition: '1s' },
                image40: {left:"70%", transition: '1s' },
            }) 
        }
        if (props === "image39") { 
            this.setState({
                image40: {left:"70%", transition: '1s' },
            }) 
        }
        
    }



    deHighlightImages(props){
        if (props === "image01") { 
            this.setState({
                image02: {left:"22%", transition: '1s' },
                image03: {left:"34%", transition: '1s' },
                image04: {left:"46%", transition: '1s' },
                image05: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image02") { 
            this.setState({
                image03: {left:"34%", transition: '1s' },
                image04: {left:"46%", transition: '1s' },
                image05: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image03") { 
            this.setState({
                image04: {left:"46%", transition: '1s' },
                image05: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image04") { 
            this.setState({
                image05: {left:"58%", transition: '1s' },
            }) 
        }


        if (props === "image06") { 
            this.setState({
                image07: {left:"22%", transition: '1s' },
                image08: {left:"34%", transition: '1s' },
                image09: {left:"46%", transition: '1s' },
                image10: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image07") { 
            this.setState({
                image08: {left:"34%", transition: '1s' },
                image09: {left:"46%", transition: '1s' },
                image10: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image08") { 
            this.setState({
                image09: {left:"46%", transition: '1s' },
                image10: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image09") { 
            this.setState({
                image10: {left:"58%", transition: '1s' },
            }) 
        }


        if (props === "image11") { 
            this.setState({
                image12: {left:"22%", transition: '1s' },
                image13: {left:"34%", transition: '1s' },
                image14: {left:"46%", transition: '1s' },
                image15: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image12") { 
            this.setState({
                image13: {left:"34%", transition: '1s' },
                image14: {left:"46%", transition: '1s' },
                image15: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image13") { 
            this.setState({
                image14: {left:"46%", transition: '1s' },
                image15: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image14") { 
            this.setState({
                image15: {left:"58%", transition: '1s' },
            }) 
        }


        if (props === "image16") { 
            this.setState({
                image17: {left:"22%", transition: '1s' },
                image18: {left:"34%", transition: '1s' },
                image19: {left:"46%", transition: '1s' },
                image20: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image17") { 
            this.setState({
                image18: {left:"34%", transition: '1s' },
                image19: {left:"46%", transition: '1s' },
                image20: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image18") { 
            this.setState({
                image19: {left:"46%", transition: '1s' },
                image20: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image19") { 
            this.setState({
                image20: {left:"58%", transition: '1s' },
            }) 
        }



        if (props === "image21") { 
            this.setState({
                image22: {left:"22%", transition: '1s' },
                image23: {left:"34%", transition: '1s' },
                image24: {left:"46%", transition: '1s' },
                image25: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image22") { 
            this.setState({
                image23: {left:"34%", transition: '1s' },
                image24: {left:"46%", transition: '1s' },
                image25: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image23") { 
            this.setState({
                image24: {left:"46%", transition: '1s' },
                image25: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image24") { 
            this.setState({
                image25: {left:"58%", transition: '1s' },
            }) 
        }




        if (props === "image26") { 
            this.setState({
                image27: {left:"22%", transition: '1s' },
                image28: {left:"34%", transition: '1s' },
                image29: {left:"46%", transition: '1s' },
                image30: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image27") { 
            this.setState({
                image28: {left:"34%", transition: '1s' },
                image29: {left:"46%", transition: '1s' },
                image30: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image28") { 
            this.setState({
                image29: {left:"46%", transition: '1s' },
                image30: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image29") { 
            this.setState({
                image30: {left:"58%", transition: '1s' },
            }) 
        }




        if (props === "image31") { 
            this.setState({
                image32: {left:"22%", transition: '1s' },
                image33: {left:"34%", transition: '1s' },
                image34: {left:"46%", transition: '1s' },
                image35: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image32") { 
            this.setState({
                image33: {left:"34%", transition: '1s' },
                image34: {left:"46%", transition: '1s' },
                image35: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image33") { 
            this.setState({
                image34: {left:"46%", transition: '1s' },
                image35: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image34") { 
            this.setState({
                image35: {left:"58%", transition: '1s' },
            }) 
        }



        if (props === "image36") { 
            this.setState({
                image37: {left:"22%", transition: '1s' },
                image38: {left:"34%", transition: '1s' },
                image39: {left:"46%", transition: '1s' },
                image40: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image37") { 
            this.setState({
                image38: {left:"34%", transition: '1s' },
                image39: {left:"46%", transition: '1s' },
                image40: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image38") { 
            this.setState({
                image39: {left:"46%", transition: '1s' },
                image40: {left:"58%", transition: '1s' },
            }) 
        }
        if (props === "image39") { 
            this.setState({
                image40: {left:"58%", transition: '1s' },
            }) 
        }

    }



    componentDidMount() {
        document.getElementById("standard_logo").style.display = "none";
        document.getElementById("adjusted_logo").style.display = "inherit";
        window.scrollTo(0,0);
    }

    
        
  



    render() {
        return (
            <div className="worksheets_for_download_container" id="topofpage">
                    <div className="worksheets_section_title_container">
                        <div className="worksheet_download_page_title">
                            <p>Choose your Worksheets</p>
                        </div>
                        <div className="worksheet_download_page_title_description">
                            <p>Click on an image to enlarge, then choose to download as PDF or just save the image to your device.</p>
                        </div>
                        
                       
                        </div>

                
                <div className="worksheets_for_download">

                    <div id="large_image_container" className="large_image_container_inactive" onClick={remove_large_image}>
                            <img id="large_image" className="large_image_inactive"  src={animals01} alt="large_image"/>
                            <p className="download_options_text">Option 1: Download as PDF<br/>Option 2: Save image to your device
                            </p>
                            <div className="download_pdf_btn" onClick={() => download()}><p>Download PDF</p></div>
                    </div>
                

                    


                
                <div className="worksheet_download_page_display_container" >
                    
                    <div className="worksheet_download_page_group" id="group1" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>English Grammar</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img id="worksheet_001" className="worksheet_image01" src={grammar01} alt="" style={this.state.image01} onClick={() => larger_image("1")} onMouseLeave={() => this.deHighlightImages('image01')} onMouseEnter={() => this.highlightImages('image01')}/>
                            <img id="worksheet_002" className="worksheet_image02" src={grammar02} alt="" style={this.state.image02} onClick={() => larger_image("2")} onMouseLeave={() => this.deHighlightImages('image02')} onMouseEnter={() => this.highlightImages('image02')}/>
                            <img id="worksheet_003" className="worksheet_image03" src={grammar03} alt="" style={this.state.image03} onClick={() => larger_image("3")} onMouseLeave={() => this.deHighlightImages('image03')} onMouseEnter={() => this.highlightImages('image03')}/>
                            <img id="worksheet_004" className="worksheet_image04" src={grammar04} alt="" style={this.state.image04} onClick={() => larger_image("4")} onMouseLeave={() => this.deHighlightImages('image04')} onMouseEnter={() => this.highlightImages('image04')}/>
                            <img id="worksheet_005" className="worksheet_image05" src={grammar05} alt="" style={this.state.image05} onClick={() => larger_image("5")} onMouseLeave={() => this.deHighlightImages('image05')} onMouseEnter={() => this.highlightImages('image05')}/>
                            
                        </div>
                        <div id="group1_btn" className="download_email_button" onClick={() => add_to_email("1")}><p id="group1_btn_text">Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group2" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>English Grammar</p>
                        </div>
                        <div className="worksheet_container01__image" >
                            <img id="worksheet_006" className="worksheet_image01" src={grammar06} alt="" style={this.state.image06} onClick={() => larger_image("6")} onMouseLeave={() => this.deHighlightImages('image06')} onMouseEnter={() => this.highlightImages('image06')}/>
                            <img id="worksheet_007" className="worksheet_image02" src={grammar07} alt="" style={this.state.image07} onClick={() => larger_image("7")} onMouseLeave={() => this.deHighlightImages('image07')} onMouseEnter={() => this.highlightImages('image07')}/>
                            <img id="worksheet_008" className="worksheet_image03" src={grammar08} alt="" style={this.state.image08} onClick={() => larger_image("8")} onMouseLeave={() => this.deHighlightImages('image08')} onMouseEnter={() => this.highlightImages('image08')}/>
                            <img id="worksheet_009" className="worksheet_image04" src={grammar09} alt="" style={this.state.image09} onClick={() => larger_image("9")} onMouseLeave={() => this.deHighlightImages('image09')} onMouseEnter={() => this.highlightImages('image09')}/>
                            <img id="worksheet_010" className="worksheet_image05" src={grammar10} alt="" style={this.state.image10} onClick={() => larger_image("10")} onMouseLeave={() => this.deHighlightImages('image10')} onMouseEnter={() => this.highlightImages('image10')}/>
                        </div>
                        <div id="group2_btn" className="download_email_button" onClick={() => add_to_email("2")}><p id="group2_btn_text">Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group3" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Animals Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img id="worksheet_011" className="worksheet_image01" src={animals01} alt="" style={this.state.image11} onClick={() => larger_image("11")} onMouseLeave={() => this.deHighlightImages('image11')} onMouseEnter={() => this.highlightImages('image11')}/>
                            <img id="worksheet_012" className="worksheet_image02" src={animals02} alt="" style={this.state.image12} onClick={() => larger_image("12")} onMouseLeave={() => this.deHighlightImages('image12')} onMouseEnter={() => this.highlightImages('image12')}/>
                            <img id="worksheet_013" className="worksheet_image03" src={animals03} alt="" style={this.state.image13} onClick={() => larger_image("13")} onMouseLeave={() => this.deHighlightImages('image13')} onMouseEnter={() => this.highlightImages('image13')}/>
                            <img id="worksheet_014" className="worksheet_image04" src={animals04} alt="" style={this.state.image14} onClick={() => larger_image("14")} onMouseLeave={() => this.deHighlightImages('image14')} onMouseEnter={() => this.highlightImages('image14')}/>
                            <img id="worksheet_015" className="worksheet_image05" src={animals05} alt="" style={this.state.image15} onClick={() => larger_image("15")} onMouseLeave={() => this.deHighlightImages('image15')} onMouseEnter={() => this.highlightImages('image15')}/>
                        </div>
                        <div id="group3_btn" className="download_email_button" onClick={() => add_to_email("3")}><p>Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group4" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Farming Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img id="worksheet_016" className="worksheet_image01" src={farming01} alt="" style={this.state.image16} onClick={() => larger_image("16")} onMouseLeave={() => this.deHighlightImages('image16')} onMouseEnter={() => this.highlightImages('image16')}/>
                            <img id="worksheet_017" className="worksheet_image02" src={farming02} alt="" style={this.state.image17} onClick={() => larger_image("17")} onMouseLeave={() => this.deHighlightImages('image17')} onMouseEnter={() => this.highlightImages('image17')}/>
                            <img id="worksheet_018" className="worksheet_image03" src={farming03} alt="" style={this.state.image18} onClick={() => larger_image("18")} onMouseLeave={() => this.deHighlightImages('image18')} onMouseEnter={() => this.highlightImages('image18')}/>
                            <img id="worksheet_019" className="worksheet_image04" src={farming04} alt="" style={this.state.image19} onClick={() => larger_image("19")} onMouseLeave={() => this.deHighlightImages('image19')} onMouseEnter={() => this.highlightImages('image19')}/>
                            <img id="worksheet_020" className="worksheet_image05" src={farming05} alt="" style={this.state.image20} onClick={() => larger_image("20")} onMouseLeave={() => this.deHighlightImages('image20')} onMouseEnter={() => this.highlightImages('image20')}/>
                        </div>
                        <div id="group4_btn" className="download_email_button" onClick={() => add_to_email("4")}><p>Add to email</p></div>
                    </div>



                    <div className="worksheet_download_page_group" id="group5" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Marine Live Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img className="worksheet_image01" src={marine01} alt="" style={this.state.image21} onClick={() => larger_image("21")} onMouseLeave={() => this.deHighlightImages('image21')} onMouseEnter={() => this.highlightImages('image21')}/>
                            <img className="worksheet_image02" src={marine02} alt="" style={this.state.image22} onClick={() => larger_image("22")} onMouseLeave={() => this.deHighlightImages('image22')} onMouseEnter={() => this.highlightImages('image22')}/>
                            <img className="worksheet_image03" src={marine03} alt="" style={this.state.image23} onClick={() => larger_image("23")} onMouseLeave={() => this.deHighlightImages('image23')} onMouseEnter={() => this.highlightImages('image23')}/>
                            <img className="worksheet_image04" src={marine04} alt="" style={this.state.image24} onClick={() => larger_image("24")} onMouseLeave={() => this.deHighlightImages('image24')} onMouseEnter={() => this.highlightImages('image24')}/>
                            <img className="worksheet_image05" src={marine05} alt="" style={this.state.image25} onClick={() => larger_image("25")} onMouseLeave={() => this.deHighlightImages('image25')} onMouseEnter={() => this.highlightImages('image25')}/>
                        </div>
                        <div id="group5_btn" className="download_email_button" onClick={() => add_to_email("5")}><p>Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group6" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Wildlife Camping Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img className="worksheet_image01" src={camping01} alt="" style={this.state.image26} onClick={() => larger_image("26")} onMouseLeave={() => this.deHighlightImages('image26')} onMouseEnter={() => this.highlightImages('image26')}/>
                            <img className="worksheet_image02" src={camping05} alt="" style={this.state.image27} onClick={() => larger_image("27")} onMouseLeave={() => this.deHighlightImages('image27')} onMouseEnter={() => this.highlightImages('image27')}/>
                            <img className="worksheet_image03" src={camping03} alt="" style={this.state.image28} onClick={() => larger_image("28")} onMouseLeave={() => this.deHighlightImages('image28')} onMouseEnter={() => this.highlightImages('image28')}/>
                            <img className="worksheet_image04" src={camping04} alt="" style={this.state.image29} onClick={() => larger_image("29")} onMouseLeave={() => this.deHighlightImages('image29')} onMouseEnter={() => this.highlightImages('image29')}/>
                            <img className="worksheet_image05" src={camping02} alt="" style={this.state.image30} onClick={() => larger_image("30")} onMouseLeave={() => this.deHighlightImages('image30')} onMouseEnter={() => this.highlightImages('image30')}/>
                        </div>
                        <div id="group6_btn" className="download_email_button" onClick={() => add_to_email("6")}><p>Add to email</p></div>
                    </div>


                    <div className="worksheet_download_page_group" id="group7" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Space Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img className="worksheet_image01" src={space01} alt="" style={this.state.image31} onClick={() => larger_image("31")} onMouseLeave={() => this.deHighlightImages('image31')} onMouseEnter={() => this.highlightImages('image31')}/>
                            <img className="worksheet_image02" src={space02} alt="" style={this.state.image32} onClick={() => larger_image("32")} onMouseLeave={() => this.deHighlightImages('image32')} onMouseEnter={() => this.highlightImages('image32')}/>
                            <img className="worksheet_image03" src={space03} alt="" style={this.state.image33} onClick={() => larger_image("33")} onMouseLeave={() => this.deHighlightImages('image33')} onMouseEnter={() => this.highlightImages('image33')}/>
                            <img className="worksheet_image04" src={space04} alt="" style={this.state.image34} onClick={() => larger_image("34")} onMouseLeave={() => this.deHighlightImages('image34')} onMouseEnter={() => this.highlightImages('image34')}/>
                            <img className="worksheet_image05" src={space05} alt="" style={this.state.image35} onClick={() => larger_image("35")} onMouseLeave={() => this.deHighlightImages('image35')} onMouseEnter={() => this.highlightImages('image35')}/>
                            
                        </div>
                        <div id="group7_btn" className="download_email_button" onClick={() => add_to_email("7")}><p id="group1_btn_text">Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group8" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Food Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img className="worksheet_image01" src={foods01} alt="" style={this.state.image36} onClick={() => larger_image("36")} onMouseLeave={() => this.deHighlightImages('image36')} onMouseEnter={() => this.highlightImages('image36')}/>
                            <img className="worksheet_image02" src={foods02} alt="" style={this.state.image37} onClick={() => larger_image("37")} onMouseLeave={() => this.deHighlightImages('image37')} onMouseEnter={() => this.highlightImages('image37')}/>
                            <img className="worksheet_image03" src={foods03} alt="" style={this.state.image38} onClick={() => larger_image("38")} onMouseLeave={() => this.deHighlightImages('image38')} onMouseEnter={() => this.highlightImages('image38')}/>
                            <img className="worksheet_image04" src={foods04} alt="" style={this.state.image39} onClick={() => larger_image("39")} onMouseLeave={() => this.deHighlightImages('image39')} onMouseEnter={() => this.highlightImages('image38')}/>
                            <img className="worksheet_image05" src={foods05} alt="" style={this.state.image40} onClick={() => larger_image("40")} onMouseLeave={() => this.deHighlightImages('image40')} onMouseEnter={() => this.highlightImages('image40')}/>
                        </div>
                        <div id="group8_btn" className="download_email_button" onClick={() => add_to_email("8")}><p id="group2_btn_text">Add to email</p></div>
                    </div>



                  


                    <div className="worksheet_download_page_group" id="group9" >
                        <div className="worksheet_download_page_container01__title">
                            <p>Hospital Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img className="worksheet_image01" src={hospital01} alt="" style={this.state.image01} onClick={() => larger_image("41")} onMouseLeave={() => this.deHighlightImages('image01')} onMouseEnter={() => this.highlightImages('image01')}/>
                            <img className="worksheet_image02" src={hospital02} alt="" style={this.state.image02} onClick={() => larger_image("42")} onMouseLeave={() => this.deHighlightImages('image02')} onMouseEnter={() => this.highlightImages('image02')}/>
                            <img className="worksheet_image03" src={hospital03} alt="" style={this.state.image03} onClick={() => larger_image("43")} onMouseLeave={() => this.deHighlightImages('image03')} onMouseEnter={() => this.highlightImages('image03')}/>
                            <img className="worksheet_image04" src={hospital04} alt="" style={this.state.image04} onClick={() => larger_image("44")} onMouseLeave={() => this.deHighlightImages('image04')} onMouseEnter={() => this.highlightImages('image04')}/>
                            <img className="worksheet_image05" src={hospital05} alt="" style={this.state.image05} onClick={() => larger_image("45")} onMouseLeave={() => this.deHighlightImages('image05')} onMouseEnter={() => this.highlightImages('image05')}/>
                            
                        </div>
                        <div id="group9_btn" className="download_email_button" onClick={() => add_to_email("9")}><p id="group1_btn_text">Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group10" >
                        <div className="worksheet_download_page_container01__title">
                            <p>Body Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img className="worksheet_image01" src={body01} alt="" style={this.state.image06} onClick={() => larger_image("46")} onMouseLeave={() => this.deHighlightImages('image06')} onMouseEnter={() => this.highlightImages('image06')}/>
                            <img className="worksheet_image02" src={body02} alt="" style={this.state.image07} onClick={() => larger_image("47")} onMouseLeave={() => this.deHighlightImages('image07')} onMouseEnter={() => this.highlightImages('image07')}/>
                            <img className="worksheet_image03" src={body05} alt="" style={this.state.image08} onClick={() => larger_image("48")} onMouseLeave={() => this.deHighlightImages('image08')} onMouseEnter={() => this.highlightImages('image08')}/>
                            <img className="worksheet_image04" src={body04} alt="" style={this.state.image09} onClick={() => larger_image("49")} onMouseLeave={() => this.deHighlightImages('image09')} onMouseEnter={() => this.highlightImages('image09')}/>
                            <img className="worksheet_image05" src={body03} alt="" style={this.state.image10} onClick={() => larger_image("50")} onMouseLeave={() => this.deHighlightImages('image10')} onMouseEnter={() => this.highlightImages('image10')}/>
                        </div>
                        <div id="group10_btn" className="download_email_button" onClick={() => add_to_email("10")}><p id="group2_btn_text">Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group11" >
                        <div className="worksheet_download_page_container01__title">
                            <p>Mystic Creatures Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img className="worksheet_image01" src={mystic05} alt="" style={this.state.image11} onClick={() => larger_image("51")} onMouseLeave={() => this.deHighlightImages('image11')} onMouseEnter={() => this.highlightImages('image11')}/>
                            <img className="worksheet_image02" src={mystic02} alt="" style={this.state.image12} onClick={() => larger_image("52")} onMouseLeave={() => this.deHighlightImages('image12')} onMouseEnter={() => this.highlightImages('image12')}/>
                            <img className="worksheet_image03" src={mystic03} alt="" style={this.state.image13} onClick={() => larger_image("53")} onMouseLeave={() => this.deHighlightImages('image13')} onMouseEnter={() => this.highlightImages('image13')}/>
                            <img className="worksheet_image04" src={mystic04} alt="" style={this.state.image14} onClick={() => larger_image("54")} onMouseLeave={() => this.deHighlightImages('image14')} onMouseEnter={() => this.highlightImages('image14')}/>
                            <img className="worksheet_image05" src={mystic01} alt="" style={this.state.image15} onClick={() => larger_image("55")} onMouseLeave={() => this.deHighlightImages('image15')} onMouseEnter={() => this.highlightImages('image15')}/>
                        </div>
                        <div id="group11_btn" className="download_email_button" onClick={() => add_to_email("11")}><p>Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group12" >
                        <div className="worksheet_download_page_container01__title">
                            <p>Sports Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img className="worksheet_image01" src={sports01} alt="" style={this.state.image16} onClick={() => larger_image("56")} onMouseLeave={() => this.deHighlightImages('image16')} onMouseEnter={() => this.highlightImages('image16')}/>
                            <img className="worksheet_image02" src={sports02} alt="" style={this.state.image17} onClick={() => larger_image("57")} onMouseLeave={() => this.deHighlightImages('image17')} onMouseEnter={() => this.highlightImages('image17')}/>
                            <img className="worksheet_image03" src={sports03} alt="" style={this.state.image18} onClick={() => larger_image("58")} onMouseLeave={() => this.deHighlightImages('image18')} onMouseEnter={() => this.highlightImages('image18')}/>
                            <img className="worksheet_image04" src={sports05} alt="" style={this.state.image19} onClick={() => larger_image("59")} onMouseLeave={() => this.deHighlightImages('image19')} onMouseEnter={() => this.highlightImages('image19')}/>
                            <img className="worksheet_image05" src={sports04} alt="" style={this.state.image20} onClick={() => larger_image("60")} onMouseLeave={() => this.deHighlightImages('image20')} onMouseEnter={() => this.highlightImages('image20')}/>
                        </div>
                        <div id="group12_btn" className="download_email_button" onClick={() => add_to_email("12")}><p>Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group13" >
                        <div className="worksheet_download_page_container01__title">
                            <p>Clothing Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img className="worksheet_image01" src={clothing01} alt="" style={this.state.image21} onClick={() => larger_image("61")} onMouseLeave={() => this.deHighlightImages('image21')} onMouseEnter={() => this.highlightImages('image21')}/>
                            <img className="worksheet_image02" src={clothing02} alt="" style={this.state.image22} onClick={() => larger_image("62")} onMouseLeave={() => this.deHighlightImages('image22')} onMouseEnter={() => this.highlightImages('image22')}/>
                            <img className="worksheet_image03" src={clothing03} alt="" style={this.state.image23} onClick={() => larger_image("63")} onMouseLeave={() => this.deHighlightImages('image23')} onMouseEnter={() => this.highlightImages('image23')}/>
                            <img className="worksheet_image04" src={clothing04} alt="" style={this.state.image24} onClick={() => larger_image("64")} onMouseLeave={() => this.deHighlightImages('image24')} onMouseEnter={() => this.highlightImages('image24')}/>
                            <img className="worksheet_image05" src={clothing05} alt="" style={this.state.image25} onClick={() => larger_image("65")} onMouseLeave={() => this.deHighlightImages('image25')} onMouseEnter={() => this.highlightImages('image25')}/>
                        </div>
                        <div id="group11_btn" className="download_email_button" onClick={() => add_to_email("11")}><p>Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group14" >
                        <div className="worksheet_download_page_container01__title">
                            <p>Grammar</p>
                        </div>
                        <div className="worksheet_container01__image" id="images_column">
                            <img className="worksheet_image01" src={grammar3_01} alt="" style={this.state.image26} onClick={() => larger_image("66")} onMouseLeave={() => this.deHighlightImages('image26')} onMouseEnter={() => this.highlightImages('image26')}/>
                            <img className="worksheet_image02" src={grammar3_02} alt="" style={this.state.image27} onClick={() => larger_image("67")} onMouseLeave={() => this.deHighlightImages('image27')} onMouseEnter={() => this.highlightImages('image27')}/>
                            <img className="worksheet_image03" src={grammar3_03} alt="" style={this.state.image28} onClick={() => larger_image("68")} onMouseLeave={() => this.deHighlightImages('image28')} onMouseEnter={() => this.highlightImages('image28')}/>
                            <img className="worksheet_image04" src={grammar3_04} alt="" style={this.state.image29} onClick={() => larger_image("69")} onMouseLeave={() => this.deHighlightImages('image29')} onMouseEnter={() => this.highlightImages('image29')}/>
                            <img className="worksheet_image05" src={grammar3_05} alt="" style={this.state.image30} onClick={() => larger_image("70")} onMouseLeave={() => this.deHighlightImages('image30')} onMouseEnter={() => this.highlightImages('image30')}/>
                        </div>
                        <div id="group12_btn" className="download_email_button" onClick={() => add_to_email("12")}><p>Add to email</p></div>
                    </div>


                    
                </div>
                </div>

                
            
            </div>
            
        );
    }
}

export default Download_Worksheets;

function remove_large_image() {
    
    document.getElementById("large_image_container").className = "large_image_container_inactive"
    document.getElementById("large_image").className = "large_image_inactive"
    document.getElementById("body").style.overflow = "visible"
    
}




function add_to_email(groupNr) {
    let whichGroup = `group${groupNr}`
    let whichGroupBtn = `group${groupNr}_btn`
   
    var alreadyAdded = alreadyAddedArray[groupNr]
   
    if (alreadyAdded == "false") {
        alreadyAddedArray[groupNr] = "true"
        document.getElementById(whichGroup).style.backgroundColor = "#66dc8829"
        document.getElementById(whichGroupBtn).style.backgroundColor = "#cccccc88"
        document.getElementById(whichGroupBtn).firstChild.textContent = "Remove"

        
    } else {
        alreadyAddedArray[groupNr] = "false"
        document.getElementById(whichGroup).style.backgroundColor = "#f9f9f9"
        document.getElementById(whichGroupBtn).firstChild.textContent = "Add to email"
        document.getElementById(whichGroupBtn).style.backgroundColor = "#00e07f"

        
    }
}



function larger_image(imageNr) {
    large_image_selected = imageNr
    console.log(large_image_selected)
    document.getElementById("large_image_container").className = "large_image_container_active"
    document.getElementById("large_image_container").style.top = `${window.scrollY}px`
    document.getElementById("large_image").className = "large_image_active"
    document.getElementById("body").style.overflow = "hidden"
  //  document.getElementById("large_image").src = largeImageArray[imageNr]
    
        switch(large_image_selected) {
            case "1": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+01/Grammar+-+Have+Has.png"; break;
            case "2": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+01/Grammar+-+There+Is+Are.png"; break;
            case "3": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+01/Grammar+-+Is+Are+02.png"; break;
            case "4": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+01/Grammar+-+In+At+On.png"; break;
            case "5": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+01/Grammar+-+Was+Were+01.png"; break;
            case "6": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+01/Grammar+-+A+An.png"; break;
            case "7": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+01/Grammar+-+Formulate+Sentences.png"; break;
            case "8": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+01/Grammar+-+do%2C+don't%2C+does%2C+doesn't%2C+did%2C+didn't.png"; break;
            case "9": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+01/Grammar+-+Do+Does.png"; break;
            case "10": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+01/Grammar+-+Have+Has+02.png"; break;
            case "11": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Animals/Animals+-+Word+Puzzle.png"; break; 
            case "12": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Animals/Animals+-+Test+your+Knowledge.png"; break;
            case "13": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Animals/Animals+-+Test+your+Knowledge+More.png"; break;
            case "14": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Animals/Animals+-+Match+The+Description.png"; break;
            case "15": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Animals/Animals+-+Crossword+Puzzle.png"; break;
            case "16": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Farming/Farming+-+Fill+in+The+Blanks.png"; break;
            case "17": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Farming/Farming+-+Match+The+description.png"; break;
            case "18": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Farming/Farming+-+Match+the+Words.png"; break;
            case "19": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Farming/Farming+-+Test+your+Knowledge.pdf.png"; break;
            case "20": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Farming/Farming+-+Word+Puzzle.pdf.png"; break;
            case "21": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Marine+Life/Marine+Life+-+Word+Puzzle.png"; break;
            case "22": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Marine+Life/Marine+Life+-+Test+your+Knowledge.png"; break;
            case "23": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Marine+Life/Marine+Life+-+Read+and+Understand.png"; break;
            case "24": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Marine+Life/Marine+Life+-+Match+the+Words.png"; break;
            case "25": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Marine+Life/Marine+Life+-+Crossword+Puzzle.png"; break;
            case "26": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Wildlife+Camping/Wildlife+Camping+-+Word+Search+Puzzle.png"; break;
            case "27": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Wildlife+Camping/Wildlife+Camping+-+Match+the+Description.png"; break;
            case "28": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Wildlife+Camping/Wildlife+Camping+-+Read+and+Understand.png"; break;
            case "29": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Wildlife+Camping/Wildlife+Camping+-+Match+the+Words.png"; break;
            case "30": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Wildlife+Camping/Wildlife+Camping+-+Test+your+Knowledge.png"; break;
            case "31": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Space/Space+-+Word+Search+Puzzle.png"; break;
            case "32": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Space/Space+-+Test+your+Knowledge.png"; break;
            case "33": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Space/Space+-+Read+and+Understand.png"; break;
            case "34": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Space/Space+-+Match+the+Words.png"; break;
            case "35": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Space/Space+-+Crossword+Puzzle.png"; break;
            case "36": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Foods/Foods+-+Word+Search+Puzzle02.png"; break;
            case "37": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Foods/Foods+-+Word+Search+Puzzle01.png"; break;
            case "38": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Foods/Foods+-+Test+your+Knowledge.png"; break;
            case "39": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Foods/Foods+-+Match+the+Words.png"; break;
            case "40": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Foods/Foods+-+Crossword+Puzzle.png"; break;
            case "41": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Hospital/Hospital+-+Crossword+Puzzle.png"; break;
            case "42": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Hospital/Hospital+-+Match+the+Description.png"; break;
            case "43": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Hospital/Hospital+-+Match+the+Words.png"; break;
            case "44": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Hospital/Hospital+-+Test+your+Knowledge.png"; break;
            case "45": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Hospital/Hospital+-+Word+Search+Puzzle.png"; break;
            case "46": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/The+Body/The+Body+-+Crossword+Puzzle.png"; break;
            case "47": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/The+Body/The+Body+-+Fill+in+The+Blanks.png"; break;
            case "48": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/The+Body/The+Body+-+Word+Puzzle.png"; break;
            case "49": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/The+Body/The+Body+-+Test+your+Knowledge.png"; break;
            case "50": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/The+Body/The+Body+-+Match+the+Parts.png"; break;
            case "51": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Mystic+Creatures/Mystic+Creatures+-+Word+Search+Puzzle+02.png"; break;
            case "52": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Mystic+Creatures/Mystic+Creatures+-+Match+the+Words.png"; break;
            case "53": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Mystic+Creatures/Mystic+Creatures+-+Crossword+Puzzle.png"; break;
            case "54": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Mystic+Creatures/Mystic+Creatures+-+Word+Seach+Puzzle.png"; break;
            case "55": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Mystic+Creatures/Mystic+Creatures+-+Match+the+Description.png"; break;
            case "56": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Sports/Sports+-+Crossword+Puzzle.png"; break;
            case "57": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Sports/Sports+-+Match+the+Words.png"; break;
            case "58": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Sports/Sports+-+Test+your+Knowledge.png"; break;
            case "59": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Sports/Sports+-+Word+Search+Puzzle.png"; break;
            case "60": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Sports/Sports+-+Test+your+Knowledge+02.png"; break;
            case "61": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Clothing/Clothing+-+Crossword+puzzle.png"; break;
            case "62": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Clothing/Clothing+-+Fill+in+the+blanks.png"; break;
            case "63": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Clothing/Clothing+-+Test+your+knowledge.png"; break;
            case "64": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Clothing/Clothing+-+Word+puzzle.png"; break;
            case "65": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Clothing/Clothing+Accessories++-+Test+your+knowledge.png"; break;
            case "66": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+03/Grammar+-+Apostrophe%2C+genitive%2C+possessive.png"; break;
            case "67": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+03/Grammar+-+Formulate+sentences2.png"; break;
            case "68": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+03/Grammar+-+Gerund+after+prepositions.png"; break;
            case "69": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+03/Grammar+-+Singular+or+plural.png"; break;
            case "70": document.getElementById("large_image").src = "https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+Large+Images/Grammar+03/Grammar+-+who+which+whose.png"; break;


            break;
            default:
                console.log("no value match")
          }
}

function download() {
    
    switch(large_image_selected) {
        case "1": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+01/Grammar+-+Have+Has.pdf"); break;
        case "2": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+01/Grammar+-+There+Is+Are.pdf"); break;
        case "3": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+01/Grammar+-+Is+Are+02.pdf"); break;
        case "4": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+01/Grammar+-+In+At+On.pdf"); break;
        case "5": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+01/Grammar+-+Was+Were+01.pdf"); break;
        case "6": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+01/Grammar+-+A+An.pdf"); break;
        case "7": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+01/Grammar+-+Formulate+Sentences.pdf"); break;
        case "8": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+01/Grammar+-+do%2C+don't%2C+does%2C+doesn't%2C+did%2C+didn't.pdf"); break;
        case "9": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+01/Grammar+-+Do+Does.pdf"); break;
        case "10": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+01/Grammar+-+Have+Has+02.pdf"); break;
        case "11": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Animals/Animals+-+Word+Puzzle.pdf"); break;
        case "12": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Animals/Animals+-+Test+your+Knowledge.pdf"); break;
        case "13": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Animals/Animals+-+Test+your+Knowledge+More.pdf"); break;
        case "14": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Animals/Animals+-+Match+The+Description.pdf"); break;
        case "15": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Animals/Animals+-+Crossword+puzzle.pdf"); break;
        case "16": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Farming/Farming+-+Fill+in+The+Blanks.pdf"); break;
        case "17": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Farming/Farming+-+Match+The+description.pdf"); break;
        case "18": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Farming/Farming+-+Match+the+Words.pdf"); break;
        case "19": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Farming/Farming+-+Test+your+Knowledge.pdf"); break;
        case "20": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Farming/Farming+-+Word+Puzzle.pdf"); break;
        case "21": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Marine+Life/Marine+Life+-+Word+Puzzle.pdf"); break;
        case "22": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Marine+Life/Marine+Life+-+Test+your+Knowledge.pdf"); break;
        case "23": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Marine+Life/Marine+Life+-+Read+and+Understand.pdf"); break;
        case "24": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Marine+Life/Marine+Life+-+Match+the+Words.pdf"); break;
        case "25": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Marine+Life/Marine+Life+-+Crossword+Puzzle.pdf"); break;
        case "26": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Wildlife+Camping/Wildlife+Camping+-+Word+Search+Puzzle.pdf"); break;
        case "27": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Wildlife+Camping/Wildlife+Camping+-+Match+the+Description.pdf"); break;
        case "28": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Wildlife+Camping/Wildlife+Camping+-+Read+and+Understand.pdf"); break;
        case "29": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Wildlife+Camping/Wildlife+Camping+-+Match+the+Words.pdf"); break;
        case "30": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Wildlife+Camping/Wildlife+Camping+-+Test+your+Knowledge.pdf"); break;
        case "31": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Space/Space+-+Word+Search+Puzzle.pdf"); break;
        case "32": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Space/Space+-+Test+your+Knowledge.pdf"); break;
        case "33": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Space/Space+-+Read+and+Understand.pdf"); break;
        case "34": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Space/Space+-+Match+the+Words.pdf"); break;
        case "35": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Space/Space+-+Crossword+Puzzle.pdf"); break;
        case "36": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Foods/Foods+-+Word+Search+Puzzle02.pdf"); break;
        case "37": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Foods/Foods+-+Word+Search+Puzzle01.pdf"); break;
        case "38": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Foods/Foods+-+Test+your+Knowledge.pdf"); break;
        case "39": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Foods/Foods+-+Match+the+Words.pdf"); break;
        case "40": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Foods/Foods+-+Crossword+Puzzle.pdf"); break;
        case "41": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Hospital/Hospital+-+Crossword+Puzzle.pdf"); break;
        case "42": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Hospital/Hospital+-+Match+the+Description.pdf"); break;
        case "43": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Hospital/Hospital+-+Match+the+Words.pdf"); break;
        case "44": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Hospital/Hospital+-+Test+your+Knowledge.pdf"); break;
        case "45": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Hospital/Hospital+-+Word+Search+Puzzle.pdf"); break;
        case "46": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/The+Body/The+Body+-+Crossword+Puzzle.pdf"); break;
        case "47": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/The+Body/The+Body+-+Fill+in+The+Blanks.pdf"); break;
        case "48": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/The+Body/The+Body+-+Word+Puzzle.pdf"); break;
        case "49": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/The+Body/The+Body+-+Test+your+Knowledge.pdf"); break;
        case "50": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/The+Body/The+Body+-+Match+the+Parts.pdf"); break;
        case "51": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Mystic+Creatures/Mystic+Creatures+-+Word+Search+Puzzle+02.pdf"); break;
        case "52": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Mystic+Creatures/Mystic+Creatures+-+Match+the+Words.pdf"); break;
        case "53": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Mystic+Creatures/Mystic+Creatures+-+Crossword+Puzzle.pdf"); break;
        case "54": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Mystic+Creatures/Mystic+Creatures+-+Word+Seach+Puzzle.pdf"); break;
        case "55": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Mystic+Creatures/Mystic+Creatures+-+Match+the+Description.pdf"); break;
        case "56": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Sports/Sports+-+Crossword+Puzzle.pdf"); break;
        case "57": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Sports/Sports+-+Match+the+Words.pdf"); break;
        case "58": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Sports/Sports+-+Test+your+Knowledge.pdf"); break;
        case "59": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Sports/Sports+-+Word+Search+Puzzle.pdf"); break;
        case "60": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Sports/Sports+-+Test+your+Knowledge+02.pdf"); break;
        case "61": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Clothing/Clothing+-+Crossword+puzzle.pdf"); break;
        case "62": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Clothing/Clothing+-+Fill+in+the+blanks.pdf"); break;
        case "63": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Clothing/Clothing+-+Test+your+knowledge.pdf"); break;
        case "64": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Clothing/Clothing+-+Word+puzzle.pdf"); break;
        case "65": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Clothing/Clothing+Accessories++-+Test+your+knowledge.pdf"); break;
        case "66": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+03/Grammar+-+Apostrophe%2C+genitive%2C+possessive.pdf"); break;
        case "67": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+03/Grammar+-+Formulate+sentences2.pdf"); break;
        case "68": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+03/Grammar+-+Gerund+after+prepositions.pdf"); break;
        case "69": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+03/Grammar+-+Singular+or+plural.pdf"); break;
        case "70": window.open("https://worksheetspdf.s3.eu-north-1.amazonaws.com/Worksheets+PDFs/Grammar+03/Grammar+-+who+which+whose.pdf"); break;

         break;
        default:
            console.log("no value match")
      }

}

