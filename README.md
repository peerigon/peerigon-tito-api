# peerigon-tito-api

_Very simple_ layer to the ti.to api.

## Installation / Usage

1. `git clone git@github.com:peerigon/peerigon-tito-api.git`
2. `cd peerigon-tito-api && npm install`
3. `npm start`

Make sure there is a `auth.json` file in the root directory containing the following contents:

```json
{
    "auth_token": "TITO_API_AUTH_TOKEN"
}
```

## API

### /timeline

Corresponding to ti.tos `/timeline` endpoint. Get a list of events, filtered to only return upcoming events.

Response 200

```
[
    {
        api_url: "https://api.tito.io/nodeschool-augsburg/nodeschool-augsburg-februar-2016",
        url: "https://tito.io/nodeschool-augsburg-februar-2016",
        slug: "nodeschool-augsburg-februar-2016",
        title: "Nodeschool Augsburg Februar 2016",
        start_date: "2016-02-13",
        end_date: "2016-02-13",
        description: "Du wolltest schon immer mal programmieren? ...",
        location: "Peerigon GmbH, Werner-von-Siemens-Str. 6, Augsburg"
    }
]
```
