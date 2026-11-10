import React, { useState, useRef } from "react";
import contactcard from '../assets/contactpage1.jpeg';
import DrawingCanvas from "../Components/drawing/DrawingCanvas";

function ContactPage({ onClose }) {

  // Reference to the drawing canvas component
  const drawingRef = useRef(null);

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

  
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevents page refresh

  // Retrieve the completed drawing as a PNG
  const drawingBlob = await drawingRef.current.getDrawingBlob();

  // Temporarily display the submission in the console
  console.log("Subject:", formData.subject);
  console.log("Email:", formData.email);
  console.log("Message:", formData.message);
  console.log("Drawing:", drawingBlob);
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
            maxLength={280}
            className="absolute top-[20%] left-[7%] w-[40%] h-[74%] bg-transparent text-[#555] text-[20px] leading-[1.4] resize-none outline-none"
          />

          <textarea
          name="email"
          placeholder="Your email"
          aria-label="Your email"
          value={formData.email}
          onChange={handleChange}
          maxLength={53}
          className="absolute top-[84.5%] left-[54%] w-[38%] bg-transparent text-[#555] text-[13px] leading-[2cqw] resize-none outline-none overflow-y-auto"
          />

          <textarea
          name="subject"
          placeholder="Subject line"
          aria-label="Subject"
          value={formData.subject}
          onChange={handleChange}
          maxLength={59}
          className="absolute top-[64%] left-[54%] w-[38%] h-[15%] bg-transparent text-[#555] text-[20px] leading-[2.2cqw] resize-none outline-none overflow-y-auto"
          />

          <p className="absolute top-[21%] left-[49%] w-[38%] text-center text-[#555] text-[16px] font-medium">
            leave a drawing :D
            </p>
          {/* Drawing area */}
          <div className="absolute top-[25%] left-[55%] w-[38%] h-[34%]">
            <DrawingCanvas ref={drawingRef}/>
          </div>

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