import { FastifyInstance } from 'fastify';
import { Contact, ContactCreate } from '../interfaces/contacts.interface';
import { ContactUseCase } from '../usecases/contact.usecase'
import { authMiddleares } from '../middllewares/auth.middlewares';


export async function contactsRoutes(fastify: FastifyInstance) {
    const contactUseCase = new ContactUseCase();
    fastify.addHook('preHandler', authMiddleares);

    fastify.post<{Body: ContactCreate}>('/', async (request, reply) => {
        const { name, email, phone } = request.body;
        const emailUser = request.headers['email'];

        try {
            const data = await contactUseCase.create({
                email: request.body.email,
                name,
                phone,
                userEmail: emailUser
            });
            return reply.send(data);
        } catch (error) {
            reply.send(error);
        }
    });

    fastify.get('/', async (req, replay) => {
        const emailUser = req.headers['email'];
        try {
            const data = await contactUseCase.listAllContacts(emailUser);
            return replay.send(data);
        } catch (error) {
            replay.send(error);
        }
    });

    fastify.put<{ Body: Contact, Params: { id: string}}>('/:id', async (req, replay) => {
        const { id } = req.params;
        const { name, email, phone } = req.body;
        try {
            const data = await contactUseCase.updateContact({
                id,
                name,
                email,
                phone,
            });
            return replay.send(data);
        } catch (error) {
            replay.send(error);
        }
    },
);

    fastify.delete<{Params: { id: string } }>('/:id', async (req, replay) => {
        const { id } = req.params;
        try {
            const data = await contactUseCase.delete(id);
            return replay.send(data);
            return replay.status(204).send();
        } catch (error) {
            replay.send(error);
        }
    });
}