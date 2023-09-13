import express, { response } from 'express';
import { users } from './routes/users.mjs';
const app = express();
app.use(express.json());
app.use((reques, response, next) => {
    reques.body.add = 100;
    next(reques, response, next);
});
app.use('/users', users);
const server = app.listen(8080);
server.on('listening', () => console.log(`server is listening on port ${server.address().port}`));
