import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClicks = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main>
      <section>
        <div className="navbar">
          <h1 className="logo">A-STACK</h1>

          {/* navigation */}
          <section>
            <ul className="navbar-links">
              <Link to="/">
                <p>HOME</p>
              </Link>
              <Link to="/About">
                <p>ABOUT</p>
              </Link>
              <Link to="/Projects">
                <p>ABOUT</p>
              </Link>
              <Link to="/Services">
                <p>SERVICES</p>
              </Link>
              <Link to="/Contact">
                <p>CONTACT US</p>
              </Link>
            </ul>
          </section>

          {/* mobile menu */}
          <section className="mobile-menu">
            {/* hamburger icon */}
            <img
              src="/Images/bars-solid-full.svg"
              className="menu-icon"
              alt="menu"
              onClick={handleClicks}
            />

            {showMenu && (
              <div className="menu-popup">
                <div className="menu-close">
                  <img
                    src="/Images/xmark-solid-full.svg"
                    className="close-icon"
                    alt="close"
                    onClick={handleClicks}
                  />
                </div>
                <ul className="menu-links">
                  <Link to="/" onClick={handleClicks}>
                    <h4>HOME</h4>
                  </Link>
                  <Link to="/About" onClick={handleClicks}>
                    <h4>ABOUT</h4>
                  </Link>
                  <Link to="/Services" onClick={handleClicks}>
                    <h4>SERVICES</h4>
                  </Link>
                  <Link to="/Contact" onClick={handleClicks}>
                    <h4>CONTACT US</h4>
                  </Link>
                </ul>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}

export default Navbar;
