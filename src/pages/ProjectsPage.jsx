import React, { useState } from "react";

function ProjectsPage() {
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



    <div className="project-box">

      
    <div className="w-full flex flex-col items-center my-10 px-6 py-8 rounded-2xl bg-[#494341]">
        <h2 className="text-2xl font-semibold text-white mb-6">
          My GitHub Contributions
        </h2>

        <img
          src="https://raw.githubusercontent.com/patbtran/the-beginning/output/github-snake.svg"
          alt="Animated GitHub contribution snake"
          className="w-full max-w-4xl"
        />
      </div>


      <h1>my collage of projects</h1>

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

export default ProjectsPage;