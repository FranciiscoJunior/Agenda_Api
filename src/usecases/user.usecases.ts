import { UserRepository, UserCreate, User } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.rerpository";
    class UserUseCase {
        private userRepository: UserRepository
        constructor() {
        this.userRepository = new UserRepositoryPrisma()
    }

    async create({name, email}: UserCreate): Promisse <User/> {

    }
}

export { UserUseCase };