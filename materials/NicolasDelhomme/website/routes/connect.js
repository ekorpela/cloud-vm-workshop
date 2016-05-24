express = require('express');
var router = express.Router();
var getIP = require('external-ip')();

userdata =
{
    "janne.ravantti@helsinki.fi":"01",
    "martin.aslett@wellcomegenomecampus.org":"02",
    "vdbohler@gmail.com":"03",
    "pfern@igc.gulbenkian.pt":"04",
    "bert.overduin@ed.ac.uk":"05",
    "frederik.coppens@psb.vib-ugent.be":"06",
    "hedi.peterson@ut.ee":"07",
    "ajit.singh@rothamsted.ac.uk":"08",
    "teemu.kuulasmaa@uef.fi":"09",
    "a.via@ibbe.cnr.it":"10",
    "anders.dannesboe@birc.au.dk":"11",
    "eija.korpelainen@csc.fi":"12",
    "maria.lehtivaara@csc.fi":"13",
    "kimmo.mattila@csc.fi":"14",
    "ari-matti.saren@csc.fi":"15",
    "c.lawerenz@dkfz.de":"16",
    "ccrubianoc@unal.edu.co":"17",
    "2974108@myuwc.ac.za":"18"
};

/* GET users listing. */
router.get('/', function(req, res, next) {
    getIP(function (err,ip) {
        res.render('connect', {userdata : userdata, title: 'cloud-wm-workshop 2016', IP:ip });
    });
});

module.exports = router;
