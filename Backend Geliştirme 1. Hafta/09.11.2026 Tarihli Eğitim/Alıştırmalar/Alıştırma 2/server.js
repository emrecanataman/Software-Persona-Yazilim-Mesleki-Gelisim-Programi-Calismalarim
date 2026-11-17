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
  } else if (req.url === '/api/books') {
    res.writeHead(200);
    res.end(JSON.stringify([
      { id: 1, name: 'Mustafa Kemal Atatürk - Nutuk' },
      { id: 2, name: 'Sabahattin Ali - Kürk Mantolu Madonna' },
      { id: 3, name: 'Sabahattin Ali - Kuyucaklı Yusuf' },
      { id: 4, name: 'George Orwell - Hayvan Çiftliği' },
      { id: 5, name: 'George Orwell - 1984' },
      { id: 6, name: 'İlber Ortaylı - Bir Ömür Nasıl Yaşanır?' },
      { id: 7, name: 'Turgut Özakman - Şu Çılgın Türkler' },
      { id: 8, name: 'Reşat Nuri Güntekin - Çalıkuşu' },
        { id: 9, name: 'Refik Halid Karay - Memleket Hikayeleri' },
        { id: 10, name: 'Jack London - Beyaz Diş' }
    ]));
  } else if (req.url === '/api/books/1') {
    res.writeHead(200);
    res.end(JSON.stringify({ 
        id: 1, 
        name: 'Mustafa Kemal Atatürk - Nutuk'
    }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Sayfa bulunamadı' }));
  }
});

server.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});