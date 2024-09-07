const dotenv = require('dotenv');
dotenv.config();
const http = require('http');

const port = process.env.PORT || 5000;
const host = process.env.HOST || localhost;

const randomQuote = () =>{
    const arrQuotes = require('./quotes.js');

    let randomIndex = Math.floor(Math.random() * Number(arrQuotes.length));

   return arrQuotes[randomIndex].quote;   
};

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
        <h1>${randomQuote()}</h1>
        <h2><strong>${helloWorld}</strong> by .env</h2>
    </body>
    </html>`)
})

server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
    
})
