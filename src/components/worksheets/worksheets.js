import React from "react";
import Email_section from "../email_section/Email_section";

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






var alreadyAddedArray = ["false","false", "false", "false", "false", "false", "false", "false", "false", "false", "false",]
var largeImageArray = [
    grammar01, grammar01, grammar02, grammar03, grammar04, grammar05, 
    grammar06, grammar07, grammar08, grammar09, grammar10, 
    animals01, animals02, animals03, animals04, animals05,
    farming01, farming02, farming03, farming04, farming05,
    marine01, marine02, marine03, marine04, marine05,
    camping01, camping02, camping03, camping04, camping05,
    space01, space02, space03, space04, space05,
    foods01, foods02, foods03, foods04, foods05
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

    }



    



    render() {
        return (
            <div className="worksheets_for_download_container">
                
                <div className="worksheets_for_download">

                <div id="large_image_container" className="large_image_container_inactive" onClick={remove_large_image}>
                        <img id="large_image" className="large_image_inactive"  src={animals01} alt="large_image"/>
                </div>
                

                <div className="worksheets_section__title">
                    <p>Choose your Worksheets</p>
                </div>
                <div className="worksheets_section__description">
                    <p className="worksheets_subtitle">Here are some example of all 100+ free worksheets you can download and use for your class.</p>
                </div>


                
                <div className="worksheet_download_page_display_container" >
                    
                    <div className="worksheet_download_page_group" id="group1" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>English Grammar</p>
                        </div>
                        <div className="worksheet_container01__image" id="themes_container">
                            <img className="worksheet_image01" src={grammar01} alt="" style={this.state.image01} onClick={() => larger_image("1")} onMouseLeave={() => this.deHighlightImages('image01')} onMouseEnter={() => this.highlightImages('image01')}/>
                            <img className="worksheet_image02" src={grammar02} alt="" style={this.state.image02} onClick={() => larger_image("2")} onMouseLeave={() => this.deHighlightImages('image02')} onMouseEnter={() => this.highlightImages('image02')}/>
                            <img className="worksheet_image03" src={grammar03} alt="" style={this.state.image03} onClick={() => larger_image("3")} onMouseLeave={() => this.deHighlightImages('image03')} onMouseEnter={() => this.highlightImages('image03')}/>
                            <img className="worksheet_image04" src={grammar04} alt="" style={this.state.image04} onClick={() => larger_image("4")} onMouseLeave={() => this.deHighlightImages('image04')} onMouseEnter={() => this.highlightImages('image04')}/>
                            <img className="worksheet_image05" src={grammar05} alt="" style={this.state.image05} onClick={() => larger_image("5")} onMouseLeave={() => this.deHighlightImages('image05')} onMouseEnter={() => this.highlightImages('image05')}/>
                            
                        </div>
                        <div id="group1_btn" className="download_email_button" onClick={() => add_to_email("1")}><p id="group1_btn_text">Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group2" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>English Grammar</p>
                        </div>
                        <div className="worksheet_container01__image" >
                            <img className="worksheet_image01" src={grammar06} alt="" style={this.state.image06} onClick={() => larger_image("6")} onMouseLeave={() => this.deHighlightImages('image06')} onMouseEnter={() => this.highlightImages('image06')}/>
                            <img className="worksheet_image02" src={grammar07} alt="" style={this.state.image07} onClick={() => larger_image("7")} onMouseLeave={() => this.deHighlightImages('image07')} onMouseEnter={() => this.highlightImages('image07')}/>
                            <img className="worksheet_image03" src={grammar08} alt="" style={this.state.image08} onClick={() => larger_image("8")} onMouseLeave={() => this.deHighlightImages('image08')} onMouseEnter={() => this.highlightImages('image08')}/>
                            <img className="worksheet_image04" src={grammar09} alt="" style={this.state.image09} onClick={() => larger_image("9")} onMouseLeave={() => this.deHighlightImages('image09')} onMouseEnter={() => this.highlightImages('image09')}/>
                            <img className="worksheet_image05" src={grammar10} alt="" style={this.state.image10} onClick={() => larger_image("10")} onMouseLeave={() => this.deHighlightImages('image10')} onMouseEnter={() => this.highlightImages('image10')}/>
                        </div>
                        <div id="group2_btn" className="download_email_button" onClick={() => add_to_email("2")}><p id="group2_btn_text">Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group3" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Animals Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="crossword_container">
                            <img className="worksheet_image01" src={animals01} alt="" style={this.state.image11} onClick={() => larger_image("11")} onMouseLeave={() => this.deHighlightImages('image11')} onMouseEnter={() => this.highlightImages('image11')}/>
                            <img className="worksheet_image02" src={animals02} alt="" style={this.state.image12} onClick={() => larger_image("12")} onMouseLeave={() => this.deHighlightImages('image12')} onMouseEnter={() => this.highlightImages('image12')}/>
                            <img className="worksheet_image03" src={animals03} alt="" style={this.state.image13} onClick={() => larger_image("13")} onMouseLeave={() => this.deHighlightImages('image13')} onMouseEnter={() => this.highlightImages('image13')}/>
                            <img className="worksheet_image04" src={animals04} alt="" style={this.state.image14} onClick={() => larger_image("14")} onMouseLeave={() => this.deHighlightImages('image14')} onMouseEnter={() => this.highlightImages('image14')}/>
                            <img className="worksheet_image05" src={animals05} alt="" style={this.state.image15} onClick={() => larger_image("15")} onMouseLeave={() => this.deHighlightImages('image15')} onMouseEnter={() => this.highlightImages('image15')}/>
                        </div>
                        <div id="group3_btn" className="download_email_button" onClick={() => add_to_email("3")}><p>Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group4" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Farming Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="wordsearch_container">
                            <img className="worksheet_image01" src={farming01} alt="" style={this.state.image16} onClick={() => larger_image("16")} onMouseLeave={() => this.deHighlightImages('image16')} onMouseEnter={() => this.highlightImages('image16')}/>
                            <img className="worksheet_image02" src={farming02} alt="" style={this.state.image17} onClick={() => larger_image("17")} onMouseLeave={() => this.deHighlightImages('image17')} onMouseEnter={() => this.highlightImages('image17')}/>
                            <img className="worksheet_image03" src={farming03} alt="" style={this.state.image18} onClick={() => larger_image("18")} onMouseLeave={() => this.deHighlightImages('image18')} onMouseEnter={() => this.highlightImages('image18')}/>
                            <img className="worksheet_image04" src={farming04} alt="" style={this.state.image19} onClick={() => larger_image("19")} onMouseLeave={() => this.deHighlightImages('image19')} onMouseEnter={() => this.highlightImages('image19')}/>
                            <img className="worksheet_image05" src={farming05} alt="" style={this.state.image20} onClick={() => larger_image("20")} onMouseLeave={() => this.deHighlightImages('image20')} onMouseEnter={() => this.highlightImages('image20')}/>
                        </div>
                        <div id="group4_btn" className="download_email_button" onClick={() => add_to_email("4")}><p>Add to email</p></div>
                    </div>



                    <div className="worksheet_download_page_group" id="group5" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Marine Live Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="crossword_container">
                            <img className="worksheet_image01" src={marine01} alt="" style={this.state.image11} onClick={() => larger_image("21")} onMouseLeave={() => this.deHighlightImages('image11')} onMouseEnter={() => this.highlightImages('image11')}/>
                            <img className="worksheet_image02" src={marine02} alt="" style={this.state.image12} onClick={() => larger_image("22")} onMouseLeave={() => this.deHighlightImages('image12')} onMouseEnter={() => this.highlightImages('image12')}/>
                            <img className="worksheet_image03" src={marine03} alt="" style={this.state.image13} onClick={() => larger_image("23")} onMouseLeave={() => this.deHighlightImages('image13')} onMouseEnter={() => this.highlightImages('image13')}/>
                            <img className="worksheet_image04" src={marine04} alt="" style={this.state.image14} onClick={() => larger_image("24")} onMouseLeave={() => this.deHighlightImages('image14')} onMouseEnter={() => this.highlightImages('image14')}/>
                            <img className="worksheet_image05" src={marine05} alt="" style={this.state.image15} onClick={() => larger_image("25")} onMouseLeave={() => this.deHighlightImages('image15')} onMouseEnter={() => this.highlightImages('image15')}/>
                        </div>
                        <div id="group5_btn" className="download_email_button" onClick={() => add_to_email("5")}><p>Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group6" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Wildlife Camping Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="wordsearch_container">
                            <img className="worksheet_image01" src={camping01} alt="" style={this.state.image16} onClick={() => larger_image("26")} onMouseLeave={() => this.deHighlightImages('image16')} onMouseEnter={() => this.highlightImages('image16')}/>
                            <img className="worksheet_image02" src={camping02} alt="" style={this.state.image17} onClick={() => larger_image("27")} onMouseLeave={() => this.deHighlightImages('image17')} onMouseEnter={() => this.highlightImages('image17')}/>
                            <img className="worksheet_image03" src={camping03} alt="" style={this.state.image18} onClick={() => larger_image("28")} onMouseLeave={() => this.deHighlightImages('image18')} onMouseEnter={() => this.highlightImages('image18')}/>
                            <img className="worksheet_image04" src={camping04} alt="" style={this.state.image19} onClick={() => larger_image("29")} onMouseLeave={() => this.deHighlightImages('image19')} onMouseEnter={() => this.highlightImages('image19')}/>
                            <img className="worksheet_image05" src={camping05} alt="" style={this.state.image20} onClick={() => larger_image("30")} onMouseLeave={() => this.deHighlightImages('image20')} onMouseEnter={() => this.highlightImages('image20')}/>
                        </div>
                        <div id="group6_btn" className="download_email_button" onClick={() => add_to_email("6")}><p>Add to email</p></div>
                    </div>


                    <div className="worksheet_download_page_group" id="group7" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Space Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="themes_container">
                            <img className="worksheet_image01" src={space01} alt="" style={this.state.image01} onClick={() => larger_image("31")} onMouseLeave={() => this.deHighlightImages('image01')} onMouseEnter={() => this.highlightImages('image01')}/>
                            <img className="worksheet_image02" src={space02} alt="" style={this.state.image02} onClick={() => larger_image("32")} onMouseLeave={() => this.deHighlightImages('image02')} onMouseEnter={() => this.highlightImages('image02')}/>
                            <img className="worksheet_image03" src={space03} alt="" style={this.state.image03} onClick={() => larger_image("33")} onMouseLeave={() => this.deHighlightImages('image03')} onMouseEnter={() => this.highlightImages('image03')}/>
                            <img className="worksheet_image04" src={space04} alt="" style={this.state.image04} onClick={() => larger_image("34")} onMouseLeave={() => this.deHighlightImages('image04')} onMouseEnter={() => this.highlightImages('image04')}/>
                            <img className="worksheet_image05" src={space05} alt="" style={this.state.image05} onClick={() => larger_image("35")} onMouseLeave={() => this.deHighlightImages('image05')} onMouseEnter={() => this.highlightImages('image05')}/>
                            
                        </div>
                        <div id="group7_btn" className="download_email_button" onClick={() => add_to_email("7")}><p id="group1_btn_text">Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group8" style={{display: "inherit"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Food Theme</p>
                        </div>
                        <div className="worksheet_container01__image" >
                            <img className="worksheet_image01" src={foods01} alt="" style={this.state.image06} onClick={() => larger_image("36")} onMouseLeave={() => this.deHighlightImages('image06')} onMouseEnter={() => this.highlightImages('image06')}/>
                            <img className="worksheet_image02" src={foods02} alt="" style={this.state.image07} onClick={() => larger_image("37")} onMouseLeave={() => this.deHighlightImages('image07')} onMouseEnter={() => this.highlightImages('image07')}/>
                            <img className="worksheet_image03" src={foods03} alt="" style={this.state.image08} onClick={() => larger_image("38")} onMouseLeave={() => this.deHighlightImages('image08')} onMouseEnter={() => this.highlightImages('image08')}/>
                            <img className="worksheet_image04" src={foods04} alt="" style={this.state.image09} onClick={() => larger_image("39")} onMouseLeave={() => this.deHighlightImages('image09')} onMouseEnter={() => this.highlightImages('image09')}/>
                            <img className="worksheet_image05" src={foods05} alt="" style={this.state.image10} onClick={() => larger_image("40")} onMouseLeave={() => this.deHighlightImages('image10')} onMouseEnter={() => this.highlightImages('image10')}/>
                        </div>
                        <div id="group8_btn" className="download_email_button" onClick={() => add_to_email("8")}><p id="group2_btn_text">Add to email</p></div>
                    </div>



                  


                    <div className="worksheet_download_page_group" id="group9" style={{display: "none"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Hospital Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="themes_container">
                            <img className="worksheet_image01" src={grammar01} alt="" style={this.state.image01} onClick={() => larger_image("1")} onMouseLeave={() => this.deHighlightImages('image01')} onMouseEnter={() => this.highlightImages('image01')}/>
                            <img className="worksheet_image02" src={grammar02} alt="" style={this.state.image02} onClick={() => larger_image("2")} onMouseLeave={() => this.deHighlightImages('image02')} onMouseEnter={() => this.highlightImages('image02')}/>
                            <img className="worksheet_image03" src={grammar03} alt="" style={this.state.image03} onClick={() => larger_image("3")} onMouseLeave={() => this.deHighlightImages('image03')} onMouseEnter={() => this.highlightImages('image03')}/>
                            <img className="worksheet_image04" src={grammar04} alt="" style={this.state.image04} onClick={() => larger_image("4")} onMouseLeave={() => this.deHighlightImages('image04')} onMouseEnter={() => this.highlightImages('image04')}/>
                            <img className="worksheet_image05" src={grammar05} alt="" style={this.state.image05} onClick={() => larger_image("5")} onMouseLeave={() => this.deHighlightImages('image05')} onMouseEnter={() => this.highlightImages('image05')}/>
                            
                        </div>
                        <div id="group9_btn" className="download_email_button" onClick={() => add_to_email("9")}><p id="group1_btn_text">Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group10" style={{display: "none"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Body Theme</p>
                        </div>
                        <div className="worksheet_container01__image" >
                            <img className="worksheet_image01" src={grammar06} alt="" style={this.state.image06} onClick={() => larger_image("6")} onMouseLeave={() => this.deHighlightImages('image06')} onMouseEnter={() => this.highlightImages('image06')}/>
                            <img className="worksheet_image02" src={grammar07} alt="" style={this.state.image07} onClick={() => larger_image("7")} onMouseLeave={() => this.deHighlightImages('image07')} onMouseEnter={() => this.highlightImages('image07')}/>
                            <img className="worksheet_image03" src={grammar08} alt="" style={this.state.image08} onClick={() => larger_image("8")} onMouseLeave={() => this.deHighlightImages('image08')} onMouseEnter={() => this.highlightImages('image08')}/>
                            <img className="worksheet_image04" src={grammar09} alt="" style={this.state.image09} onClick={() => larger_image("9")} onMouseLeave={() => this.deHighlightImages('image09')} onMouseEnter={() => this.highlightImages('image09')}/>
                            <img className="worksheet_image05" src={grammar10} alt="" style={this.state.image10} onClick={() => larger_image("10")} onMouseLeave={() => this.deHighlightImages('image10')} onMouseEnter={() => this.highlightImages('image10')}/>
                        </div>
                        <div id="group10_btn" className="download_email_button" onClick={() => add_to_email("10")}><p id="group2_btn_text">Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group11" style={{display: "none"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Mystic Creatures Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="crossword_container">
                            <img className="worksheet_image01" src={animals01} alt="" style={this.state.image11} onClick={() => larger_image("11")} onMouseLeave={() => this.deHighlightImages('image11')} onMouseEnter={() => this.highlightImages('image11')}/>
                            <img className="worksheet_image02" src={animals02} alt="" style={this.state.image12} onClick={() => larger_image("12")} onMouseLeave={() => this.deHighlightImages('image12')} onMouseEnter={() => this.highlightImages('image12')}/>
                            <img className="worksheet_image03" src={animals03} alt="" style={this.state.image13} onClick={() => larger_image("13")} onMouseLeave={() => this.deHighlightImages('image13')} onMouseEnter={() => this.highlightImages('image13')}/>
                            <img className="worksheet_image04" src={animals04} alt="" style={this.state.image14} onClick={() => larger_image("14")} onMouseLeave={() => this.deHighlightImages('image14')} onMouseEnter={() => this.highlightImages('image14')}/>
                            <img className="worksheet_image05" src={animals05} alt="" style={this.state.image15} onClick={() => larger_image("15")} onMouseLeave={() => this.deHighlightImages('image15')} onMouseEnter={() => this.highlightImages('image15')}/>
                        </div>
                        <div id="group11_btn" className="download_email_button" onClick={() => add_to_email("11")}><p>Add to email</p></div>
                    </div>

                    <div className="worksheet_download_page_group" id="group12" style={{display: "none"}}>
                        <div className="worksheet_download_page_container01__title">
                            <p>Bakery Theme</p>
                        </div>
                        <div className="worksheet_container01__image" id="wordsearch_container">
                            <img className="worksheet_image01" src={farming01} alt="" style={this.state.image16} onClick={() => larger_image("16")} onMouseLeave={() => this.deHighlightImages('image16')} onMouseEnter={() => this.highlightImages('image16')}/>
                            <img className="worksheet_image02" src={farming02} alt="" style={this.state.image17} onClick={() => larger_image("17")} onMouseLeave={() => this.deHighlightImages('image17')} onMouseEnter={() => this.highlightImages('image17')}/>
                            <img className="worksheet_image03" src={farming03} alt="" style={this.state.image18} onClick={() => larger_image("18")} onMouseLeave={() => this.deHighlightImages('image18')} onMouseEnter={() => this.highlightImages('image18')}/>
                            <img className="worksheet_image04" src={farming04} alt="" style={this.state.image19} onClick={() => larger_image("19")} onMouseLeave={() => this.deHighlightImages('image19')} onMouseEnter={() => this.highlightImages('image19')}/>
                            <img className="worksheet_image05" src={farming05} alt="" style={this.state.image20} onClick={() => larger_image("20")} onMouseLeave={() => this.deHighlightImages('image20')} onMouseEnter={() => this.highlightImages('image20')}/>
                        </div>
                        <div id="group12_btn" className="download_email_button" onClick={() => add_to_email("12")}><p>Add to email</p></div>
                    </div>


                    <div className="worksheets_page_next_btn" onClick={() => nextPage()}><p>More</p></div>
                    
                </div>
                </div>

                
                <Email_section />
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

function larger_image(imageNr) {
    console.log(window.scrollY)
    document.getElementById("large_image_container").className = "large_image_container_active"
    document.getElementById("large_image_container").style.top = `${window.scrollY}px`
    document.getElementById("large_image").className = "large_image_active"
    document.getElementById("body").style.overflow = "hidden"
    document.getElementById("large_image").src = largeImageArray[imageNr]
    
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

function nextPage() {
    document.getElementById("group1").style.display = "none"
    document.getElementById("group2").style.display = "none"
    document.getElementById("group3").style.display = "none"
    document.getElementById("group4").style.display = "none"
    document.getElementById("group5").style.display = "none"
    document.getElementById("group6").style.display = "none"
    document.getElementById("group7").style.display = "none"
    document.getElementById("group8").style.display = "none"

    document.getElementById("group9").style.display = "inherit"
    document.getElementById("group10").style.display = "inherit"
    document.getElementById("group11").style.display = "inherit"
    document.getElementById("group12").style.display = "inherit"
}