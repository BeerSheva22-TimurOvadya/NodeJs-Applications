import express from 'express';
export const users = express.Router();
users.post('/sign-up', (request, response) => {
    console.log(`password${request.body.password} is nor strong`)
    response.send(request.body);
});
