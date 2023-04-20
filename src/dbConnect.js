import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://alura:aWdvcmc1@aluracluster.pui1owk.mongodb.net/test"
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
