import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Você está na página principal");
});

app.post('/', (req, res) => {
    res.send("Você está na página principal usando POST");
});

app.listen(3333, () => {
    console.log("Servidor rodando na porta http://localhost:3333");
});
