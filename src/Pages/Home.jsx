import "./layout.css";
import Services from "./Services.jsx";
import About from "./About.jsx";
import { Link } from "react-router-dom";
import { annotate } from "rough-notation";
import { useEffect, useRef } from "react";

function Home() {
  const boxref = useRef();
  const textRef = useRef();
  useEffect(() => {
    annotate(textRef.current, {
      type: "highlight",
      padding: 2,
      color: "#10B981",
      strokeWidth: 3,
      animationDuration: 1500,
      iterations: 1,
      multiline: true,
    }).show();
  }, []);

  useEffect(() => {
    annotate(boxref.current, {
      type: "box",
      color: "#F59E0B",
      strokeWidth: 5,
      padding: 10,
      animationDuration: 3000, // 3 seconds (slow)
      iterations: 2,
      multiline: true,
    }).show();
  }, []);
  return (
    <main>
      <section className="container">
        <section className="container-section">
          <section className="centered">
            <h1>
              <span ref={textRef}>
                Transforming Ideas into Stunning Digital Experiences
              </span>
            </h1>
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
          <section className="centered" ref={boxref}>
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
