import { UserRepository, UserCreate } from "../interface/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class UserUseCase {
    private userRepository: UserRepository
    constructor() {
        this.userRepository = new UserRepositoryPrisma();
    }

    async create({name, email}: UserCreate): Promise<User> {}
}

export { UserUseCase }