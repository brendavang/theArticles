const UserConnection = require('../UserConnection.js');

class UserProfile {
    constructor(user) {
        this.user = user;
        this.userConnections = [];
    }

    getUser() {
      return this.user;
    }

    addConnection(newUserConnection, rsvp) {
      console.log("NEW USER CONNECTION " + newUserConnection.id);
        var doesNotExist;
        if (this.userConnections.length === 0) {
            let userConnection = new UserConnection(newUserConnection, rsvp);
            this.userConnections.push(userConnection);
        } else {
          console.log("OLD CONNECTIONS " + this.userConnections[0]);
          for (var i = 0; i < this.userConnections.length; i++) {
              if (this.userConnections[i].id === newUserConnection.getConnection.id) {
                  userConnection.setRSVP(rsvp);
                  doesNotExist = false;
              } else {
                  doesNotExist = true;
              }
          }
          if (doesNotExist) {
              let userConnection = new UserConnection(newUserConnection, rsvp);
              this.userConnections.push(userConnection);
          }
      }
  }

    removeConnection(userConnection) {
        for (let index = 0; index < this.userConnections.length; index++) {
            if (this.userConnections[index].getConnection.id === userConnection.getConnection.id) {
                this.userConnections.splice(index, 1);
            }
        }
    }

    updateRSVP(userConnection, rsvp) {
        for (let index = 0; index < this.userConnections.length; index++) {
            if (this.userConnections[index].getConnection.id === userConnection.getConnection.id) {
                this.userConnections[index].setRSVP(rsvp);
            }
        }
    }

    getUserConnections() {
        return this.userConnections;
    }
}

module.exports = UserProfile;
