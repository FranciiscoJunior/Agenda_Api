import { prisma } from "../database/prisma-client";
import { Contact, ContactCreateData, ContactRepository } from "../interface/contacts.interface";

class ContactRepositoryPrisma implements ContactRepository {
    create(data: ContactCreateData): Promise<Contact> {

        const result = await prisma.contacts.create({
            data: {
                email: data.email,
                name: data.name,
                phone: data.phone,
                userId: data.userEmail, // Assuming userEmail is the user ID
            },
        });

        return result;
    }
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