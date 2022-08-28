export class Contact {
    name = '';
    surname = '';
    email = '';
    connected = false;

    constructor(name, surname, email, connected = false) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.connected = connected;
    }
}