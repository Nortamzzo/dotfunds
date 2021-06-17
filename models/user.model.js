class User {
    constructor(id, firstname, lastname, email) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    get Id() {
        return this.id;
    }
    
    get Firstname() {
        return this.firstname;
    }

    get Lastname() {
        return this.lastname;
    }

    get Email() {
        return this.email;
    }

    set UserFirstname(newFirstname) {
        this.firstname = newFirstname;
    }
    set UserLastname(newLastname) {
        this.lastname = newLastname;
    }
    set UserEmail(newEmail) {
        this.email = newEmail;
    }
}

module.exports = User;