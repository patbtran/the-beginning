import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react"; 
import ExpandedProject from "../Components/Common/Projects/ExpandedProject";
import projectData from "../Components/Common/Projects/projectData";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import connect4Pi from "../assets/connect4Pi.jpg";
import DSi from "../assets/DSi.png";
import cyberOutreach from "../assets/cyberOutreach.jpeg";
import wellnessApp from "../assets/wellnessApp.jpeg";
import modding from "../assets/modding.png";
import stegApplication from "../assets/stegApplication.png";


function ProjectsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openProject = (project) => {
  setSelectedProject(project);
  setActiveImage(0);
  };

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

<h1 className="text-3xl md:text-6xl font-bold italic text-white text-center mt-40 mb-24">
  my collage of projects
</h1>



<div className="relative max-w-[1200px] mx-auto my-12 px-4">
  
<motion.div 
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
>

  {/* Project 1 */}
  
<motion.div
  variants={{
    hidden: { opacity: 0, x: -180 },
    visible: { opacity: 1, x: 0 }
  }}
  transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
  onClick={() => openProject(projectData.connectFour)}
>

  <div className="bg-[#302a2a] rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">

    <div className="h-40 rounded-xl mb-5 overflow-hidden">
  <img
    src={connect4Pi}
    alt="Connect Four project"
    className="w-full h-full object-cover"
  />
</div>

    <h2 className="text-xl font-bold text-white mb-2">
      Connect Four
    </h2>

    <p className="text-gray-300 text-sm mb-5">
      A Connect Four game built using Python, Raspberry Pi,
      and a Sense HAT LED matrix.
    </p>

    <div className="flex items-center gap-4">
  <a
    href="https://github.com/patbtran/connect4rasp400.git"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View Connect Four on GitHub"
    title="View on GitHub"
    onClick={(e) => e.stopPropagation()}
    className="text-[#c4b5f5] hover:text-white hover:scale-110 transition-all duration-300"
  >
    <FaGithub size={24} />
  </a>

  <a
    href="https://lnkd.in/p/e8CH6EK2"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View Connect Four on LinkedIn"
    title="View on LinkedIn"
    onClick={(e) => e.stopPropagation()}
    className="text-[#c4b5f5] hover:text-white hover:scale-110 transition-all duration-300"
  >
    <FaLinkedin size={24} />
  </a>
</div>

  </div>
  </motion.div>

  {/* Project 2 */}
<motion.div
  variants={{
    hidden: { opacity: 0, x: 180 },
    visible: { opacity: 1, x: 0 }
  }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
  onClick={() => openProject(projectData.steganography)}
  className="relative md:mt-32"
>

  <div className="bg-[#302a2a] rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">

    <div className="h-40 rounded-xl mb-5 overflow-hidden">
  <img
    src={stegApplication}
    alt="Image Steganography project"
    className="w-full h-full object-cover"
  />
</div>

    <h2 className="text-xl font-bold text-white mb-3">
      Image Steganography
    </h2>

    <p className="text-gray-300 text-sm mb-5">
      A Python application that combines encryption and
      steganography to conceal messages inside images.
    </p>

    <a
  href="https://github.com/patbtran/ImageSteganography2026.git"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View Image Steganography on GitHub"
  title="View on GitHub"
  onClick={(e) => e.stopPropagation()}
  className="inline-block text-[#c4b5f5] hover:text-white hover:scale-110 transition-all duration-300"
>
  <FaGithub size={24} />
</a>
  </div>
  </motion.div>

  {/* Project 3 */}
<motion.div
  variants={{
    hidden: { opacity: 0, y: 180 },
    visible: { opacity: 1, y: 0 }
  }}
  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
  onClick={() => openProject(projectData.cybersecurity)}
  className="relative md:-mt-20"
>


  <div className="bg-[#302a2a] rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">

    <div className="h-40 rounded-xl mb-5 overflow-hidden">
  <img
    src={cyberOutreach}
    alt="Cybersecurity Outreach project"
    className="w-full h-full object-cover"
  />
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
  aria-label="View Cybersecurity Outreach on LinkedIn"
  title="View on LinkedIn"
  onClick={(e) => e.stopPropagation()}
  className="inline-block text-[#c4b5f5] hover:text-white hover:scale-110 transition-all duration-300"
>
  <FaLinkedin size={24} />
</a>
  </div>
  </motion.div>

    {/* Project 4 */}
<motion.div
  variants={{
    hidden: { opacity: 0, y: 180 },
    visible: { opacity: 1, y: 0 }
  }}
  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
  onClick={() => openProject(projectData.fitness)}
  className="relative md:-mt-40"
>

  <div className="bg-[#302a2a] rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="h-40 rounded-xl mb-5 overflow-hidden">
  <img
    src={wellnessApp}
    alt="Wellness App project"
    className="w-full h-full object-cover"
  />
</div>

    <h2 className="text-xl font-bold text-white mb-3">
      AI Driven Fitness and Wellness Application
    </h2>

    <p className="text-gray-300 text-sm mb-5">
      Developed from my first Hackathon event as a participant. Fitness app featuring AI-powered workout and meal planning,
      with social features designed to promote community engagement and motivation.
    </p>

    <div className="flex items-center gap-4">
  <a
    href="https://github.com/Mksurfing/tardigrades.git"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View AI Fitness Application on GitHub"
    title="View on GitHub"
    onClick={(e) => e.stopPropagation()}
    className="text-[#c4b5f5] hover:text-white hover:scale-110 transition-all duration-300"
  >
    <FaGithub size={24} />
  </a>

  <a
    href="https://lnkd.in/p/e_CMbcFh"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View AI Fitness Application on LinkedIn"
    title="View on LinkedIn"
    onClick={(e) => e.stopPropagation()}
    className="text-[#c4b5f5] hover:text-white hover:scale-110 transition-all duration-300"
  >
    <FaLinkedin size={24} />
  </a>
</div>

  </div>
</motion.div>
{/* Project 5 */}
<motion.div
  variants={{
    hidden: { opacity: 0, x: -180 },
    visible: { opacity: 1, x: 0 }
  }}
  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
  className="relative md:mt-1"
  onClick={() => openProject(projectData.modding)}
>
  <div className="bg-[#302a2a] rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">

    <div className="h-40 rounded-xl mb-5 overflow-hidden">
  <img
    src={modding}
    alt="Hardware Modding project"
    className="w-full h-full object-cover"
  />
</div>

    <h2 className="text-xl font-bold text-white mb-3">
      Hardware Modding
    </h2>

    <p className="text-gray-300 text-sm mb-5">
      Exploring hardware customization through hands-on projects
      involving Nintendo DSi systems, Kindles, and Arduino devices.
      Learning about custom firmware, software modifications,
      and hardware functionality.
    </p>

  </div>
  
</motion.div>

</motion.div>

 
</div>
<AnimatePresence>
  {selectedProject && (
    <ExpandedProject
      project={selectedProject}
      activeImage={activeImage}
      setActiveImage={setActiveImage}
      onClose={() => setSelectedProject(null)}
    />
  )}
</AnimatePresence>
</div>
  );
}

export default ProjectsPage;