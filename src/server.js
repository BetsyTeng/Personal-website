var WebSocketServer = require('ws').Server;

wss = new WebSocketServer({ port: 8181 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.send('my server');
    ws.on('message', function (message) {
        console.log(message);
    });
});