import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp,faFacebook,faInstagram,faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot} from "@fortawesome/free-solid-svg-icons";

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
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#a0430a" }}
                  size="2x"
                />
              </div>
              <div>
                <p>+234 800 000 0000</p>
                <p>+234 810 000 0000</p>
              </div>
            </div>

            {/* Email */}
            <div className="footer-contact">
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#a0430a" }}
                  size="2x"
                />
              </div>
              <div>
                <p>contact@divinedesign.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="footer-contact">
              <div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#a0430a" }}
                  size="2x"
                />
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
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#a0430a" }}
                  size="2x"
                />
            </div>
            <div className="social-box">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#a0430a" }}
                  size="2x"
                />
            </div>
            <div className="social-box">
               <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#a0430a" }}
                  size="2x"
                />
            </div>
          </div>
        </div>
      </section>

      <div className="footer-right">
        <p>© 2019 - 2025  <b> <em>A-Stack Design Agency </em></b>| All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
