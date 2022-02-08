const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const { Server } = require("socket.io")
const io = new Server(server);

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/main', (req, res) => {
    res.sendFile(__dirname + "/main.html");
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/register.html");
});

app.post('/', (req, res) => {
    console.log(req.body);
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    //on action from one application, sends message to update HTML
    socket.on('stock action', (msg) => {
        io.emit('stock action', msg)
    })

});


server.listen(3000, () => {
    console.log('Listening');
});