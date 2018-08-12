var express = require('express');
var router = express.Router();
var path = require('path');

function setResponseHeaders(res, filename) {
  res.header('Content-disposition', 'inline; filename=' + filename);
  res.header('Content-type', 'application/pdf');
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/downloadFile', function (req, res) {
   var file = path.join(__dirname, '/archivos/Rafael_Pacaró_CV.pdf');
   res.download(file, function (err) {
       if (err) {
           console.log("Error al descargar el curriculum");
           console.log(err);
       } else {
           console.log("Se envío con éxito el Curriculum");
       }
   });
});


module.exports = router;