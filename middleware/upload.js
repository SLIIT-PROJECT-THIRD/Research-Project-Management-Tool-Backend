//created by samuditha

const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname)
        cb(null, Data.now() + ext)
    }
})

var upload = multer ({
    storage: storage,
    fileFilter: function(req, file, callback) {
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "application/msword" ||
            file.mimetype == "officedocument.wordprocessingml.document" ||
            file.mimetype == "video/mp4" ||
            file.mimetype == "application/pdf" ||
            file.mimetype == "application/vnd.ms-powerpoint" ||
            file.mimetype == "application/vnd.rar" ||
            file.mimetype == "text/plain" ||
            file.mimetype == "application/xml" ||
            file.mimetype == "application/zip"
        ){
            callback(null, true)
        }else{
            console.log('This file type is not supported!')
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})
module.exports = upload