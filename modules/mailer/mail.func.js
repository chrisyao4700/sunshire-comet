const sgMail = require('@sendgrid/mail');
const cyFunc = require('../functions/cy.func');

function sendMail(pack, callback) {
    //console.log(process.env.SENDGRID_API_KEY);
    var data = cyFunc.configDefaultResponse('SEND MAIL');
    sgMail.setApiKey('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');
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

    const msg = {
        to: pack.to,
        subject: pack.subject ? pack.subject : 'SUNSHIRE CRM',
        html: pack.body
    };

    sgMail.send(msg, false, function (err, result) {
        if (err) {
            data.message = "SEND EMAIL FAIL";
            data.error = err;
        } else {
            data.status = true;
            data.message = "EMAIL SEND";
        }
        callback(data);
    });

}

module.exports.sendMail = sendMail;