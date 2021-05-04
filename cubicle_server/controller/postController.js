var multer = require('multer');

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
  uploada = (req, res, err) => {
    upload(req, res, function (err) {
      // console.log(req.headers);
      if (req.fileValidationError) {
        return res.send(req.fileValidationError);
      } else if (!req.file) {
        return res.send('Please select an image to upload');
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }
      return res.status(200).json({
        success: 1,
        file: {
          url:
            'http://localhost:3001/image/' +
            req.params.userId +
            '-' +
            req.file.originalname +
            d,
          // ... and any additional fields you want to store, such as width, height, color, extension, etc
        },
      });
    });
  };
}
const PostController = new App();
module.exports = PostController;
