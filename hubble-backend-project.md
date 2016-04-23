# Hubble Backend Project

## Introduction
Hubble is an online marketplace for office space in London. We help small-medium sized businesses and professional office space providers who have spare office space (we call them hosts) to connect with people and teams who want to rent that space (we call them tenants) on a monthly basis.

We get paid by hosts when tenants move into spaces and so we need to know when this happens. Every week we manually email our hosts to ask them what the progress has been with certain tenants but we want to automate this process. 

Your task is to build an IronWorker which runs every week and generates a list of hosts that need to be emailed based on the tenants that we do not know the status of. We use IronWorkers for asynchronous tasks that are well suited for self contained scripts that can be run in the background and re-run if they fail. You can find more info [here](https://www.iron.io/platform/ironworker/) and the docs to set one up [here](http://dev.iron.io/worker/). It would d be great if you could use Javascript or Python to complete the task.

Things to consider:
- Once a tenant has moved in then they will not move into another space.
- If a tenant does not move into a particular space that does not mean they won't move into a different one.

*As a stretch goal feel free to design the email template which will be used to email the hosts (we use [Mandrill](http://mandrill.com/) and their templating language to send emails and dynamically add data)*

## Resources
You have several resources at your disposal that have already been built to help you with the task.

### `/viewings`
This is a RESTful endpoint to access viewings. You can pass any of the following parameters to as a querystring in order to filter the results:
- status
- tenantId
- hostId
- officeId
- viewingDate

You can use this data to test your solution:

```json
[
    {
        "id": 1234,
        "tenant": {
            "id": 2020,
            "name": "James Jamieson",
            "company": "StandHQ"
        },
        "office": {
            "id": 100,
            "name": "Alphabeta Building",
            "host": {
                "id": 4321,
                "name": "Joseph Junior Adenuga"
            }
        },
        "status": "unknown",
        "viewingDate": "12/04/2016"
    },
    {
        "id": 1235,
        "tenant": {
            "id": 2020,
            "name": "James Jamieson",
            "company": "StandHQ"
        },
        "office": {
            "id": 101,
            "name": "WeWork Spitalfields",
            "host": {
                "id": 4322,
                "name": "Melesha O'Garro"
            }
        },
        "status": "movedIn",
        "viewingDate": "11/04/2016"
    },
    {
        "id": 1236,
        "tenant": {
            "id": 2021,
            "name": "Matthew Watson",
            "company": "Founders Holding Things"
        },
        "office": {
            "id": 101,
            "name": "WeWork Spitalfields",
            "host": {
                "id": 4322,
                "name": "Melesha O'Garro"
            }
        },
        "status": "passed",
        "viewingDate": "11/04/2016"
    },
    {
        "id": 1237,
        "tenant": {
            "id": 2021,
            "name": "Matthew Watson",
            "company": "Founders Holding Things"
        },
        "office": {
            "id": 102,
            "name": "Tea Building",
            "host": {
                "id": 4323,
                "name": "Michael Omari"
            }
        },
        "status": "unknown",
        "viewingDate": "11/04/2016"
    },
    {
        "id": 1238,
        "tenant": {
            "id": 2021,
            "name": "Matthew Watson",
            "company": "Founders Holding Things"
        },
        "office": {
            "id": 100,
            "name": "Alphabeta Building",
            "host": {
                "id": 4321,
                "name": "Joseph Junior Adenuga"
            }
        },
        "status": "unknown",
        "viewingDate": "11/04/2016"
    }
]
```