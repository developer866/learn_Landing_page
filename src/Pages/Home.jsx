import React from "react";
import "./layout.css";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
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
              <button className="btn-primary">Book Service</button>
              <button className="btn-secondary">View Our Works</button>
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
      <About />
      <Services />

    </main>
  );
}

export default Home;
