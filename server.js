import express from 'express';

const posts = [
    {   
        id:1,
        descricao: "uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id:2,
        descricao: "Um lindo pôr do sol na praia",
        imagem: "https://source.unsplash.com/random/300x200/?sunset,beach",
    },
    {
        id:3,
        descricao: "Meu novo cachorro! ",
        imagem: "https://source.unsplash.com/random/300x200/?dog",
    },
    {
        id:4,
        descricao: "Montanhas nevadas, um paraíso!",
        imagem: "https://source.unsplash.com/random/300x200/?mountains,snow",
    },
    {
        id:5,
        descricao: "Comida deliciosa! ",
        imagem: "https://source.unsplash.com/random/300x200/?food",
    },
    {
        id:6,
        descricao: "Um dia incrível com os amigos!",
        imagem: "https://source.unsplash.com/random/300x200/?friends",
    },
    {
        id:7,
        descricao: "Explorando uma nova cidade!",
        imagem: "https://source.unsplash.com/random/300x200/?city",
    }
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post) =>{
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});