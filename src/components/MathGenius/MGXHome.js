import React from "react";
import MGXFirstSection from "./firstSection/MGXFirstSection";
import MGXSecondSection from "./secondSection/MGXSecondSection";
import MGXThirdSection from "./thirdSection/MGXThirdSection";
import MGXFourthSection from "./fourthSection/MGXFourthSection";
import MGXFifthSection from "./fifthSection/MGXFifthSection";
import MGXSixthSection from "./sixthSection/MGXSixthSection";
import MGXSeventhSection from "./seventhSection/MGXSeventhSection";




class MGXHome extends React.Component {
    render() {
        return (
            <div className="homepage">
                <MGXFirstSection />
                <MGXSecondSection />
                <MGXThirdSection />
                <MGXFourthSection />
                <MGXFifthSection />
                <MGXSixthSection />
                <MGXSeventhSection />
            </div>
        );
    }
}

export default MGXHome;

