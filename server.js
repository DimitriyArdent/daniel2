const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello, world!');
    res.end();
});

server.listen(80, () => {
    console.log('Server is listening on port 80');
});