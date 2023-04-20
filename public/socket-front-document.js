import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
    socket.emit("selecionar-documento", nome)
}

socket.emit('selecionar-documento', () => {

})

function emitirTextoEditor(dados){
    socket.emit("texto_editor", dados)
}

socket.on('texto_editor_clientes', (texto) => {
    atualizaTextoEditor(texto);
})

socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado! Motivo: ${motivo}`);
});

export {emitirTextoEditor, selecionarDocumento};