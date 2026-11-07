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
          My Live GitHub Contributions
        </h2>

        <img
          src="https://raw.githubusercontent.com/patbtran/the-beginning/output/github-snake.svg"
          alt="Animated GitHub contribution snake"
          className="w-full max-w-4xl"
        />
      </div>


      <h1>the collage of projects</h1>

      
      
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 my-10">

  {/* Project 1 */}
  <div className="bg-[#302a2a] rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="h-40 bg-[#484040] rounded-xl mb-5 flex items-center justify-center">
      <span className="text-gray-300">Project Image</span>
    </div>

    <h2 className="text-xl font-bold text-white mb-3">
      Connect Four
    </h2>

    <p className="text-gray-300 text-sm mb-5">
      A Connect Four game built using Python, Raspberry Pi,
      and a Sense HAT LED matrix.
    </p>

    <a
      href="https://github.com/patbtran/connect4rasp400.git"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#c4b5f5] hover:underline"
    >
      View on GitHub
    </a>
  </div>

  {/* Project 2 */}
  <div className="bg-[#302a2a] rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="h-40 bg-[#484040] rounded-xl mb-5 flex items-center justify-center">
      <span className="text-gray-300">Project Image</span>
    </div>

    <h2 className="text-xl font-bold text-white mb-3">
      Image Steganography
    </h2>

    <p className="text-gray-300 text-sm mb-5">
      A Python application that combines encryption and
      steganography to conceal messages inside images.
    </p>

    <a
      href="https://www.linkedin.com/in/patriciabtra/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#c4b5f5] hover:underline"
    >
      View on LinkedIn
    </a>
  </div>

  {/* Project 3 */}
  <div className="bg-[#302a2a] rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="h-40 bg-[#484040] rounded-xl mb-5 flex items-center justify-center">
      <span className="text-gray-300">Project Image</span>
    </div>

    <h2 className="text-xl font-bold text-white mb-3">
      Cybersecurity Education Outreach Project
    </h2>

    <p className="text-gray-300 text-sm mb-5">
      Delivered interactive cybersecurity lessons to middle school students, using educational games to 
      teach phishing awareness and online safety.
    </p>

    <a
      href="https://lnkd.in/p/eq8vxUwS"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#c4b5f5] hover:underline"
    >
      View on Linkedin
    </a>
  </div>

    {/* Project 4 */}
  <div className="bg-[#302a2a] rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="h-40 bg-[#484040] rounded-xl mb-5 flex items-center justify-center">
      <span className="text-gray-300">Project Image</span>
    </div>

    <h2 className="text-xl font-bold text-white mb-3">
      AI Driven Fitness and Wellness Application
    </h2>

    <p className="text-gray-300 text-sm mb-5">
      Developed from my first Hackathon event as a participant. Fitness app featuring AI-powered workout and meal planning,
      with social features designed to promote community engagement and motivation.
    </p>

    <a
      href="https://github.com/Mksurfing/tardigrades.git"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#c4b5f5] hover:underline"
    >
      View on Github
    </a>
    <br></br>
    <a
      href="https://lnkd.in/p/e_CMbcFh"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#c4b5f5] hover:underline"
    >
      View on Linkedin
    </a>

  </div>

</div>
    </div>
  );
}

export default ProjectsPage;