import React from "react";
import { Link } from "react-router-dom";

class BlogFourthSection extends React.Component {



    render() {
        return (
            <div className="BlogFourthSection">
                <Link to="/worststudent" style={{ textDecoration: 'none' }} >
                <p className="BlogBigSectionText">After Trying This Method The Worst <br/> Performing Student Was Motivated <br/> to Work The Hardest</p>
                <div className="BlogBigSectionButton"><p>Read more</p></div>
                </Link>
                
            </div>
        );
    }
}

export default BlogFourthSection;


