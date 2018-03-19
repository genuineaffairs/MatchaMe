import http from 'http';
import SocketIo from 'socket.io';

// const Rooms = require('./rooms');
// const clientEvents = require('./clientEvents');

const server = http.createServer();
const io = SocketIo(server);

io.on('connection', (client) => {
  console.log('client connected');
});

const { PORT } = process.env;
server.listen(PORT, () => console.log(`Socket server listening on port ${PORT}`));