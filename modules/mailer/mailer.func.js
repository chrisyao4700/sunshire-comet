const nodemailer = require('nodemailer');

function sendEmail(pack, callback) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sunshire.sender@gmail.com', // generated ethereal user
            pass: 'scuh82hasba2gaA'  // generated ethereal password
        }
    });

    if (!pack.to) {
        data.message = "CANNOT FIND TO_MAIL";
        callback(data);
        return;
    }

    if (!pack.body) {
        data.message = "CANNOT FIND BODY";
        callback(data);
        return;
    }
    // setup email data with unicode symbols
    var mailOptions = {
        to: pack.to,
        from: 'service@sunshireshuttle.com',
        subject: pack.subject ? pack.subject : 'SUNSHIRE CRM',
        html: pack.body
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            callback({
                status: false,
                message: "EMAIL CALENDAR SEND FAIL"
            });
            console.log(error);
        } else {
            //console.log('Email sent: ' + info.response);
            callback({
                status: true,
                message: "EMAIL CALENDAR SENT"
            });
        }
    });

}

module.exports.sendEmail = sendEmail;