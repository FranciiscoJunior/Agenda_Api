export interface User {
    id: String;
    email: String;
    name: String;
}

export interface UserCreate {
    email: string;
    name: string;
}

export interface UserRepository {
    create(data: UserCreate): Promise<User>;
}