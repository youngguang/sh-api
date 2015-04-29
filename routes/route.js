

var index = require('./index');

var category = require('./products/category')

var routes = module.exports = function(app) {

  // 监控
  app.use('/', function(req, res, next) {
    res.render('index');
  });


  /***********************************************************
   *
   *  商品
   *
   ***********************************************************/
  app.use('/', [category])


}