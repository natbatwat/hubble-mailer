## Commands
- [IronWorker CLI Docs](http://dev.iron.io/worker/reference/cli/)

`docker run --rm -it -v "$PWD":/worker -w /worker iron/node node hubble_mailer_worker.js`

**Test Worker Locally with Docker**
`docker run --rm -e "PAYLOAD_FILE=hubble_mailer.payload.json" -v "$PWD":/worker -w /worker iron/node node hubble_mailer_worker.js`

`docker build -t natbatwat/hubble_mailer:0.0.1 .`

`docker run --rm -it natbatwat/hubble_mailer:0.0.1`

**Uplaod Worker**
`zip -r hubble_mailer.zip .`
`iron worker upload --zip hubble_mailer.zip --name hubble_mailer iron/node node hubble_mailer_worker.js`

**Queue Tasks**
`iron worker queue --payload-file hubble_mailer.payload.json --wait hubble_mailer`

**Schedule Tasks**
`iron worker schedule --start-at "2016-04-24T00:00:00-04:00" --run-times 4 --priority 0 --payload-file hubble_mailer.payload.json hubble_mailer`

**Get Task Logs**
`iron worker log [YOUR_TASK_ID]`