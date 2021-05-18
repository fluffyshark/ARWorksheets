import React from "react";
import collectionapp from "./collectionapp.png";
import gamification from "./gamification.png";
import pokemoncollection from "./pokemoncollection.png";
import worstcover from "./worstcover.png";


class WorstStudent extends React.Component {




    render() {
        return (
            <div className="blog_article_container">
                <div className="blog_article_title_section">
                    <p>After Trying This Method The Worst Performing Student Was Motivated to Work The Hardest</p>
                </div>
                <div className="blog_article_image_section">
                    <img src={worstcover} alt="worstcover" />
                </div>

                <div className="blog_article_text_section">
                
                    
                    <div className="blog_article_text_container">
                        
                    <p>
                        After introducing the students to a new subject it won’t take many lessons for the teacher to 
                        notice which students like the subject and who don’t. Their behavior in the classroom tells it all. 
                        Those who like it are eager to begin, ask many questions, both general and detailed questions. 
                        Those who don’t like it are slow to start their work and their pencils and books hide “themselves” 
                        very well in their desk. It’s hard for the teacher to inspire all students in all subjects, but what 
                        is it that triggers the motivation in some students but not others?  
                        <br/><br/>
                        It’s hard to answer that as it could depend on so many factors. There are some strong theories about 
                        motivation that game developers tend to make use of when making their games. For teachers, the way to 
                        deal with it is to plan and structure the lessons in ways that makes the subject more learnable even 
                        for those students that find it hard or just don’t like it. Will the lesson include an assignment, 
                        with teamwork, or only a lecture where the teacher speaks and the students take notes, maybe a short 
                        movie, will the lesson finish off with a test or quiz?
                        <br/><br/>
                        Those are the most common ways to organise the lessons around a subject and every aspect both motivates 
                        and demotivates different students. There are many more ways and methods to use that require more 
                        creativity from the teacher and also not to forget that the web offers a massive amount of ideas and 
                        inspirations that help.
                        <br/><br/>
                        <strong>The realization</strong><br/>
                        Some years ago I became interested in trying to formulate a fit all plan and starting looking and 
                        discovering ways to gain the interest of all students regardless of if they liked the subject or not. 
                        Wouldn’t that be most convenient, a plan or structure that regardless of the subject every or most 
                        student would like it and work hard to learn it. If you ask questions and start looking for answers you 
                        will find some, but maybe not the answers you expect. What I came to realize was that if I wanted a 
                        “one plan fits all” then the subjects would not be the real focus of the students interest. 
                        <br/><br/>
                        What I realized was that the very basic distinction the students make for each subject (for everything 
                        else too) is if it has value to them. A student’s value system has a huge impact on what levels of 
                        motivation a student can muster towards a subject or task. So how can a teacher implement more value 
                        into an assignment or other school activity? For some students, additional value is not needed as they 
                        are drilled by their parents to perform well in school. Thus for them they get value from parental 
                        satisfaction and joy when they present their parents with the grades. But unfortunately this does not 
                        apply for all students and it's for their motivation that assignments need additional value. So back to 
                        the question: 
                    </p>
                    <p className="blog_article_text_quote">
                        How does a teacher add more value to an assignment?
                    </p>
                    <p>
                        In the start of this article I mentioned that game developers make use of motivational theories to make 
                        their games more interesting, playable or addictive. Games are, when you stripp it of all it’s colorful 
                        design, impressive artwork and storyline, just a set of repetitive tasks and assignments for the players 
                        to do, with obstacles in the way. Yet kids and adults play it obsessively for fun. Sometimes when a player 
                        (kid or adult) is so into the game that even if they are hungry, tired or need to go to the toilet, they 
                        still continue to play until one of those needs becomes unbearable. Playing games can make you body tired 
                        as the hours pass, but it does little to your mental fatigue. It’s like playing games are effortless. 
                        So how can teachers use what’s in the game to engage and motivate students? 
                        <br/><br/>
                        Well the game mechanic teachers can use are many but some affect some type of students more than others, 
                        and what do I mean with type. I’m referring to Bartle’s Player types.

                    </p>
                    <div className="blog_article_image_section">
                        <img src={gamification} alt="gamification" />
                    </div>
                    <p>
                        Killers - Like to win, are competitive, are motivated by leaderboards.<br/>
                        Achievers - Like to complete challenges, gain success and prestige.<br/> 
                        Explorers - Like to discover and uncover what is yet unknown to them, motivated by mysteries.<br/>
                        Socializers - Like to do things together, discuss, cooperate, share and mentor.<br/>
                        Builders - Like to create, mold and form.<br/> 
                        Collectors - Like to gather and grind. Love things that stack.
                        <br/><br/>
                        The names of the categories differ depending on what literature you read but the types are somewhat 
                        the same. 
                        <br/><br/>
                        Students' motivations can fall into more than one, even several of these categories. Planning lessons 
                        and assignments while experimenting with the motivators mentioned above might yield interesting results. 
                        I did and was amazed with the amount of enthusiasm my students radiated. I was primarily focused on the 
                        collector category and experimented with integrating Pokémon into my project. Pokémon was a big thing 
                        during that time (early 2017) when Pokémon Go had been out for about 6 months. The thing about Pokémon 
                        is that it’s heavily focused on collecting. 
                    </p>
                        <div className="blog_article_image_section">
                            <img src={pokemoncollection} alt="pokemoncollection" />
                        </div>
                    <p>
                        I believe collecting is the core motivational factor triggered in the game. There are a lot of Pokémon. 
                        When I was a kid there were 150 of them and now last time I checked the Pokédex on their official 
                        website the number had gone up to 898. It was during my Pokémon inspired project that I discovered the 
                        “motivational shift” amongst my students, the students that normally have low work ethic were the ones 
                        that worked the hardest and there was not any lack of quality in their work either. Update: I wish to 
                        clarify that no Pokémon cards were given to students. 

                        </p>
                    <p className="blog_article_text_quote">
                        What I discovered was that those students were just extremely reward-oriented.
                    </p>
                    <p>
                        I still smile when I recall the epiphany I got from back then. Some years later I used this “insight” 
                        to create a collection-based reward app to further increase the range of this strategy. This app could 
                        be used independently of subject, as a carrot for student motivation. There was not much to the app, 
                        the design was simple and the only functionalities was to buy, collect, upgrade and share cards. 
                        The app was used as follows:
                        <br/><br/>
                        When planning assignments I would formulate a criteria and if a student fulfilled the criteria they 
                        would be rewarded a varying amount of virtual gold in the app. On some assignments I only had one 
                        gold-rewarding criteria and in others I had several, often with increasing requirements and increasing 
                        amounts of gold. Upon receiving their gold the students used it to purchase collection cards, which 
                        they could collect. 
                        <br/><br/>
                        There are many cards to collect, 71 in total. The cards are divided into six quite big collection 
                        categories in the app, with three categories containing 36 cards each. It’s the theme of the cards 
                        that characterizes the categories. The themes are:
                        <br/><br/>
                        Knights of Camelot (King Arthur, Merlin etc)<br/>
                        Gods of Olympus (Ares, Artemis etc)<br/>
                        Guardian Tree (Trees)<br/>
                        Fire and Fury (Dragons)<br/>
                        Hearts of Steel (Robots)<br/>
                        Spirits and Fairies (Tiny people)
                        <br/><br/>
                        The cards are simple with only a character and a name on it and can only be used for two things, 
                        collect them and upgrade them. After buying a couple of cards, it’s highly likely that students will 
                        get duplicates. This can seem boring for the students at first, until they discover that they can use 
                        four duplicates to upgrade a card. The cards are divided into three ranks: bronze cards, silver cards, 
                        and gold cards. A student buying a card will only receive a bronze card. To get silver cards they need 
                        to sacrifice four bronze cards that they have duplicates of. The same goes for gold cards, as they need 
                        four silver card duplicates to obtain. A silver and gold card will have the same character on them as 
                        the bronze card, but they don’t look the same and instead look more powerful.
                        <br/><br/>
                        <img className="blog_article_image_section" src={collectionapp} alt="collectionapp"/>
                        <br/><br/>
                        The final fun-factor I added to this app was to give the students the ability to share their duplicate 
                        cards. This added a huge social aspect to the app, as students have their favorite categories and will 
                        trade cards in the other. This gives them some control over what cards they get as the cards they buy 
                        is random and from a random category. 
                        <br/><br/>
                        Update: Gameplay dynamics change, like any game change with experience. While observing students playing 
                        this app I noticed three behavioral changes that came when they discovered new features or aspects of 
                        the game. When I first introduced and explained the app to my students I only said they could use the gold 
                        I give them for their assignment to buy collection cards, the rest of the functionality was up to them to 
                        discover. As they played with the app 
                        <br/><br/>
                        First was the unveiling of all bronze cards, every student wanted to have all cards (bronze cards) to 
                        see what they looked like. When one student got a new card that he hadn’t seen before he/she was quick 
                        to show it to his/her classmates. They didn’t in this part understand the reason for why they sometimes 
                        got duplicates of cards they already had. So when they got a duplicate they would give voice to their 
                        disappointment, and later on frustration, as the more cards they got, naturally, the less likely it 
                        became to get a new card which they never seen before.
                        <br/><br/>
                        The second was the discovery of the “merge button”. When one student noticed that when they clicked on 
                        a duplicate card it was added to “the merge slot”, when four were added the “merge button” became 
                        available. Everyone in the classroom at that time heard the “I got a silver card” shout that came 
                        afterwards. Suddenly duplicates were something everyone wanted and I heard a lot more “silver shouts” 
                        during that class.
                        <br/><br/>
                        The last discovery was the “share button” which made the whole class interested in each other’s cards. 
                        Now they had the choice to specialize and focus on one or two categories and trade the rest for the 
                        cards they wanted. I noticed that they became more friendly with each other as everyone now was in 
                        everyone's sphere of interest, as everyone suddenly could possess a duplicate of the card they wanted.
                        <br/><br/>
                        Now after some months passed I can say that the app is still adding value to whatever assignment I 
                        presented to the students as they knew that if they performed well I would grant them a set amount of 
                        gold from my “infinite reserve”. Even if my students’ interest in collecting cards and the app as a 
                        whole had lost its hype and returned to “normal levels” the app still adds a value to all assignments 
                        I connect it to. It’s presence had become a normal occurrence which for now still elevates the level of 
                        what you can call the standard level of motivation for any assignment.   
                        <br/><br/>
                        <strong>Update:</strong> I also implemented this app into a multiplication training app I made some years ago and it 
                        worked wonders. 
                        <br/><br/>
                        In this app are just a few of many motivational techniques that teachers can use to motivate their 
                        students to perform better and work harder while making it feel more effortless to do so. I will finish 
                        off with one technique known to all teachers that will increase the value (interest) of whatever lecture 
                        the teacher holds. This almost fail safe, yet simple well known phrase increases the students motivation 
                        quite a bit. I can still remember my own teacher's voice when she said these powerful words: Like the chant 
                        of a spell it reads: This will be on the test.  

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

export default WorstStudent;


