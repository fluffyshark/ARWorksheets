import React from "react";
import almostdone from "./almostdone.png";
import progressbar from "./progressbar.png";
import threestars from "./threestars.png";

class AlmostDone extends React.Component {

    render() {
        return (
            <div className="blog_article_container">
                
                <div className="blog_article_title_section">
                    <p>How We Hate Being Almost Done.<br/> And How We Can Use it to Perform More</p>
                </div>
                
                <div className="blog_article_image_section">
                    <img src={almostdone} alt="almostdone" />
                </div>
                
                <div className="blog_article_text_section">
                    <div className="blog_article_text_container">

                        <p>
                            I find it enjoyable to reflect on how to help students attain more knowledge, understanding and 
                            to perform better at their assignments. Helping them does not simply mean to give assistance 
                            throughout the assignment. Much of the support you give begins when creating the assignment 
                            itself. I cherish the creative process, also there are an immense amount of techniques you can 
                            include in an assignment to ensure that students consolidate the knowledge and 
                            comprehension of the subjects they´re working on.   
                            <br/><br/>
                            Many of these techniques are intended to instil positive behaviour towards the assignment or 
                            task. To motivate students to work harder, smarter and with more excitement and interest.                                   One of these techniques is showing them a symbol of their effort or a representation of their 
                            progress. Graphically this can be illustrated as progress bars or by stars.
                        </p>
                        
                        <img className="blog_article_image_section" src={progressbar} alt="progressbar" />
                        
                        <p>
                            Progress bars can be seen in software and websites where a task require longer engagement to 
                            complete. The bar fills up to represent the progress made and give a sense of how much is left. 
                            But there’s a psychological effect that is triggered when seeing an incomplete progress bar.
                            We humans secretly hate to leave things undone and unfinished. Actually, the feeling of 
                            incompletion is triggered even without seeing a progress bar, but a progress bar is the visual 
                            representation of that incompletion. A symbol of exactly how unfinished the task is.          
                            <br/><br/>
                            Like the naggings of one’s mom, unfinished tasks will stay in your memory, pestering you, 
                            being hard to forget until you complete them. There is something called the Zeigarnik effect 
                            that state:
                        </p>
                        <p className="blog_article_text_quote">
                            People remember uncompleted or interrupted tasks better than completed tasks.
                        </p>
                        <p>
                            Bluma Zeigarnik published a research report on this phenomenon in 1927. The idea that started 
                            this particular type of research came from observing (or noticing) that waiters had a good 
                            recollection of all their unpaid orders, but once paid they disappeared from memory. 
                            Another related phenomenon is the Ovsiankina effect (1928) which states that there is a 
                            tendency to pick up an interrupted action again when it has still not been achieved, just because 
                            it has been interrupted, even without any incentive tied to it. So strong is our urge to finish what 
                            we started.  
                            <br/><br/>
                            <strong>And back to teaching</strong>
                            <br/><br/>
                            It may be hard for teachers to implement progress bars to motivate their students, unless the 
                            teachers are programmers who build their own educational material. However, I have noticed a 
                            kind of similar behaviour by using another technique. The powerful star stickers. Combining 
                            stars stickers with giving students the opportunity to redo their work/assignments is a recipe for 
                            improved student performance. By grading students’ assignments with stars and telling them 
                            what the maximum number of stars are will create a desire to get them all.  
                        </p>
                
                        <img className="blog_article_image_section" src={threestars} alt="threestars" />
              
                        <p>
                            Setting two out of three stars tend to make students desire to redo the task to achieve the three 
                            stars. This does not presume they crave the perfect score, only barely enough score for the 
                            three stars to appear. 
                            <br/><br/>
                            Looking at it like this: They have already completed the assignment or task, which means that 
                            the fear of failure has been erased, they have established a floor below which they cannot fall, 
                            they can only do better. They also gained more understanding of the assignment. Just like 
                            replaying a video game they already finished, they will make more informed decisions and fewer 
                            mistakes resulting in greater score than the first time, when they didn’t know or fully understood 
                            the “playing field” or the dynamics of the game.
                            <br/><br/>
                            I found using star stickers a useful technique for getting the students to want to improve their
                            restult or quality of the assignemnt/task they just finished. Regarding how long this desire to do 
                            better last for a particular task, I can only confirm that it worked for me the same day and the next. 
                            Delaying students the chance to get the three stars any further might deminish their desire for it.
                            Starting a new assignment/task or project might also have an deminishing effect on their desire
                            for improving their last assignemnt.   
                            <br/><br/>
                            <br/><br/>
                        </p>
                            
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default AlmostDone;


