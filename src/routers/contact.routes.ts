import { FastifyInstance } from 'fastify';
import { ContactUseCase } from '../usecases/contact.usecase';
import { ContactCreate } from '../interface/contacts.interface';
import { authMiddleare } from '../middleawares/auth.maiddleware';
export async function contactsRouters(fastify: FastifyInstance) {
    const contactUseCase = new ContactUseCase();
    fastify.addHook('preHandler', authMiddleare);
    // ...existing code...
    fastify.post<{Body: ContactCreate}>('/', async (req, reply) => {

        const { email, name, phone } = req.body;
        const emailUser = req.headers['email'];

        try {
            const data = await contactUseCase.create({
                email,
                name,
                phone,
                userEmail: emailUser,
            });

            return reply.send(data);

        } catch (error) {
            reply.send(error)
        }
    });
}