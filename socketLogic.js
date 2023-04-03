var output = ''; // Used in telnet function to hold data before sending 

// Logic used for Windows Telnet command
module.exports.telnet = (socket, data) => {
    if (data == '\r\n') {
        console.log(`Recieved : ${output}`);
        socket.write(output + '\r\n> ');
        output = '';
    }else{
        output += data;
    };
};

// Logic used for Unix netcat command
module.exports.netcat = (socket, data) => {
    console.log(`Recieved : ${data}`);
    socket.write(data + '> ');
};