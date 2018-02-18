var express = require('express');
var router = express.Router();

var mailFunc = require('../modules/mailer/mail.func');
/* GET home page. */
router.post('/', function (req, res, next) {
    console.log(req.body);
    if (req.body.service_code = 'SEND_EMAIL') {
        mailFunc.sendMail(req.body.payload, function (data) {
            res.json(data);
        });
    }

});

module.exports = router;
