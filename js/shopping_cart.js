var myShopCart = angular.module('ShopCart', []);
function CartController($scope){
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
  $scope.remove = function(index){
    $scope.items.splice(index, 1);
  };
}
