import React from "react";
import "./Contact.css";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="form">
      <form>
        <div className="main">
          <div className="head">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask about anything you have in mind</p>
          </div>
          <div className="names">
            <div className="first-name">
              <label>First Name</label>
              <input
                className="input"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="last-name">
              <label>Last Name</label>
              <input
                className="input"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="email">
            <label id="email">email</label>
            <input className="input" placeholder="yourname@email.com" />
          </div>
          <div className="message">
            <label>Message</label>
            <textarea
              name="message"
              id="message"
              //   className="input"
              //   cols="30"
              //   rows="50"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
          </div>
          <div className="row">
            <input type="checkbox" name="" id="" />
            <label htmlFor="" id="checkbox-label">
              You agree to provide your data to Semilore who may contact you.
            </label>
          </div>
          <button id="btn__submit" className="row">
            Send Message
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
