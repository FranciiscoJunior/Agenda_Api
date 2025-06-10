import { prisma } from "../database/prisma-client";
import { User, UserCreate, UserRepository } from "../interface/user.interface";

class UserRepositoryPrisma implements UserRepository{
    async create(data: UserCreate): Promise<User> {
        
        const result = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
            }
        });

        return result;
    }
}

export { UserRepositoryPrisma };