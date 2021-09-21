class Connection {
  contructor(id, name, topic, details, when) {
    this.id = id;
    this.name = name;
    this.topic = topic;
    this.details = details;
    this.when = when;
  }

  setID(id) {
    this.id = id;
  }

  getID() {
    return this.id;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTopic(topic) {
    this.topic = topic;
  }

  getTopic() {
    return this.topic;
  }

  setDetails(details) {
    this.details = details;
  }

  getDetails() {
    return this.details;
  }

  setWhen(when) {
    this.when = when;
  }

  getWhen() {
    return this.when;
  }
}

module.exports = Connection;
