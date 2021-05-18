import React from "react";
import { Link } from "react-router-dom";
import test3 from "./test3.jpg"
import test4 from "./test4.jpg"
import test5 from "./test5.jpg"
import test6 from "./test6.jpg"
import test8 from "./test8.jpg"
import test9 from "./test9.jpg"
import test10 from "./test10.jpg"
import test11 from "./test11.jpg"
import trelloCover from "./trello-cover.png"

class BlogSixthSection extends React.Component {



    render() {
        return (
            <div className="BlogThirdSection">

                <div className="BlogPostContainer" id="blog01">
                    <img className="BlogPostImage" src={test8} alt="blogimage" />
                    <div className="BlogPostBottom">
                        <p className="BlogPostCategoryText" id="researchColor">RESEARCH STUDY</p>
                        <p className="BlogPostTitle">How to Use Leaderboards to Motivate All <br/> Students Without Some Feeling That They are <br/> Losing </p>
                    </div>
                </div>

                <div className="BlogPostContainer" id="blog02">
                <Link to="/badges" style={{ textDecoration: 'none' }} >
                    <img className="BlogPostImage" src={test9} alt="blogimage" />
                    <div className="BlogPostBottom">
                        <p className="BlogPostCategoryText" id="motivationColor">MOTIVATION BOOSTER</p>
                        <p className="BlogPostTitle" style={{color:"black"}}>How Adopting Scouts and Swimming Badges <br/> Motivated Students to Work On Their Skills <br/> During Lesson Breaks</p>
                    </div>
                </Link>
                </div>



                <div className="BlogPostContainer" id="blog03">
                    <img className="BlogPostImage" src={test10} alt="blogimage" />
                    <div className="BlogPostBottom">
                        <p className="BlogPostCategoryText" id="motivationColor">MOTIVATION BOOSTER</p>
                        <p className="BlogPostTitle">I rewarded in-game resources to students based <br/> on their academic performance and diligence. <br/> I'm happy to share the results. </p>
                    </div>
                </div>

                <div className="BlogPostContainer" id="blog04">
                    <Link to="/think-they-finished" style={{ textDecoration: 'none' }} >
                    <img className="BlogPostImage" src={test11} alt="blogimage" />
                    <div className="BlogPostBottom">
                        <p className="BlogPostCategoryText" id="excitementColor">EXCITEMENT INSIGHT</p>
                        <p className="BlogPostTitle" style={{color:"black"}}>How to Motivate Students to Write More After <br/>  They Decided That They're Done. </p>
                    </div>
                    </Link>
                </div>



                <div className="BlogPostContainer" id="blog05">
                    <img className="BlogPostImage" src={test5} alt="blogimage" />
                    <div className="BlogPostBottom">
                        <p className="BlogPostCategoryText" id="motivationColor">MOTIVATION BOOSTER</p>
                        <p className="BlogPostTitle">MISSION APP</p>
                    </div>
                </div>

                <div className="BlogPostContainer" id="blog06">
                    <Link to="/trello" style={{ textDecoration: 'none' }} >
                    <img className="BlogPostImage" src={trelloCover} alt="blogimage" />
                    <div className="BlogPostBottom">
                        <p className="BlogPostCategoryText" id="reseourseColor">FREE RESOURCE</p>
                        <p className="BlogPostTitle"style={{color:"black"}}>This is a Great Way to Give Students Extra <br/> Assignments When They're Done </p>
                    </div>
                    </Link>
                </div>
                
                
            </div>
        );
    }
}

export default BlogSixthSection;


