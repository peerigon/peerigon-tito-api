"use strict";

const express = require('express');
const router = express.Router();
const debug = require("debug")("peerigon-tito-api:routes")

const auth = require("../auth.json");

const fetchTimeline = require("../lib").fetchTimeline;

router.get('/', (req, res, next) => {
    fetchTimeline(auth.api_token, "json")
        .then((timeline) => {
            res.json(timeline);
        })
        .catch(next);
});

module.exports = router;
