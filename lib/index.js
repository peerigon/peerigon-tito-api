"use strict";

const fetch = require("node-fetch");
const moment = require("moment");

function fetchEvents(token) {
    return fetch(`https://api.tito.io/v2/peerigon/events?auth_token=${ token }`)
        .then((res) => res.json())
        .then((res) => {
            // filter past events
            if (res.error) {
                throw res.error;
            }

            return res.data.filter((event) => {
                const today = moment().format("YYYYMMDD[T]HHmmss[Z]");
                const endsTodayOrAfter = moment(event.attributes["end-date"]).isSameOrAfter(today, "day");

                return endsTodayOrAfter;
            });
        });
}

exports.fetchEvents = fetchEvents;
