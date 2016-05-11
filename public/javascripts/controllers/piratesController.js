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
    PiratesService.create($scope.pirate).then(function (res) {
      $scope.pirates.push(res.data);
      $scope.pirate = {};
      $scope.showForm = false;
    });
  }
});
