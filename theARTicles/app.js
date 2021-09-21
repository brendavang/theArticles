const express = require('express');
const app = express();
const session = require('express-session');
const index = require('./routes/index.js');
const connections = require('./routes/connections.js');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use('/', index);
app.use('/connections', connections);

app.get('/about', function(req, res){
  res.render('about', { profile: req.session.profile });
});
app.get('/contact', function(req, res){
  res.render('contact', { profile: req.session.profile });
});
app.use('/*', function(req, res) {
  res.render('404', { profile: req.session.profile });
});

app.listen(8080);
