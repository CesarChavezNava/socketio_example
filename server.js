const io = require('socket.io')(3000, {
    cors: {
      origin: "http://127.0.0.1:5500",
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

io.on('connection', (socket) => {
    console.log('Usuario conectado!');
    socket.emit('message', 'Hola mundo!');

    socket.on('disconnect', () => {
        console.log('usuario desconectado!');
    });

    socket.on('chatmsg', (msg) => {
        io.emit('message', msg);
    })
});