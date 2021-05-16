// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const path = require('path'); 
const fs = require('fs');

app.use(cors());
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server starts on http://localhost:${PORT}`);
});

// http://localhost:8000/api/pictures?p=4
app.get("/api/pictures", (req, res) => {
  const json = fs.readFileSync(path.join(__dirname, 'data.json'));
  let result = JSON.parse(json);
  let search = req.query.search;
  if(search){
    result = result.filter(item => {
      return item.name.toString() === search.toString()
    });
  }
  const resultCount = Object.keys(result).length;
  const pageCount = Math.ceil(resultCount / 10);
  let page = parseInt(req.query.page);
  if (!page) { page = 1;}
  if (page > pageCount) {
    page = pageCount
  }
  res.header("Content-Type",'application/json');
  res.json({
    "page": page,
    "pageCount": pageCount,
    "result": result.slice(page * 10 - 10, page * 10)
  });
});