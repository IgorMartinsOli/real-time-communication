import io from "./server.js"

io.on('connection', (socket) => {
    console.log(`Um cliente se conectou, socket: ${socket.id}`)

    socket.on("selecionar-documento", (nomeDocumento) => {
        socket.join(nomeDocumento)
    })

    socket.on("texto_editor", ({texto, nomeDocumento}) => {
        socket.to(nomeDocumento).emit("texto_editor_clientes", texto)
    })

    socket.on("disconnect", (motivo) => {
        console.log(`Servidor desconectado! Motivo: ${motivo}`);
    });

})
