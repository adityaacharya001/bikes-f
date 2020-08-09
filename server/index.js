const express = require('express');
const path = require('path');
const proxy = require("express-http-proxy");

const port = '80';
const serviceHost = 'http://0.0.0.0:1337';
const buildPath = '../build/';
const hostedAt = '0.0.0.0';

const app = express();

app.all('/pxhost/*', proxy(serviceHost, {
    proxyReqPathResolver: req => req.url.substr(7),
}));

app.use(express.static(path.join(__dirname, buildPath)));

app.all('/user', (req, res) => {
    console.log("url", req.url);
    res.sendFile(path.join(__dirname, buildPath, 'index.html'));
});

app.all('/*', proxy(serviceHost));

require('http')
    .createServer(app)
    .listen(port, () => console.log(`running at http://${hostedAt}:${port}`));