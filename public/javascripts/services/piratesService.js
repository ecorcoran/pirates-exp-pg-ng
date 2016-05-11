var app = angular.module('pirates');

app.factory('PiratesService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/pirates');
    },
    create: function(pirate) {
      return $http.post('/api/pirates', pirate)
    }
  }
})
