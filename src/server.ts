import fastify, { FastifyInstance } from 'fastify';
import { userRouter } from './routers/user.router';
import { contactsRouters } from './routers/contact.routes';

const app = fastify();

app.register(userRouter, {
    prefix: '/users',
});

app.register(contactsRouters, {
    prefix: '/contacts',
});

app.listen({ port: 3100}, () => {
    console.log('Server is running on port 3100');
});