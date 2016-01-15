"use strict";

const fetch = require("node-fetch");
const moment = require("moment");

function fetchTimeline(token, format) {
    return fetch(`https://api.tito.io/timeline?format=${format}&auth_token=${token}`)
        .then((res) => res.json())
        .then((res) => {
            // filter past events
            if (res.error) {
                throw res.error;
            }

            return res.events.filter((event) => {
                const eventDayStamp = moment(event.start_date).unix();

                return eventDayStamp >= moment().unix();
            });
        });
}

exports.fetchTimeline = fetchTimeline;
