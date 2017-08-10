var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var targetMail = "davidchristiek@gmail.com"
var transpoter = nodemailer.createTransport({//SET email credentials
    service: 'gmail',
    auth: {
        user: "pensurvey.crespoter@gmail.com",
        pass: "blanserver"
    }
});


router.post('/', (req, res) => {
    var email = req.body.email;
    var name = req.body.name;
    var phone = req.body.phone;
    retJson = {
        success: true
    };

    var mailOptions = {
        from: "pensurvey.crespoter@gmail.com",
        to: targetMail,
        subject: "TEST ",     //EDIT
        html: "<h1>Fill up email formats</h1><p>Will get in contact soon etc etc </p>"     //EDIT 
    }

    transpoter.sendMail(mailOptions, (error, info) => {
        if (error) {
            retJson.success = false;
            res.json(retJson);
            console.log(error);
        }
        else {
            retJson.email = email;
            retJson.name = name;
            retJson.phone = phone;
            res.json(retJson);
        }
    });
});


module.exports = router;
