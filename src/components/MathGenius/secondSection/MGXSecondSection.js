import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const MGXSecondSection = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (
        <div className="MGXSecondSection">

                <div className="MGXSecondSection-textHolder">
                    <p>I gathered all multiplication questions up to the 10th row.</p>
                </div>
                

               <div className="MGXNumbersBackground">
                   <p>1 x 1, 1 x 2, 1 x 3, 1 x 4, 1 x 5, 1 x 6, 1 x 7, 1 x 8, 1 x 9, 1 x 10</p>
                   <p>2 x 1, 2 x 2, 2 x 3, 2 x 4, 2 x 5, 2 x 6, 2 x 7, 2 x 8, 2 x 9, 2 x 10</p>
                   <p>3 x 1, 3 x 2, 3 x 3, 3 x 4, 3 x 5, 3 x 6, 3 x 7, 3 x 8, 3 x 9, 3 x 10</p>
                   <p>4 x 1, 4 x 2, 4 x 3, 4 x 4, 4 x 5, 4 x 6, 4 x 7, 4 x 8, 4 x 9, 4 x 10</p>
                   <p>5 x 1, 5 x 2, 5 x 3, 5 x 4, 5 x 5, 5 x 6, 5 x 7, 5 x 8, 5 x 9, 5 x 10</p>
                   <p>1 x 6, 6 x 2, 6 x 3, 6 x 4, 6 x 5, 6 x 6, 6 x 7, 6 x 8, 6 x 9, 6 x 10</p>
                   <p>7 x 1, 7 x 2, 7 x 3, 7 x 4, 7 x 5, 7 x 6, 7 x 7, 7 x 8, 7 x 9, 7 x 10</p>
                   <p>8 x 1, 8 x 2, 8 x 3, 8 x 4, 8 x 5, 8 x 6, 8 x 7, 8 x 8, 8 x 9, 8 x 10</p>
                   <p>9 x 1, 9 x 2, 9 x 3, 9 x 4, 9 x 5, 9 x 6, 9 x 7, 9 x 8, 9 x 9, 9 x 10</p>
                   <p>10 x 1, 10 x 2, 10 x 3, 10 x 4, 10 x 5, 10 x 6, 10 x 7, 10 x 8, 10</p>
               </div>
                
               
            </div>
    );
}


export default MGXSecondSection;




