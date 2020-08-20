var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET list page.*/
router.get('/list', function(req, res, next) {
  res.json({data:['a','b'],code:'200',codeStr:'发送成功'})
});

module.exports = router;
