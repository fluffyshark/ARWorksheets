import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import SimpleForm from './SimpleForm';


class Email_section extends React.Component {


    


    render() {
       
        function changeText() {
            if (window.innerWidth <= 490) {
                console.log("490")

                return (
                    <p className="the_list">
                        - Love their mathbook.<br/>
                        - Form friendly relationships with their classmates.<br/>
                        - Follow the rules you create for them.<br/>
                        - Learn to adjust their voice in the classroom.<br/>
                        - Friendly and inclusive when playing (and to love playing).<br/>
                        - Master the multiplication table (really master it).</p>
                );
            } else {
                return (
                    <p className="the_list">
                        - Love their mathbook.<br/>
                        - Gain genuine interest in creating friendly relationships with their classmates.<br/>
                        - Follow the rules you create for them.<br/>
                        - Learn to adjust their voice in the classroom.<br/>
                        - Friendly and inclusive when playing (How to make them love playing together).<br/>
                        - Master the multiplication table (really master it).</p>
                );
            }
        } // END OF FUNCTION


        // a basic form

        
        return (
            <div className="email_section">

                <div className="email_section_background_for_smaller_screens"></div>
                    <div className="email_section_background_for_larger_screens">
                        <div className="email_section_white_box">
                            <p className="project_motivating_learning">Project Motivating Learning</p>
                            <div className="email_section__title">
                                <p>Giving teachers the ability to <br/>add a layer of excitement to their subjects!</p>
                            </div>
                            <p className="the_methods_text">Want to know what methods we discovered for making students:</p>
                            {changeText()}
                            <div className="email_field_container">
                              

                                <MailchimpSubscribe url={'https://motivatinglearning.us17.list-manage.com/subscribe/post?u=fc57c2d42794ebe99bc438e70&amp;id=7d5334c656'} 
                                
                                render={({subscribe, status, message}) => <SimpleForm
                                    status={status}
                                    message={message}
                                    className="email_field_container__button"
                                    style={{}}
                                    onSubmitted={formData => subscribe(formData)}
                                    />
                                }/>
                                
                                
                           
                            </div>
                        </div>
                    </div>
                
            </div>
        );
    }
}

export default Email_section;

