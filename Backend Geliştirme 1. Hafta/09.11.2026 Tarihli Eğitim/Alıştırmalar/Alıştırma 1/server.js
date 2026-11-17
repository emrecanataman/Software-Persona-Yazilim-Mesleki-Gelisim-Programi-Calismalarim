const http = require('http');
const port = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify({
            message: 'Merhaba! Bugün harika bir gün.'
        }));
        return;
    }

    res.writeHead(404, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end('Sayfa bulunamadı.');
});

server.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor`);
});