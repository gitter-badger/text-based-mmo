'use strict';
const http = require('http');
const app = require('./config/express')();

http.createServer(app).listen(app.get('port'),function () {
  /*eslint no-console: [2, { allow: ["log"] }] */
  console.log('Server on...');
});
