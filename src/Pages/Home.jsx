import React from "react";
import "./layout.css";

function Home() {
  return (
    <main>
      <section className="container">
        <section className="container-section">
          <section className="centered">
            <h1>Welcome To Divine Heritage Academy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              fugit distinctio optio consectetur sapiente facere! Nulla
              accusantium deserunt sed perferendis!
            </p>
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
      {/* About Section */}
      <section className="about">
        <div className="about-h1">
          <h1>About us</h1>
        </div>
        {/* Boxes */}
        <section className="about-boxes">
          <section className="about-text">
            <h1>1.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem itaque doloremque neque dolorem illo. Corrupti
              perspiciatis recusandae totam beatae voluptas!
            </p>
          </section>
          <section className="about-text-reverse">
            <h1>2.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem itaque doloremque neque dolorem illo. Corrupti
              perspiciatis recusandae totam beatae voluptas!
            </p>
          </section>
          <section className="about-text">
            <h1>3.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem itaque doloremque neque dolorem illo. Corrupti
              perspiciatis recusandae totam beatae voluptas!
            </p>
          </section>
        </section>
      </section>
      <section className="project">
        <div className="project-heading">
          <h1>Services</h1>
        </div>
        {/* Service box */}

        <div className="service-box">
          <div className="box">box 1</div>
          <div className="box">box 2</div>
          <div className="box">box3</div>
          <div className="box">box4</div>
        </div>
        {/* qualites */}
        <div className="qualities">
          <div className="">q1</div>
          <div className="">q2</div>
          <div className="">q3</div>
          <div className="">q4</div>
          <div className="">q5</div>
          <div className="">q6</div>
        </div>
      </section>
    </main>
  );
}

export default Home;
