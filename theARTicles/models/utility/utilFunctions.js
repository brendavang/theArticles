const fs = require('fs');
const connectionDB = require('./connectionDB.json');
const usersDB = require('./usersDB.json');

module.exports = {
  getConnections() {
    return connectionDB;
  },
  getConnection(connectionID) {
    return connectionDB[connectionID];
  },
  getUsers() {
    return usersDB;
  },
  getUser(userID) {
    return usersDB[userID];
  }
};
