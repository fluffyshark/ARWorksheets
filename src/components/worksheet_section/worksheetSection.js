import React from "react";
import worksheet01 from "./worksheet01.png";
import worksheet02 from "./worksheet02.png";
import worksheet03 from "./worksheet03.png";
import worksheet04 from "./worksheet04.png";
import worksheet05 from "./worksheet05.png";
import marine01 from "./marine01.png";
import marine02 from "./marine02.png";
import marine03 from "./marine03.png";
import marine04 from "./marine04.png";
import marine05 from "./marine05.png";
import wordpuzzle01 from "./wordpuzzle01.png";
import wordpuzzle02 from "./wordpuzzle02.png";
import wordpuzzle03 from "./wordpuzzle03.png";
import wordpuzzle04 from "./wordpuzzle04.png";
import wordpuzzle05 from "./wordpuzzle05.png";
import crossword01 from "./crossword01.png";
import crossword02 from "./crossword02.png";
import crossword03 from "./crossword03.png";
import crossword04 from "./crossword04.png";


class Worksheets_section extends React.Component {
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
            <div className="worksheets_section">
                <div className="worksheets_section__title">
                    <p>Worksheet examples</p>
                </div>
                <div className="worksheets_section__description">
                    <p className="worksheets_subtitle">Here are some example of all 100+ free worksheets you can download and use for your class.</p>
                </div>


                
                <div className="worksheet_display_container" >
                    
                    <div className="worksheet_container01">
                        <div className="worksheet_container01__title">
                            <p>Themes</p>
                        </div>
                        <div className="worksheet_container01__image" id="themes_container">
                            <img className="image01" src={marine01} alt="" style={this.state.image01} onMouseLeave={() => this.deHighlightImages('image01')} onMouseEnter={() => this.highlightImages('image01')}/>
                            <img className="image02" src={marine02} alt="" style={this.state.image02} onMouseLeave={() => this.deHighlightImages('image02')} onMouseEnter={() => this.highlightImages('image02')}/>
                            <img className="image03" src={marine03} alt="" style={this.state.image03} onMouseLeave={() => this.deHighlightImages('image03')} onMouseEnter={() => this.highlightImages('image03')}/>
                            <img className="image04" src={marine04} alt="" style={this.state.image04} onMouseLeave={() => this.deHighlightImages('image04')} onMouseEnter={() => this.highlightImages('image04')}/>
                            <img className="image05" src={marine05} alt="" style={this.state.image05} onMouseLeave={() => this.deHighlightImages('image05')} onMouseEnter={() => this.highlightImages('image05')}/>
                        </div>
                    </div>

                    <div className="worksheet_container01">
                        <div className="worksheet_container01__title">
                            <p>Grammar</p>
                        </div>
                        <div className="worksheet_container01__image" id="grammar_container">
                            <img className="image01" src={worksheet01} alt="" style={this.state.image06} onMouseLeave={() => this.deHighlightImages('image06')} onMouseEnter={() => this.highlightImages('image06')}/>
                            <img className="image02" src={worksheet02} alt="" style={this.state.image07} onMouseLeave={() => this.deHighlightImages('image07')} onMouseEnter={() => this.highlightImages('image07')}/>
                            <img className="image03" src={worksheet03} alt="" style={this.state.image08} onMouseLeave={() => this.deHighlightImages('image08')} onMouseEnter={() => this.highlightImages('image08')}/>
                            <img className="image04" src={worksheet04} alt="" style={this.state.image09} onMouseLeave={() => this.deHighlightImages('image09')} onMouseEnter={() => this.highlightImages('image09')}/>
                            <img className="image05" src={worksheet05} alt="" style={this.state.image10} onMouseLeave={() => this.deHighlightImages('image10')} onMouseEnter={() => this.highlightImages('image10')}/>
                        </div>
                    </div>

                    <div className="worksheet_container01">
                        <div className="worksheet_container01__title">
                            <p>Crosswords</p>
                        </div>
                        <div className="worksheet_container01__image" id="crossword_container">
                            <img className="image01" src={crossword01} alt="" style={this.state.image11} onMouseLeave={() => this.deHighlightImages('image11')} onMouseEnter={() => this.highlightImages('image11')}/>
                            <img className="image02" src={crossword02} alt="" style={this.state.image12} onMouseLeave={() => this.deHighlightImages('image12')} onMouseEnter={() => this.highlightImages('image12')}/>
                            <img className="image03" src={crossword03} alt="" style={this.state.image13} onMouseLeave={() => this.deHighlightImages('image13')} onMouseEnter={() => this.highlightImages('image13')}/>
                            <img className="image04" src={crossword04} alt="" style={this.state.image14} onMouseLeave={() => this.deHighlightImages('image14')} onMouseEnter={() => this.highlightImages('image14')}/>
                            <img className="image05" src={worksheet05} alt="" style={this.state.image15} onMouseLeave={() => this.deHighlightImages('image15')} onMouseEnter={() => this.highlightImages('image15')}/>
                        </div>
                    </div>

                    <div className="worksheet_container01">
                        <div className="worksheet_container01__title">
                            <p>Word search</p>
                        </div>
                        <div className="worksheet_container01__image" id="wordsearch_container">
                            <img className="image01" src={wordpuzzle01} alt="" style={this.state.image16} onMouseLeave={() => this.deHighlightImages('image16')} onMouseEnter={() => this.highlightImages('image16')}/>
                            <img className="image02" src={wordpuzzle02} alt="" style={this.state.image17} onMouseLeave={() => this.deHighlightImages('image17')} onMouseEnter={() => this.highlightImages('image17')}/>
                            <img className="image03" src={wordpuzzle03} alt="" style={this.state.image18} onMouseLeave={() => this.deHighlightImages('image18')} onMouseEnter={() => this.highlightImages('image18')}/>
                            <img className="image04" src={wordpuzzle04} alt="" style={this.state.image19} onMouseLeave={() => this.deHighlightImages('image19')} onMouseEnter={() => this.highlightImages('image19')}/>
                            <img className="image05" src={wordpuzzle05} alt="" style={this.state.image20} onMouseLeave={() => this.deHighlightImages('image20')} onMouseEnter={() => this.highlightImages('image20')}/>
                        </div>
                    </div>

                    

                </div>
                
            </div>
        );
    }
}

export default Worksheets_section;