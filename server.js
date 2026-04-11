const http = require('http');
const fs = require('fs');
const path = require('path');

const indexHtlFile = fs.readFileSync(path.join(__dirname, 'static', 'index.html'));
const scriptFile = fs.readFileSync(path.join(__dirname, 'static', 'script.js'));
const styleFile = fs.readFileSync(path.join(__dirname, 'static', 'style.css'));

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/': return res.end(indexHtlFile);
        case '/script.js': return res.end(scriptFile);