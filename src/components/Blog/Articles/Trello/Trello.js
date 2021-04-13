import React from "react";
import trelloFront from "./trello-front.png";
import trelloExample from "./trello-example.png";
import trelloExample01 from "./trello-example01.png";
import trelloExample02 from "./trello-google.png";
import trelloQRCode from "./trello-QR.png";

class Trello extends React.Component {




    render() {
        return (
            <div className="blog_article_container">
                <div className="blog_article_title_section">
                    <p>This is a Great Way to Give Students Extra Assignments When They're Done</p>
                </div>
                <div className="blog_article_image_section">
                    <img src={trelloFront} alt="trelloFront" />
                </div>

                <div className="blog_article_text_section">
                
                    
                    <div className="blog_article_text_container">
                        
                    <p>
                        There are no teachers who have not come to understand that the speed in with students finishes 
                        their assignments wary greatly within a class. Some students work fast and some students don’t. 
                        The most diligent students in the class might complete the work several lessons before the majority. 
                        This very common phenomenon does create a structural problem for the teacher, which is: 
                    </p>
                    
                    <p className="blog_article_text_quote">
                        What should students do if they finish their assignments<br/> before their classmates?
                    </p>
                    <p>
                        The ideal solution to this situation would be if all assignments included additional and more 
                        advanced components, which provided more in-depth knowledge about the subject for the faster 
                        students to work with when they completed the “mandatory” part of the assignment. 
                        <br/><br/>
                        Another common solution would be that they would start working on the next assignment. 
                        If the next assignment is 1) Ready to be given out and 2) does not require much introduction to start. 
                        Otherwise, the teacher would then need to spend time giving the necessary introduction to every student 
                        individually when they finish the first assignment, instead of one introduction to the whole class. 
                        <br/><br/>
                        The third solution is to just scramble together another small task for them to do in the meantime while 
                        waiting for the others to finish. This commonly includes worksheets, playing educational games on a 
                        computer or tablet, cleaning and organizing their desk etc. 
                    </p>
                    <div className="blog_article_image_section">
                        <img src={trelloExample01} alt="trelloexampleimage01" />
                    </div>
                    <p>
                        <strong>Introducing Trello</strong><br/>
                        Some years back I created my own solution to this “issue” by combining these solutions above into one, 
                        with the help of a to-do list app. Trello is a web-based to-do app, that lets you create very detailed 
                        and organized to-do cards which come with lots of tools and options. For my students, I created a 
                        “Task Board” for them to work with between assignments.   
                        <br/><br/>
                        The benefit of Trello is that I can easily create tasks containing instructions and link to videos and 
                        websites with online worksheets or games. I can create a QR code for the students to scan and 
                        immediately access the task board and get started. I would print out a QR-code on a piece of paper and 
                        put it on the whiteboard, so as the students finished their work they would just scan the QR-code and 
                        they could choose among tasks that I arranged for them. 
                    </p>
                        <div className="blog_article_image_section">
                            <img src={trelloExample} alt="trelloImage" />
                        </div>
                    <p>
                        The image above is an example of what a “Task Board” can look like in Trello. I put some effort into 
                        making it look good with a background and cover images on every task, which is not necessary to do. 
                        My board for fifth graders consist heavily of English-dominated tasks, with only a few for math and 
                        geography. The tasks you see in the image is mostly “glorified” links to different educational 
                        websites but some are to quizzes made in Google Forms.
                        <br/><br/>
                        My best practices after experimenting with Trello as a “Task Board” for my students are that if I find 
                        a useful online worksheet on a website, then I can directly link it to a card. When the students click 
                        on that link in the card they will immediately be taken to that worksheet, quick and easy. I can have 
                        several boards in which I collect useful link cards, which I can move to the student’s board when 
                        needed. I don’t need to overflow the students with choices.   
                        <img className="blog_article_image_section" src={trelloExample02} alt="TRELLO IMAGE"/>
                        Another useful insight I got is that Trello and Google Forms are a great combination. 
                        With Google Forms I can create quizzes, tests and assignment similar to online worksheets. 
                        I can then link it to the “Task Board” and the students can work with it when they get the opportunity. 
                        <br/><br/>
                        For students to gain access and start working with on the “Task Board” they just take an iPad or other digital device and scan a QR-code and the board will be available to them. Trello also has an iOS-app which add a little bit more elegance to the experience, compared to the website.
                        If you want to test out my example board seen in the image just scan the QR-code below.
                        <br/><br/>
                        <img className="blog_article_image_section" src={trelloQRCode} alt="QR-CODE"/>
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

export default Trello;


