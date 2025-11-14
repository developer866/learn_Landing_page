import React, { useState } from "react";
import "./BookService.css";

function BookService() {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit form
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const dataToSend = new FormData();
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("service", formData.service);
    dataToSend.append("message", formData.message);

    // your access key
    dataToSend.append("access_key", "8215fe14-8278-447c-97a8-681e851d3b32");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: dataToSend
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormData({
        name: "",
        email: "",
        service: "",
        message: ""
      });
    } else {
      setResult("Error submitting form");
    }
  };

  return (
    <main className="book-page">
      <h1>Book a Service</h1>
      <p>Fill out the form below and we will get back to you promptly.</p>

      <form className="book-form" onSubmit={onSubmit}>
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

      {result && <p className="form-result">{result}</p>}
    </main>
  );
}

export default BookService;
