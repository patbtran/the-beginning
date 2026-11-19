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
