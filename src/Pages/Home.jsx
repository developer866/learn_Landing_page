import React from "react";
import "./layout.css";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import { Link } from "react-router-dom";
import BookService from "./BookService.jsx";
import Project from "./Project.jsx";
function Home() {
  return (
    <main>
      <section className="container">
        <section className="container-section">
          <section className="centered">
            <h1>Transforming Ideas into Stunning Digital Experiences</h1>
            <p>
              We are a creative website design agency helping brands stand out
              online. From sleek websites to powerful digital strategies — we
              craft designs that don’t just look good, but work perfectly.
            </p>
            <div className="home-buttons">
              <Link to="./BookService">
                <button className="btn-primary">Book Service</button>
              </Link>
              <Link to="./Project">
                <button className="btn-secondary">View Our Works</button>
              </Link>
            </div>
          </section>
          <section className="centered">
            <img
              src="./Images/artisan.jpg"
              alt="side image"
              className="home-img"
            />
          </section>
        </section>
      </section>
      <section className="about-section">
        <About />
      </section>
      <Services />
    </main>
  );
}

export default Home;
