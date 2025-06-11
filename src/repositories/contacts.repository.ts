import { prisma } from "../database/prisma-client";
import { Contact, ContactCreate, ContactRepository } from "../interface/contacts.interface";

class ContactRepositoryPrisma implements ContactRepository {
    create(data: ContactCreate): Promise<Contact> {}
    async findByEmailAndUserEmail(
        email: string,
        phone: string,
    ): Promise<Contact | null> {

        const result = await prisma.contacts.findFirst({
            where: {
                OR: [
                    {
                        email,
                    },
                    { phone },
                ],
            },
        });

        return result || null;
    }
}

export { ContactRepositoryPrisma };