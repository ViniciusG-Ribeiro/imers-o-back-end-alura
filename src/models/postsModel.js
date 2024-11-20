import conectarAoBanco from '../config/dbConfig.js';

// **Conecta ao banco de dados:**
// Esta linha importa a função `conectarAoBanco` que estabelece a conexão com o banco de dados.
// A string de conexão é obtida da variável de ambiente `process.env.STRING_CONEXAO`.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// **Recupera todos os posts do banco de dados:**
// Esta função assíncrona se conecta ao banco de dados, acessa a coleção "posts" e retorna todos os documentos como um array.
export async function getTodosPosts(){
    const db = conexao.db("imersao-instabytes")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}