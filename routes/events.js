"use strict";

const express = require('express');
const router = express.Router();
const debug = require("debug")("peerigon-tito-api:routes")

const auth = require("../auth.json");

const fetchEvents = require("../lib").fetchEvents;

router.get('/', (req, res, next) => {
    fetchEvents(auth.api_token)
        .then((events) => {
            res.json(events);
        })
        .catch(next);
});

module.exports = router;
