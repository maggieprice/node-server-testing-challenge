const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();
const showsRouter = require('../shows/router');
const actorsRouter = require('../actors/router');

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// routes
server.use('/api/actors', actorsRouter);
server.use('/api/shows', showsRouter);
server.get('/', (req, res)=>{
    res.json(({api: 'up'}))
})

module.exports = server;