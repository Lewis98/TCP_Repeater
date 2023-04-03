var output = '';


module.exports.telnet = (socket, data) => {
    if (data == '\r\n') {
        console.log(`Recieved : ${output}`);
        socket.write(output + '\r\n> ');
        output = '';
    }else{
        output += data;
    };
};


module.exports.netcat = (socket, data) => {
    console.log(`Recieved : ${data}`);
    socket.write(data + '> ');
};