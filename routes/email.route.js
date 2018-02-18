var express = require('express');
var router = express.Router();

var mailFunc = require('../modules/mailer/mailer.func');
/* GET home page. */
router.post('/', function (req, res, next) {
    console.log(req.body);
    if (req.body.service_code = 'SEND_EMAIL') {
        mailFunc.sendEmail(req.body.payload, function (data) {
            res.json(data);
        });
    }

});

module.exports = router;
