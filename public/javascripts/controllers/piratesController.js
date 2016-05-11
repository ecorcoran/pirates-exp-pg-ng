var app = angular.module('pirates')

app.controller('PiratesController', function ($scope, PiratesService) {
  PiratesService.all().then(function (res) {
    $scope.pirates = res.data;
  });
  $scope.showForm = false;
  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  };
  $scope.pirate = {};
  $scope.addPirate = function () {
    console.log($scope.pirate);
  }
});
