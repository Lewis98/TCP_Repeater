const port = process.env.port || 3000;
const svr = require('net').createServer();

const cliType = process.env.client || 'telnet';

const sl = require('./socketLogic');


svr.on('connection', (socket) => {
    console.log(`Connection from ${socket.remoteAddress} established!`);
    socket.write('Connected to server\r\n> ');

    switch (cliType) {
        case 'telnet':
        case 'tn':
            socket.on('data', (d) => {sl.telnet(socket, d)});            
            break;
            
        case 'netcat':
        case 'nc':
        case 'ncat':
            socket.on('data', (d) => {sl.netcat(socket, d)});            
            break;
    
        default:
            throw new Error(`Unknown client type '${cliType}'.\r\n\t Use 'netcat' or 'telnet' as environment variables or leave blank to default to telnet`)
            break;
    }

    socket.on('error', e => {
        console.warn(e)
    });
})

svr.listen(port);