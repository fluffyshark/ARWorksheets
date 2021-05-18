import React from "react";
import badgefront from "./badgefront.png";
import badgesprogress from "./badgesprogress.png";
import scouts from "./scouts.png";




class Badges extends React.Component {




    render() {
        return (
            <div className="blog_article_container">
                <div className="blog_article_title_section">
                    <p>How Adopting Scouts and Swimming Badges Motivated Students to Work On Their Skills During Lesson Breaks</p>
                </div>
                <div className="blog_article_image_section">
                    <img src={badgefront} alt="badgefront" />
                </div>

                <div className="blog_article_text_section">
                
                    
                    <div className="blog_article_text_container">
                        
                    <p>
                        There is a very powerful tool that will motivate students to work hard and vigorously towards a goal. 
                        With a healthy obsession focused on improving and progressing, using strategy and creativity to optimize 
                        their performance and their results. The tool that often will have this effect is as the title hints: badges. 
                        This motivating tool could greatly benefit students’ learning. Adding a layer of excitement to lessons 
                        and assignments, but also helping to motivate students to work on gaining skills and improving crafts 
                        during breaks. 
                    </p>
                    <p>
                        <strong>Using badges during lesson breaks</strong><br/>
                        During lesson breaks, the younger students usually play outside in the schoolyard. There are lots of 
                        activities and things to do outside, both together and alone. Mostly it’s only the imagination and the 
                        mood that creates the boundaries from having a fun break. At some schools, the teachers or other school 
                        staff helps by organizing break activities. What would be a great and lengthy break activity would be to 
                        launch a badge system. Like the scout badge system, students could be presented with a list of badges 
                        and the skills they need to learn to earn them. The flashier the design and presentation of the badges 
                        the better.
                        <br/><br/>
                        There could be badges for specific physical activities like learning to dribble a basketball or tricks 
                        with a football, but also for school work like drawing, math challenges, literature etc. 
                        The badges could also be placed in categories for example a basketball category with several badges for 
                        different kinds of basketball-related activities or skills. With many different sorts of skill-based 
                        badges, one could create a skill tree like those in games. 
                    </p>
                    <div className="blog_article_image_section">
                        <img src={badgesprogress} alt="badgesprogress" />
                    </div>
                    <p>
                       <strong>How to and not to use badges</strong><br/>
                       There are right ways to implement badges, which is extremely motivating and can be effectively used to 
                       steer students to do certain actions. There is also the bad way which makes badges almost useless. 
                       <br/><br/>
                       For example:<br/>
                       Most Xbox games give players badges. The games I've played on Xbox are a perfect example of both good 
                       use and bad use of badges baked together. When a developer build games for Xbox they can include badges 
                       and achievements that Xbox manages for them outside of their game. For each badge/achievement players 
                       unlocks points are received, which Xbox collects and accumulate for all games. As a feature Xbox use 
                       these points to create monthly competitions between Xbox friends, ranking friends after who scored the 
                       most points from playing. 
                       <br/><br/>
                       <strong>Bad uses of badges</strong><br/>
                       The bad use of badges I've experienced is for example when a game gives players a badge when they don't 
                       expect it. Surprise is not what players should feel when receiving a badge. Badges should be something 
                       players need to know of and choose to strive for. Otherwise, it way not make players feel that they 
                       earned it. Like when I receive a badge for completing the tutorial for a new game, or even worse, for 
                       starting the game. I think these type of easily obtained badges (that are being thrown at you) are more 
                       exciting for the game designer than for the player. They want you to steer you towards the tasks/actions 
                       associated with these badges, which usually are closely related to the main quest.
                       <br/><br/>
                       The problems with these badges are that:<br/>
                       1.) Players usually didn’t expect to receive them. Meaning that players did not know they existed and its 
                       objectives just happened to be fulfilled.<br/>
                       2.) They come too early in the game. When players are beginners and in the early process of learning the 
                       game they might not even have a basic understanding of what some badge’s objectives even mean.<br/> 
                       3.) Players should not obtain them when they are focused on something else. When players are busy 
                       following the main questline or trying out other game mechanics. At that time they seldom
                       care about the badges.<br/>
                       4.) Badges should be a reminder of what you achieved. A revenant of your progress. 
                       <br/><br/>
                       <strong>Good uses of badges</strong><br/>
                       An example of good implementation is the scout badges. Scouts around the world obtain badges when they 
                       succeed with tasks related to wilderness survival. Some tasks are harder to complete than others, 
                       making their badges more desirable and the scouts who obtain them gain the admiration of their peers. 
                       <br/><br/>
                       Swimming schools in some countries also have a good implementation of badges. In regard to badges, 
                       swimming has the disadvantage of not being able to offer a diverse variety of task to which they can 
                       award badges. Swimming is swimming and obtaining badges will probably involve swimming. 
                       Their badge system is therefore set up in a different way than scout badges. Swimming badges are mostly 
                       progression-based and students tell the swimming teacher which badge they will be aiming for. 
                       Because swimming badges are also hierarchy-based, their design tends to have the same base design but 
                       become more glorified and flashy when they are harder to achieve. Most badges require that you obtain 
                       the easier first and you can't aim to complete the hardest one immediately. 
                    </p>
                    <div className="blog_article_image_section">
                        <img src={scouts} alt="scouts" />
                    </div>
                    <p>
                       Be it skill-based badges like scout badges or progress based like swimming badges, both types make the 
                       students crave them and therefore are a core reason why both scouts clubs and swimming schools maintain 
                       their popularity among kids. For some kids in both scout and swimming clubs, the badges are the main 
                       motivator and the reason they continue the membership of their respective clubs. However, when kids grow 
                       into late teens the social aspect tends to take over as the main motivator. 
                       <br/><br/>
                       <br/><br/>
                     
                    </p>
                   
                        
                    
                      
                    </div>
                </div>


            </div>
        );
    }
}

export default Badges;


