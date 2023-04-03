const svr = require('net').createServer();

// Instatiate environment variables or pull defaults if none
const port = process.env.port || 3000;
const cliType = process.env.client || 'telnet';


// Import socket callback functions
const sl = require('./socketLogic');


svr.on('connection', (socket) => {
    // Transmit and log new connection
    console.log(`Connection from ${socket.remoteAddress} established!`);
    socket.write('Connected to server\r\n> ');

    // Implement correct logic for specified client
    switch (cliType) {
        case 'telnet':
        case 'tn':
            socket.on('data', (d) => {sl.telnet(socket, d)}); // telnet (Each keystroke is transmitted) - Default
            break;

        case 'netcat':
        case 'nc':
        case 'ncat':
            socket.on('data', (d) => {sl.netcat(socket, d)}); // netcat (Transmission upon newline)
            break;
    
        default:
            // Throw error if invalid client type specified
            throw new Error(`Unknown client type '${cliType}'.\r\n\t Use 'netcat' or 'telnet' as environment variables or leave blank to default to telnet`)
            break;
    }

    // Convert ECONNRESET errors to warnings to prevent from crashing app
    socket.on('error', e => {
        if (e.code == 'ECONNRESET') {
            console.warn(e)
        }
        else{
            throw new Error(e.message)
        }
        
    });
})



svr.listen(port, () => {`Server listening on port '${port}'`});