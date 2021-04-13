import React from "react";
import { Link } from "react-router-dom";
import test from "./test.jpg"
import test2 from "./test2.jpg"
import test3 from "./test3.jpg"
import test4 from "./test4.jpg"
import test5 from "./test5.jpg"
import test6 from "./test6.jpg"
import mathLeveling from "./MathLevelingBlogImage.jpg"
import fantasyworld from "./fantasyworld.jpg"

class BlogThirdSection extends React.Component {



    render() {
        return (
            <div className="BlogThirdSection">

                <div className="BlogPostContainer" id="blog01">
                    <img className="BlogPostImage" src={test} alt="blogimage" />
                    <div className="BlogPostBottom">
                        <p className="BlogPostCategoryText" id="researchColor">RESEARCH STUDY</p>
                        <p className="BlogPostTitle">Brain Drain - This Common Distraction Might<br/> Be More Serious Than You Think </p>
                    </div>
                </div>

                <div className="BlogPostContainer" id="blog02">
                    <Link to="/mathleveling" style={{ textDecoration: 'none' }} >
                    <img className="BlogPostImage" src={mathLeveling} alt="blogimage" />
                    <div className="BlogPostBottom">
                        <p className="BlogPostCategoryText" id="motivationColor">MOTIVATION BOOSTER</p>
                        <p className="BlogPostTitle" style={{color:"black"}}>How a Class of 22 Students Solved 6,627<br/>Multiplication Problems in 60 Minutes </p>
                    </div>
                    </Link>
                </div>



                <div className="BlogPostContainer" id="blog03">
                <Link to="/fantasy-world" style={{ textDecoration: 'none' }} >
                    <img className="BlogPostImage" src={fantasyworld} alt="fantasyworld" />
                    <div className="BlogPostBottom">
                        <p className="BlogPostCategoryText" id="motivationColor">MOTIVATION BOOSTER</p>
                        <p className="BlogPostTitle" style={{color:"black"}}>My Students Struggled with Imagination when<br/>Writing. So I Created A Fantasy World For Them<br/> To Write About </p>
                    </div>
                </Link>
                </div>

                
                <div className="BlogPostContainer" id="blog04">
                    <Link to="/almost-done" style={{ textDecoration: 'none' }} >
                    <img className="BlogPostImage" src={test4} alt="blogimage" />
                    <div className="BlogPostBottom">
                        <p className="BlogPostCategoryText" id="excitementColor">EXCITEMENT INSIGHT</p>
                        <p className="BlogPostTitle" style={{color:"black"}}>We Hate Being Almost Done <br/> How 90% Progression Bars And Two of Three <br/> Stars Push Students to Complete Their Work </p>
                    </div>
                    </Link>
                </div>
                


                <div className="BlogPostContainer" id="blog05">
                    <img className="BlogPostImage" src={test5} alt="blogimage" />
                    <div className="BlogPostBottom">
                        <p className="BlogPostCategoryText" id="motivationColor">MOTIVATION BOOSTER</p>
                        <p className="BlogPostTitle">How to Make Your Students Love their <br/> Math Book</p>
                    </div>
                </div>

                <div className="BlogPostContainer" id="blog06">
                    <img className="BlogPostImage" src={test6} alt="blogimage" />
                    <div className="BlogPostBottom">
                        <p className="BlogPostCategoryText" id="reseourseColor">FREE RESOURCE</p>
                        <p className="BlogPostTitle">Excite Your Students with an Amazing Game <br/> Programming Lesson Without You Needing <br/> To Know Anything About Programming </p>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default BlogThirdSection;


