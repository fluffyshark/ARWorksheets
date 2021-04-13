import React from "react";
import fantasyWorld from "./fantasyWorldImg.jpg";
import deercrest from "./deercrest.jpg";
import questcards from "./questcards.jpg";
import elderport from "./elderport.jpg";

class FantasyWorld extends React.Component {




    render() {
        return (
            <div className="blog_article_container">
                <div className="blog_article_title_section">
                    <p>My Students Struggled with Imagination when Writing. So I Created A Fantasy World For Them To Write About</p>
                </div>
                <div className="blog_article_image_section">
                    <img src={fantasyWorld} alt="fantasyWorld" />
                </div>

                <div className="blog_article_text_section">
                
                    
                    <div className="blog_article_text_container">
                        
                    <p>
                        I once gave the students an assignment on writing a story. I told them that their story 
                        could be about anything and gave the examples of "a day at school", "their home", 
                        "the best summer event", the story could even take place in a "made-up fantasy world". 
                        But what I came to understand and hence the title, almost all students struggled with 
                        their imagination. I realized that my mistake was that I hadn't given them any piece of 
                        information for them to anchor their imagination on. 
                        <br/><br/>
                        Had I instead instructed them to write about something more specific, like 
                        "a haunted house" then they would have written about the house exterior, what the 
                        house looked like, how big it was, how many rooms etc. They would have written about 
                        the interior, describing the rooms in details and all the horror that had happened in each. 
                        They could have added a background story, why was the house haunted and by who, 
                        what tragic event unfolded etc. Finally, they could have added some unlucky visitors who 
                        entered the house, what kind of character were they, what were their strengths and 
                        weaknesses, were they good in heart or did they deserve everything that befell them.
                        Anyway, I think you get my point.  
                        Anyway I thing you get my point.  
                    </p>
                    
                    <p className="blog_article_text_quote">
                        Students need something to anchor their imagination
                    </p>
                    <p>
                        The reason why I gave this "no restriction assignment" was because I believed they
                        wouldn't feel hindered by anything. My aim was for them to produce more text than 
                        they would have done if I had given them limitations. But I was very wrong in that regard.
                        Frankly, the opposite was true, they needed a guiding hand.  
                        <br/><br/>
                        In preparation for another assignment I search the web for material I could use to inspire
                        my student's creativity. What I found after searching were a lot of monster images and a
                        online map-making service, which was perfect.
                        <br/><br/>
                        With the software, which allowed me to place buildings, trees and other structures on an
                        empty autogenerated map, I created a fantasy world. With the monster-images, I designed cards with information about each monster, like Pokémon cards, but 
                        without stats and attack info. To clarify, I didn't just take the images from the web, to be 
                        able to use them I had to pay a licence fee for both the monster images and the 
                        map-making software.
                        <br/><br/>
                        This project was what I spent my Christmas holiday working on.  
                        </p>
                        <div className="blog_article_image_section">
                            <img src={deercrest} alt="deercrest" />
                        </div>
                        <p>
                        <strong>Assignemnt description</strong><br/>
                        The world map is divided into several regions, which are clearly distinguishable by their 
                        terrain. In every region are cities/towns, special locations, and specific monsters.
                        Every city/town, special location, and monster have an info card giving the writer/student 
                        some information to add to their story, call it inspiration. But the major influence in the
                        students’ story will be the quest cards. 
                        <br/><br/>
                        Multiple quest cards will be attributed to each city or town, which the students chose 
                        to write about. Every quest starts with an event of sorts, like a "call to action", 
                        for the students’ main character to engage in. The quest is divided into three objective,
                        bronze, silver, and gold. The bronze objective is a must to complete the quest and will
                        give the student 1 exp. The silver and gold objective give more exp and will both require 
                        the story include some extra details, which will shape the story I certain ways.
                        The exp gathered will allow the students to pick other quests.
                        </p>
                        <div className="blog_article_image_section">
                            <img src={questcards} alt="questcards" />
                        </div>
                        <p>
                        An important fact about this writing assignment is that it is shrouded in mystery. 
                        The students will only be allowed to see no further than the quest progression has taken
                        them. At the start, the students are only shown the image of the starting town, the quests
                        related to the town and the monsters in the region. They will not see the map of the 
                        region itself, nor the world map. In order to keep the excitement alive, they will only be 
                        shown what the student in their class, who has progressed the furthest, are allowed 
                        to see.       
                        <br/><br/>
                        <strong>Starting Point</strong><br/>
                        All students start in the town of Deercrest (which can be seen in an image above.)
                        At first, they will get three quest cards to choose between. They will also see a few
                        cards describing the region's monster as well. Every quest is branded as a chapter
                        in their story. This is making it easy to navigate in the text when the story becomes larger.
                        When one student is done with one of the starter quests the class will be shown part two
                        of the first town. This means an additional five quests will be made available, together with 
                        some more monster cards, but most importantly the regional map will be shown and 
                        the specific location cards. This will give the students much more material to write about.
                        <br/><br/>
                        Every quest, except for the starter quests, have an exp requirement at the top of the card.
                        Students are only allowed to pick quests with an exp requirement equal or lower than
                        what they have accumulated. Meaning if they want to write about a specific quest they 
                        might need to aim to complete the silver or gold objectives on some of the previous 
                        quests. 
                        <br/><br/>
                        <strong>Advancing the story</strong><br/>
                        The quest with the highest exp requirement will take always take the students to another 
                        city or town, which will mean the start of a new story arc where a new city map and quests 
                        will be shown.   
                        <br/><br/>
                        </p>
                        <img className="blog_article_image_section" src={elderport} alt="elderport"/>
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

export default FantasyWorld;


