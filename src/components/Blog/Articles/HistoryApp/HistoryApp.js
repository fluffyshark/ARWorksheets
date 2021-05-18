import React from "react";
import historyview01 from "./historyview01.png";
import historyview02 from "./historyview02.png";
import historyview03 from "./historyview03.png";
import historyview04 from "./historyview04.png";



class HistoryApp extends React.Component {




    render() {
        return (
            <div className="blog_article_container">
                <div className="blog_article_title_section">
                    <p>Will this Approach Increase Students’ Interest in History?</p>
                </div>
                <div className="blog_article_image_section">
                    <img src={historyview04} alt="historyview04" />
                </div>

                <div className="blog_article_text_section">
                
                    
                    <div className="blog_article_text_container">
                        
                    <p>
                        What would soccer be without its obstacles (opponents, no hands, limited space to score a goal 
                        and a goalkeeper)? What would golf be without clubs, would it be fun?
 
                    </p>
                    
                    <p className="blog_article_text_quote">
                        A game is a brief journey through obstacles<br/> disguised as rules and challenges.
                    </p>
                    <p>
                        The foundation of the app is built as a timeline over historical events. Students are shown historical 
                        events in chronological order starting at the ice age and ending in modern times. 
                        By clicking on a subject they are taken to a new view where facts about the subject are displayed. 
                        If I were to stop developing the app here and call it complete, it would be like taking a history book 
                        and making it digital. Adding no additional value, except for those who find the digital format more 
                        convenient than a book. 
                    </p>
                    <div className="blog_article_image_section">
                        <img src={historyview01} alt="historyimage" />
                    </div>
                    <p>
                        To make it more than just a digital book I would need to find a way to add additional value for the 
                        students. Academically I can add more value to their learning by attaching something like a 10-question 
                        quiz or test at the end of every topic. A test would be one more tool for students to consolidate their 
                        knowledge. A certain percentage of students find it exciting to have a measurement of their knowledge. 
                        Making the test correct itself automatically will give instant feedback and probably a dopamine kick if 
                        they scored well. To add a little more game technique to the test I could give them stars for completion. 
                        Students could get three stars on each topic if they scored max on the test, one star for passing 50% and 
                        two stars for somewhere in between. Making use of psychology, the 3-star system will often motivate 
                        students to repeat the test until they acquire all the stars, like in a game the students will be aiming 
                        for three stars. 
                    </p>
                        <div className="blog_article_image_section">
                            <img src={historyview02} alt="historyimage" />
                        </div>
                    <p>
                        I wonder if it would be beneficial to add a cooldown or a time lock for retaking the test. If I’m 
                        confident that they’ll retake the test for their desire to max out the stars it would benefit their 
                        learning process more to add some time between their tries. Again referring to psychology, they will 
                        remember what’s unfinished longer than what they have completed. Just remember back in university how 
                        fast you forget stuff when the examination period was over. I could set a time lock for retaking a 
                        topic test for x amount of time. But I could also make it so the students need to complete all the 
                        topics in the section before they could redo any test. A negative to consider would be that the 
                        students might spend too much time trying to perfect their score rather than progressing. 
                        <br/><br/>
                        To add a bit of mystery I can hide and lock parts of the timeline and so the students need to unlock 
                        it to progress. It’s a common game technique to lock access to part of the game and have it dangling 
                        in front of the player, making it seen close yet so far away. Like opening a closed door only to have 
                        a look inside. Wanting what they cannot have.   
                        <br/><br/>
                        The design of the timeline needs to look the part as well. I placed the timeline on an image of an old 
                        parchment scroll, which made it look better than my original design. A single parchment is used as the 
                        background for the fact text view for the historical events, as well as for the quiz that comes after 
                        the fact texts. The scroll background for the timeline won’t cover the entire view, so I added an 
                        additional background image behind the scroll to cover up the blanks. It hit me that I could make that 
                        background image dynamic and make it change depending on what epoch or time period the students are 
                        currently at. A small little effect that helps make the students feel they are progressing.
                        <br/><br/>
                        <strong>Update:</strong>
                        I added some forced scroll functionality, making the view scroll down automatically when 
                        students unlock the next epoch. The scroll unlocks itself directly after the students gets the perfect 
                        view of the new epoch. I also added background music when in the timeline view. The music change for 
                        every new epoch the students unlocks. The forced scroll, changing background music and changing 
                        background images will hopefully make progressing through the timeline and unlocking new epochs into 
                        great experience.  
                        <br/><br/>
                        It feels like when you’re building an app, you think about it constantly. Or it’s always in the back of 
                        your mind, which makes new ideas for the app pop up when doing other things. Just like that, I got the 
                        idea that apart from the timeline I can make different fun ways to test the student’s knowledge. 
                        This new part of the app would be a quiz competition mode (in lack of a better name). I have seen the 
                        engaging and motivational effect quiz apps like Kahoot have on the students and I could make something 
                        like that for this app too. This part of the app would be like a teacher section, which would be meant 
                        to display on the projector in the classroom for all the students to see. For a student knowing that the 
                        teacher might engage them in a fun type of history quiz, they will hopefully try to better their chances 
                        by studying the fact texts in the timeline.
                        <br/><br/>
                        Regarding what types of quiz that I can make I thought of three types. The most basic would be like a 
                        teacher gets random questions displayed on his/her iPad and then he with some structure chooses one 
                        student to answer it. 
                        <br/><br/>
                        <strong>Normal question asked and answered quiz </strong><br/>
                        One way to make this more fun and most of all thrilling experience for the students would be to add a 
                        little competition to it. By connecting up to six iPads to the teacher iPad, the students could press a 
                        big “answer button” on their iPads. The fastest student gets to answer. The students could compete 
                        individually or form six teams and rotate who gets to answer within the group. 
                        <br/><br/>
                        <strong>Category-based Quiz</strong><br/>
                        I could create categories of the different epochs in the timeline and create questions with increasing 
                        value in each category and let students pick which category question they like to answer. As students 
                        choose their favourite category the value of the questions for that category will increase. 
                        <br/><br/>
                        <strong>Timeline Quiz</strong><br/>
                        The last quiz mode could be like a timeline game. Four teams of students would get a timeline to place 
                        questions on and they have to answer up to 10 questions to win. But the more events you answer right 
                        the harder it becomes as they can only answer with before, after, and between the dates they already 
                        have. It would be easier in some way as they only need to guess what year the event occurred. 

                        <img className="blog_article_image_section" src={historyview03} alt="History IMAGE"/>
                        <br/>
                        There is more functionality I could add to increase the excitement of playing (studying) with this 
                        history app. But I will start with what I already mentioned and take it to the testing phase before 
                        adding additional fun factors. Like a collection mode or a history game where you build a city and 
                        advancing it through different time periods.        
                        <br/><br/>
                    
                        
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

export default HistoryApp;


