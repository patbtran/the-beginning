import React, { useState } from "react";

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
    <div className="h-screen bg-[#211d1e] text-white p-8">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl"
      >
        ×
      </button>
      <h1>Contact me, I'd love to talk!</h1>

      <form onSubmit={handleSubmit}>
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