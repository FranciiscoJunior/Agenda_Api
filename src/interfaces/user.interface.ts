export interface User {
    id: String;
    email: String;
    name: String;
    createdAt: Date;
    updateDAt: Date;
}

export interface UserCreate {
    email: string;
    name: string;
}

export interface UserRepository {
    create(data: UserCreate): Promise<User>;
    findByEmail(email: string): Promise<User | Null>;
}