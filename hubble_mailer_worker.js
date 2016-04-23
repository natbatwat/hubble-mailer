var iron_worker = require('iron_worker');
var iron_mq = require('iron_mq');
var env = require('node-env-file');
var nodemailer = require('nodemailer');
var handlebars = require("handlebars");
var fs = require('fs');
var Q = require('q');

var worker = new iron_worker.Client();
var imq = new iron_mq.Client({token: "MY_TOKEN", project_id: "MY_PROJECT_ID", queue_name: "MY_QUEUE"})
console.log("Hello", iron_worker.params()[0]['id'], "!");
env(__dirname + '/.env'); // .env path

var count = 0;

fs.readFile('hubble_mailer.payload.json', 'utf-8', function(error, source) {
    if (error) return console.log('ERROR READING FILE' + err);
    var data = JSON.parse(source);

    getRecepientData(data);

});

function getRecepientData(data) {
    if (count >= data.length) {
        return;
    } else {
        var recepientData = data[count];
        var recepientAddress = data[count]['office']['host']['email'];

        console.log(recepientData);

        processTemplate(recepientData)
        .then(function(){
            sendEmail(recepientAddress)
            .then(function(){
                count++;
                getRecepientData(data);
            });
        });
    }
}


var transporter = nodemailer.createTransport(
    'smtps://' + process.env.GMAIL_ADDRESS + ':' + process.env.GMAIL_PASSWORD + '@smtp.gmail.com'
);

function processTemplate(data) {

    var deferred = Q.defer();

    fs.readFile('templates/hostReminder.html.handlebars', 'utf-8', function(error, source){
        if (error) return console.log('ERROR READING FILE' + err);
        
        var template = handlebars.compile(source, {
            noEscape: true
        });

        fs.writeFile('compiledEmail.html', template(data), function (err) {
          if (err) return console.log('ERROR WRITING FILE' + err);
        });

        deferred.resolve();

    });

    return deferred.promise;
}

function sendEmail(address) {

    var deferred = Q.defer();

    var mailOptions = {
        from: '"Hubble HQ" <hubblehq@mailinator.com>',
        to: address,
        subject: 'Have your tenants moved in?',
        text: {path: 'templates/hostReminder.txt'},
        html: {path: 'compiledEmail.html'}
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            return console.log(error);
        }
        console.log('Mail sent to:');
        console.log(info.envelope);

        deferred.resolve();
    });

    return deferred.promise;
}
