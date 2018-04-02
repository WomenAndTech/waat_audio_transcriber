let restify = require('restify');
let server = restify.createServer();
const port = process.env.PORT;

server.post('/', (req, res, next) => {

});


server.listen(port, function() {
    console.log(`${server.name}:${server.port} listening at ${server.url}`);
});
