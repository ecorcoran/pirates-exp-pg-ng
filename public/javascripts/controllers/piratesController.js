var app = angular.module('pirates')

app.controller('PiratesController', function ($scope, PiratesService) {
  PiratesService.all().then(function (res) {
    $scope.pirates = res.data;
  });
  $scope.showForm = false;
  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  };
  $scope.newPirate = {};
  $scope.addPirate = function () {
    PiratesService.create($scope.newPirate).then(function (res) {
      $scope.pirates.push(res.data);
      $scope.newPirate = {};
      $scope.showForm = false;
    });
  }
  $scope.deletePirate = function (pirateToDelete) {
    PiratesService.delete(pirateToDelete).then(function (res) {
      $scope.pirates = $scope.pirates.filter(function(pirate) {
        return pirate.id !== pirateToDelete.id
      })
    })
  }
});
