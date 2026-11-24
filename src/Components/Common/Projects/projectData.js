//stores info for each project. titles, pictures, descriptions, and links

import connect4Pi from "../../../assets/connect4Pi.jpg";
import aboutme4 from "../../../assets/aboutme4.jpg";

import stegApplication from "../../../assets/stegApplication.png";
import stegPt2 from "../../../assets/stegPt2.png";
import stegPt3 from "../../../assets/stegPt3.png";

import cyberOutreach from "../../../assets/cyberOutreach.jpeg";

import wellnessApp from "../../../assets/wellnessApp.jpeg";
import wellnessP2 from "../../../assets/wellnessP2.png";
import wellnessP3 from "../../../assets/wellnessP3.png";
import wellnessP4 from "../../../assets/wellnessP4.png";

import arduino from "../../../assets/arduino.jpeg";
import dsi from "../../../assets/DSi.png";
import aboutme3 from "../../../assets/aboutme3.jpeg";


const projectData = {
  connectFour: {
    title: "Connect Four",

    description:
      "A Connect Four game built using Python, Raspberry Pi, and a Sense HAT LED matrix. This was my first project working with physical hardware and programming. I learned how to use the Sense HAT library to control the LED matrix and read input from the joystick. I also learned how to use Python's built-in libraries to create a simple game loop and handle user input. Feel free to read more about it on my LinkedIn!",

    images: [
      connect4Pi,
      aboutme4
    ],

    links: [
      {
        label: "GitHub",
        url: "https://github.com/patbtran/connect4rasp400.git",
      },
      {
        label: "LinkedIn",
        url: "https://lnkd.in/p/e8CH6EK2",
      },
    ],

  },

  steganography: {
    title: "Image Steganography",
    description:
      `I worked on a Python-based image steganography application that combines AES encryption with Least Significant Bit (LSB) steganography. The application encrypts
      a user's message and embeds that message into a PNG image. This is done by modifying the least significant bits of the image's RGB color channels. This application also allows 
      users to reverse the process to extract and decrypt the hidden message. `,
    images: [stegApplication,
        stegPt2,
        stegPt3
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/patbtran/ImageSteganography2026.git",
      },
    ],
  },

  cybersecurity: {
    title: "Cybersecurity Education Outreach Project",
    description:
      `Delivered interactive cybersecurity lessons to middle school students, using educational games to teach phishing awareness and online safety.
      For this project, I was the meeting point of communication between my professors, middle school teacher, and groupmates.
      We outsourced a method of teaching the students about cybersecurity in a fun and interactive way. 
      With the help of my professor, I was able to reach out to another professor who created a phishing awareness game that the students played to learn about phishing attacks and how to avoid them.
      After students completed their demo of the game, we quizzed and tracked what the students learned and what their critique on the game were.`,
    images: [cyberOutreach
    ],
    links: [
      {
        label: "LinkedIn",
        url: "https://lnkd.in/p/eq8vxUwS",
      },
    ],
  },

  fitness: {
    title: "AI Driven Fitness and Wellness Application",
    description:
      `Developed during my first hackathon. A fitness application featuring AI-powered workout and meal planning, with social features designed to promote community engagement and motivation.`,
    images: [wellnessApp,
        wellnessP2,
        wellnessP3,
        wellnessP4
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Mksurfing/tardigrades.git",
      },
      {
        label: "LinkedIn",
        url: "https://lnkd.in/p/e_CMbcFh",
      },
    ],
  },

  modding: {
    title: "Device Modding & Customization",
    description:
      `My interest in modding began when I rediscovered my childhood consoles and realized I no longer had access to some of the media I once enjoyed. 
      This sparked my curiosity about digital ownership, preservation, and having greater control over the devices and content I've purchased. 
      What started with installing custom firmware on Nintendo DSi systems and Kindles eventually grew into an interest in physical hardware. More recently, I experimented with 
      Arduino to create a touchscreen Spotify controller that allows me to play, pause, and skip songs. 
      These experiences have encouraged me to explore how technology works and discover new ways to customize it beyond its original functionality.`,
    images: [arduino,
        dsi,
        aboutme3
    ],
    links: [],
  },
};

export default projectData;

