const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file01.txt');
const zibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file01.txt');

const piping = readStream.pipe(zibStream).pipe(writeStream);

piping.on('finish', ()=>{
    console.log('on');
});

const http = require('http');
const server = http.createServer((req, res)=>{
    fs.readFile('file.txt', (err, data)=>{
        res.end(data);
    })
})