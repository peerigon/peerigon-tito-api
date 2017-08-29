# peerigon-tito-api

_Very simple_ layer to the ti.to api.

## Installation / Usage

1. `git clone git@github.com:peerigon/peerigon-tito-api.git`
2. `cd peerigon-tito-api && npm install`
3. `npm start`

Make sure there is a `auth.json` file in the root directory containing the following contents:

```json
{
    "api_token": "TITO_API_AUTH_TOKEN"
}
```

## API

### /events

Get a list of events, filtered to only return upcoming events.

Response 200

```
[
    {
        "id": "dummy-workshop",
        "type": "events",
        "attributes": {
            "account-id": "peerigon",
            "banner-url": "https://d2z6c3c3r6k4bx.cloudfront.net/uploads/event/banner/1022607/0c052f5d8f7c4e3d8d98f915b902e1d4.jpg",
            "currency": "EUR",
            "default-locale": "en",
            "description-de": "Dieser Workshop konzentriert ...",
            "description-en": "This Workshop focuses on ...",
            "end-date": "2017-09-08",
            "live": true,
            "locales": [
                "en",
                "de"
            ],
            "location": "Peerigon Office",
            "logo-url": null,
            "metadata": null,
            "private": false,
            "security-token": "45hHXEnczcE1DNknR70A9w",
            "slug": "dummy-workshop",
            "start-date": "2017-09-04",
            "title-de": "JS Workshop",
            "title-en": "JS Workshop"
        },
        "links": {
            "self": "https://api.tito.io/v2/peerigon/dummy-workshop"
        },
        "relationships": {
            "releases": {
                "links": {
                "related": "https://api.tito.io/v2/peerigon/dummy-workshop/releases"
                }
            }
        }
    }
]
```
