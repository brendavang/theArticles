const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');
const bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req, res){
  res.render('index', { profile: req.session.profile });
});

router.get('/login', UserController.login);
router.post('/login', urlencodedParser, UserController.postLogin);

router.get('/signup', UserController.signup);

router.get('/signout', UserController.signout);

module.exports = router;
