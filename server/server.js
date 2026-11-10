const express = require("express");

// Create an Express application
const app = express();

// Define the port our backend will run on
const PORT = 3001;

// Test route to confirm the server is working
app.get("/", (req, res) => {
  res.send("Postcard backend is running!");
});

 // Test endpoint for receiving postcard submissions
app.post("/api/postcards", (req, res) => {
  console.log("A postcard submission was received!");

  res.status(200).json({
    message: "Postcard endpoint is working!"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
