var IP;

express = require('express');
var router = express.Router();
var getIP = require('external-ip')();

getIP(function (err,ip){
    IP=ip;
});

userdata =
{
    "Janne":"01",
    "Martin":"02",
    "Victoria":"03",
    "Fotis":"04",
    "Bert":"05",
    "Frederik":"06",
    "Hedi":"07",
    "Ajit":"08",
    "Teemu":"09",
    "Allegra":"10",
    "Anders":"11",
    "Eija":"12",
    "Maria":"13",
    "Kimmo":"14",
    "Ari-matti":"15",
    "Abdurrhaman":"16",
    "Stefano":"17",
    "Pedro":"18"
};

/* GET users listing. */
router.get('/', function(req, res, next) {
        res.render('connect', {userdata : userdata, title: 'cloud-wm-workshop 2016', IP:IP });
});

module.exports = router;
