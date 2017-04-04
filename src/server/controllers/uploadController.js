var multer = require('multer');
var sh     = require('shelljs');
var path   = require('path');

var imagemin         = require('imagemin');
var imageminMozjpeg  = require('imagemin-mozjpeg');
var imageminPngquant = require('imagemin-pngquant');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../../../dist/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname.toLowerCase() + '-' + (sh.ls(__dirname + '/../../../dist/images').length + 1) + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage });

exports.upload = (function(req, res, next) {
    return multer({ storage: storage });
    
})();