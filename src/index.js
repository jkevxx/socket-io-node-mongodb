import app from './app.js';
import { Server as WebsocketServer } from 'socket.io';
import http from 'http';
import { connectDB } from './db.js';
import sockets from './sockets.js';

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(3000);
console.log('Server is running on port 3000');

const io = new WebsocketServer(httpServer);
sockets(io);
