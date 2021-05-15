// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const path = require('path'); 

app.use(cors());
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server starts on http://localhost:${PORT}`);
});

app.get("/api/pictures", (req, res) => {
  res.header("Content-Type",'application/json');
  res.sendFile(path.join(__dirname, 'data.json'));
});