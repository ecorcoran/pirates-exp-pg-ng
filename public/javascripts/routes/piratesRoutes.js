var app = angular.module('pirates')

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/pirates.html',
    })
})
