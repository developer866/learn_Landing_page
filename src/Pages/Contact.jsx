import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Fill out the form below and we’ll get back to you shortly.</p>

      <form className="contact-form">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message..."></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
