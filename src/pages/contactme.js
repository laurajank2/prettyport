import React from "react";
import emailjs from "emailjs-com";
import "./../styles/contact.css";

const ContactMe = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qrpghkh",
        "template_wxab6mf",
        e.target,
        "user_kmK9IfaOprdkk54lRTNeG"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  }

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="contactheader"
      >
        Email Me
      </h1>
      <form className="contactbody" onSubmit={sendEmail}>
        <label className="elementname">Name</label>
        <br />
        <input className="contactform" type="text" name="name"></input>
        <br />
        <label className="elementname">Email</label>
        <br />
        <input className="contactform" type="email" name="user_email"></input>
        <br />
        <label className="elementname">Message</label>
        <br />
        <textarea className="contactform" name="message" rows="10"></textarea>
        <br />
        <button className="btncu" type="submit" value="send">
          Send{" "}
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
