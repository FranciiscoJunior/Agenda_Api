import fastify, { FastifyInstance } from 'fastify';
import { userRouter } from './routers/user.router';
const app: FastifyInstance = fastify({logger: true});

app.register(userRouter, {
    prefix: '/users',
});

app.listen ({
    port: 3000,
},
    () => console.log('Server is running on port 3100'),
);