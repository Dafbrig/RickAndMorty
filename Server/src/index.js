const http = require('http');
const getCharById = require('./controllers/getCharById');

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // CORS

  if (req.url.includes('rickandmorty/character')) {
    const id = req.url.split('/').pop();
    getCharById(res, id);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
