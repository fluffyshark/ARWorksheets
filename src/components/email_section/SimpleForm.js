import React from 'react';

const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
    let input;
    const submit = () =>
      input &&
      input.value.indexOf("@") > -1 &&
      onSubmitted({
        EMAIL: input.value
      });

      
  
    return (
      <div className={className} style={style}>
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <input
          ref={node => (input = node)}
          type="email"
          placeholder="Enter your email address"
          className="email_field_container__field"
        />
        <button className="email_field_container__button" onClick={submit}>Send</button>
      </div>
    );
  };
  
  export default SimpleForm;

  