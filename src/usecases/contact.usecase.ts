import {
    Contact,
    ContactCreate,
    ContactRepository,
} from '../interfaces/contacts.interface';
import { UserRepository } from '../interfaces/user.interface';
import { ContactsRepositoryPrisma } from "../repositories/constacts.repository";
import { UserRepositoryPrisma } from '../repositories/user.repository';

class ContactUseCase {
        private contactRepository: ContactRepository;
        private userRepository: UserRepository;
        
    constructor() {
        this.contactRepository = new ContactsRepositoryPrisma();
        this.userRepository = new UserRepositoryPrisma();
    }

    async create({ email, name, phone, userEmail}:  ContactCreate) {
        //Email do usuário logado;
        //Buscar o usuário pelo email;
        //Se não existir, retornar erro;
        //Se existir, criar o contato;
        //antes de3 criar o contato, validar se ele já existe pelo telefone ou email.

        const user = await this.userRepository.findByEmail(userEmail);

        if (!user) {
            throw new Error ('User Not Found');
        }

        const verifyIfExistsContact =
            await this.contactRepository.findByEmailOrPhone(email, phone);

        if (verifyIfExistsContact) {
            throw new Error('Contact already exists with this email or phone');
        }

        const contact = await this.contactRepository.create({
                email,
                name,
                phone,
                userId: user.id,
        });

        return contact;
    }

    async listAllContacts(emailUser: string) {
        const user = await this.userRepository.findByEmail(emailUser);

        if (!user) {
            throw new Error('User Not Found');
        }

        const contacts = await this.contactRepository.findAllContacts(user.id);

        return contacts;
    }

    async updateContact({id, name, email, phone}: Contact) {
        const data = await this.contactRepository.updateContact({
            id,
            name,
            email,
            phone,
        });

        return data;
    }

    async delete (id: string) {

        const data = await this.contactRepository.delete(id);

        return data;
    }
}

export { ContactUseCase };