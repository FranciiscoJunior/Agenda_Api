import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecases";
import { UserCreate } from "../interface/user.interface";

async function userRouter(fastify: FastifyInstance){
    const userUseCase = new UserUseCase()
    fastify.post<{Body: UserCreate}>('/', (req, reply) => {

        const { name, email } = req.body;

        try {
            const data = userUseCase.create({
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