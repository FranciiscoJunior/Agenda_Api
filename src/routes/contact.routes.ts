import { FastifyInstance } from 'fastify';
import { ContactCreate } from '../interfaces/contacts.interface';
import { ContactUseCase } from '../usecases/contact.usecase'
import { authMiddleares } from '../middllewares/auth.middlewares';


export async function contactsRoutes(fastify: FastifyInstance) {
    const contactUseCase = new ContactUseCase();
    fastify.addHook('preHandler', authMiddleares);
    fastify.post<{Body: ContactCreate}>('/', async (req, reply) => {
        const { name, email, phone } = req.body;
        const emailUser = req.headers['email']
        try {

            const data = await contactUseCase.create({email, name, phone, userEmail: emailUser});

            return reply.send(data);
        } catch (error) {
            reply.send(error)
        }
    });
}