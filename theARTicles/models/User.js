class User {
    contructor(userName, firstName, lastName, email) {
      this.userName = userName;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
    }

    setUserName(userName) {
      this.userName = userName;
    }

    getUserName() {
      return this.userName;
    }

    setFirstName(firstName) {
      this.firstName = firstName;
    }

    getFirstName() {
      return this.firstName;
    }

    setLastName(lastName) {
      this.lastName = lastName;
    }

    getLastName() {
      return this.lastName;
    }

    setEmail(email) {
      this.email = email;
    }

    getEmail() {
      return this.email;
    }
  }

  module.exports = User;
