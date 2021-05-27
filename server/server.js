/* eslint-disable no-console, consistent-return */
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mountRoutes = require('./router');
const cors = require('cors');

const app = express();

// Middleware set up
const TEST = process.env.NODE_ENV === 'test';
if (!TEST) {
  app.use(morgan('combined'));
}
app.use(bodyParser.json());
app.use(cors());

// Mount defined routes
mountRoutes(app);

// export app for testing
module.exports = app;

// Server setup and start
if (!TEST) {
  const port = process.env.PORT || 5000;
  const server = http.createServer(app);

  server.listen(port);
  console.log('Http server listening on:', port);
}
