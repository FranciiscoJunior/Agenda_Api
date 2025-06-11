import { FastifyInstance } from 'fastify';
import { UserCreate } from '../interface/user.interface';
import { UserUseCase } from '../usecases/user.usecases';

export async function userRouter(fastify: FastifyInstance) {
    const userUseCase = new UserUseCase();
    // ...existing code...
    fastify.post<{Body: UserCreate}>('/', async (req, reply) => {
        const { name, email } = req.body;

        try {
            const data = await userUseCase.create({
                name,
                email,
            });

            return reply.send(data);

        } catch (error) {
            reply.send(error)
        }
    });

    // Criando uma nova rota para o usuário
    fastify.get('/', (req, reply) => {
        reply.send({ hello: 'Hello from user router'});
    });
}