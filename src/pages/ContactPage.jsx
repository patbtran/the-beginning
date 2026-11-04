import React, { useState } from "react";
import contactcard from '../assets/contactcard.jpg';

function ContactPage({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
  };

  return (
    <div className="h-screen bg-[#211d1e] text-white p-4 overflow-y-auto">

      <button // x button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl z-10"
      >
        ×
      </button>

      <h1>Contact me, I'd love to talk!</h1>

      <form onSubmit={handleSubmit}>

        <div className="relaitve w-full"> 

          <img
          src={contactcard}
          alt="Contact Card"
          className="w-full h-auto block"
          />

          <textarea
            name="message"
            placeholder="Your message"
            aria-label="Your message"
            value={formData.message}
            onChange={handleChange}
            className="absolute top-[32%] left-[7%] w-[40%] h-[52%] bg-transparent text-[#444] text-[10px] leading-relaxed resize-none outline-none"
          />

          <input
          type="email"
          name="email"
          placeholder="Your email"
          aria-label="Your email"
          value={formData.email}
          onChange={handleChange}
          className="absolute top-[61%] left-[65%] w-[27%] bg-transparent text-[#444] text-[10px] outline-none"
          />
        </div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Message:
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;