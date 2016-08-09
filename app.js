(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$http',function($http){
    var store = this;
    $http.get('http://localhost/shaping-up-with-angular-level5/store-products.json').success(function(data){
    store.products = data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();
