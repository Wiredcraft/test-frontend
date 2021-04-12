const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data.json');

// Enable CORS
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)

/**
 * Very simple api just for masonry test
 * */

app.get('/api/photos', (req, res) => {

  let { offset = 0, keyword } = req.query;

  offset = Number(offset);

  const limit = 10;

  const result = data.filter(e => e.name.includes(keyword));

  res.send({ photos: { rows: result.slice(offset, offset + limit), count: result.length, offset, limit } });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);