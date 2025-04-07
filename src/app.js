// app.js
const express = require('express');
const { app } = require('@azure/functions');
const supertest = require('supertest');

const expressApp = express();
expressApp.get('/', async (req, res) => {
  const response = await app.http('HttpTrigger', req, res);
  res.status(response.status).send(response.body);
});

module.exports = expressApp;
