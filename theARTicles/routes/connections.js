const express = require('express');
const router = express.Router();
const bodyParse = require('body-parser');
const utilFunctions = require('../models/utility/utilFunctions.js'); // get utility functions to fetch connection JSON data
const UserController = require('../controllers/UserController.js');

let urlencodedParser = bodyParse.urlencoded({ extended: false });

router.get('/', function(req, res) {
  res.render('connections', { connections: utilFunctions.getConnections(), profile: req.session.profile });
});

router.get('/details/:connectionID', function(req, res) {
  if (utilFunctions.getConnection(req.params.connectionID)) {
    res.render('connectionDetails', { connection: utilFunctions.getConnection(req.params.connectionID), profile: req.session.profile });
  } else {
    res.render('404');
  }
});

router.get('/saved', function(req, res){
  res.render('savedConnections', { profile: req.session.profile });
});

router.get('/new', function(req, res){
  res.render('newConnection', { profile: req.session.profile, connection: req.query });
});
router.post('/new', urlencodedParser, UserController.newConnection);

// router.post('/', urlencodedParser, function(req, res){
//   res.render('connections', { profile: req.session.profile });
// });

module.exports = router;
