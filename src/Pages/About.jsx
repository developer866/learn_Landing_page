import React from "react";
import "./about.css";

function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>About Us</h1>
          <p>
            We’re a creative agency driven by passion and purpose. Our team
            designs meaningful digital experiences that help brands stand out,
            connect, and grow.
          </p>
        </div>
        <div className="about-hero-img">
          <img src="./Images/agency_team.jpg" alt="Creative Team" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple — to bring bold ideas to life through creative
          design, strategy, and storytelling. We help businesses build strong
          visual identities and digital experiences that inspire trust and
          loyalty.
        </p>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="./Images/team1.jpg" alt="Creative Director" />
            <h3>Joseph Ayeni</h3>
            <p>Creative Director</p>
          </div>
          <div className="team-card">
            <img src="./Images/team2.jpg" alt="Lead Designer" />
            <h3>Opeyemi Smith</h3>
            <p>Lead Designer</p>
          </div>
          <div className="team-card">
            <img src="./Images/team3.jpg" alt="Project Manager" />
            <h3>Grace Ade</h3>
            <p>Project Manager</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-values">
        <h2>Why Choose Us</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>1. Strategic Thinking</h3>
            <p>
              Every design we create is backed by strategy and data to ensure it
              meets business goals and connects emotionally with audiences.
            </p>
          </div>
          <div className="value-card">
            <h3>2. Creative Excellence</h3>
            <p>
              We combine artistry and functionality to deliver visuals that look
              beautiful and work seamlessly.
            </p>
          </div>
          <div className="value-card">
            <h3>3. Collaborative Process</h3>
            <p>
              We partner closely with our clients, ensuring every project
              reflects their vision and values.
            </p>
          </div>
          <div className="value-card">
            <h3>4. Results That Matter</h3>
            <p>
              Our goal is not just aesthetics — we focus on impact, performance,
              and brand growth.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="about-cta">
        <h2>Let’s Build Something Beautiful</h2>
        <p>
          Ready to transform your brand with powerful design and strategy? Get
          in touch today and let’s make it happen.
        </p>
        <button className="about-btn">Contact Us</button>
      </section>
    </main>
  );
}

export default About;
