import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-section">
        {/* Brand Info */}
        <div className="footer-section-heading">
          <h1>A-Stack</h1>
          <p>
            We create meaningful brand experiences through design, strategy, and
            innovation — helping businesses stand out and connect with their
            audience.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section-socials">
          <h2>Get In Touch</h2>
          <div className="footer-contact-details">
            {/* Phone */}
            <div className="footer-contact">
              <div>
                <img src="./phone.svg" alt="phone icon" />
              </div>
              <div>
                <p>+234 800 000 0000</p>
                <p>+234 810 000 0000</p>
              </div>
            </div>

            {/* Email */}
            <div className="footer-contact">
              <div>
                <img src="./email.svg" alt="email icon" />
              </div>
              <div>
                <p>contact@divinedesign.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="footer-contact">
              <div>
                <img src="./location.svg" alt="location" />
              </div>
              <div>
                <p>5 Unity Estate, Ojo Isashi, Lagos State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="footer-section-socials">
          <h2>Follow Us</h2>
          <div className="social">
            <div className="social-box">
              <img src="./facebook.svg" alt="Facebook" />
            </div>
            <div className="social-box">
              <img src="./instagram.svg" alt="Instagram" />
            </div>
            <div className="social-box">
              <img src="./twitter.svg" alt="Twitter" />
            </div>
          </div>
        </div>
      </section>

      <div className="footer-right">
        <p>© 2019 - 2025 Divine Design Agency | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
