const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

// const libRouter = require('./routers/lib-router.js');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

// server.use('/', libRouter);

server.get('/', (req, res) => {
  res.send(`
    <h1>Looking for API Information?</h1>
    <p>Please see the <a href='https://github.com/buildweek-devlibs/backend-api'>README</a> for more information on where to go!</p>
  `);
});

module.exports = server;
