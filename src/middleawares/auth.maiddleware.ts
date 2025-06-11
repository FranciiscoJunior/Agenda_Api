export function authMiddleare(req, reply) {

    const apiEmail = req.headers['x-api-email'];

    if (!apiEmail) {
        reply.status(401).send({
            message: 'Unauthorized: Missing API email header',
        });
    }
}