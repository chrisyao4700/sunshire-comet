var express = require('express');
var router = express.Router();

var mailFunc = require('../modules/mailer/mail.func');
/* GET home page. */
router.get('/', function (req, res, next) {
    mailFunc.sendMail(null, null);

    res.json({
        status: false,
        message: "REACHED FUCKER"
    });
});

module.exports = router;
