import {
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
        //Email do usuário logado
        //Buscar o usuário pelo email
        //Se não existir, retornar erro
        //Se existir, criar o contato
        //antes de3 criar o contato, validar se ele já existe pelo telefone

        const user = await this.userRepository.findByEmail(userEmail);

        if (!user) {
            throw new Error ('User Not Found');
        }
    }
}

export { ContactUseCase };