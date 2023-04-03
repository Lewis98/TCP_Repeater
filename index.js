const svr = require('net').createServer();


svr.on('connection', (socket) => {
    console.log('Connected!');
    socket.write('Connected to server\r\n');

    let output = '';
    socket.on('data', data => {
        
        if (data == '\r\n') {
            console.log(`Recieved : ${output}`);
            socket.write(output + '\r\n');
            output = '';
        }else{
            output += data;
        };

    });
})


svr.listen(3000);