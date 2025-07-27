export interface Contact {
    id: string;
    name: string;
    email: string;
    phone: string;
    userId: string
}

export interface ContactCreate {
    name: string;
    email: string;
    phone: string;
    userEmail: string;
}

export interface ContactrRepository {
    create(data: ContactCreate): Promise<Contact>;
}