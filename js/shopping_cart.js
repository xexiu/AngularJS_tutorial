var myShopCart = angular.module('ShopCart', []);
myShopCart.controller('CartController', function($scope){
  $scope.bill = {};

  $scope.items = [
  {
    title: 'Paint Pots',
    quantity: 8,
    price: 3.95
  },
  {
    title: 'Polka Dots',
    quantity: 17,
    price: 12.95
  },
  {
    title: 'Pebles',
    quantity: 5,
    price: 6.95
  }
  ];
  $scope.$watch(function() {
    var total = 0;
    for (var i = 0, len = $scope.items.length; i < len; i++) {
      total = total + $scope.items[i].price * $scope.items[i].quantity;
    }
    $scope.bill.totalCart = total;
    $scope.bill.discount = total > 100 ? 10 : 0;
    $scope.bill.subtotal = total - $scope.bill.discount;
  });
});
