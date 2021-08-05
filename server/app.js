const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const app = express();
const port = 8080;

app.get('/images', cors({ origin: '*' }), (req, res) => {
  const { pageNo = 0, pageSize = 20, keyword = '' } = req.query;

  const hasMore = (pageNo + 1) * pageSize < data.length;
  const list = data
    .filter(({ name }) => name.includes(keyword))
    .slice(pageNo * pageSize, (pageNo + 1) * pageSize) || [];

  res.send({ list, hasMore })
});

app.listen(port, () => {
  console.log(`Server starts at http://localhost:${port}`);
});