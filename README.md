## Setup
1. Duplicate `.env.sample` file by running: `cp .env.sample .env`
2. Replace sample variables in .env file with your own gmail login credentials
3. Run `npm install`

## Commands
- [IronWorker CLI Docs](http://dev.iron.io/worker/reference/cli/)

`docker run --rm -it -v "$PWD":/worker -w /worker iron/node node hubble_mailer_worker.js`

### Test Worker Locally with Docker
`docker run --rm -e "PAYLOAD_FILE=hubble_mailer.payload.json" -v "$PWD":/worker -w /worker iron/node node hubble_mailer_worker.js`

`docker build -t natbatwat/hubble_mailer:0.0.1 .`

`docker run --rm -it natbatwat/hubble_mailer:0.0.1`

### Uplaod Worker
`zip -r hubble_mailer.zip .`

`iron worker upload --zip hubble_mailer.zip --name hubble_mailer iron/node node hubble_mailer_worker.js`

### Queue Tasks
`iron worker queue --payload-file hubble_mailer.payload.json --wait hubble_mailer`

### Schedule Tasks
`iron worker schedule --start-at "2016-04-24T00:00:00-04:00" --run-times 4 --priority 0 --payload-file hubble_mailer.payload.json hubble_mailer`

### Get Task Logs
`iron worker log [YOUR_TASK_ID]`

## Email Template Cross-Provider Testing

#### Gmail Desktop
<img src="https://cloud.githubusercontent.com/assets/9147731/14765677/42fcf95c-0a1e-11e6-9a50-e5b0e376f6cf.png" alt="">

#### Gmail App (iOS)
<img src="https://cloud.githubusercontent.com/assets/9147731/14765647/1d856c1e-0a1d-11e6-98ba-ead394fdd285.PNG" width="180" alt="">
<img src="https://cloud.githubusercontent.com/assets/9147731/14765646/1d82dd78-0a1d-11e6-89af-18c92f8e5898.PNG" width="180" alt="">
<img src="https://cloud.githubusercontent.com/assets/9147731/14765648/1d98ec44-0a1d-11e6-8772-76cf39cc4df9.PNG" width="180" alt="">

#### Outlook Desktop
<img src="https://cloud.githubusercontent.com/assets/9147731/14765678/433a4172-0a1e-11e6-807d-201de49ee6be.png" alt="">

#### Outlook App (iOS)
<img src="https://cloud.githubusercontent.com/assets/9147731/14765642/1d6dd36a-0a1d-11e6-83fa-13e32ff6bbdb.PNG" width="180" alt="">
<img src="https://cloud.githubusercontent.com/assets/9147731/14765645/1d798a52-0a1d-11e6-92d3-e51c39a4a6e4.PNG" width="180" alt="">
<img src="https://cloud.githubusercontent.com/assets/9147731/14765644/1d78ea16-0a1d-11e6-8d97-15dc3067069e.PNG" width="180" alt="">

#### Yahoo Desktop
Before allowing images: <img src="https://cloud.githubusercontent.com/assets/9147731/14765679/4363653e-0a1e-11e6-9ecd-8fe058abf751.png" alt="">

After allowing images:<img src="https://cloud.githubusercontent.com/assets/9147731/14765680/438ebd92-0a1e-11e6-80a0-5b2c0aec8837.png" alt="">

#### Yahoo App (iOS)
<img src="https://cloud.githubusercontent.com/assets/9147731/14765640/1d207962-0a1d-11e6-97db-7114b8b1d61c.PNG" width="180" alt="">
<img src="https://cloud.githubusercontent.com/assets/9147731/14765641/1d4f1bd2-0a1d-11e6-923b-74575706b6e8.PNG" width="180" alt="">
<img src="https://cloud.githubusercontent.com/assets/9147731/14765643/1d6dec74-0a1d-11e6-8d70-fc4fe5a1c140.PNG" width="180" alt="">

#### CloudMagic App (iOS)
<img src="https://cloud.githubusercontent.com/assets/9147731/14765649/1d99d76c-0a1d-11e6-973d-b23bcda9b66b.PNG" width="180" alt="">
<img src="https://cloud.githubusercontent.com/assets/9147731/14765651/1da536d4-0a1d-11e6-9188-ad3034bc2fa7.PNG" width="180" alt="">
<img src="https://cloud.githubusercontent.com/assets/9147731/14765650/1da4f142-0a1d-11e6-9d8e-0646a60b51b8.PNG" width="180" alt="">
