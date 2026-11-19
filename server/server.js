const express = require("express");
const multer = require("multer");


// Create an Express application
const app = express();

// Define the port the backend will run on
const PORT = 3001;

// Configure Multer to handle uploaded drawings
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024, // Maximum file size: 1 MB
    files: 1 // Only allow one uploaded file
  }
});

// Test route to confirm the server is working
app.get("/", (req, res) => {
  res.send("Postcard backend is running!");
});


 // Endpoint for receiving postcard submissions
app.post("/api/postcards", upload.single("drawing"), (req, res) => {
  // Retrieve the postcard's text fields
  const { subject, email, message } = req.body;

  // Retrieve the uploaded drawing
  const drawing = req.file;


  // Validate required fields and data types
  if (
    typeof subject !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !subject.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return res.status(400).json({
      message: "Subject, email, and message must contain valid text."
    });
  }

  // character limits
  if (
    subject.length > 59 ||
    email.length > 53 ||
    message.length > 280
  ) {
    return res.status(400).json({
      message: "One or more fields exceed the character limit."
    });
  }


  // Validate email address format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return res.status(400).json({
      message: "Please enter a valid email address."
    });
  }

  // Check that a drawing file was uploaded
  if (!drawing) {
    return res.status(400).json({
      message: "A drawing file is required."
    });
  }

  // Check the uploaded file's PNG signature
  const pngSignature = Buffer.from([
    137, 80, 78, 71, 13, 10, 26, 10
  ]);

  if (
    drawing.mimetype !== "image/png" ||
    drawing.buffer.length < 8 ||
    !drawing.buffer.subarray(0, 8).equals(pngSignature)
  ) {
    return res.status(400).json({
      message: "The drawing must be a PNG image."
    });
  }


  // Temporarily log the received data
  console.log("Subject:", subject);
  console.log("Email:", email);
  console.log("Message:", message);
  console.log("Drawing:", drawing?.originalname);

  res.status(200).json({
    message: "Postcard received successfully!"
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
