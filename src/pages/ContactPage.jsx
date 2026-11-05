import React, { useState } from "react";
import contactcard from '../assets/contactpage.jpeg';

function ContactPage({ onClose }) {
  const [formData, setFormData] = useState({
    subject: "",
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
    <div className="h-screen bg-[#fcf9f0] text-[#555] overflow-y-auto relative">

      <button // x button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl z-10"
      >
        ×
      </button>

      <h1 className="text-3xl font-bold text-center mt-8">Contact me, I'd love to talk!</h1>

      <form onSubmit={handleSubmit}>

        <div className="relative w-full"> 

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
            className="absolute top-[20%] left-[7%] w-[40%] h-[69%] bg-transparent text-[#555] text-[12px] leading-[1.7] resize-none outline-none"
          />

          <input
          type="email"
          name="email"
          placeholder="Your email"
          aria-label="Your email"
          value={formData.email}
          onChange={handleChange}
          className="absolute top-[90%] left-[55%] w-[27%] bg-transparent text-[#555] text-[12px] outline-none"
          />

          <input
          type="text"
          name="subject"
          placeholder="Subject line"
          aria-label="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="absolute top-[80%] left-[54%] w-[28%] bg-transparent text-[#555] text-[12px] outline-none"
          />
        </div>
        
        <div className="flex justify-center mt-6 mb-8">
        <button type="submit"
        className="bg-[#a9cdea] text-[#333] font-bold px-8 py-3 rounded-lg hover:scale-105 transition duration-300 cursor pointer hover:bg-[#8bbbe0] hover:shadow-lg"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;