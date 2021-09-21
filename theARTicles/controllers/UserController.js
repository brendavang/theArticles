const utilFunctions = require('../models/utility/utilFunctions.js');
const User = require('../models/User.js');
const Connection = require('../models/Connection.js');
const UserConnection = require('../models/UserConnection.js');
const UserProfile = require('../models/utility/UserProfile.js');

const login = (req, res) => {
  res.render('login', { login: req.query });
}

const postLogin = (req, res) => {
  // TEMPORARY authenitcation with hardcoded database
  var users = utilFunctions.getUsers();
  var valid;
  var user;
  var profile;

  for (var i = 0; i < users.length; i++) {
    if (req.body.username === users[i].username || req.body.password === users[i].tempPassword) {
      // var user = new User(users[i].username, users[i].firstName, users[i].lastName, users[i].email);
      user = new User();
      user.userName = users[i].username;
      user.firstName = users[i].firstName;
      user.lastName = users[i].lastName;
      user.email = users[i].email;
      profile = new UserProfile(user);
      valid = true;
      break;
    } else {
        valid = false;
    }
  }

  if (valid) {
    req.session.profile = profile;
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
}

const signup = (req, res) => {
  res.render('signup');
}

const signout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
}

const newConnection = (req, res) => {
  var profile = new UserProfile();
  var user = new User();
  user.userName = req.session.profile.user.username;
  user.firstName = req.session.profile.user.firstName;
  user.lastName = req.session.profile.user.lastName;
  user.email = req.session.profile.user.email;

  profile.user = user;
  profile.userConnections = req.session.profile.userConnections;
  var id;
  for (id = 0; id < profile.userConnections.length; id++);
  id = id + 1;
  console.log(id);

  var connection = new Connection();
  connection.id = id;
  connection.name = req.session.profile.user.userName;
  connection.topic = req.body.topic;
  connection.details = req.body.details;
  connection.when = req.body.when;
  var userConnection = new UserConnection();
  userConnection.connection = connection;
  userConnection.rsvp = "Yes";

  // console.log(connection.id + " " + userConnection.connection.id);

  profile.addConnection(connection, userConnection);
  console.log("CHECK " + profile.getUserConnections.id);

  console.log(profile);
  console.log(profile.userConnections[0]);

  req.session.profile = profile;
  res.redirect("/connections");
}

module.exports = {
  login,
  postLogin,
  signup,
  signout,
  newConnection
}
