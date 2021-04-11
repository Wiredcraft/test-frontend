const express = require('express')
const app = express()
const port = 3000

const pictures = require('./data')
const CHUNK_SIZE = 20

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/data', (req, res) => {
  const chunkNum = req.query?.chunk || 0
  const start = chunkNum * CHUNK_SIZE
  const end = chunkNum * CHUNK_SIZE + CHUNK_SIZE
  res.send(pictures.slice(start, end))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})