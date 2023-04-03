# TCP_Repeater
TCP Socket that returns input


# Usage

## Installation

1. Clone the repository
2. Generate a docker image using `docker build -t {Docker Image name} {Path to docker file}`
3. The docker image can be run using `docker run -p {Port to map}:3000 {Docker Image name}`
    * <b>Important</b> the client environment variable should be set using `-e client={client}`.
        * Use 'telnet' if using a client that sends data per keystroke (I.E - Windows telnet command)
        * Use 'netcat' if using a client that sends data upon an enter keystroke (I.E - Unix netcat command)
        * (Default behaviour is telnet if not specified)

## Usage

1. Connect to the server using TCP utility (Tested using Windows 'telnet' and 'ncat' command line utilities)
<br/>(Ensure correct client type is set above)
    * Example command : `telnet 127.0.0.1 3000`
2. Send data to the server using the terminal, use Enter to return the result
