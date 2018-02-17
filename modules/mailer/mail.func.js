const sgMail = require('@sendgrid/mail');

function sendMail(pack, callback) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'chrisyao900908@gmail.com',
        from: 'service@sunshireshuttle.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);

}

module.exports.sendMail = sendMail;