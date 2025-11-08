import React, { useState } from "react";
import "./BookService.css";

function BookService() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your service request has been submitted.`);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <main className="book-page">
      <h1>Book a Service</h1>
      <p>Fill out the form below and we will get back to you promptly.</p>

      <form className="book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a Service</option>
          <option value="Branding">Branding</option>
          <option value="Web Design">Web Design</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default BookService;
