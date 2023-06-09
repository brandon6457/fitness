import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const refForm = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_qnwvzgg",
          "template_i2r3e5a",
          refForm.current,
          "BcA3OzFEzoHu_wHlI"
        )
        .then(
          () => {
            alert("Message sent successfully!");
            window.location.reload(false);
          },
          () => {
            alert("Message failed to send.");
          }
        );
    };
  
    return (
      <div className="contact-container">
        <div>
        <video loop autoPlay muted id="bg-video">
          <source src={require("../../videos/Boxing.mp4")} type="video/mp4" />
        </video>
      </div>
        <h1 className="contact-heading">Contact Page</h1>
        <div className="contact-content">
          <p className="contact-text">
          We'd love to hear from you! Whether you have questions, suggestions, or
        just want to say hello, feel free to reach out. Our team is passionate
        about fitness and committed to providing you with the best experience on
        our social media app. Your feedback is important to us as we strive to
        continuously improve and make our platform even better. So go ahead,
        drop us a message and let's connect!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-row">
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="form-row">
                <input
                  type="submit"
                  className="submit-button"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }