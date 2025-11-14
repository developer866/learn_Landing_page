import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import BookService from "./Pages/BookService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
function App() {
  // const [theme,setTheme] = useState(True)

  return (
    <main className="app">
      <Navbar />

      <div className="Floating-Socials">
        <a href="https://wa.me/2349033383479" target="_blank">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="whatsapp-icon"
            size="3x"
            style={{ color: "black" }}
          />
        </a>
        <FontAwesomeIcon
          icon={faInstagram}
          className="instagram-icon"
          size="3x"
          style={{ color: "black" }}
        />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/BookService" element={<BookService />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
