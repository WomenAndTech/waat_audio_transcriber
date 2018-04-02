let restify = require('restify');
let server = restify.createServer();
const cognitiveServiceAppID = process.env.COGNITIVESERVICEAPPID;
const cognitiveServiceSecret= process.env.COGNITIVESERVICEAPPSECRET;
const port = process.env.PORT;

server.post('/', (req, res, next) => {
    
});

server.get('/liveness', (req, res, next) => {
    let statusCode = 200;

    res.send(statusCode, {
        status: statusCode,
        message: "I'm alive!"
    });
});

server.get('/readiness', (req, res, next) => {
    let statusCode = 200;

    res.send(statusCode, {
        status: statusCode,
        message: "I'm ready!"
    })
});

server.listen(port, function() {
    console.log(`${server.name}:${server.port} listening at ${server.url}`);
});
