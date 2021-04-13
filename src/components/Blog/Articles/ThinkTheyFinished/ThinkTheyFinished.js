import React from "react";
import medalsbackground from "./medalsbackground.png";
import medalimage from "./medalimage.png";

class ThinkTheyFinished extends React.Component {


    reportWindowSize = e => {console.log(window.innerWidth);}
    listenScrollEvent = e => {console.log(window.scrollY)}
        

    componentDidMount() {
        console.log(window.innerWidth)
        console.log(window.innerHeight)
        window.addEventListener('scroll', this.listenScrollEvent)
        window.addEventListener('resize', this.reportWindowSize)

        window.scrollTo(0,0);
    }


    render() {
        return (
            <div className="blog_article_container">
                <div className="blog_article_title_section">
                    <p>How to Motivate Students to Work More After They Decided That They're Done.</p>
                </div>
                <div className="blog_article_image_section">
                    <img src={medalsbackground} alt="thinkbackgroundimage" />
                </div>

                <div className="blog_article_text_section">
                
                    
                    <div className="blog_article_text_container">
                        
                    <p>
                        If you as a teacher done a good job preparing and motivating your students when 
                        starting a new assignment, then the students will be eager to start working on it. 
                        But as the times goes on the motivation begins to fall. For some faster than others.
                        <br/><br/>
                        It could be that they hit a creative roadblock or having trouble conceptualizing
                        what's in their mind into words on paper. Maybe they discovered and 
                        completed all that is interesting with the assignment and now only the boring
                        and time consuming tasks remains. For some reason their motivation is falling 
                        fast and so is the effectiveness of their work. When the most efficient students 
                        starts handing in their assignments a particular phenomenon tend to occur. 
                        The students that's not finished starts to hand in their work too.  Their argument 
                        for doing this differ, but it all comes down to lack of motivation.
                        <br/><br/>
                        The challenge that comes with that is to get them to continue to work more so
                        they to can hand in a complete and finished assignemnt.
                        <br/><br/>
                        So the question I have been experimenting with and trying to find answer too is: 
                    </p>
                    
                    <p className="blog_article_text_quote">
                            How to motivate students to work more after they decided that they're done.
                    </p>
                    <p>
                        It is a question that teachers have been wrestling with for a long time and many
                        already have strategies to handle these types of situations. Some have found 
                        their answers in letting the students take a break and do other work before 
                        continuing with that particular assignment. Some have built up a constructive 
                        relationship with the students that it works with just saying few words of 
                        encouragement for them to get the wheels spinning again. Other have tried 
                        everything they can think of  and even searched for what others have tried but 
                        still have no working strategy. 
                        <br/><br/>
                        <strong>My strategy</strong><br/>
                        After thinking about it for some time, even being intrigued about solving it,
                        my line of thought began to narrow down and focus on what's the motivational 
                        difference between the current assignment and a new one. A student have 
                        already done some work on the current assignemnt and are therefore closer to 
                        finishing it and thus also closer to reaping the rewards for its completion. 
                        <br/><br/>
                        To beign a new assignemnt is to start fresh and from the begining, having to do
                        more work to finish than the current assignment would require. So why is a new
                        assignment creating more motivation than the current unfinished one?
                        <br/>
                        </p>
                        <p style={{fontFamily: 'AvenirNext-Italic'}}>
                        Is it because it might be easier?<br/>
                        Maybe the current assignment is too big and the students lost sight of the goal.
                        </p>
                        <p>
                        I think one reason is because the diffrent aspects of a new assignemnts it's not 
                        yet explored and somewhat still a mystery. Like if the new assignemnt is about 
                        a new subject, topic, or a new angle to what previous been learned. 
                        Will teamwork be allowed, how many students in each team, can students 
                        form teams themselves or will the teacher pair them together. 
                        <br/><br/>
                        <strong>Summary of benefits:</strong><br/>
                        Current assignemnt: Closer to completion and the rewards it might bring.<br/>
                        New assignemnt: Mysterious and unexplored. 
                        <br/><br/>
                        I like to have the cake and eat it too so I started to formulate an idea of an 
                        assignemnt  structure that had the benefits of both. I also added in som 
                        extra rewards in the mix and had it shrouded in a bit of mystery. The result 
                        would be something like:
                        </p>
                        <p style={{fontFamily: 'AvenirNext-Italic', fontSize:'20px'}}>
                        An assignment divided into small groups of tasks, 
                        which are revealed after each others.
                        </p>
                        <p>
                        Such an assignemnt could be called:    
                        Milestone Assignment, Evolving Assignment,<br/> Level Assignment, Progressive Assignment
                        <br/><br/>
                        For those with the gift of negativity I could also call it: <br/>
                        The Moving Goal Posts Assignment.
                        <br/><br/>
                        The prosess of creating such an assignment would be to either:<br/> 
                        1. List all the steps the student need to take and label them as tasks, group 
                        them together and only tell them one group of tasks at a time.<br/>
                        2. Combine multiple assignemnt into one serie of assignemnts.
                        <br/><br/>
                        <strong>Extra excitement</strong><br/>
                        By dividing the assignemnt into groups of tasks it was easy to add a reward to
                        each completion. What I did was to digitaly create a set of ranked medals, were 
                        each medal was made more beautiful (looked more valuable) than the previous.  
                        <br/><br/>
                        The medals had the effect of milestone rewards. The students were rewarded for
                        completing a group of tasks and now looked forward to complete the next set. 
                        I tired two variations of medals. 
                        <br/><br/>
                        1. I printed out the medals on blank sticker paper and laminated the front
                        side to make it hardened and a feel of better quality. I put it on the work they 
                        done when they achived the goals for the medal.<br/>
                        2. I just digitaly added the medal as an image on thier paper before printing.
                        <br/><br/>
                        </p>
                        <img className="blog_article_image_section" src={medalimage} alt="medalimage"/>
                        <p>
                        <br/>
                        The medals was designed to have a precived increase in value and visual 
                        impressivness.<br/> The higher medal you got the more beautiful and valuable it 
                        looked. It gave the student a sence of progression.
                        <br/><br/>
                        Using medals as rewards I also tested to create "smaller" assignments, but with 
                        different difficulty levels for students to choose from. Assignemnts were placed 
                        next to each other in increasing difficulty and complexity and the students picked 
                        the one that matched their ambition. This later progressed into most students 
                        chosing the easiest first, completed it and got the medal, then picked the
                        assignemnt in the next difficulty level and so on.
                        <br/><br/>
                        <strong>The results</strong><br/>
                        Of course this is not anywhere near a scientific study, but only an experiment to
                        see any positive change in student's attitude and motivation towards assignemnts.
                        I have not laid the groundwork to measure the result in any quantifiable way and
                        are only comparing their willingness to work until completion with my memony of
                        how willing there were in the past. 
                        <br/><br/>
                        That being said, I did see a boost in the motivation among the students in general.
                        I introduced the first assignment in the format of groups of tasks with medals 
                        assosiated to each group. There were an overal excitement because of they 
                        wanted to get the medals. It require some ambiguity in compairing the completion 
                        time between assignemnts, as they are usualy require different amount of work to 
                        complete. I did feel like they finished faster, mostly as a result of their eagerness to 
                        work lasted much longer than before.
                        </p>
                        <p style={{fontFamily: 'AvenirNext-Italic', fontSize:'20px'}}>
                        Some insights I discovered when testing this out
                        </p>
                        <p>
                        Insight 1: I discovered that dividing an assignment and creating many smaller tasks makes it easier for students to work, 
                        they are less confused about what to do because they always have a set of task to
                        focus on.
                        <br/><br/>
                        Insight 2: Students will be intrigued when I act a bit mysterious,
                        telling them that there will be more after the first groups of tasks and then refuse to
                        tell more about it. A few words of mystery can generate excitement and anticipation 
                        that push students to complete the tasks, so they can move on to discover the next 
                        set of tasks.
                        <br/><br/>
                        Insight 3: After testing this work method myself I discovered that mysteries
                        are like candy for some students.
                        <br/><br/>
                        Insight 4: After the students discovered at least some of the medals, the interest 
                        shifted from discovery of new medals to accumulation of medals. The students liked 
                        to collect them, they liked to complete tasks to get the medals and in that case it did 
                        not matter what rank the medals represented, well the higher the better but it was 
                        the amount of medals that was important. 
                        <br/><br/>
                        <strong>Conclusion</strong><br/>
                        It may very well be that the motivational impact of the medals will only be effectful  
                        for the first few assignments. The students might show eagerness to work the tasks
                        to uncover the mysteries (to see all medals, which I will carefully guard against 
                        watchful eyes) and then strive to obtain the best medal. Once all medals been discovered, 
                        achieved and obtained I fear they will then only be regarded as decorations 
                        in the background. 
                        An assignment cannot run on mystery alone and to make the medals
                        effectful in the long run, in some way I need to turn the medals into collectables 
                        once the mystery fades. The students need to want more of the medals, feeling
                        good by letting them stack. Thus making the medals desirable even though the
                        students already obtained them, to establish them as a quality mark of their work. 
                        With time maybe the obtaining criteria for each of the medals will normalize 
                        across assignments, and students will know what's expected of them if they 
                        desire a certain medal.
                        <br/><br/>
                        <br/><br/>
                        </p>
                    </div>
                </div>


            </div>
        );
    }
}

export default ThinkTheyFinished;


