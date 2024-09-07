const dotenv = require('dotenv');
dotenv.config();
const http = require('http');

const port = process.env.PORT || 5000;
const host = process.env.HOST || localhost;

const server = http.createServer((req, res) => {
    const helloWorld = process.env.HELLOWORLD
    
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${helloWorld} by .env</h1>
        <p><strong>${helloWorld}</strong> by .env</p>
    </body>
    </html>`)
})

server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
    
})
