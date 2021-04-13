import React from "react";
import motivation from "./motivationBooster.png"
import study from "./researchStudy.png"
import reseourse from "./freeReseourse.png"
import excitement from "./excitementInsight.png"


class BlogSecondSection extends React.Component {



    render() {
        return (
            <div className="BlogSecondSection">

                <img className="motivationCategory" src={motivation} />
                <img className="studyCategory" src={study} />
                <img className="reseourseCategory" src={reseourse} />
                <img className="excitementCategory" src={excitement} />
                
                
            </div>
        );
    }
}

export default BlogSecondSection;


