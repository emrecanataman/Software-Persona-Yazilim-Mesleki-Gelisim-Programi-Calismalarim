const http = require('http');
const port = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({ page: 'Ana Sayfa' }));
  } else if (req.url === '/about') {
    res.writeHead(200);
    res.end(JSON.stringify({ page: 'Hakkımızda' }));
  } else if (req.url === '/users') {
    res.writeHead(200);
    res.end(JSON.stringify([
      { id: 1, name: 'Ahmet' },
      { id: 2, name: 'Mehmet' }
    ]));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Sayfa bulunamadı' }));
  }
});

server.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});