import React from "react";
import graph from "./braindrain_graph.png";
import description from "./braindrain_description.png";
import brainDrainCover from "./braindrain_cover.png";


class BrainDrain extends React.Component {




    render() {
        return (
            <div className="blog_article_container">
                <div className="blog_article_title_section">
                    <p>Brain Drain - This Common Distraction Might Be More Serious Than You Think</p>
                </div>
                <div className="blog_article_image_section">
                    <img src={brainDrainCover} alt="coverimage" />
                </div>

                <div className="blog_article_text_section">
                
                    
                    <div className="blog_article_text_container">
                        
                    <p>
                        As you might have guessed, this “common distraction” is your smartphone. Well, I’m sure you already 
                        know and are well aware your smartphone is a distraction. This study I’m about to summarize will 
                        tell you how much of a distraction it is and how preventative it is for your students’ concentration, 
                        even if it’s turned off.
                        <br/><br/>
                        This study was published in 2017 and conducted by Adrian F. Ward, Kristen Duke, Ayelet Gneezy, 
                        and Maarten W. Bos. Their title for this study are:
                    </p>
                    
                    <p className="blog_article_text_quote">
                        Brain Drain: The Mere Presence of One’s Own Smartphone<br/>Reduces Available Cognitive Capacity
                    </p>
                    <p>
                        <br/><br/>
                        In their study’s abstract, they summarize their findings like this:
                    </p>
                    <p style={{fontSize: "14px"}}>
                        Our smartphones enable—and encourage—constant connection to information, entertainment, and each other. 
                        They put the world at our fingertips, and rarely leave our sides. Although these devices have immense 
                        potential to improve welfare, their persistent presence may come at a cognitive cost. In this research, 
                        we test the “brain drain” hypothesis that the mere presence of one’s own smartphone may occupy 
                        limited-capacity cognitive resources, thereby leaving fewer resources available for other tasks and 
                        undercutting cognitive performance. Results from two experiments indicate that even when people are 
                        successful at maintaining sustained attention—as when avoiding the temptation to check their phones—the 
                        mere presence of these devices reduces available cognitive capacity. Moreover, these cognitive costs 
                        are highest for those highest in smartphone dependence. We conclude by discussing the practical 
                        implications of this smartphone-induced brain drain for consumer decision-making and consumer welfare.
                    </p>
                    <p>    
                        <br/><br/>
                        <strong>The study’s experiment</strong><br/>
                        This study was performed during the span of two weeks and had a total of 548 university students 
                        participating. In the experiment, every participant performed an OSpan-test, which place a heavy 
                        load on the working memory and an RSPM-test where the fluid intelligence is heavily utilized.  
                        <br/><br/>
                        Before the experiments, the participants were divided into three groups. Each group received the 
                        exact same instructions, except what to do with their smartphone. 
                        <br/><br/>
                        Group 1: Brought their smartphone with them into the testing room and put it visible on the desk.<br/>
                        Group 2: Was told to put their smartphone in their pocket or bag, where it was close but not visible.<br/> 
                        Group 3: Left all belongings in the room adjacent to the testing room, even their smartphones. 
                        <br/><br/>
                        All participants regardless of the group were instructed to turn off their smartphones or in other 
                        ways make it completely silent.  
                    </p>
                    <div className="blog_article_image_section">
                        <img src={description} alt="descriptionimage" />
                    </div>
                    <p>
                        <br/><br/>
                        <strong>Results</strong><br/>
                        The researchers responsible for the study summarized the results of the experiment by concluding that 
                        participants in group 1, which were the ones instructed to place the smartphone visible on the desk 
                        close to them, showed the lowest cognitive capacity. The participants in group 3, which left their 
                        smartphone and other belongings in the adjacent room showed the highest cognitive capacity in both the 
                        OSpan-test and the RSPM-test.  
                    </p>
                        <div className="blog_article_image_section">
                            <img src={graph} alt="graphimage" />
                        </div>
                    <p>
                        <strong>Regarding education</strong><br/>
                        Young adults, where 92% owns a smartphone, are heavily reliant on their smartphones 
                        (Pew Research Center 2016). The fact that most young adults are in school makes the potentially 
                        harmful effects of smartphones on the students’ cognitive ability might inflict a greater effect on 
                        the long-term welfare of society. As schools and universities in larger numbers implements “connected 
                        classrooms” (t.ex. Petrina 2007), might the presence of the students’ mobile devices in educational 
                        environments undermine learning. Especially when these devices are present but not utilized for 
                        educational purposes.   

                       
                    </p>
                        
                        <p>
                        <br/><br/>
                        <br/><br/> 
                        </p>
                    </div>
                </div>


            </div>
        );
    }
}

export default BrainDrain;
