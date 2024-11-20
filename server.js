import express from 'express';
import routes from './src/routes/postsRoutes.js';

const app = express();

routes(app)

// **Inicia o servidor:**
// O servidor Express começa a escutar na porta 3000.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

