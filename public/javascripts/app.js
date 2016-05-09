angular.module('pirates', ['ngRoute'])
.controller('PiratesController', function ($scope) {
})
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/pirates.html',
    })
})
