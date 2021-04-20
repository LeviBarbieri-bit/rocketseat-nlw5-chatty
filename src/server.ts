import express from "express";

const app = express();

app.get("/", (request, response ) => {
    return response.send("Olá Mundo");
});

app.post("/users", (request, response) => {
    return response.json({message: "Salvo com Sucesso!!!"});
});

app.listen(3333)
