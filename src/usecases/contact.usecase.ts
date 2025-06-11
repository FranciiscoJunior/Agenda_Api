import { ContactCreate, ContactRepository } from "../interface/contacts.interface";
import { UserRepository } from "../interface/user.interface";
import { ContactRepositoryPrisma } from "../repositories/contacts.repository";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class ContactUseCase {
    private contactRepository: ContactRepository;
    private userRepository: UserRepository;

    constructor() {
        this.contactRepository = new ContactRepositoryPrisma();
        this.userRepository = new UserRepositoryPrisma();
    }

    async create({ email, name, phone, userEmail}: ContactCreate){
        // email do usuario que está criando o contato
        // Buscar o contato pelo email e pelo email do usuário
        // se não existir, retornar erro
        // se existir, criar o contato
        // Antes de criar o contato, verificar se já existe um contato com o mesmo email para o usuário

        const user = await this.userRepository.findByEmail(userEmail);

        if (!user) {
            throw new Error('User not found');
        }

        const verifyIfExistsContact = await this.contactRepository.findByEmailAndUserEmail(email, userEmail);
    }
}

export { ContactUseCase };