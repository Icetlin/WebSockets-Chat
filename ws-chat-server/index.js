const http = require('http');
const {WebSocketServer} = require("ws");

const server = http.createServer((req, res) => {
    res.write('server is running')
})
const wsServer = new WebSocketServer({ server });

wsServer.on('connection', function connection(ws, request) {
    const userId = request.headers['sec-websocket-key'].slice(0,4);
    ws.on('message', function message(data) {
        const userMsgData = JSON.parse(data);
        let userMsg = {};

        console.log(userMsgData);

        if (userMsgData.action === 'delete') {
            userMsg = {
                msgId: userMsgData.msgId,
                action: 'delete',
            };
        } else {
            userMsg = {
                userName: userId,
                msgValue: userMsgData['msgValue'],
                msgDate: userMsgData['msgDate'],
                msgId: userMsgData['msgId'],
            }
        }

        wsServer.clients.forEach(function (client){
            client.send(JSON.stringify(userMsg));
        });


    });

});

server.listen(3000);