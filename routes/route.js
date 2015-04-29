

var index = require('./index');

var routes = module.exports = function(app) {

  // 监控
  app.use('/', function(req, res, next) {
    res.render('index');
  });





}