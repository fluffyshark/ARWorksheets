import React from "react";
import ClassView from "./ClassView.png";
import CollectionView from "./CollectionView.png";
import ProgressView from "./ProgressView.png";
import MathLevelingMain from "./MathLevelingMain.png";

class MathLeveling extends React.Component {

    render() {
        return (
            <div className="blog_article_container">
                
                <div className="blog_article_title_section">
                    <p>How a Class of 22 Students Solved<br/> 6,627 Multiplication Problems in <br/>60 Minutes</p>
                </div>
                
                <div className="blog_article_image_section">
                    <img src={MathLevelingMain} alt="MathLevelingMain" />
                </div>
                
                <div className="blog_article_text_section">
                    <div className="blog_article_text_container">

                        <p>
                            In the fall of 2020, I was finally able to complete and launch an app that had been lying on 
                            my desktop screen in an “almost-done” state for almost two years. I’ve seen the project folder 
                            every time I opened the laptop, constantly reminding me of its incompleteness. All this time 
                            during these two years I knew it would only require a few afternoons of work to finish up the 
                            code and launch the app to the App Store. But I had my reason not to...

                            <br/><br/>
                            The app in question is a multiplication app that I built to be an enjoyable way for my students 
                            to learn and practice the first ten multiplication tables. It had some fun-factors built into it, 
                            designed to keep them engaged longer than their math book ever could. Thus increasing the students’ 
                            productivity during the math hours, in which it was in use. The app would display one 
                            multiplication problem at a time and a correct answer was rewarded with 10 points, together with a 
                            short but satisfying sound indicating the correctness of the answer. These points accumulated in a 
                            progress bar, which levelled up the player once it reached 100%. Every level changes the play view 
                            into a new colour, and additional details made the new view looking more important and dazzling than 
                            the last.   

                        </p>
                        
                        <img className="blog_article_image_section" id="mathleveling_classimage" src={ProgressView} alt="ProgressView"/>
                        
                        <p>
                            In addition to the progression part, there were two other major fun-factors put in place. To instil some 
                            sense of cooperation between the students when using the app I created a levelling system for the entire 
                            class to contribute to. It was a special view on the app designed to be shown on a projector or monitor 
                            in the classroom, for everyone to see. The view was simple, containing only a progress bar as well as 
                            showing the six major contributors among the students, as a small leaderboard. The students could choose 
                            any time they wanted to contribute their points to the “class progression”, which would make the progress 
                            bar on the projector or monitor increase. Once the progress bar reaches 100% the colour of the view would 
                            change indicating a new level, similar to the student’s individual progression.
                            
                            <br/><br/>
                            I could have made it so that all points the student gathered would automatically add to the 
                            “class progression” but decided to make it voluntarily, giving the students’ the choice if they wanted to 
                            contribute or not. 
                        </p>
                        <p className="blog_article_text_container_italic"> <strong>Update:</strong> This resulted in students 
                            “silently” gathering points and adding it when they could make a big impact, like when the progress bar 
                            was close to 100% and their contribution would trigger the class to level up. Some students also thought 
                            it was fun to coordinate their contribution, so they together and at the same time pushed the progress bar 
                            beyond 100% and into the next level. Others wanted to surprise their fellow classmates by suddenly taking 
                            a place high on the leaderboard.  
                        </p>

                            <img className="blog_article_image_section" src={ClassView} alt="ClassView" />
                        
                        <p>    
                            The other fun-factor that perhaps was the most powerful motivator in the entire app, engaging the students 
                            to continue playing was the card collection part. This part of the app was only made available each time 
                            the students had answered correctly at least five times in a row (5-star streak). By doing so would allow 
                            students to press a chest button that took them to the collection view. Each time the students answer 
                            correctly they are awarded 10 points, as explained earlier this adds to their progression towards the next 
                            level. However, in the card collection part, all points are transformed into gold, which is a currency to 
                            buy collection cards.

                        </p>
                        <p>
                            Buying a card costs 100 gold, which is equivalent to getting 10 multiplication answers correct. 
                            When pressing the buy button a random card would appear and be placed in one of the six collection categories. 
                        </p>   
                            
                        <p className="blog_article_text_container_italic"> 
                            <strong>Update: </strong>
                            I discovered that the students for some reason like to save a large amount of gold before starting to spend 
                            it all on buying cards. It was not one or two of them, but all students in the class were hoarding their gold 
                            like greedy goblins. I didn’t expect that, I thought their curiosity in acquiring a new unknown card would 
                            trump their desire for increasing a number that only has a gold bar icon next to it. But after seeing this 
                            behaviour in almost all my students now it’s obvious to me that my students love their gold like a dragon 
                            loves its treasure. 
                        </p>
                        <p className="blog_article_text_quote">
                            If you want your students to love numbers, then place an image of gold bars next to it.
                        </p>

                        <p className="blog_article_text_container_italic"> 
                            This behaviour didn’t make sense to me at first because spending all gold at once to buy cards it’s quite 
                            boring, as I built in a delay between pressing the buy button and revealing the card. They had to wait 
                            several seconds before being able to press the button again. That is quite frustrating if they had 
                            5,000 - 20,000 gold more to spend. But clever as they are, one student found a hack to speed this up by 
                            switching back and forth between views. And the news of that hack spread to the entire class like wildfire, 
                            everyone did it. But as a drawback of that hack they didn’t see what card they got, throwing all my 
                            expectation of them being excited of getting a new card out the window. 
                            <br/><br/>
                        </p>

                            <img className="blog_article_image_section" src={CollectionView} alt="CollectionView" />
                        
                        <p>    
                            The cards are divided into six categories based on their type (dragons, fairies, robots etc). When buying 
                            a card they always get a bronze card, which is the lowest value card. They can even get duplicates, which 
                            they can stack. If a category has four or more duplicates they can spend those to acquire a higher valued 
                            card (four bronze cards can be turned into silver and four silver cards can turn into a gold card). If a 
                            student wants to focus on collecting cards in a certain category they can trade their duplicates with a classmate.
                            <br/><br/>
                            <strong>To summarize</strong>, this app lets students practice the multiplication table up to the 10th row.<br/>
                            To motivate students these fun-factors are included:<br/>
                            - Levelling system<br/>
                            - Virtual currency (gold)<br/>
                            - Tradable collection cards<br/>
                            - Class collaboration levelling system
                            <br/><br/>
                        </p>

                        <p className="blog_article_text_container_italic"> 
                            <strong>Update: </strong>
                            When creating something and then trying it out, new ideas emerge and in this case, the students begin using the 
                            app in unexpected ways after a while. I discovered that they created their own challenges within the game, like 
                            having short competitions with each other to reach a certain score in the shortest amount of time. I found interest 
                            in these mini-challenges made one of them an official challenge. 
                            <br/>We called it “The 100 Club”. To become a “member” of the 100 Club a student must complete 100 problems in 10 minutes 
                            (which means getting 1000 points in 10 minutes).
                            Later we added rank to be achieved within the club. 
                            <br/><br/>
                            The ranking of the 100 Club:<br/>
                            Reach 1000 points in:<br/>
                            - 10 minutes for a Basic membership<br/>
                            - 8 minutes for a Bronze membership<br/>
                            - 6 minutes for a Silver membership<br/>
                            - 4 minutes for a Gold membership<br/>
                            <br/><br/>
                            <br/><br/>
                        </p>
                        
              
                        
                            
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default MathLeveling;


