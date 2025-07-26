export interface Contact {
    id: string;
    email: string;
    name: string;
    phone: string;
    userId: string;
}

export interface ContactCreate {
    email: string;
    name: string;
    phone: string;
    userEmail: string;
}

export interface ContactCreateData {
    email: string;
    name: string;
    phone: string;
    userId: string; // Assuming userId is the ID of the user creating the contact
}

export interface ContactRepository {
    create(data: ContactCreateData): Promise<Contact>;
    findByEmailOrPhone(email: string, phone: string): Promise<Contact | null>;
}