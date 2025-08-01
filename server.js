const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Default route to index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
