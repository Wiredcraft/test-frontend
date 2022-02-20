const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
// const PORT = 8009;
const PORT = process.env.PORT || 8009;
const SUCCESSFUL_CODE = 200;

app.use(cors());
app.listen(PORT, () => {
  console.log(`server started! port is ${PORT}`);
});

app.get('/api/images', (req, res) => {
  const json = fs.readFileSync(path.join(__dirname, 'data.json'));
  let result = JSON.parse(json);
  res.header('Content-Type', 'application/json');
  res.json({
    data: result,
    code: SUCCESSFUL_CODE,
  });
});
