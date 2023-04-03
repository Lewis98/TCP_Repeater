const svr = require('net').createServer();

const port = process.env.port || 3000;

svr.on('connection', (socket) => {
    console.log(`Connection from ${socket.remoteAddress} established!`);
    socket.write('Connected to server\r\n> ');

    let output = '';
    socket.on('data', data => {
        
        if (data == '\r\n') {
            console.log(`Recieved : ${output}`);
            socket.write(output + '\r\n> ');
            output = '';
        }else{
            output += data;
        };

    });
})


svr.listen(port);