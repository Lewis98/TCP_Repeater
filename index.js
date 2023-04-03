const svr = require('net').createServer();


svr.on('connection', (socket) => {
    console.log('Connected!');
    socket.write('Connected to server\r\n');

    socket.on('data', (data) => {
        socket.write(data);
        console.log(data);
    })
})


svr.listen(3000);