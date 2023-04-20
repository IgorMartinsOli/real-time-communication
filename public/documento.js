import { emitirTextoEditor, selecionarDocumento } from "./socket-front-document.js";

const params = new URLSearchParams(window.location.search);
const nomeDocumento = params.get("nome")

const textEditor = document.getElementById("editor-texto");
const titleName = document.getElementById("titulo-documento");

titleName.textContent = nomeDocumento || "Documento sem titulo";

selecionarDocumento(nomeDocumento)

textEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
        texto: textEditor.value,
        nomeDocumento: nomeDocumento})
})

function atualizaTextoEditor(texto) {
    textEditor.value = texto;
}

export {atualizaTextoEditor};