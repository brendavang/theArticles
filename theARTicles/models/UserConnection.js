class UserConnection {
    constructor(connection, rsvp){
        this.connection = connection;
        this.rsvp = rsvp;
    }

    getConnection() {
        return this.connection;
    }

    setConnection(connection) {
        this.connection = connection;
    }

    getRSVP() {
        return this.rsvp;
    }

    setRSVP(rsvp) {
        this.rsvp = rsvp;
    }
}

module.exports = UserConnection;
