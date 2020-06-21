import React from "react";

class Email_section extends React.Component {
    render() {
        return (
            <div className="email_section">
                <div className="email_section__title">
                    <p>Where should we send the worksheets?</p>
                </div>
                <div className="email_field_container">
                    <input className="email_field_container__field" type="email" id="email" name="email" placeholder="Enter your email address" />
                    <div className="email_field_container__button">Send</div>
                </div>
            </div>
        );
    }
}

export default Email_section;