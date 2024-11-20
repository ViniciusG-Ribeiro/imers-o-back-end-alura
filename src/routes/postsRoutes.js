import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // **Habilita o parser JSON:**
    // Permite que o Express entenda requisições com corpo no formato JSON.
    app.use(express.json());

    // **Rota para obter todos os posts:**
    // Quando uma requisição GET é feita para a rota "/posts", esta função é chamada.
    // Ela busca todos os posts do banco de dados e envia os dados como resposta em formato JSON.
    app.get("/posts", listarPosts);
}

export default routes;