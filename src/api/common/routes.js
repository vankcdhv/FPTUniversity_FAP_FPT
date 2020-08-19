'use strict';
module.exports = function(app) {
  let productsCtrl = require('../controllers/ProductsController');
  let markReportCtrl = require('../markreport/controller');

  // todoList Routes
  app.route('/products')
    .get(productsCtrl.get)
    .post(productsCtrl.store);

  app.route('/products/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);
  app.route('/fap/markreport')
    .get(requestCtrl.get);
};