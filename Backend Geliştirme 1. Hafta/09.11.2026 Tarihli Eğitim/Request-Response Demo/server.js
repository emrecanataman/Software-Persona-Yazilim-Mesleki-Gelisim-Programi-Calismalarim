const http = require('http');
const port = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
  console.log('İstek geldi:', req.method, req.url);

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    message: 'Merhaba Dunya!',
    success: true
  }));
});

server.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});