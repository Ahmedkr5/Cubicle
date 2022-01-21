var multer = require('multer');
const Formidable = require('formidable');
const cloudinary = require('cloudinary');
require('dotenv').config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

var d = Date.now();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/postImages');
  },

  filename: function (req, file, cb) {
    cb(null, req.params.userId + '-' + file.originalname + d);
  },
});
var upload = multer({ storage: storage }).single('image');
class App {
  // uploada = (req, res, err) => {
  //   upload(req, res, function (err) {
  //     // console.log(req.headers);
  //     if (req.fileValidationError) {
  //       return res.send(req.fileValidationError);
  //     } else if (!req.file) {
  //       return res.send('Please select an image to upload');
  //     } else if (err instanceof multer.MulterError) {
  //       return res.send(err);
  //     } else if (err) {
  //       return res.send(err);
  //     }
  // return res.status(200).json({
  //   success: 1,
  //   file: {
  //     url:
  //       'https://the-cubicle.herokuapp.com/uploads/postImages/' +
  //       req.params.userId +
  //       '-' +
  //       req.file.originalname +
  //       d,
  //     // ... and any additional fields you want to store, such as width, height, color, extension, etc
  //   },
  // });
  //   });
  // };

  uploada = (req, res, err) => {
    form = new Formidable();

    form.parse(req, (err, fields, files) => {
      cloudinary.uploader.upload(files.upload.path, (result) => {
        return res.status(200).json({
          success: 1,
          file: {
            url: result.url,
            // ... and any additional fields you want to store, such as width, height, color, extension, etc
          },
        });
      });
    });
  };
}
const PostController = new App();
module.exports = PostController;
