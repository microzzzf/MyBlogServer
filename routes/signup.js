'use strict';

var Signup = require('../controllers/signup');

module.exports = function (server) {
  server.post('/signup/verifyUsername', Signup.verifyUsername);
};