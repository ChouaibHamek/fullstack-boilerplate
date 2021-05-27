/* eslint-disable object-curly-newline */
const cors = require('cors');
const path = require('path');
const express = require('express');

const { testController } = require('./controllers/test');

// API routes
module.exports = (app) => {
  app.get('/api/*', testController);
  app.use(express.static(path.join(__dirname, './web-build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './web-build/index.html'));
  });
};
