var multer = require('multer');
var sh     = require('shelljs');
var path   = require('path')

var imagemin         = require('imagemin');
var imageminMozjpeg  = require('imagemin-mozjpeg');
var imageminPngquant = require('imagemin-pngquant');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../../dist/uploads/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname.toLowerCase() + '-' + (sh.ls(__dirname + '/../../dist/uploads/images').length + 1) + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage });

exports.upload = function(req, res, next) {
    var upload = multer({ storage: storage }).single('image');
    
    upload(req, res, function(err) {
        if (err) {
            return next(err);
        }

        imagemin([req.file.path], '../dist/uploads/images', {
            plugins: [
                imageminMozjpeg(),
                imageminPngquant({quality: '65-80'})
            ]
        }).then(function() {
            next();
        });
    });
};