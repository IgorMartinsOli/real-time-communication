import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import {Server} from 'socket.io';

const app = express();

const currentPath = url.fileURLToPath(import.meta.url);
const publicPath = path.join(currentPath, '../..', 'public');

app.use(express.static(publicPath));

const httpServer = http.createServer(app)

httpServer.listen(process.env.PORT || 3000, () => {
    console.log(`Listining in port ${process.env.PORT || 3000}`)
})

const io = new Server(httpServer)

export default io;