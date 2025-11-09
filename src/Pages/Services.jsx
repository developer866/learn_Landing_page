import React from "react";
import "./Services.css";
import BookService from "./BookService";

function Services() {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <p className="intro">
        We provide creative and result-driven web solutions that help your brand
        stand out online.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Website Design & Development</h3>
          <p>
            Custom websites that are visually stunning, responsive, and built to
            convert visitors into loyal customers.
          </p>
        </div>

        <div className="service-card">
          <h3>Brand Identity & Graphics</h3>
          <p>
            From logo design to brand color strategy, we help you craft a strong
            and memorable brand image.
          </p>
        </div>

        <div className="service-card">
          <h3>E-Commerce Solutions</h3>
          <p>
            Build secure and scalable online stores designed to deliver smooth
            shopping experiences.
          </p>
        </div>

        <div className="service-card">
          <h3>SEO & Performance</h3>
          <p>
            Optimize your site’s visibility on search engines and ensure faster
            load times for better user experience.
          </p>
        </div>

        <div className="service-card">
          <h3>Website Maintenance</h3>
          <p>
            Keep your website running smoothly with regular updates, backups,
            and security checks.
          </p>
        </div>

        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>
            Beautiful and intuitive interfaces that enhance user satisfaction
            and drive engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
