import express from "express";

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagens de Usuários');

    response.json([
        'Diego',
        'Cleiton',
        'Robson'
    ]);
});

app.listen(3333);
