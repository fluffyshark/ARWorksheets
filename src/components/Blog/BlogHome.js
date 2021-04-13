import React from "react";
import BlogFirstSection from "./FirstSection/BlogFirstSection";
import BlogSecondSection from "./SecondSection/BlogSecondSection";
import BlogThirdSection from "./ThirdSection/BlogThirdSection";
import BlogFourthSection from "./FourthSection/BlogFourthSection";
import BlogFifthSection from "./FifthSection/BlogFifthSection";
import BlogSixthSection from "./SixthSection/BlogSixthSection";





class BlogHome extends React.Component {
    render() {
        return (
            <div className="homepage">
                <BlogFirstSection />
                <BlogSecondSection />
                <BlogThirdSection />
                <BlogFourthSection />
                <BlogFifthSection />
                <BlogSixthSection />
                
            </div>
        );
    }
}

export default BlogHome;

