import app from '../app';
import http from 'http';
const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
server.on('error', (err) => {
  console.log(err);
});
server.on('listening', () => {
  console.log(`listening on http://localhost:${port}`)
});
