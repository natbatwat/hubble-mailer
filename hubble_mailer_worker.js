var iron_worker = require('iron_worker');
var iron_mq = require('iron_mq');
var env = require('node-env-file');
env(__dirname + '/.env');
var nodemailer = require('nodemailer');
var handlebars = require("handlebars");
var fs = require('fs');
var Q = require('q');

var worker = new iron_worker.Client();
var imq = new iron_mq.Client({token: "MY_TOKEN", project_id: "MY_PROJECT_ID", queue_name: "MY_QUEUE"})
console.log("Hello", iron_worker.params()[0]['id'], "!");